import React from 'react';

export default function HonestAnswersHeader() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        position: 'relative',
        width: '100%',
        maxWidth: '1239px',
        height: 'auto',
        margin: '0 auto',
        zIndex: 10,
        gap: '12px',
      }}
    >
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
            width: 'fit-content',
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

      <div
        style={{
          width: '100%',
          maxWidth: '1239px',
          height: 'auto',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '1.3',
          textAlign: 'center',
          color: '#F5F7FF',
        }}
      >
        The honest answers.
      </div>
    </div>
  );
}
