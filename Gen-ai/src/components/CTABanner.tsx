import React from 'react';
import { ASSETS } from '../constants/GenAIv2Constants';

export default function CTABanner() {
  return (
    <div
      id="cta-banner-wrapper"
      className="cta-outer"
      style={{
        position: 'relative',
        width: '1296px',
        height: '318px',
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
          borderRadius: '20px',
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
            borderRadius: '20px',
            zIndex: 1,
          }}
        />

        {/* Mask Group – Purple/Dark Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(242.56deg, rgba(62, 56, 224, 0.5) -18.34%, #000000 -4.97%, #060110 12.6%, rgba(33, 8, 85, 0.855422) 19.77%, rgba(62, 56, 224, 0.5) 33.14%)',
            opacity: 0.8,
            zIndex: 1,
          }}
        />

        {/* Circular Shape Graphic */}
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

        {/* Top Left Curve 2 */}
        <div
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '220px',
            height: '180px',
            left: '-80px',
            top: '-120px',
            border: '7px solid rgba(191, 191, 191, 0.5)',
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
          width: '697px',
          left: '125px',
          top: '58px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '48px',
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
            maxWidth: '697px',
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
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            gap: '15px',
            marginTop: '8px',
          }}
        >
          {/* Email Input */}
          <div
            id="cta-email-input"
            style={{
              boxSizing: 'border-box',
              width: '277px',
              height: '50px',
              background: 'rgba(75, 30, 0, 0.05)',
              border: '1px solid #787878',
              borderRadius: '50px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              backdropFilter: 'blur(50px)',
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '28px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'right',
                letterSpacing: '-0.2px',
                color: '#B4B4B4',
              }}
            >
              abc@gmail.com
            </span>
          </div>

          {/* Apply Now Button with Orange Border */}
          <div
            id="cta-button-wrapper"
            style={{
              position: 'relative',
              width: '160px',
              height: '50px',
              padding: '1.5px',
              borderRadius: '12px',
              background: '#FC6401',
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
                fontFamily: "'Poppins', sans-serif",
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
            margin: 0,
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
