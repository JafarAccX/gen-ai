import { ASSETS } from '../constants/GenAIv2Constants';

export default function CTABanner() {
  return (
    <div
      id="cta-banner-wrapper"
      className="cta-outer"
      style={{
        width: '100%',
        maxWidth: '1296px',
        margin: '80px auto 0',
        padding: '0 clamp(16px, 5vw, 72px)',
        zIndex: 2,
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Gradient card — layout container */}
      <div
        id="cta-bg-container"
        style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(93.27deg, #AF4907 0.66%, #C37848 49.96%, #F6F6F5 99.27%)',
          borderRadius: '20px',
          overflow: 'visible',
          border: '1px solid rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          minHeight: '318px',
        }}
      >
        {/* Content — responsive padding via Tailwind */}
        <div
          id="cta-content"
          className="cta-content"
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            width: '100%',
            maxWidth: '700px',
            padding: 'clamp(32px, 4vw, 56px) clamp(24px, 5vw, 64px)',
            boxSizing: 'border-box',
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3.2vw, 32px)',
              lineHeight: '1.2',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Ready to lead AI inside your company?
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(255, 255, 255, 0.85)',
              margin: 0,
              maxWidth: '620px',
            }}
          >
            Next cohort: rolling admissions. 60 seats. Apply, talk to admissions, and decide on the call — no commitment until Day 14.
          </p>

          {/* Form Group — always row, wraps on very small screens */}
          <div
            id="cta-form-group"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '22px',
              marginTop: '4px',
            }}
          >
            {/* Email Input */}
            <div
              id="cta-email-input"
              style={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '336px',
                minWidth: '240px',
                maxWidth: '336px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                backdropFilter: 'blur(50px)',
              }}
            >
              <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', letterSpacing: '-0.2px' }}>
                abc@gmail.com
              </span>
            </div>

            {/* Apply Now Button */}
            <button
              style={{
                height: '50px',
                padding: '0 32px',
                background: 'rgba(202, 85, 9, 0.25)',
                border: '1px solid #943E06',
                borderRadius: '9px',
                color: '#FFFFFF',
                fontFamily: 'inherit',
                fontWeight: 500,
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                transition: 'opacity 0.2s',
                flexShrink: 0,
              }}
            >
              Apply Now
            </button>
          </div>

          <p
            className="cta-fine-print"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            EMI from ₹11,500/mo · 14-day refund · LangChain Academy free certification included
          </p>
        </div>

        {/* Right Side Image — desktop only */}
        <div
          id="cta-right-graphic"
          className="cta-right-img hidden md:block"
          style={{
            position: 'absolute',
            right: 'clamp(12px, 3vw, 34px)',
            top: '-126px',
            width: 'clamp(360px, 34.5vw, 447px)',
            height: 'clamp(410px, 39.3vw, 509px)',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        >
          <img
            src={ASSETS.ctaFrame}
            alt="CTA Graphic"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
