export default function InvestmentHeader() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 16px 0',
        gap: '24px',
        position: 'relative',
        width: '100%',
        maxWidth: '1239px',
        margin: '0 auto',
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
        }}
      >
        {/* Top Tag: INVESTMENT */}
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
              width: '90px',
              height: '16px',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #3E38E0 0%, #F7921E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Investment
          </div>
        </div>

        {/* Heading and Subtitle */}
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
          <div
            style={{
              width: '100%',
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
            One price. Both tracks open. EMI-friendly.
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: '797px',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              textAlign: 'center',
              color: '#C2C2C2',
            }}
          >
            You don't have to choose at admission most learners flip between tracks during the first 4 weeks of<br/> Common Foundations and lock specialisation by Week 8.
          </div>
        </div>
      </div>
    </div>
  );
}
