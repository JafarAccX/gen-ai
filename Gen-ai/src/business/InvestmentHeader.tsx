import React from 'react';

export default function InvestmentHeader() {
  return (
    <div
      className="responsive-section investment-header-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        gap: '24px',
        position: 'absolute',
        width: '1239px',
        height: '140px',
        left: 'calc(50% - 1239px / 2)',
        top: '9373px', // Placed precisely below the Alternatives Table
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
          width: '1239px',
          height: '140px',
        }}
      >
        {/* Top Tag: INVESTMENT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            width: '1239px',
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
            width: '1239px',
            height: '104px',
          }}
        >
          <div
            style={{
              width: 'auto',
              height: '60px',
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              color: '#F5F7FF',
            }}
          >
            One price. Both tracks open. EMI-friendly.
          </div>
          <div
            style={{
              width: '797px',
              height: '38px',
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
