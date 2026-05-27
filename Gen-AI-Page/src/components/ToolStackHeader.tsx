export default function ToolStackHeader() {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 16px 0',
        gap: '24px',
        position: 'relative',
        width: '100%',
        maxWidth: '1239px',
        margin: '0 auto',
        zIndex: 10,
      }}
    >
      {/* Label Container: 2026 TOOL STACK */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          width: '100%',
          height: '16px',
        }}
      >
        <div
          style={{
            width: 'fit-content', // bind gradient tightly
            height: '16px',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #3E38E0 0%, #F7921E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          2026 Tool Stack
        </div>
      </div>

      {/* Content Container: Heading + Description */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '6px',
          width: '100%',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: '900px',
            height: 'auto',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '1.3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#F5F7FF',
          }}
        >
          Six categories. Updated quarterly. Frontier models within 30 days of release.
        </h2>

        {/* Subtitle Description */}
        <p
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: '679px',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            textAlign: 'center',
            color: '#C2C2C2',
          }}
        >
          Every tool appears in at least one session activity. The full list is reviewed every quarter
          your cohort never trains on yesterday's stack.
        </p>
      </div>
    </div>
  );
}
