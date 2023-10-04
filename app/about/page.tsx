import { aboutMe } from '~/lib/user_details';
import { navMaxWidth } from '~/ui/navbar';

function AboutPage() {
  return (
    <main className={navMaxWidth}>
      <section className="pt-20 mx-4">
        <div className="flex items-center gap-1 my-10 sm:gap-4">{aboutMe}</div>
      </section>
    </main>
  );
}

export default AboutPage;
