import { EyeIcon } from 'app/components/static-icons';
import { Metadata } from 'next';
import { domain } from '~/lib/user_details';
import { getViewsCount } from '~/lib/views';
import { getWritings } from '~/lib/writings';
import { CustomMDXRemote } from '~/ui/mdx';
import { formatDate } from '~/utils/index';
import { ReportView } from './view';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let writing = getWritings().find((writing) => writing.slug === params.slug);
  if (!writing) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description
  } = writing.metadata;

  let openGraphImage = `https://${domain}/open-graph?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://${domain}/writing/${writing.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [openGraphImage]
    }
  };
}

type Props = {
  params: {
    slug: string;
  };
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

  const views = new Intl.NumberFormat('en-US', {
    notation: 'standard'
  }).format(viewsCount);

  return (
    <main className="mx-4 mt-3">
      <ReportView slug={params.slug} />
      <section className="mb-10">
        <h1 className="pb-2 text-xl font-semibold border-b md:text-2xl text-primary border-secondary">
          {writing.metadata.title}
        </h1>

        <div className="flex items-center justify-between my-2 text-sm text-secondary">
          <p>Published on {formattedPubDate}</p>
          <p className="flex items-center gap-1">
            <EyeIcon /> {views} views
          </p>
        </div>
      </section>
      <article className="my-5 prose prose-stone dark:prose-invert text-secondary">
        <CustomMDXRemote source={writing.content} />
      </article>
    </main>
  );
}
