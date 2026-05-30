import React from 'react';

// High-fidelity check SVG matching screenshot
const CheckIcon = () => (
  <svg
    width="17.5"
    height="17.5"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <circle cx="9" cy="9" r="8" stroke="url(#checkIconGradient)" strokeWidth="1.5" />
    <path
      d="M5.5 9.2L8 11.7L12.5 6.2"
      stroke="url(#checkIconGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="checkIconGradient" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFBE93" />
        <stop offset="1" stopColor="#FC6401" />
      </linearGradient>
    </defs>
  </svg>
);

export default function OutcomesHiring() {
  // Divider helper - more subtle
  const Divider = () => (
    <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.04)', width: '100%' }} />
  );

  return (
    <div
      className="responsive-section outcomes-hiring-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        gap: '40px',
        position: 'relative',
        width: '1276px',
        margin: '60px auto 0',
      }}
    >
      {/* Header Stack */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          width: '100%',
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
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
          Outcomes & Hiring
        </div>

        <h2
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '40px',
            textAlign: 'center',
            color: '#F5F7FF',
          }}
        >
          From AI-curious manager → the person who led AI in your org
        </h2>

        <p
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#C2C2C2',
            maxWidth: '800px',
          }}
        >
          Salary bands for the AI-leadership track - PMs, AI strategists, solutions architects.
        </p>
      </div>

      {/* Dual Boxes Flex Container */}
      <div
        className="responsive-flex-row outcomes-boxes-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '64px', // Gap based on left: 85px and left: 846px with 697px width
          width: '1276px',
        }}
      >
        {/* LEFT BOX: Outcomes Grid */}
        <div
          className="outcomes-left-box"
          style={{
            width: '697px',
            minHeight: '331.68px',
            background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)',
            border: '1px solid #252525',
            borderRadius: '12px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            isolation: 'isolate',
            boxSizing: 'border-box',
          }}
        >
          {/* Table Header */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'grid',
              gridTemplateColumns: '1fr 120px 130px',
              alignItems: 'center',
              padding: '0px 0px 8px',
              width: '649px',
              minHeight: '34px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '26px',
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
                textAlign: 'left',
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
                textAlign: 'left',
                background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              India · LPA
            </span>
          </div>

          {/* Row 1 */}
          <div style={{ boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 120px 130px', alignItems: 'center', padding: '10px 0px', width: '649px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>AI Product Manager / Strategist</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>5+ yrs</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>₹25–60</span>
          </div>

          {/* Row 2 */}
          <div style={{ boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 120px 130px', alignItems: 'center', padding: '10px 0px', width: '649px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>AI Solutions Architect (GCC)</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>8+ yrs</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>₹40–90</span>
          </div>

          {/* Row 3 */}
          <div style={{ boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 120px 130px', alignItems: 'center', padding: '10px 0px', width: '649px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>AI Automation Specialist</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>0–4 yrs</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>₹6–18</span>
          </div>

          {/* Row 4 */}
          <div style={{ boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 120px 130px', alignItems: 'center', padding: '10px 0px', width: '649px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>AI Transformation Lead</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>7+ yrs</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>₹35–75</span>
          </div>

          {/* Row 5 */}
          <div style={{ boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 120px 130px', alignItems: 'center', padding: '10px 0px', width: '649px' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>Founder / Solo SaaS</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>-</span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#E5E2E1', textAlign: 'left' }}>Outcome-based</span>
          </div>
        </div>

        {/* RIGHT BOX: Demo Day / Industry Panel */}
        <div
          className="outcomes-right-box"
          style={{
            width: '508px',
            height: '330px',
            background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.5) 0%, rgba(40, 40, 40, 0.5) 100%)',
            border: '1px solid #252525',
            borderRadius: '12px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            isolation: 'isolate',
            boxSizing: 'border-box',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0px 0px 8px',
              width: '460px',
              height: '34px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '26px',
                width: '177px',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Demo Day · Industry Panel
            </span>
          </div>

          <Divider />

          {/* List Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '460px' }}>
            {/* Item 1 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0px 0px 0.685px', gap: '6px', width: '460px' }}>
              <div style={{ paddingTop: '6px', flexShrink: 0 }}><CheckIcon /></div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', flex: 1 }}>
                12+ panelists confirmed across 2 days
              </div>
            </div>

            {/* Item 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0px', gap: '6px', width: '460px' }}>
              <div style={{ paddingTop: '6px', flexShrink: 0 }}><CheckIcon /></div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', flex: 1 }}>
                GCC hiring managers: Walmart Labs, Target, JPMC, Goldman
              </div>
            </div>

            {/* Item 3 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0px 0px 0.685px', gap: '6px', width: '460px' }}>
              <div style={{ paddingTop: '6px', flexShrink: 0 }}><CheckIcon /></div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', flex: 1 }}>
                Indian product co's: Razorpay, Swiggy, Flipkart
              </div>
            </div>

            {/* Item 4 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0px 0px 0.685px', gap: '6px', width: '460px' }}>
              <div style={{ paddingTop: '6px', flexShrink: 0 }}><CheckIcon /></div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', flex: 1 }}>
                5-min live demo + 3-min Q&A per learner
              </div>
            </div>

            {/* Item 5 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '0px 0px 0.685px', gap: '6px', width: '460px' }}>
              <div style={{ paddingTop: '6px', flexShrink: 0 }}><CheckIcon /></div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '31px', color: '#E5E2E1', flex: 1 }}>
                Direct referral pathway · alumni hiring channel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
