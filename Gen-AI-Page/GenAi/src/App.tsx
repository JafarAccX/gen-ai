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
import AlternativesComparison from './components/AlternativesComparison';
import FAQ from './components/FAQ';
import InvestmentHeader from './components/InvestmentHeader';
import InvestmentPricing from './components/InvestmentPricing';
import HonestAnswersHeader from './components/HonestAnswersHeader';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  const [activeTrack, setActiveTrack] = useState<'business' | 'tech'>('business');

  return (
    <div className="relative bg-[#000000] text-white overflow-x-hidden">
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
      <AlternativesComparison />
      <InvestmentHeader />
      <InvestmentPricing />
      {/* Dynamically Flowing Section Stack */}
      <div
        className="responsive-section bottom-section-stack"
        style={{
          position: 'absolute',
          top: '10252px', // Locked insertion baseline
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <HonestAnswersHeader />
        <FAQ />
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}

export default App;
