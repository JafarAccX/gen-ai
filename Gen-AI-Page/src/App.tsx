import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramArchitecture from './components/ProgramArchitecture';
import TrackToggle from './components/TrackToggle';
import TrackBadge from './components/TrackBadge';
import Curriculum from './components/Curriculum';
import AIBuildNinja from './components/AIBuildNinja';
import CapstoneMenu from './components/CapstoneMenu';
import CapstoneGrid from './components/CapstoneGrid';
import OutcomesHiring from './components/OutcomesHiring';
import OutcomesLogos from './components/OutcomesLogos';
import MentorsHeader from './components/MentorsHeader';
import MentorsProfiles from './components/MentorsProfiles';
import ToolStackHeader from './components/ToolStackHeader';
import ToolStackGrid from './components/ToolStackGrid';
import FAQ from './components/FAQ';
import InvestmentHeader from './components/InvestmentHeader';
import InvestmentPricing from './components/InvestmentPricing';
import HonestAnswersHeader from './components/HonestAnswersHeader';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  const [activeTrack, setActiveTrack] = useState<'business' | 'tech'>('business');

  return (
    <div className="relative bg-[#000000] text-white max-w-[1440px] mx-auto flex flex-col items-center overflow-x-clip">
      <Header />
      <TrackToggle activeTrack={activeTrack} onTrackChange={setActiveTrack} />
      <TrackBadge />
      <Hero />
      <ProgramArchitecture />
      <Curriculum />
      <AIBuildNinja />
      <CapstoneMenu />
      <CapstoneGrid />
      <OutcomesHiring />
      <OutcomesLogos />
      <MentorsHeader />
      <MentorsProfiles />
      <ToolStackHeader />
      <ToolStackGrid />
      {/* <AlternativesComparison /> */}
      <InvestmentHeader />
      <InvestmentPricing />
      <HonestAnswersHeader />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
