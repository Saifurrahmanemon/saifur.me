import { EyeIcon } from 'app/components/static-icons';

import Link from 'next/link';
import { Suspense } from 'react';
import { getAllWritingsViews } from '~/lib/views';
import { getSortedWritings } from '~/lib/writings';
import { formatDate, formatNumber } from '~/utils/index';

export const metadata = {
  title: 'Writing',
  description: 'Explore a world of creativity and expression on writing page'
};

interface CardProps {
  title: string;
  date: string;
  views?: string;
  slug: string;
}

const Card = (props: CardProps) => {
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
            <Link
              prefetch={false}
              key={`${item.slug}_${idx}`}
              href={`/writing/${item.slug}`}
            >
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
