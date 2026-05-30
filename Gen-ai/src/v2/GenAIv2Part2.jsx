import { Zap, Code, BarChart3 } from "lucide-react";
import MobileMarquee from "../components/MobileMarquee";

const phases = [
  {
    icon: <Zap size={22} className="text-[#FC6401]" />,
    phase: "PHASE 1 · WEEKS 1–8",
    title: "Common Foundations",
    desc: "All learners. Build the same fluency before specializing so a PM and an SDE end Week 8 having shipped the same artifacts.",
    tags: ["Voice agents", "Vibe coding", "Models 2026", "RAG", "n8n"],
    featured: true,
    bgImg: "url(\"data:image/svg+xml,%3Csvg width='435' height='350' viewBox='0 0 435 350' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_i_2722_4716)'%3E%3Cpath d='M0 334C0 342.837 7.16344 350 16 350H342.21C349.605 350 356.037 344.932 357.766 337.742L434.252 19.7416C436.672 9.67847 429.046 0 418.695 0H16C7.16344 0 0 7.16345 0 16V334Z' fill='url(%23paint0_linear_2722_4716)' fill-opacity='0.2'/%3E%3Cpath d='M0 334C0 342.837 7.16344 350 16 350H342.21C349.605 350 356.037 344.932 357.766 337.742L434.252 19.7416C436.672 9.67847 429.046 0 418.695 0H16C7.16344 0 0 7.16345 0 16V334Z' fill='url(%23paint1_linear_2722_4716)' fill-opacity='0.5'/%3E%3C/g%3E%3Cpath d='M16 349.25H342.21C349.259 349.25 355.389 344.419 357.037 337.566L433.522 19.5664C435.829 9.97495 428.56 0.75 418.695 0.75H16C7.57766 0.75 0.75 7.57767 0.75 16V334C0.75 342.422 7.57766 349.25 16 349.25Z' stroke='%23D7B899' stroke-width='1.5'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_2722_4716' x='0' y='0' width='434.703' height='354' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.988235 0 0 0 0 0.392157 0 0 0 0 0.00392157 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_2722_4716'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_2722_4716' x1='204.5' y1='0' x2='204.5' y2='185' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F6F6F5'/%3E%3Cstop offset='1' stop-color='%23C5A382'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_2722_4716' x1='204.5' y1='255.199' x2='204' y2='366.199' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FC6401'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
  },
  {
    icon: <Code size={25} className="text-[#FC6401]" />,
    phase: "PHASE 2 · WEEKS 9–16",
    title: "Tech Track",
    desc: "For SDEs, ML engineers, GCC mid-career. Production LLM apps, agent frameworks, LangGraph + MCP, agent engineering, fine-tuning.",
    tags: ["LangGraph", "MCP", "Ragas · DeepEval", "QLoRA"],
    featured: false,
    bgImg: "url(\"data:image/svg+xml,%3Csvg width='479' height='350' viewBox='0 0 479 350' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_i_2601_4471)'%3E%3Cpath d='M404.571 12.3925C402.892 5.13747 396.43 0 388.983 0H92.4932C85.0979 0 78.6662 5.06817 76.9368 12.2584L0.451385 330.258C-1.96902 340.322 5.65759 350 16.0078 350H462.577C472.871 350 480.486 340.421 478.165 330.392L404.571 12.3925Z' fill='url(%23paint0_linear_2601_4471)' fill-opacity='0.2'/%3E%3Cpath d='M404.571 12.3925C402.892 5.13747 396.43 0 388.983 0H92.4932C85.0979 0 78.6662 5.06817 76.9368 12.2584L0.451385 330.258C-1.96902 340.322 5.65759 350 16.0078 350H462.577C472.871 350 480.486 340.421 478.165 330.392L404.571 12.3925Z' fill='url(%23paint1_linear_2601_4471)' fill-opacity='0.5'/%3E%3C/g%3E%3Cpath d='M388.983 0.5H92.4932C85.3291 0.5 79.0983 5.40963 77.4229 12.375L0.9375 330.375C-1.40727 340.124 5.9811 349.5 16.0078 349.5H462.577C472.549 349.5 479.927 340.22 477.679 330.505L404.084 12.5049C402.457 5.47686 396.197 0.50014 388.983 0.5Z' stroke='%23D7B899'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_2601_4471' x='0' y='0' width='478.584' height='354' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.988235 0 0 0 0 0.392157 0 0 0 0 0.00392157 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_2601_4471'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_2601_4471' x1='239.203' y1='185' x2='239.203' y2='0' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F6F6F5'/%3E%3Cstop offset='1' stop-color='%23F6F6F5'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_2601_4471' x1='215.203' y1='370.199' x2='215.352' y2='241.199' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FC6401'/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
  },
  {
    icon: <BarChart3 size={25} className="text-[#FC6401]" />,
    phase: "PHASE 2 · WEEKS 9–16",
    title: "Business Track",
    desc: "For PMs, marketers, HR, ops, founders. No-code agents, document intelligence, AI strategy, governance, ROI modeling.",
    tags: ["Flowise", "Voiceflow", "ROI playbook", "DPDP-ready"],
    featured: false,
    bgImg: "url(\"data:image/svg+xml,%3Csvg width='435' height='350' viewBox='0 0 435 350' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_i_2722_4727)'%3E%3Cpath d='M434.703 334C434.703 342.837 427.54 350 418.703 350H92.4932C85.0979 350 78.6662 344.932 76.9368 337.742L0.451385 19.7416C-1.96902 9.67847 5.65759 0 16.0078 0H418.703C427.54 0 434.703 7.16345 434.703 16L434.703 334Z' fill='url(%23paint0_linear_2722_4727)' fill-opacity='0.2'/%3E%3Cpath d='M434.703 334C434.703 342.837 427.54 350 418.703 350H92.4932C85.0979 350 78.6662 344.932 76.9368 337.742L0.451385 19.7416C-1.96902 9.67847 5.65759 0 16.0078 0H418.703C427.54 0 434.703 7.16345 434.703 16L434.703 334Z' fill='url(%23paint1_linear_2722_4727)' fill-opacity='0.5'/%3E%3C/g%3E%3Cpath d='M418.703 349.5H92.4932C85.3291 349.5 79.0983 344.59 77.4229 337.625L0.9375 19.625C-1.40727 9.8763 5.9811 0.5 16.0078 0.5H418.703C427.264 0.5 434.203 7.43959 434.203 16V334C434.203 342.56 427.264 349.5 418.703 349.5Z' stroke='%23D7B899'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_2722_4727' x='0' y='0' width='434.703' height='354' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='10'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.988235 0 0 0 0 0.392157 0 0 0 0 0.00392157 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_2722_4727'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_2722_4727' x1='200.203' y1='80' x2='200.203' y2='265' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F6F6F5'/%3E%3Cstop offset='1' stop-color='%23C5A382'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_2722_4727' x1='230.203' y1='255.199' x2='230.703' y2='366.199' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FC6401'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
  },
];

export const ProgramArchitecture = () => {
  return (
    <section id="programs" className="program-architecture-section relative pb-32 flex flex-col items-center w-[100%] max-w-[1440px] px-4 mx-auto" style={{
      minHeight: '561px',
      height: 'auto',
      paddingTop: '60px',
      paddingBottom: '80px',
    }}>
      <div className="relative w-full max-w-[1320px] flex flex-col items-center justify-start">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '16px',
          width: '100%',
          maxWidth: '1041px',
          height: 'auto',
          zIndex: 10,
          marginBottom: '54px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '20px',
            width: '100%',
            maxWidth: '1041px',
            height: 'auto',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              maxWidth: '1041px',
              height: '16px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0
            }}>
              <div className="program-architecture-eyebrow" style={{
                width: 'auto',
                height: 'auto',
                fontFamily: "'Open Sans', sans-serif",
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #3E38E0 0%, #5B46C1 38.46%, #BF7759 72.12%, #F7921E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                flex: 'none',
                order: 0,
                flexGrow: 0
              }}>
                Program Architecture
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px 16px',
              width: '100%',
              maxWidth: '1041px',
              height: 'auto',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0
            }}>
              <div className="program-architecture-title" style={{
                width: '100%',
                height: 'auto',
                whiteSpace: 'normal',
                fontFamily: "'Inter', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '1.3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#F5F7FF',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                marginBottom: '12px',
              }}>
                A three-track program built for both engineers and business leaders
              </div>

              <div className="program-architecture-copy" style={{
                width: '100%',
                maxWidth: '1041px',
                height: 'auto',
                fontFamily: "'Inter', sans-serif",
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '25px',
                textAlign: 'center',
                color: '#C2C2C2',
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0
              }}>
                Everyone starts together in 8 weeks of Common Foundations: models, prompts, RAG, voice, vibe coding, automation. From Week 9 you split into Tech or Business and go deep. AI Build Ninja Saturdays run in parallel: 16 Saturdays, 16 industries, 16 public ships.
              </div>
            </div>
          </div>
        </div>

        {/* Phase Cards — Desktop (No animations) */}
        <div className="prog-cards-outer mobile-marquee-desktop-only" style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0px',
          width: '100%',
          maxWidth: '1320px',
          overflow: 'visible',
        }}>
          {phases.map((phase, idx) => {
            const isCenter = idx === 1;
            const cardWidth = isCenter ? '487px' : '439px';

            return (
              <div
                key={idx}
                className="prog-card-outer"
                style={{
                  width: cardWidth,
                  height: '351px',
                  flex: 'none',
                  order: idx,
                  flexGrow: 0,
                  margin: isCenter ? '0px -66px' : '0px',
                  position: 'relative',
                  zIndex: isCenter ? 10 : 1
                }}
              >
                <div className="prog-card-bg" style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  width: isCenter ? '479px' : '435px',
                  height: '350px',
                  left: isCenter ? '4px' : '0px',
                  top: '0.3px',
                  backgroundImage: phase.bgImg,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}>
                  {/* Icon */}
                  <div className="prog-card-icon" style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    left: isCenter ? '199.5px' : '177.5px',
                    top: '24px',
                    background: 'linear-gradient(90deg, #0A0A0A 0%, #282828 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px', width: '25px', height: '25px', flex: 'none', order: 0, flexGrow: 0 }}>
                      {phase.icon}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="prog-card-content-inner" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '24px 0px 0px',
                    position: 'absolute',
                    width: isCenter ? '278px' : '276px',
                    left: isCenter ? '100px' : '79.5px',
                    top: '104px'
                  }}>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '10px',
                      lineHeight: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#FC6401',
                      marginBottom: '8px'
                    }}>
                      {phase.phase}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      marginBottom: '12px'
                    }}>
                      {phase.title}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#A0A8B8',
                    }}>
                      {phase.desc}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="prog-card-tags" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '6px',
                    position: 'absolute',
                    bottom: '18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: idx === 0 ? '280px' : '240px',
                  }}>
                    {phase.tags.map((tag, ti) => (
                      <div key={ti} style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '4px 12px',
                        height: '25px',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(252, 100, 1, 0.25)',
                        borderRadius: '12.5px',
                      }}>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '10px',
                          lineHeight: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                          color: '#FC6401'
                        }}>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase Cards — Mobile Marquee (Animations for mobiles/tablets only) */}
        <div className="mobile-marquee-mobile-only prog-cards-mobile-marquee" style={{ width: '100%' }}>
          <MobileMarquee speed={25} gap={0} resumeDelay={4000}>
            {phases.map((phase, idx) => {
              const isCenter = idx === 1;
              const cardWidth = isCenter ? '487px' : '439px';

              return (
                <div key={idx} className="prog-mobile-card-item" style={{
                  flexShrink: 0,
                  width: cardWidth,
                  margin: isCenter ? '0px -66px' : '0px',
                  zIndex: isCenter ? 10 : 1,
                  position: 'relative'
                }}>
                  <div
                    className="prog-card-outer"
                    style={{
                      width: cardWidth,
                      height: '351px',
                      flex: 'none',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <div className="prog-card-bg" style={{
                      boxSizing: 'border-box',
                      position: 'absolute',
                      width: isCenter ? '479px' : '435px',
                      height: '350px',
                      left: isCenter ? '4px' : '0px',
                      top: '0.3px',
                      backgroundImage: phase.bgImg,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}>
                      {/* Icon */}
                      <div className="prog-card-icon" style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0px',
                        position: 'absolute',
                        width: '80px',
                        height: '80px',
                        left: isCenter ? '199.5px' : '177.5px',
                        top: '24px',
                        background: 'linear-gradient(90deg, #0A0A0A 0%, #282828 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '9999px'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px', width: '25px', height: '25px', flex: 'none', order: 0, flexGrow: 0 }}>
                          {phase.icon}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="prog-card-content-inner" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '24px 0px 0px',
                        position: 'absolute',
                        width: isCenter ? '278px' : '276px',
                        left: isCenter ? '100px' : '79.5px',
                        top: '104px'
                      }}>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '10px',
                          lineHeight: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          color: '#FC6401',
                          marginBottom: '8px'
                        }}>
                          {phase.phase}
                        </div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '18px',
                          lineHeight: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          color: '#FFFFFF',
                          marginBottom: '12px'
                        }}>
                          {phase.title}
                        </div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          color: '#A0A8B8',
                        }}>
                          {phase.desc}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="prog-card-tags" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '6px',
                        position: 'absolute',
                        bottom: '18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: idx === 0 ? '280px' : '240px',
                      }}>
                        {phase.tags.map((tag, ti) => (
                          <div key={ti} style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '4px 12px',
                            height: '25px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(252, 100, 1, 0.25)',
                            borderRadius: '12.5px',
                          }}>
                            <span style={{
                              fontFamily: "'Inter', sans-serif",
                              fontStyle: 'normal',
                              fontWeight: 400,
                              fontSize: '10px',
                              lineHeight: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              letterSpacing: '0.5px',
                              textTransform: 'uppercase',
                              color: '#FC6401'
                            }}>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </MobileMarquee>
        </div>
      </div>
    </section>
  );
};
