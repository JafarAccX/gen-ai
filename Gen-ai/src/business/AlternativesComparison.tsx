import React from 'react';

export default function AlternativesComparison() {
  return (
    <>
      {/* Alternatives Header Section */}
      <div
        className="responsive-section alternatives-header-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '24px',
          position: 'absolute',
          width: '100%',
          maxWidth: '1276px',
          height: 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '8576px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '20px',
            width: '100%',
            height: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '100%',
              height: 'auto',
            }}
          >
            <div
              style={{
                width: 'fit-content',
                height: '16px',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #3E38E0 0%, #F7921E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vs the Alternatives
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '6px',
              width: '1239px',
              height: '85px',
            }}
          >
            <div
              style={{
                width: 'auto',
                height: 'auto',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '1.2',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#F5F7FF',
              }}
            >
              Why AcceleratorX, in one table.
            </div>
            <div
              style={{
                width: '100%',
                maxWidth: '835px', // Match MentorsHeader subtitle width for consistency
                height: 'auto',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '1.4',
                textAlign: 'center',
                color: '#C2C2C2',
              }}
            >
              We respect the alternatives but here's where we measurably beat them. Source: curriculum doc §2.5.
            </div>
          </div>
        </div>
      </div>

      {/* Card 7 - The Table */}
      <div
        className="responsive-section alternatives-table-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '20px 24px',
          gap: '10px',
          isolation: 'isolate',
          position: 'absolute',
          width: '1301px',
          height: '484px',
          left: 'calc(50% - 1301px / 2)', // Centered, originally left: 70px
          top: '8739px', // Moved below Alternatives Header
          borderRadius: '12px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)',
            border: '1px solid #252525',
            borderRadius: '12px',
            zIndex: -1,
          }}
        />

        <div
          className="alternatives-table-container"
          style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2.5fr 1.2fr 1.2fr 1.2fr 1.2fr 0.8fr',
              alignItems: 'center',
              width: '100%',
              padding: '16px 0 16px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            {['Description', 'AcceleratorX', 'Outskill', '100x Engineers', 'Scaler GenAI', 'Be10x'].map((header, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  background: 'linear-gradient(180deg, #FFB889 35.58%, #FC6401 78.85%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Rows */}
          {[
            {
              title: 'Format',
              values: ['16 weeks', '14 days / 6 mo', '6 months', '11 months', '-'],
            },
            {
              title: 'Tech + Business tracks',
              values: ['✓', '-', '-', '-', '-'],
            },
            {
              title: 'LangGraph + MCP depth',
              values: ['✓', '-', 'partial', 'partial', '-'],
            },
            {
              title: 'Live phone agent · Indian number',
              values: ['✓', '-', '-', '-', '-'],
            },
            {
              title: 'Eval-driven dev (RAGAS, DeepEval)',
              values: ['✓', '-', '7+ yrs', '₹35–75', '-'],
            },
            {
              title: '16-domain Build Ninja',
              values: ['✓', '-', 'virtual', 'academic', '-'],
            },
            {
              title: 'Demo Day · GCC hiring panel',
              values: ['✓', '-', '-', 'Outcome-based', '-'],
            },
            {
              title: 'Capstone briefs available',
              values: ['16', '~3', '~3', '~2', '0'],
            },
            {
              title: 'Approx. price (₹)',
              values: ['1.25–1.5L', '1–1.6L', '1.5–2L', '3–3.5L', '9–28k'],
              noBorder: true,
            },
          ].map((row, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '2.5fr 1.2fr 1.2fr 1.2fr 1.2fr 0.8fr',
                alignItems: 'center',
                width: '100%',
                flexGrow: 1, // Let rows expand to fill the 484px height evenly
                borderBottom: row.noBorder ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#E5E2E1',
                }}
              >
                {row.title}
              </div>
              {row.values.map((val, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: val === '✓' ? 600 : 400,
                    fontSize: val === '✓' ? '18px' : '15px',
                    color: val === '✓' ? undefined : '#C2C2C2',
                    background: val === '✓' ? 'linear-gradient(90deg, #FC6401 2.88%, #FFB686 5.29%)' : undefined,
                    WebkitBackgroundClip: val === '✓' ? 'text' : undefined,
                    WebkitTextFillColor: val === '✓' ? 'transparent' : undefined,
                    backgroundClip: val === '✓' ? 'text' : undefined,
                  }}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
