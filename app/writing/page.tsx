'use client';

import Divider from '~/ui/divider';

interface CardProps {
  title: string;
  date: string;
  views?: string;
}

const Card = (props: CardProps) => {
  const { title, date, views } = props;
  return (
    <div className="flex items-stretch justify-between w-full gap-2 px-3 py-2 transition-all rounded-lg cursor-pointer card-hover">
      <div className="relative flex flex-col ">
        <span className="font-bold text-secondary">{title}</span>
        {views && (
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {views} Views
          </span>
        )}
      </div>
      <Divider />
      <span className="text-secondary">{date}</span>
    </div>
  );
};

function WritingPage() {
  const date = new Date().toLocaleDateString().toString();

  return (
    <>
      <main className="mx-4">
        <section className="flex flex-col gap-4 pt-10 mx-auto">
          {Array(20)
            .fill(0)
            .map((item) => (
              <Card
                key={item}
                title="Lorem ipsum dolor sit amet"
                views="43,432,423"
                date={date}
              />
            ))}
        </section>
      </main>
    </>
  );
}

export default WritingPage;
