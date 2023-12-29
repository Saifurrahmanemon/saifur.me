/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { getSortedWritings } from '~/lib/writings';
import { formatDate } from '../utils';
import HeroSection from './components/hero-section';

const ReachMe = () => {
  return (
    <section className="mt-10 mb-10 text-sm md:mt-20 text-secondary">
      <p>
        Reach me at:{' '}
        <em className="underline cursor-pointer">
          <a href="mailto: saifemon789@gmail.com">saifemon@gmail.com</a>
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

const RecentWritings = () => {
  const writings = getSortedWritings();

  if (writings.length === 0) {
    return <p className="text-primary">No Writings Found</p>;
  }

  return (
    <section className="text-secondary">
      <p className="mt-10 ">Recent Writings: </p>
      {writings.slice(0, 2).map((writing, idx) => (
        <div key={idx} className="py-3 ">
          <Link
            className="hover:underline text-primary"
            href={`/writing/${writing.slug}`}
          >
            {writing.metadata.title}
          </Link>
          <p className="text-xs text-secondary">
            {formatDate(writing.metadata.publishedAt)}
          </p>
        </div>
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
