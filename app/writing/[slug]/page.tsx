import { getWritings } from '~/lib/writings';
import { CustomMDXRemote } from '~/ui/mdx';

type Props = {
  params: {
    slug: string;
  };
};

export default function WritingPage({ params }: Props) {
  const getWritingBySlug = getWritings().find(
    (item) => item.slug === params.slug
  );

  return (
    <main className="mx-4">
      <h1>{getWritingBySlug?.metadata.title}</h1>
      <article className="prose prose-stone dark:prose-invert text-secondary">
        <CustomMDXRemote source={getWritingBySlug?.content} />
      </article>
    </main>
  );
}
