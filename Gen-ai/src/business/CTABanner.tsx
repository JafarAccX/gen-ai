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
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        {/* Exact SVG Background from Figma */}
        <svg
          width="1296"
          height="318"
          viewBox="0 0 1296 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          {/* Background gradient fill */}
          <rect
            width="1296"
            height="318"
            rx="20"
            fill="url(#paint0_linear_cta)"
          />
          {/* Border stroke */}
          <rect
            x="0.5"
            y="0.5"
            width="1295"
            height="317"
            rx="19.5"
            stroke="white"
            strokeOpacity="0.1"
          />
          {/* Masked elliptical curve */}
          <mask
            id="mask0_cta"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1296"
            height="318"
          >
            <rect width="1296" height="318" rx="20" fill="white" />
          </mask>
          <g mask="url(#mask0_cta)">
            <path
              d="M-35.6344 -115.028C28.0079 -149.167 101.004 -134.26 128.118 -83.715C155.231 -33.1704 127.276 35.8894 63.6338 70.0285C-0.00858408 104.168 -73.0052 89.2603 -100.118 38.7158C-127.232 -11.8288 -99.2768 -80.8886 -35.6344 -115.028Z"
              stroke="#BFBFBF"
              strokeWidth="7"
            />
          </g>
          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="paint0_linear_cta"
              x1="7.5"
              y1="6.5"
              x2="1289"
              y2="305"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FC6401" />
              <stop offset="0.0480769" stopColor="#AE4501" />
              <stop offset="0.0961538" stopColor="#853501" />
              <stop offset="0.206731" stopColor="#3E1900" />
              <stop offset="0.331731" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Section */}
      <div
        id="cta-content"
        style={{
          position: 'absolute',
          width: '697px',
          left: '93px',
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
          {/* Email Input — exact SVG specs: 276x49, rx=24.5 */}
          <div
            id="cta-email-input"
            style={{
              boxSizing: 'border-box',
              width: '276px',
              height: '49px',
              background: 'rgba(75, 30, 0, 0.05)',
              border: '1px solid #787878',
              borderRadius: '24.5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
              height: '49px',
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
            marginTop: '4px',
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