import Link from 'next/link';
import { getSortedWritings } from '~/lib/writings';
import Divider from '~/ui/divider';

interface CardProps {
  title: string;
  date: string;
  views?: string;
}

export const Card = (props: CardProps) => {
  const { title, date, views } = props;
  return (
    <div className="flex items-stretch justify-between w-full gap-2 px-3 py-3 transition-all rounded-lg cursor-pointer card-hover">
      <div className="relative flex flex-col ">
        <span className="text-sm text-primary ">{title}</span>
        {views && (
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {views} Views
          </span>
        )}
      </div>
      <Divider />
      <span className="text-sm text-secondary">{date}</span>
    </div>
  );
};

function WritingsPage() {
  let writings = getSortedWritings();

  if (writings.length === 0) {
    return (
      <p className="text-base text-center text-secondary md:text-xl">
        No Writings Found
      </p>
    );
  }
  return (
    <>
      <main className="mx-4">
        <section className="flex flex-col gap-4 mx-auto mt-3">
          {writings.map((item, idx) => (
            <Link key={`${item.slug}_${idx}`} href={`/writing/${item.slug}`}>
              <Card
                title={item.metadata.title}
                date={new Date(item.metadata.publishedAt)
                  .toLocaleDateString()
                  .toString()}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

export default WritingsPage;
