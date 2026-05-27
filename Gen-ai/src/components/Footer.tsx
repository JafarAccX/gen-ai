export default function Footer() {
  const instagramIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#A1A1A1" />
    </svg>
  );

  const linkedInIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2722_3455)">
        <path d="M0 1.4325C0 0.64125 0.6575 0 1.46875 0H18.5312C19.3425 0 20 0.64125 20 1.4325V18.5675C20 19.3587 19.3425 20 18.5312 20H1.46875C0.6575 20 0 19.3587 0 18.5675V1.4325ZM6.17875 16.7425V7.71125H3.1775V16.7425H6.17875ZM4.67875 6.4775C5.725 6.4775 6.37625 5.785 6.37625 4.9175C6.3575 4.03125 5.72625 3.3575 4.69875 3.3575C3.67125 3.3575 3 4.0325 3 4.9175C3 5.785 3.65125 6.4775 4.65875 6.4775H4.67875ZM10.8138 16.7425V11.6988C10.8138 11.4288 10.8337 11.1587 10.9137 10.9662C11.13 10.4275 11.6238 9.86875 12.4538 9.86875C13.54 9.86875 13.9738 10.6962 13.9738 11.9113V16.7425H16.975V11.5625C16.975 8.7875 15.495 7.4975 13.52 7.4975C11.9275 7.4975 11.2137 8.3725 10.8138 8.98875V9.02H10.7938L10.8138 8.98875V7.71125H7.81375C7.85125 8.55875 7.81375 16.7425 7.81375 16.7425H10.8138Z" fill="#A1A1A1" />
      </g>
      <defs>
        <clipPath id="clip0_2722_3455">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const facebookIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#A1A1A1" />
      <path d="M9.0771 14.503V10.5362H7.74219V8.99023H9.0771V7.85014C9.0771 6.52708 9.88519 5.80664 11.0655 5.80664C11.6308 5.80664 12.1167 5.84873 12.2583 5.86755V7.25023L11.4397 7.2506C10.7978 7.2506 10.6736 7.55562 10.6736 8.00322V8.99023H12.2044L12.0051 10.5362H10.6736V14.503H9.0771Z" fill="#0A0A0A" />
    </svg>
  );

  return (
    <div id="footer-main-container" className="footer-wrapper">

      {/* 4-column grid (brand + 3 link columns) */}
      <div className="footer-grid">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '24px',
              color: '#FFFFFF',
              margin: '0 0 32px 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Accelerator<span style={{ color: '#3E38E0' }}>X</span>
          </h3>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '22px',
              color: '#999999',
              margin: 0,
            }}
          >
            Be a real AI version product by joining us.
          </p>

          {/* Social Icons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
              padding: '4px 8px 2.3px 0px',
              marginTop: '32px',
            }}
          >
            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.instagram.com/acceleratorxorg" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                {instagramIcon}
              </a>
            </div>
            <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/company/acceleratorxorg/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                {linkedInIcon}
              </a>
            </div>
            <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.facebook.com/acceleratorxorg/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                {facebookIcon}
              </a>
            </div>
          </div>
        </div>

        {/* COMPANY column */}
        <div className="footer-link-col">
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#FC6401',
              margin: '0 0 32px 0',
            }}
          >
            COMPANY
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Home',     url: 'https://acceleratorx.org/' },
              { label: 'Product',  url: 'https://acceleratorx.org/#products' },
              { label: 'Blogs',    url: 'https://acceleratorx.org/blogs' },
              { label: 'Services', url: 'https://acceleratorx.org/#services' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#999999',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* HELP column */}
        <div className="footer-link-col">
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#FC6401',
              margin: '0 0 32px 0',
            }}
          >
            HELP
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Customer Support',   url: 'https://acceleratorx.org/support' },
              { label: 'Terms & Conditions', url: 'https://acceleratorx.org/terms-and-conditions' },
              { label: 'Privacy Policy',     url: 'https://acceleratorx.org/privacy-policy' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#999999',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* RESOURCES column */}
        <div className="footer-link-col">
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#FC6401',
              margin: '0 0 32px 0',
            }}
          >
            RESOURCES
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Free eBooks',            url: 'https://acceleratorx.org/#ebooks' },
              { label: 'Development Tutorial',   url: 'https://acceleratorx.org/#tutorials' },
              { label: 'Free course Playlist',   url: 'https://acceleratorx.org/#playlist' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.url}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  lineHeight: '22px',
                  color: '#999999',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="footer-bottom">
        <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: '#717171',
            margin: 0,
          }}
        >
          © AcceleratorX 2026 &nbsp; | &nbsp; Designed, developed and backed by AcceleratorX | A2M
        </p>
      </div>
    </div>
  );
}
