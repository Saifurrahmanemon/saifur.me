/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { getAllWritingsViews } from '~/lib/views';
import { getSortedWritings } from '~/lib/writings';
import { formatDate, formatNumber } from '../utils';
import HeroSection from './components/hero-section';
import { EyeIcon } from './components/static-icons';

const ReachMe = () => {
  return (
    <section className="mt-10 mb-10 text-sm md:mt-20 text-secondary">
      <p>
        Reach me at:{' '}
        <em className="underline cursor-pointer">
          <a href="mailto: saifemon789@gmail.com">saifemon789@gmail.com</a>
        </em>
      </p>
    </section>
  );
};

const About = () => {
  return (
    <section>
      <p className="my-3 text-secondary">
        Developer with a passion for crafting exceptional{' '}
        <em>Web-based Products</em>. <br />
        Building software has been a wild ride with plenty of ups and downs. I
        get a real kick out of taking raw ideas and turning them into something
        that works well and makes sense for the people using it.
      </p>

      <p className="my-3 text-secondary">
        I firmly believe that the best results are achieved when diverse talents
        come together to tackle complex problems.
      </p>

      <p className="my-3 text-secondary">
        When I’m not deep in code, you’ll usually find me with a <em>Book</em>{' '}
        in hand, getting lost in a great story. And when I need to clear my
        head, nothing beats hitting the open road on my <em>Bike</em>. There’s
        something about the wind in my face and the world rushing by that just
        feels freeing. Whether I’m cruising scenic trails or discovering new
        paths, riding helps me disconnect, recharge, and feel completely alive.
      </p>
    </section>
  );
};

const RecentWritings = async () => {
  const recent = getSortedWritings()?.slice(0, 2);

  if (recent.length === 0) {
    return <p className="text-primary">No Writings Found</p>;
  }

  const getViews = await getAllWritingsViews(recent);

  return (
    <section className="text-secondary">
      <p className="mt-10 mb-1">Recent Writings </p>
      {recent.map((writing) => (
        <Link href={`/writing/${writing.slug}`} key={writing.slug}>
          <div className="px-2 py-3 transition-all rounded-lg cursor-pointer hover:bg-primary">
            <span className="text-primary text-underline-gradient">
              {writing.metadata.title}
            </span>
            <div className=""></div>
            <div className="flex items-center justify-start gap-2 text-xs text-secondary">
              <span className="flex items-center gap-1">
                {formatDate(writing.metadata.publishedAt)}
              </span>
              <span className="flex items-end gap-1">
                <EyeIcon />{' '}
                {formatNumber(writing.slug, getViews, {
                  notation: 'compact'
                })}{' '}
                views
              </span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

const Page = () => {
  return (
    <main className="mx-4">
      <HeroSection />
      <About />
      <RecentWritings />
      <ReachMe />
    </main>
  );
};

export default Page;
