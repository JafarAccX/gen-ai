export default function OutcomesLogos() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '80px',
        marginTop: '60px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      {/* Container constraints to center the marquee horizontally */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1276px',
          height: '100%',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Inner Marquee Track */}
        <div className="absolute flex h-full min-w-max animate-scroll-left">
          {/* First Set (Width 1200px) */}
          <div className="relative w-[1200px] h-full flex-shrink-0">
            {/* Microsoft */}
            <div
              style={{
                position: 'absolute',
                width: '141px',
                height: '34px',
                left: '0px',
                top: '23px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/microsoft.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Microsoft"
              />
            </div>

            {/* Deloitte */}
            <div
              style={{
                position: 'absolute',
                width: '122px',
                height: '32px',
                left: '183px',
                top: '24px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/deloitte.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Deloitte"
              />
            </div>

            {/* Paisabazaar */}
            <div
              style={{
                position: 'absolute',
                width: '209px',
                height: '34px',
                left: '347px',
                top: '23px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/paisabazaar.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Paisabazaar"
              />
            </div>

            {/* Bajaj Finserv */}
            <div
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                left: '598px',
                top: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/bajajfinserv.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Bajaj Finserv"
              />
            </div>

            {/* Indian Government */}
            <div
              style={{
                position: 'absolute',
                width: '215px',
                height: '41px',
                left: '700px',
                top: '19px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src="/assets/indiangovernment.png"
                style={{ width: '28px', height: '41px', objectFit: 'contain' }}
                alt="Indian Government Emblem"
              />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#FCFCFC',
                  whiteSpace: 'nowrap',
                }}
              >
                Indian Government
              </span>
            </div>

            {/* Razorpay */}
            <div
              style={{
                position: 'absolute',
                width: '143px',
                height: '67px',
                left: '957px',
                top: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/Razorpay.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Razorpay"
              />
            </div>
          </div>

          {/* Second Set (Duplicate for Infinite Loop) */}
          <div className="relative w-[1200px] h-full flex-shrink-0">
            {/* Microsoft */}
            <div
              style={{
                position: 'absolute',
                width: '141px',
                height: '34px',
                left: '0px',
                top: '23px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/microsoft.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Microsoft"
              />
            </div>

            {/* Deloitte */}
            <div
              style={{
                position: 'absolute',
                width: '122px',
                height: '32px',
                left: '183px',
                top: '24px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/deloitte.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Deloitte"
              />
            </div>

            {/* Paisabazaar */}
            <div
              style={{
                position: 'absolute',
                width: '209px',
                height: '34px',
                left: '347px',
                top: '23px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/paisabazaar.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Paisabazaar"
              />
            </div>

            {/* Bajaj Finserv */}
            <div
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                left: '598px',
                top: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/bajajfinserv.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Bajaj Finserv"
              />
            </div>

            {/* Indian Government */}
            <div
              style={{
                position: 'absolute',
                width: '215px',
                height: '41px',
                left: '700px',
                top: '19px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src="/assets/indiangovernment.png"
                style={{ width: '28px', height: '41px', objectFit: 'contain' }}
                alt="Indian Government Emblem"
              />
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#FCFCFC',
                  whiteSpace: 'nowrap',
                }}
              >
                Indian Government
              </span>
            </div>

            {/* Razorpay */}
            <div
              style={{
                position: 'absolute',
                width: '143px',
                height: '67px',
                left: '957px',
                top: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/Razorpay.png"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Razorpay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
