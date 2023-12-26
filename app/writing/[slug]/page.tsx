import { Redis } from '@upstash/redis';
import { getWritings } from '~/lib/writings';
import { CustomMDXRemote } from '~/ui/mdx';
import { formatDate } from '~/utils/index';
import { ReportView } from './view';

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export const getViewsCount = async (slug: string) => {
  const data =
    (await redis.get<number>(['pageviews', 'projects', slug].join(':'))) ?? 0;

  return data;
};

export const revalidate = 60;

export default async function WritingPage({ params }: Props) {
  const writing = getWritings().find((item) => item.slug === params.slug);
  const viewsCount = await getViewsCount(params.slug);

  if (!writing) {
    return (
      <main className="mx-4 mt-3">
        <h1 className="font-semibold md:text-xl text-primary">
          Writing not found
        </h1>
      </main>
    );
  }

  const formattedPubDate = formatDate(writing.metadata.publishedAt);

  return (
    <main className="mx-4 mt-3">
      <p className="text-secondary">Views: {viewsCount}</p>
      <ReportView slug={params.slug} />
      <section className="mb-10">
        <h1 className="pb-2 text-xl font-semibold border-b md:text-2xl text-primary border-secondary">
          {writing.metadata.title}
        </h1>

        <p className="my-2 text-sm text-secondary">
          Published on {formattedPubDate}
        </p>
      </section>
      <article className="my-5 prose prose-stone dark:prose-invert text-secondary">
        <CustomMDXRemote source={writing.content} />
      </article>
    </main>
  );
}
