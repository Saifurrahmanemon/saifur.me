import { aboutMe } from '~/lib/user_details';

function AboutPage() {
  return (
    <section className="pt-20 mx-4">
      <div className="flex items-center gap-1 my-10 sm:gap-4">{aboutMe}</div>
    </section>
  );
}

export default AboutPage;
