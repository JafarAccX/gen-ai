import React, { useRef, useEffect } from 'react';

interface SaturdayCard {
  industry: string;
  satNumber: string;
  title: string[]; // Array of lines to force exact 2-line wrapping
  highlighted?: boolean; // Card 5 (SAT 01) has the orange gradient highlight
}

const saturdayCards: SaturdayCard[] = [
  { industry: 'Productivity',   satNumber: 'SAT 01', title: ['MyDay AI', 'automation tool'] },
  { industry: 'Marketing',      satNumber: 'SAT 02', title: ['Brand Voice', 'Engine'] },
  { industry: 'EdTech',         satNumber: 'SAT 03', title: ['Tutor in a', 'Box'] },
  { industry: 'Media',          satNumber: 'SAT 04', title: ['60-Second Story', 'Studio'] },
  { industry: 'Healthcare',     satNumber: 'SAT 05', title: ['ClinicCall AI', 'voice agent'] },
  { industry: 'DevOps',         satNumber: 'SAT 06', title: ['PR Whisperer', 'code review'] },
  { industry: 'Retail',         satNumber: 'SAT 07', title: ['Shop Sense', 'assistant SaaS'] },
  { industry: 'HR & Talent',    satNumber: 'SAT 08', title: ['HireSmart', 'resume pipeline'] },
  { industry: 'BFSI',           satNumber: 'SAT 09', title: ['Policy Bot', 'RBI/SEBI RAG'] },
  { industry: 'Legal',          satNumber: 'SAT 10', title: ['Contract', 'Lens'] },
  { industry: 'Support',        satNumber: 'SAT 11', title: ['Support Crew', 'multi-agent'] },
  { industry: 'PropTech',       satNumber: 'SAT 12', title: ['PropAgent', 'MCP server'] },
  { industry: 'Manufacturing',  satNumber: 'SAT 13', title: ['Factory Pulse', 'anomaly ops'] },
  { industry: 'ESG',            satNumber: 'SAT 14', title: ['ESG Scribe', 'BRSR reports'] },
  { industry: 'Travel',         satNumber: 'SAT 15', title: ['Trip Weaver +', 'capstone preview'] },
  { industry: 'Grand Finale',   satNumber: 'SAT 16', title: ['Pick your domain ·', '₹25k prize'] },
];

// Lock SVG icon
function LockIcon() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M1.66667 17.5C1.20833 17.5 0.816111 17.3369 0.49 17.0108C0.163889 16.6847 0.000555556 16.2922 0 15.8333V7.5C0 7.04167 0.163333 6.64945 0.49 6.32333C0.816666 5.99722 1.20889 5.83389 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90639 2.03139 3.71917 1.21917C4.53194 0.406945 5.51444 0.000556124 6.66667 5.68828e-07C7.81889 -0.000554987 8.80167 0.405834 9.615 1.21917C10.4283 2.0325 10.8344 3.015 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5175 5.99667 12.8442 6.32333C13.1708 6.65 13.3339 7.04222 13.3333 7.5V15.8333C13.3333 16.2917 13.1703 16.6842 12.8442 17.0108C12.5181 17.3375 12.1256 17.5006 11.6667 17.5H1.66667ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM7.84417 12.8433C8.17028 12.5178 8.33333 12.1256 8.33333 11.6667C8.33333 11.2078 8.17028 10.8156 7.84417 10.49C7.51806 10.1644 7.12556 10.0011 6.66667 10C6.20778 9.99889 5.81556 10.1622 5.49 10.49C5.16444 10.8178 5.00111 11.21 5 11.6667C4.99889 12.1233 5.16222 12.5158 5.49 12.8442C5.81778 13.1725 6.21 13.3356 6.66667 13.3333C7.12333 13.3311 7.51583 13.1672 7.84417 12.8433ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88195 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88195 4.16667 3.47222 4.16667 4.16667V5.83333Z" fill="#C2AFA3"/>
    </svg>
  );
}

function SatCard({ card }: { card: SaturdayCard }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardBackground = card.highlighted || isHovered
    ? 'linear-gradient(359.07deg, rgba(252, 100, 1, 0.5) -1.45%, rgba(0, 0, 0, 0) 21.81%), linear-gradient(360deg, #0A0A0A 0%, #250F01 100%)'
    : 'linear-gradient(360deg, #0A0A0A 0%, #250F01 100%)';

  const cardBoxShadow = card.highlighted || isHovered
    ? 'inset 0px 4px 20px rgba(252, 100, 1, 0.1)'
    : 'none';

  const cardBorder = card.highlighted
    ? 'none'
    : isHovered
      ? '1px solid rgba(252, 100, 1, 0.4)'
      : '1px solid rgba(255, 255, 255, 0.15)';

  return (
    <div
      className="sat-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 16px',
        gap: '10px',
        isolation: 'isolate',
        position: 'relative',
        width: '100%',
        height: 'auto',
        minHeight: '120px',
        overflow: 'hidden',
        background: cardBackground,
        boxShadow: cardBoxShadow,
        border: cardBorder,
        borderRadius: '12px',
        cursor: 'pointer',
        flex: 'none',
        transition: 'background 0.25s ease, border 0.2s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Inner Gradient Overlay */}
      <div
        className="sat-card-meta"
        style={{
          position: 'absolute',
          left: '1px',
          right: '1px',
          top: '1px',
          bottom: '0.71px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
          opacity: isHovered ? 1 : 0,
          borderRadius: '12px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Row: Industry + SAT badge + Lock */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '4px',
          width: '100%',
          height: '26px',
          flex: 'none',
          order: 1,
          alignSelf: 'stretch',
          flexGrow: 0,
          zIndex: 1,
        }}
      >
        {/* Industry gradient text */}
        <span
          className="sat-card-industry"
          style={{
            height: '26px',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '26px',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            flex: '1 1 0',
            minWidth: 0,
            order: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {card.industry}
        </span>

        {/* SAT badge */}
        <div
          className="sat-card-badge"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '4px 8px',
            width: '61px',
            height: '20px',
            background: '#252525',
            borderRadius: '4px',
            boxSizing: 'border-box',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <span
            style={{
              height: '12px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '12px',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '1.2px',
              color: '#E5E2E1',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {card.satNumber}
          </span>
        </div>

        {/* Lock icon wrapper */}
        <div
          className="sat-card-lock"
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          <LockIcon />
        </div>
      </div>

      {/* Project title container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px 0px 0.685px',
          width: '100%',
          height: 'auto',
          flex: 'none',
          order: 2,
          alignSelf: 'stretch',
          flexGrow: 0,
          zIndex: 2,
        }}
      >
        <span
          className="sat-card-title"
          style={{
            width: '100%',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '31px',
            display: 'inline-block',
            color: '#E5E2E1',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            overflow: 'hidden',
          }}
        >
          {card.title.map((line, idx) => (
            <span key={idx} style={{ display: 'block' }}>{line}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default function AIBuildNinja() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [headerRef.current, gridRef.current];
    const observers = targets.map(el => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 16px 60px',
        gap: '52px',
        width: '100%',
        maxWidth: '1288px',
        margin: '0 auto',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* ── Header Group ── */}
      <div
        ref={headerRef}
        className="fade-up"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '16px',
          width: '100%',
          maxWidth: '1276px',
        }}
      >
        {/* Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '20px',
            width: '100%',
          maxWidth: '1276px',
          }}
        >
          {/* Label row — centered */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              width: '100%',
          maxWidth: '1276px',
            }}
          >
            <span
              style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #3E38E0 0%, #F7921E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Build Ninja
            </span>
          </div>

          {/* Heading 2 block */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
              gap: '12px',
              width: '100%',
          maxWidth: '1276px',
            }}
          >
            {/* Main heading */}
            <h2
              style={{
                margin: 0,
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '1.3',
                color: '#F5F7FF',
                textAlign: 'center',
              }}
            >
              16 Saturdays. 16 industries. 16 public ships.
            </h2>

            {/* Sub-description */}
            <p
              style={{
                margin: 0,
                width: '100%',
          maxWidth: '1276px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '25px',
                textAlign: 'center',
                color: '#C2C2C2',
              }}
            >
              Every Saturday for 16 weeks, a 30-min domain primer from an industry expert (BFSI head, healthcare CIO, retail CTO) then 2 hours of building, 1 hour of demo and voting. By 10:30 PM IST every learner posts a public Loom + GitHub link to cohort Slack. The only program that takes you industry-by-industry.
            </p>
          </div>
        </div>
      </div>

      {/* ── Cards Container ── */}

      {/* Mobile: 4 independent marquee rows — row1=[1-4], row2=[5-8], row3=[9-12], row4=[13-16] */}
      <div
        className="mobile-marquee-mobile-only ai-build-mobile-rail"
        style={{
          width: '100%',
          position: 'relative',
          borderRadius: '12px',
          background: 'linear-gradient(180deg, #0A0A0A 0%, #1D1007 100%)',
          border: '1px solid rgba(255, 251, 251, 0.15)',
          padding: '16px 0',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {[0, 1, 2, 3].map((rowIdx) => {
          const rowCards = saturdayCards.slice(rowIdx * 4, rowIdx * 4 + 4);
          const durations = ['28s', '32s', '30s', '34s'];
          return (
            <div
              key={rowIdx}
              style={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Edge fade */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  boxShadow: 'inset 40px 0 25px -10px rgba(10,10,10,0.97), inset -40px 0 25px -10px rgba(10,10,10,0.97)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              />
              <div
                className="animate-scroll-left ai-build-mobile-track"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  minWidth: 'max-content',
                  gap: '12px',
                  padding: '0 12px',
                  animationDuration: durations[rowIdx],
                }}
              >
                {[...rowCards, ...rowCards].map((card, idx) => (
                  <div key={idx} className="ai-build-mobile-item" style={{ width: '230px', flexShrink: 0 }}>
                    <SatCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: 4-column grid */}
      <div
        className="desktop-only-grid"
        style={{
          width: '100%',
          maxWidth: '1248px',
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none' as React.CSSProperties['scrollbarWidth'],
        }}
      >
        <div
          ref={gridRef}
          className="cards-grid-animate"
          style={{
            boxSizing: 'border-box',
            width: 'max-content',
            minWidth: '100%',
            background: 'linear-gradient(180deg, #0A0A0A 0%, #1D1007 100%)',
            border: '1px solid rgba(255, 251, 251, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(180px, 280px))',
            gap: '16px',
          }}
        >
          {saturdayCards.map((card, idx) => (
            <SatCard key={idx} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
