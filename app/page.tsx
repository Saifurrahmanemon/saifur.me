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
        Developer with a fervent passion for crafting exceptional digital{' '}
        <em>Web-based Products</em>. My journey in the world of software
        development has been nothing short of exhilarating. I thrive on the
        challenge of transforming innovative ideas into functional and{' '}
        user-friendly solutions that make a real difference. Whether it's
        crafting elegant algorithms or designing intuitive user interfaces, I
        relish every moment of the creative process.
      </p>

      <p className="my-3 text-secondary">
        I firmly believe that the best results are achieved when diverse talents
        come together to tackle complex problems.
      </p>

      <p className="my-3 text-secondary">
        When I'm not immersed in lines of code, you'll often find me lost in the
        world of literature, flipping through the pages of captivating{' '}
        <em>Books</em>, or embracing the exhilarating freedom of the open road
        as I ride my bike. Feeling the wind rush past and taking in the sights
        around me. Whether it's a leisurely ride through scenic paths or
        exploring new routes, <em>Riding</em> gives me a sense of freedom and
        allows me to disconnect and recharge.
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
