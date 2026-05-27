import React from 'react';

interface CapstoneCardData {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  acceptText: string;
}

const capstoneCards: CapstoneCardData[] = [
  {
    id: 'B1',
    category: 'B1 · OPERATING SYSTEM',
    title: 'Domain AI Operating System',
    description: '5 automations + 1 agent + 1 dashboard + 1 policy doc for one function. Adopted by your real team.',
    tags: ['N8N · FLOWISE', 'CLAUDE PROJECTS', 'SLACK/TEAMS'],
    acceptText: 'ACCEPT: 3 colleagues using weekly · time saved measured',
  },
  {
    id: 'B2',
    category: 'B2 · STRATEGY',
    title: 'AI Strategy Playbook for Your Org',
    description: '5 automations + 1 agent + 1 dashboard + 1 policy doc for one function. Adopted by your real team.',
    tags: ['N8N · FLOWISE', 'CLAUDE PROJECTS', 'SLACK/TEAMS'],
    acceptText: 'ACCEPT: 3 colleagues using weekly · time saved measured',
  },
  {
    id: 'B3',
    category: 'B3 · SUPPORT',
    title: 'AI Customer Support Suite',
    description: 'Multi-channel: voice agent on phone + chat agent on Slack/WhatsApp + email triage. Unified analytics.',
    tags: ['VAPI · FLOWISE', 'N8N · CLAUDE', 'TWILIO · SLACK API'],
    acceptText: 'ACCEPT: 50 real interactions · escalation working · CSAT',
  },
  {
    id: 'B4',
    category: 'B4 · RECRUITING',
    title: 'Recruiting Intelligence System',
    description: 'JD generator → posting → resume parser → interview Q generator → comms. Used for 5 real hires.',
    tags: ['CLAUDE PROJECTS', 'N8N · FLOWISE', 'GREENHOUSE/HUBSPOT'],
    acceptText: 'ACCEPT: 5 candidates run · time-to-hire reduction',
  },
  {
    id: 'B5',
    category: 'B5 · SALES',
    title: 'AI Sales Co-Pilot',
    description: 'Lead enrichment + scoring + personalised outreach + meeting prep + post-call summary. CRM-integrated.',
    tags: ['N8N · CLAUDE', 'APOLLO/CLEARBIT', 'HUBSPOT · OTTER'],
    acceptText: 'ACCEPT: 20 leads · 5 personalised emails · conv. tracking',
  },
  {
    id: 'B6',
    category: 'B6 · MARKETING',
    title: 'Marketing Content Engine',
    description: 'Trend identification → brief → multi-format draft (LinkedIn, Twitter, blog, video) → scheduling → analytics.',
    tags: ['PERPLEXITY · CLAUDE', 'MIDJOURNEY · RUNWAY', 'BUFFER · N8N'],
    acceptText: 'ACCEPT: 4 weeks scheduled · engagement tracked',
  },
  {
    id: 'B7',
    category: 'B7 · FINANCE',
    title: 'Finance & Reporting Automation',
    description: 'Monthly reporting cycle automated data pull → variance analysis → exec summary → board-ready slides.',
    tags: ['CLAUDE WITH CSV', 'HEX · N8N', 'GAMMA AI · EXCEL'],
    acceptText: 'ACCEPT: 3 real monthly cycles · CFO sign-off',
  },
  {
    id: 'B8',
    category: 'B8 · CHANGE',
    title: 'AI Change Management Project',
    description: 'Lead a real AI adoption initiative policy + training plan for 20+ colleagues + measurement framework.',
    tags: ['SLIDE DECK', 'ADOPTION TRACKER', 'TRAINING VIDEOS'],
    acceptText: 'ACCEPT: 20+ trained · WAU tracked · NPS measured',
  },
];

function CapstoneCard({ card }: { card: CapstoneCardData }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Split "ACCEPT:" from the text for distinct styling matching the screenshot
  const acceptParts = card.acceptText.split('ACCEPT:');
  const acceptBody = acceptParts.length > 1 ? acceptParts[1] : '';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 14px',
        isolation: 'isolate',
        width: '100%',
        height: 'auto',
        minHeight: '280px',
        overflow: 'hidden',
        background: isHovered
          ? 'linear-gradient(180deg, #0C0C0C 0%, #261308 100%)'
          : 'linear-gradient(180deg, #0A0A0A 0%, #160D06 100%)',
        border: isHovered
          ? '1px solid rgba(252, 100, 1, 0.35)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        boxShadow: isHovered ? 'inset 0px 4px 20px rgba(252, 100, 1, 0.05)' : 'none',
        cursor: 'pointer',
        transition: 'background 0.25s ease, border 0.2s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Inner Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Top Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '100%',
            gap: '4px',
            flexShrink: 0,
          }}
        >
          {/* Category Label - Solid Orange */}
          <div
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '10px',
              lineHeight: '15px',
              textAlign: 'center',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#FC6401', // Vibrant solid orange
              width: '100%',
              height: '15px',
              flexShrink: 0,
            }}
          >
            {card.category}
          </div>

          {/* Title */}
          <h3
            style={{
              margin: 0,
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '28px',
              textAlign: 'center',
              color: '#FFFFFF',
              width: '100%',
              flexShrink: 0,
            }}
          >
            {card.title}
          </h3>
        </div>

        {/* Center Info Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4px 0px 0px',
            gap: '10px',
            width: '100%',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {/* Description - Muted Warm Grey */}
          <p
            style={{
              margin: 0,
              width: '100%',
              minHeight: '40px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#C2C2C2', // Warmer neutral tone
            }}
          >
            {card.description}
          </p>

          {/* Tags Container (Increased Width for perfect 2-pill rows) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              gap: '6px',
              width: '100%', // Wider to fit long pills side-by-side
              minHeight: '56px',
            }}
          >
            {card.tags.map((tag, idx) => (
              <div
                key={idx}
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 10px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(252, 100, 1, 0.2)',
                  borderRadius: '25px',
                  height: '22px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700, // Bold font for the tags
                    fontSize: '9px', // Elegant smaller size
                    lineHeight: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    color: '#FC6401',
                  }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accept Section (Clean - No Top Border) */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px 3.48px 0px',
            width: '100%',
            height: '48px',
            borderTop: 'none', // REMOVED border Top as per screenshot
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: '100%',
              height: '40px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '13.5px',
              lineHeight: '20px',
              display: 'inline-block',
              textAlign: 'center',
            }}
          >
            <span style={{ color: '#FC6401', fontWeight: 700, textTransform: 'uppercase' }}>
              ACCEPT:
            </span>
            <span style={{ color: '#C2C2C2' }}>
              {acceptBody}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CapstoneGrid() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        position: 'relative',
        width: '100%',
        maxWidth: '1348px',
        margin: '0 auto',
        padding: '0 16px 100px',
      }}
    >
      {/* Mobile: 2 independent marquee rows — row1=[1-4], row2=[5-8] */}
      <div
        className="mobile-marquee-mobile-only"
        style={{
          width: '100%',
          position: 'relative',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {[0, 1].map((rowIdx) => {
          const rowCards = capstoneCards.slice(rowIdx * 4, rowIdx * 4 + 4);
          const durations = ['32s', '36s'];
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
                className="animate-scroll-left"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  minWidth: 'max-content',
                  gap: '14px',
                  padding: '0 14px',
                  animationDuration: durations[rowIdx],
                }}
              >
                {[...rowCards, ...rowCards].map((card, idx) => (
                  <div key={idx} style={{ width: '260px', flexShrink: 0 }}>
                    <CapstoneCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="desktop-only-grid"
        style={{
          width: '100%',
        }}
      >
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '24px',
        }}>
          {capstoneCards.map((card) => (
            <CapstoneCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
