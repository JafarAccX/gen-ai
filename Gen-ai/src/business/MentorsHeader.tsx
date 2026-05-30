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
        gap: '24px',
        position: 'relative',
        width: '100%',
        maxWidth: '1276px',
        height: 'auto',
        margin: '60px auto 0',
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
            justifyContent: 'center',
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
          gap: '12px',
          width: '100%',
          height: 'auto',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            maxWidth: '900px',
            height: 'auto',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '1.3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
            width: '100%',
            maxWidth: '835px',
            height: 'auto',
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#C2C2C2',
          }}
        >
          Senior AI engineers and product leaders from Apple, Meesho, and India's top startups. Each cohort gets a 1:8 mentor:learner ratio for capstone reviews.
        </p>
      </div>
    </div>
  );
}
