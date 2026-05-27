import React from 'react';

export default function OutcomesLogos() {
  // Each logo rendered with true brand colours (matching reference design)
  const logos: React.ReactNode[] = [
    /* Microsoft – 4-colour flag image */
    <span
      key="ms"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '18px',
        color: '#3A3A3A',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 9px)',
          gridTemplateRows: 'repeat(2, 9px)',
          gap: 2,
          flexShrink: 0,
        }}
      >
        <span style={{ background: '#F25022' }} />
        <span style={{ background: '#7FBA00' }} />
        <span style={{ background: '#00A4EF' }} />
        <span style={{ background: '#FFB900' }} />
      </span>
      Microsoft
    </span>,

    /* Deloitte – black text + green dot */
    <span
      key="del"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '22px',
        color: '#111111',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      Deloitte
      <span
        style={{
          display: 'inline-block',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#86BC25',
          marginLeft: 3,
          flexShrink: 0,
        }}
      />
    </span>,

    /* Paisabazaar – blue "paisa" + dark "bazaar" + blue .com pill */
    <span
      key="pb"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        color: '#1A1A1A',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <em style={{ color: '#2BB3F0', fontStyle: 'normal' }}>paisa</em>
      bazaar
      <span
        style={{
          background: '#2BB3F0',
          color: '#fff',
          fontSize: 10,
          fontWeight: 700,
          padding: '2px 7px',
          borderRadius: 999,
          marginLeft: 5,
          lineHeight: 1.4,
        }}
      >
        .com
      </span>
    </span>,

    /* Bajaj Finserv – navy BAJAJ + gold FINSERV */
    <span
      key="baj"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '16px',
        color: '#00467F',
        whiteSpace: 'nowrap',
      }}
    >
      BAJAJ{' '}
      <span style={{ color: '#FFA000' }}>FINSERV</span>
    </span>,

    /* Indian Government - single full logo asset */
    <span
      key="ig"
      style={{ display: 'inline-flex', alignItems: 'center', width: '220px', height: '42px', whiteSpace: 'nowrap' }}
    >
      <img
        src="/assets/indiangovernment.png"
        alt="Indian Government"
        style={{ width: '220px', height: '42px', objectFit: 'contain', filter: 'brightness(0) opacity(0.72)' }}
      />
    </span>,

    /* Razorpay – dark-navy bold italic wordmark */
    <span
      key="rp"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: '20px',
        fontStyle: 'italic',
        color: '#0E2C50',
        whiteSpace: 'nowrap',
      }}
    >
      Razorpay
    </span>,
  ];

  return (
    <div
      className="outcomes-logos-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '80px',
        marginTop: '60px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      {/* Constrained container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1276px',
          height: '100%',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Marquee track – duplicate logos for seamless infinite loop */}
        <div
          className="absolute flex h-full min-w-max animate-scroll-left items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '64px',
                flexShrink: 0,
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
