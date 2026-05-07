import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessBlueprint from './components/ProcessBlueprint';
import CapabilitiesSection from './components/Capabilitieas';
import Clip from './webdevser/clip';
import RatingCard from './components/RatingCard';
import Cta from './components/Cta';
import Footer from './components/Footer';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <main className='overflow-x-hidden w-full'>
        <Navbar />
        <Hero />
        <ProcessBlueprint />
        <Clip />
        <CapabilitiesSection />
        <RatingCard />
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;