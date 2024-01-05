import { Redis } from '@upstash/redis';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { Suspense } from 'react';
import { getSortedWritings } from '~/lib/writings';
import { formatDate } from '~/utils/index';
import { EyeIcon } from './[slug]/page';

const redis = Redis.fromEnv();

interface CardProps {
  title: string;
  date: string;
  views?: string;
  slug: string;
}

export function formatNumber(
  itemSlug: string,
  list: Record<string, number>,
  options?: {
    notation?: 'standard' | 'compact' | 'scientific' | 'engineering';
  }
): string {
  const numberToFormat = list[itemSlug] ?? 0;
  const formattedNumber = new Intl.NumberFormat('en-US', {
    notation: options?.notation ?? 'standard'
  }).format(numberToFormat);

  return formattedNumber;
}

export async function getAllWritingsViews(
  writings: { slug: string }[] | undefined
): Promise<Record<string, number>> {
  noStore();
  const viewsArray = await redis.mget<number[]>(
    writings?.map((w) => ['pageviews', 'projects', w.slug].join(':')) || []
  );

  const allWritingsViews = viewsArray.reduce(
    (acc, v, i) => {
      const currentSlug = writings?.[i]?.slug;
      if (currentSlug) {
        acc[currentSlug] = v ?? 0;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  return allWritingsViews;
}

export const Card = (props: CardProps) => {
  const { title, date, views } = props;
  return (
    <div className="flex items-stretch justify-between w-full gap-2 px-3 py-2 transition-all rounded-lg cursor-pointer card-hover ">
      <div className="relative flex flex-col ">
        <span className="text-base text-primary">{title}</span>
        <div className="flex items-center justify-start gap-2 mt-0.5 text-xs text-secondary sm:mt-auto">
          <span className="text-xs sm:hidden">{date}</span>
          <Suspense fallback={<p className="h-2"></p>}>
            <span className="flex gap-1 text-xs text-gray-600 dark:text-gray-400">
              <EyeIcon /> {views} views
            </span>
          </Suspense>
        </div>
      </div>
      <span className="hidden sm:block relative mt-3 flex-1 h-[1px] bg-zinc-200 dark:bg-zinc-700"></span>
      <span className="hidden text-sm text-secondary sm:block">{date}</span>
    </div>
  );
};

export const revalidate = 60;

async function WritingsPage() {
  let writings = getSortedWritings();

  if (writings.length === 0) {
    return (
      <p className="text-base text-center text-secondary md:text-xl">
        No Writings Found
      </p>
    );
  }
  const allWritingsViews = await getAllWritingsViews(writings);

  return (
    <>
      <main className="mx-4">
        <section className="flex flex-col gap-4 mx-auto mt-3">
          {writings.map((item, idx) => (
            <Link key={`${item.slug}_${idx}`} href={`/writing/${item.slug}`}>
              <Card
                views={formatNumber(item.slug, allWritingsViews, {
                  notation: 'compact'
                })}
                slug={item.slug}
                title={item.metadata.title}
                date={formatDate(item.metadata.publishedAt, { month: 'short' })}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default WritingsPage;
