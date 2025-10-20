import Hero from './home/partials/hero';
import ImpactStatistics from './home/partials/impact-statistics';
import Navbar from './home/partials/navbar';
import ServicesProcess from './home/partials/services-process';
import TrustedBy from './home/partials/trusted-by';

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ImpactStatistics />
      <ServicesProcess />
    </div>
  );
}
