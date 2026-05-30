import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';

export default function InvestmentPricing() {
  return (
    <div
      className="responsive-section investment-pricing-section"
      style={{
        position: 'relative',
        width: '1060px',
        height: '600px',
        margin: '24px auto 0',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
      }}
    >
      {/* Left Main Pricing Card */}
      <div
        className="pricing-card"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '40px 40px 24px',
          width: '503px',
          height: '587px',
          background: 'linear-gradient(90deg, #000000 0%, #141414 68.66%)',
          border: '1px solid #262626',
          boxShadow: '0px 0px 20px rgba(252, 100, 1, 0.25)',
          borderRadius: '16px',
        }}
      >
        {/* Top Glow Background (Radial Gradient for reliability) */}
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(252, 100, 1, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
            borderRadius: '16px',
          }}
        />

        {/* COHORT FEE Badge */}
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 16px',
            background: '#FC6401', // Solid orange like the first image
            borderRadius: '9999px',
            boxShadow: '0px 0px 15px rgba(252, 100, 1, 0.5)',
            zIndex: 50, // High z-index
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            COHORT FEE
          </span>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
          {/* Header Section (Price) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px 0px 24px', width: '100%', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '8px', width: '100%' }}>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '32px',
                  color: '#E4E4E4',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                ₹1,25,000
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#808080',
                  marginLeft: '4px',
                }}
              >
                onwards all-inclusive
              </span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MdVerified color="#31BE2C" size={23} />
              </div>
            </div>

            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '22px',
                color: '#A0A8B8',
                width: '100%',
              }}
            >
              EMI from <span style={{ color: '#FFFFFF', fontWeight: 600 }}>₹11,500/month</span> · 0% interest · partner finance available
            </div>
          </div>

          {/* Features List */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px 0px 24px', gap: '12px', width: '100%', flexGrow: 1 }}>
            {[
              '16-week live program (Tue · Thu · Sat) both tracks accessible',
              '16 AI Build Ninja Saturdays + 16-domain portfolio',
              '1:8 mentor ratio · capstone architecture review',
              'Demo Day with industry panel + alumni hiring channel',
              'Cohort tooling - LangSmith, ElevenLabs, Vapi credits',
              'Lifetime access to recordings + content updates',
              'LangChain Academy free certification',
            ].map((feature, idx) => (
              <div key={idx} style={{ position: 'relative', width: '100%', minHeight: '30px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ position: 'absolute', left: '0px', top: '2px', display: 'flex' }}>
                  <FiCheckCircle color="#FC6401" size={17.5} />
                </div>
                <span
                  style={{
                    marginLeft: '34px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: '#CFCFCF',
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div style={{ position: 'relative', width: '100%', height: '58.8px', marginTop: 'auto' }}>
            <button
              style={{
                width: '100%',
                height: '100%',
                background: '#FC6401',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 4px 8px rgba(252, 100, 1, 0.25)',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                Join The Program
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Info Cards */}
      <div
        className="pricing-info-sidebar"
        style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '517px', justifyContent: 'center' }}
      >
        {/* Card 1: What's not included */}
        <div
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #111111 100%)',
            border: '1px solid #262626',
            borderRadius: '12px',
            padding: '32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ borderBottom: '1px solid #262626', paddingBottom: '12px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FC6401',
              }}
            >
              What's not included
            </span>
          </div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '26px',
              color: '#A0A8B8',
            }}
          >
            Compute / API costs after free credits run out — typical learner spends ₹2–4k across 16 weeks. Optional cloud cert exam fees (AWS / Azure / GCP) are separate. We help you get cohort-rate discounts on Vapi, ElevenLabs, LangSmith, Bolt.
          </span>
        </div>

        {/* Card 2: Who shouldn't enroll */}
        <div
          style={{
            background: 'linear-gradient(90deg, #000000 0%, #111111 100%)',
            border: '1px solid #262626',
            borderRadius: '12px',
            padding: '32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ borderBottom: '1px solid #262626', paddingBottom: '12px' }}>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FC6401',
              }}
            >
              Who shouldn't enroll
            </span>
          </div>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '26px',
              color: '#A0A8B8',
            }}
          >
            If you want a tools-tour or a 3-hour ChatGPT class, this isn't it. If you can't commit to 8–10 hours/week including Saturday Build Ninja, wait for a cohort that fits.
          </span>
        </div>
      </div>
    </div>
  );
}
