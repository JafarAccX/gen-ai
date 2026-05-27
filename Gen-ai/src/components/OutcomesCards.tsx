const GradientCheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '6px' }}>
    <circle cx="9" cy="9" r="7.25" stroke="url(#checkGradient)" strokeWidth="1.5" />
    <path d="M5.5 9.2L8 11.7L12.5 6.2" stroke="url(#checkGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="checkGradient" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFBE93" />
        <stop offset="1" stopColor="#FC6401" />
      </linearGradient>
    </defs>
  </svg>
);

export default function OutcomesCards() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '1276px',
        left: 'calc(50% - 1276px / 2)',
        top: '6245px', // Placed beautifully below the header section
        zIndex: 10,
      }}
    >
      {/* Card 5 - Salary Bands (Left) */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 24px',
          gap: '10px',
          isolation: 'isolate',
          width: '697px',
          height: '331.68px',
          background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)',
          border: '1px solid #252525',
          borderRadius: '12px',
          position: 'relative',
        }}
      >
        {/* Subtle Outer Gradient Hover Effect Overlay (optional, from Figma CSS) */}
        <div
          style={{
            position: 'absolute',
            left: '1px',
            right: '1px',
            top: '1px',
            bottom: '0.71px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
            opacity: 0,
            borderRadius: '12px',
            pointerEvents: 'none',
          }}
        />

        {/* Header Row */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px 8px',
            width: '649px',
            height: '34px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '26px',
              width: '280px',
              textAlign: 'left',
              background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Productivity
          </span>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '26px',
              width: '200px',
              textAlign: 'right',
              background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience
          </span>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '26px',
              width: '103px',
              textAlign: 'right',
              background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            India · LPA
          </span>
        </div>

        {/* Row 1: AI PM */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px 4px',
            width: '649px',
            height: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 3,
          }}
        >
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '280px', textAlign: 'left' }}>
            AI Product Manager / Strategist
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '200px', textAlign: 'right' }}>
            5+ yrs
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '103px', textAlign: 'right' }}>
            ₹25–60
          </span>
        </div>

        {/* Row 2: AI Solutions Architect */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px 4px',
            width: '649px',
            height: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 4,
          }}
        >
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '280px', textAlign: 'left' }}>
            AI Solutions Architect (GCC)
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '200px', textAlign: 'right' }}>
            8+ yrs
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '103px', textAlign: 'right' }}>
            ₹40–90
          </span>
        </div>

        {/* Row 3: AI Automation Specialist */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px 4px',
            width: '649px',
            height: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 5,
          }}
        >
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '280px', textAlign: 'left' }}>
            AI Automation Specialist
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '200px', textAlign: 'right' }}>
            0–4 yrs
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '103px', textAlign: 'right' }}>
            ₹6–18
          </span>
        </div>

        {/* Row 4: AI Transformation Lead */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px 4px',
            width: '649px',
            height: '36px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 6,
          }}
        >
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '280px', textAlign: 'left' }}>
            AI Transformation Lead
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '200px', textAlign: 'right' }}>
            7+ yrs
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '103px', textAlign: 'right' }}>
            ₹35–75
          </span>
        </div>

        {/* Row 5: Founder / Solo SaaS */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '649px',
            height: '63.69px',
            zIndex: 7,
          }}
        >
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '280px', textAlign: 'left' }}>
            Founder / Solo SaaS
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '200px', textAlign: 'right' }}>
            -
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '16px', color: '#E5E2E1', width: '103px', textAlign: 'right', lineHeight: '1.2' }}>
            Outcome-based
          </span>
        </div>
      </div>

      {/* Card 6 - Demo Day Panel (Right) */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 24px',
          gap: '12px',
          isolation: 'isolate',
          width: '508px',
          height: '330px',
          background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)',
          border: '1px solid #252525',
          borderRadius: '12px',
          position: 'relative',
        }}
      >
        {/* Header Row */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0px 0px 8px',
            width: '460px',
            height: '34px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '26px',
              background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Demo Day · Industry Panel
          </span>
        </div>

        {/* List Items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '460px',
            zIndex: 3,
          }}
        >
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
            <GradientCheckIcon />
            <span style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', display: 'flex', alignItems: 'center' }}>
              12+ panelists confirmed across 2 days
            </span>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
            <GradientCheckIcon />
            <span style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '25px', color: '#E5E2E1', paddingTop: '3px' }}>
              GCC hiring managers: Walmart Labs, Target, JPMC, Goldman
            </span>
          </div>

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
            <GradientCheckIcon />
            <span style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', display: 'flex', alignItems: 'center' }}>
              Indian product co's: Razorpay, Swiggy, Flipkart
            </span>
          </div>

          {/* Item 4 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
            <GradientCheckIcon />
            <span style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', display: 'flex', alignItems: 'center' }}>
              5-min live demo + 3-min Q&A per learner
            </span>
          </div>

          {/* Item 5 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
            <GradientCheckIcon />
            <span style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', display: 'flex', alignItems: 'center' }}>
              Direct referral pathway · alumni hiring channel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
