import { navMaxWidth } from '~/ui/navbar';
import HeroSection from './components/hero-section';

const Page = () => {
  return (
    <main className={navMaxWidth}>
      <HeroSection />
    </main>
  );
};

export default Page;
