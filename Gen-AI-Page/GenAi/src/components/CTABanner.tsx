import React from 'react';
import { ASSETS } from '../constants/GenAIv2Constants';

export default function CTABanner() {
  return (
    <div
      id="cta-banner-wrapper"
      style={{
        position: 'relative',
        width: '1296px',
        height: '330px',
        margin: '120px auto 100px',
        zIndex: 100,
      }}
    >
      {/* Background Container */}
      <div
        id="cta-bg-container"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: '#000000',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Main Background Gradient (Brownish Orange) */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(93.27deg, #FC6401 0.66%, #AE4501 5.4%, #853501 10.14%, #3E1900 21.04%, #000000 33.37%)',
            opacity: 0.8,
            zIndex: 1,
          }}
        />

        {/* Top Left Curve */}
        <div
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '266px',
            height: '217px',
            left: '-120.49px',
            top: '-180.98px',
            border: '7px solid #BFBFBF',
            transform: 'rotate(-28.21deg)',
            borderRadius: '50%',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content Section */}
      <div
        id="cta-content"
        style={{
          position: 'absolute',
          width: '600px',
          left: '125px',
          top: '40px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '44px',
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
            lineHeight: '24px',
            color: '#B4B4B4',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          Next cohort: rolling admissions. 60 seats. Apply, talk to admissions, and decide on the call no commitment until Day 14.
        </p>

        {/* Form Group */}
        <div
          id="cta-form-group"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginTop: '8px',
          }}
        >
          {/* Email Input */}
          <div
            style={{
              width: '277px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 24px',
              backdropFilter: 'blur(50px)',
            }}
          >
            <span style={{ color: 'rgba(180, 180, 180, 0.8)', fontSize: '14px', letterSpacing: '-0.2px' }}>abc@gmail.com</span>
          </div>

          {/* Apply Now Button with Partial Border */}
          <div
            style={{
              position: 'relative',
              width: '160px',
              height: '50px',
              padding: '1.5px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #FC6401 0%, #FC6401 40%, rgba(252, 100, 1, 0) 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <button
              style={{
                width: '100%',
                height: '100%',
                background: '#000000',
                border: 'none',
                borderRadius: '11px',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Apply Now
            </button>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12px',
            color: 'rgba(180, 180, 180, 0.7)',
            marginTop: '12px',
          }}
        >
          EMI from ₹11,500/mo · 14-day refund · LangChain Academy free certification included
        </p>
      </div>

      {/* Right Side Image (SVG Frame) */}
      <div
        id="cta-right-graphic"
        style={{
          position: 'absolute',
          right: '40px',
          top: '-120px',
          width: '447px',
          height: '509px',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <img
          src={ASSETS.ctaFrame}
          alt="CTA Graphic"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  );
}