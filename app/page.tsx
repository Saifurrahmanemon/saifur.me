/* eslint-disable react/no-unescaped-entities */
import HeroSection from './components/hero-section';

const Page = () => {
  return (
    <main className="mx-4">
      <HeroSection />
      <section>
        <p className="my-3 text-secondary">
          Software developer with a fervent passion for{' '}
          <em>crafting exceptional</em> digital products.My journey in the world
          of software development has been nothing short of exhilarating. I
          thrive on the challenge of transforming innovative ideas into
          functional and user-friendly solutions that make a real difference.
          Whether it's crafting elegant algorithms or designing intuitive user
          interfaces, I relish every moment of the creative process.
        </p>

        <p className="my-3 text-secondary">
          My coding adventures have not only honed my technical skills but also
          instilled in me a deep appreciation for collaboration and teamwork. I
          firmly believe that the best results are achieved when diverse talents
          come together to tackle complex problems. My ability to communicate
          and work harmoniously within a team is something I take immense pride
          in.
        </p>

        <p className="my-3 text-secondary">
          When I'm not immersed in lines of code, you'll often find me lost in
          the world of literature, flipping through the pages of captivating
          books, or embracing the exhilarating freedom of the open road as I
          ride my bike.
        </p>
      </section>
    </main>
  );
};

export default Page;
