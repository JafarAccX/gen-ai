import React from 'react';
import MobileMarquee from '../components/MobileMarquee';

interface Mentor {
  name: string;
  role: string;
  image: string;
  logo: string;
}

const mentors: Mentor[] = [
  {
    name: 'Yash Manghnani',
    role: 'Senior AI Builder @ Better Software',
    image: '/assets/genai-mentors/yash.png',
    logo: '/assets/b_logo.png',
  },
  {
    name: 'Ashu Mishra',
    role: 'Technical Product Manager - Zigram',
    image: '/assets/genai-mentors/Ashu 1.png',
    logo: '/assets/zigram.png',
  },
  {
    name: 'Dr. Prashant Vijaybhai Sahatiya',
    role: 'Program Coordinator & Assistant Professor',
    image: '/assets/genai-mentors/Dr. Prashant 2.png',
    logo: '/assets/parul_university.png',
  },
  {
    name: 'Nitish Setty',
    role: 'Managing director at GrowSharp',
    image: '/assets/genai-mentors/Nitish.png',
    logo: '/assets/ag_logo.png',
  },
  {
    name: 'Anjali Sharma',
    role: 'Sr.AI Product Manager @Search Atlas',
    image: '/assets/genai-mentors/Anjali Sharma 3.png',
    logo: '/assets/purple_star.png',
  },
];

export default function MentorsProfiles() {
  return (
    <div
      className="responsive-section mentors-profiles-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '280px',
        margin: '24px auto 0',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <div
        className="mentors-profiles-container"
        style={{
          position: 'relative',
          width: '1276px',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Main animating marquee track */}
        <MobileMarquee speed={60} gap={24} resumeDelay={500} pauseOnHover={true}>
          {mentors.map((mentor, index) => (
              <div
                key={`set1-${index}`}
                className="mentor-card-item"
                style={{
                  position: 'relative',
                  width: '231px',
                  height: '261px',
                  flexShrink: 0,
                }}
              >
                {/* Main card base container */}
                <div
                  style={{
                    position: 'absolute',
                    width: '207px',
                    height: '207px',
                    left: 0,
                    top: '20px',
                    background: 'linear-gradient(90deg, #000000 0%, #282828 100%)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Mentor Headshot */}
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    style={{
                      position: 'absolute',
                      width: '134px',
                      height: '200px',
                      left: '37px',
                      top: '7px',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Bottom Content Badge */}
                <div
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '181px',
                    minHeight: '58px',
                    height: 'auto',
                    left: '13px',
                    top: '203px',
                    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(40, 40, 40, 0.7) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '35px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px 12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: 'inset 0 -1px 12px rgba(252, 100, 1, 0.15), 0 4px 12px rgba(0,0,0,0.4)', // Dynamic subtle warm bottom glow
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: mentor.name.length > 20 ? '11px' : '13px',
                      lineHeight: mentor.name.length > 20 ? '12px' : '16px',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {mentor.name.includes('Vijaybhai') ? (
                      <>
                        Prashant Vijaybhai
                        <br />
                        Sahatiya
                      </>
                    ) : (
                      mentor.name
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '9px',
                      lineHeight: '11px',
                      textAlign: 'center',
                      color: '#E0E0E0',
                      marginTop: '2px',
                      opacity: 0.85,
                    }}
                  >
                    {mentor.role}
                  </div>
                </div>

                {/* Top-Right Circular Brand Logo Overlap */}
                <div
                  className="mentor-card-logo"
                  style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    left: '181px',
                    top: 0,
                    background: '#000000',
                    border: mentor.logo.includes('parul') || mentor.logo.includes('b_logo') ? '1px solid #FFFDFD' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    overflow: 'hidden',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
                  }}
                >
                  <img
                    src={mentor.logo}
                    alt="Company logo"
                    style={{
                      width: mentor.logo.includes('zigram') ? '80%' : '100%',
                      height: mentor.logo.includes('zigram') ? 'auto' : '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            ))}
        </MobileMarquee>

        {/* Left Fade-out Soft Vignette Gradient */}
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '261px',
            left: 0,
            top: '20px',
            background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 15,
          }}
        />

        {/* Right Fade-out Soft Vignette Gradient */}
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '261px',
            right: 0,
            top: '20px',
            background: 'linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 15,
          }}
        />
      </div>
    </div>
  );
}
