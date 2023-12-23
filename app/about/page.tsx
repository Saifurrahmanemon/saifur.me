import { aboutMe } from '~/lib/user_details';

function AboutPage() {
  return (
    <main className="mx-4">
      <section className="flex items-center gap-1 sm:gap-4">{aboutMe}</section>
    </main>
  );
}

export default AboutPage;
