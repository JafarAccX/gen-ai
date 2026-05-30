import { useState, useEffect } from 'react';
import Header from './business/Header';
import Hero from './business/Hero';
import ProgramArchitecture from './business/ProgramArchitecture';
import TrackToggle from './business/TrackToggle';
import TrackBadge from './business/TrackBadge';
import Curriculum from './business/Curriculum';
import AIBuildNinja from './business/AIBuildNinja';
import CapstoneMenu from './business/CapstoneMenu';
import CapstoneGrid from './business/CapstoneGrid';
import OutcomesHiring from './business/OutcomesHiring';
import OutcomesLogos from './business/OutcomesLogos';
import MentorsHeader from './business/MentorsHeader';
import MentorsProfiles from './business/MentorsProfiles';
import ToolStackHeader from './business/ToolStackHeader';
import ToolStackGrid from './business/ToolStackGrid';
// import AlternativesComparison from './business/AlternativesComparison';
import FAQ from './business/FAQ';
import InvestmentHeader from './business/InvestmentHeader';
import InvestmentPricing from './business/InvestmentPricing';
import HonestAnswersHeader from './business/HonestAnswersHeader';
import CTABanner from './business/CTABanner';
import Footer from './business/Footer';
import GenAIPageV2 from './v2/GenAIPageV2';

function App() {
  const [activeTrack, setActiveTrack] = useState<'business' | 'tech'>('business');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.setAttribute('data-track', activeTrack);
  }, [activeTrack]);

  useEffect(() => {
    document.documentElement.setAttribute('data-track', 'business');
  }, []);

  if (activeTrack === 'tech') {
    return <GenAIPageV2 setActiveTrack={setActiveTrack} />;
  }

  return (
    <div className="relative bg-[#000000] text-white" style={{ overflowX: 'clip', minHeight: '100vh' }}>
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
      {/* Dynamically Flowing Section Stack */}
      <div
        className="responsive-section bottom-section-stack"
        style={{
          position: 'relative',
          marginTop: '60px',
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
