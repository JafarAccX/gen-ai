import React from 'react';

export default function CapstoneMenu() {
  return (
    <div
      className="responsive-section capstone-menu-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        gap: '16px',
        position: 'relative',
        width: '1276px',
        margin: '60px auto 0',
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '20px',
          width: '1276px',
        }}
      >
        {/* Label — CAPSTONE MENU */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '1276px',
            height: '16px',
          }}
        >
          <span
            style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
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
            Capstone Menu
          </span>
        </div>

        {/* Heading 2 block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            gap: '4px',
            width: '1276px',
          }}
        >
          {/* Main heading */}
          <h2
            style={{
              margin: 0,
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '60px',
              color: '#F5F7FF',
              textAlign: 'center',
              width: '1276px',
            }}
          >
            Pick one of 8 Business Track capstones each adopted by your real team.
          </h2>

          {/* Sub-description */}
          <p
            style={{
              margin: 0,
              width: '1276px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '25px',
              textAlign: 'center',
              color: '#C2C2C2',
            }}
          >
            Three-sprint build (architecture → tested → polished). Each capstone has acceptance criteria measured adoption, stakeholder sign-off, ROI documented.
          </p>
        </div>
      </div>
    </div>
  );
}
