// ============================================================
// AlternativesComparison.tsx
// "VS THE ALTERNATIVES" section — competitive comparison table
// Shows AcceleratorX vs Outskill, 100x Engineers, Scaler GenAI, Be10x
// Displays 9 feature rows in a responsive grid table layout
// ============================================================

export default function AlternativesComparison() {
  return (
    <>
      {/* ── Section Header ──────────────────────────────────────
          Contains the gradient label "VS THE ALTERNATIVES",
          the main h2 heading, and the source subtitle text
      ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          width: '100%',
          maxWidth: '1276px',
          height: 'auto',
          margin: '80px auto 0',
          padding: '0 16px',
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
          {/* Gradient Label: "VS THE ALTERNATIVES" */}
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

          {/* Heading + Subtitle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '6px',
              width: '100%',
              maxWidth: '1239px',
            }}
          >
            {/* Main heading */}
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

            {/* Subtitle / source attribution */}
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

      {/* ── Comparison Table Card ───────────────────────────────
          Dark glassmorphism card containing:
          - Absolute-positioned background layer (border + gradient)
          - Scrollable inner container for the full-width grid
          - Header row: Description | AcceleratorX | Outskill | 100x | Scaler | Be10x
          - 9 feature rows with ✓ checkmarks (orange gradient) or text values
          Grid columns: 2.5fr (description) + 5x 1.2fr (competitors) + 0.8fr (Be10x)
      ─────────────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
          isolation: 'isolate',
          position: 'relative',
          width: '100%',
          maxWidth: '1301px',
          minHeight: '484px',
          margin: '40px auto 0',
          padding: '0 16px',
          borderRadius: '12px',
          zIndex: 10,
        }}
      >
        {/* Background layer — dark gradient + border, sits behind table content */}
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

        {/* Scrollable table wrapper — overflowX: auto for narrow viewports */}
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflowX: 'auto' }}>

          {/* Table Header Row */}
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
            {/* Column headers — rendered with orange gradient text */}
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

          {/* ── Feature Rows ──────────────────────────────────────
              Each row has:
                - title: feature/description label (col 1)
                - values[]: one value per competitor column (cols 2–6)
                - noBorder: true removes the bottom divider on the last row
              '✓' values render larger (18px) with orange gradient fill
              All other values render as muted grey (#C2C2C2) text
          ──────────────────────────────────────────────────── */}
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
              noBorder: true, // Last row — no bottom border
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
              {/* Row label (feature description) */}
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

              {/* Competitor values — ✓ gets orange gradient, text gets muted grey */}
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
