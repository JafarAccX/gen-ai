import React from 'react';

export default function MentorsHeader() {
  return (
    <div
      className="responsive-section mentors-header-section"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        gap: '16px',
        position: 'absolute',
        width: '1276px',
        height: '140px',
        left: 'calc(50% - 1276px / 2)', // Centered horizontally
        top: '6850px', // Placed perfectly below OutcomesLogos with elegant gap
        zIndex: 10,
      }}
    >
      {/* Label: LEARN FROM INDUSTRY */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          width: '100%',
          height: '16px',
        }}
      >
        <div
          style={{
            width: 'fit-content', // Bound the gradient perfectly to letters
            height: '16px',
            fontFamily: 'Open Sans, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #3E38E0 0%, #F7921E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Learn from Industry
        </div>
      </div>

      {/* Content Container: Heading + Description */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '6px',
          width: '1276px',
          height: '104px',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            margin: 0,
            padding: 0,
            width: 'fit-content',
            height: '60px',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#F5F7FF',
          }}
        >
          Mentors who've shipped, not just taught.
        </h2>

        {/* Subtitle Description */}
        <p
          style={{
            margin: 0,
            padding: 0,
            width: '835px',
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
          Senior AI engineers and product leaders from Apple, Mesha, and India's top startups.
          Each cohort gets a 1:8 mentor:learner ratio for capstone reviews.
        </p>
      </div>
    </div>
  );
}
