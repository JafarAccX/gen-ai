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
        width: '1239px',
        height: '72px',
        margin: '0 auto',
        zIndex: 10,
      }}
    >
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

      <div
        style={{
          width: '1239px',
          height: '56px',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '56px',
          textAlign: 'center',
          color: '#F5F7FF',
        }}
      >
        The honest answers.
      </div>
    </div>
  );
}
