export const Header = ({ mobileNav, setMobileNav }) => {
  return (
    <header className="header">
      <div className="header-pill">
        <a href="#" className="logo">Accelerator<em>X</em></a>
        <nav className="nav">
          <a href="#" className="active">Home</a>
          <a href="#">Programs <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Job Portal</a>
        </nav>
        <div className="auth">
          <a href="#" className="login">Log In</a>
          <a href="#" className="signup-btn">
            <span className="signup-text">Sign Up</span>
            <span className="signup-arrow">
              <svg viewBox="0 0 14 14" fill="none">
                <path d="M4 10L10 4M10 4H6M10 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
        <button className="mobile-burger" onClick={() => setMobileNav(!mobileNav)}>
          <span /><span /><span />
        </button>
      </div>

      {mobileNav && (
        <div className="mobile-menu">
          {["Home", "Programs", "About", "Blog", "Job Portal"].map(n => (
            <a key={n} href="#" onClick={() => setMobileNav(false)}>{n}</a>
          ))}
          <div className="mobile-menu-auth">
            <a href="#" className="mobile-login" onClick={() => setMobileNav(false)}>Log In</a>
            <a href="#" className="mobile-signup" onClick={() => setMobileNav(false)}>Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Hero = ({ activeTrack, setActiveTrack }) => {
  return (
    <section className="hero">
      {/* Track toggle — centered above content */}
      <div className="track-toggle">
        <button
          className={`track-btn${activeTrack === 'business' ? ' active' : ''}`}
          onClick={() => setActiveTrack('business')}
        >Business Track</button>
        <button
          className={`track-btn${activeTrack === 'tech' ? ' active' : ''}`}
          onClick={() => setActiveTrack('tech')}
        >Tech Track</button>
      </div>

      {/* Grid layout — desktop: [title+content | image]; mobile: title → image → content */}
      <div className="hero-inner">

        {/* ① TITLE BLOCK — first on all screens */}
        <div className="hero-title-block">
          <span className="track-badge">Ultimate · 16 Weeks · Tech Track</span>
          <h1 className="hero-title">
            Become a production-grade{" "}
            <span className="accent">AI engineer in 16 weeks.</span>
          </h1>
          <p className="hero-sub">
            Ship a production RAG, a multi-agent system, an MCP server, and a fine-tuned model. Demo to GCC hiring managers from Walmart Labs, JPMC, Razorpay, Swiggy.
          </p>
        </div>

        {/* ② RIGHT — Hero Card — second on mobile, right column on desktop */}
        <div className="hero-right">
          <div className="hero-card">
            <img className="hero-photo" src="pm1.png" alt="Professional" />
            <img className="ibm-badge" src="assets/ibm.png" alt="In collaboration with IBM" />
            <img className="students-group-badge" src="/assets/happystudents.png" alt="Happy Students" />
            <div className="float-badge live">
              <img className="badge-icon" src="assets/liveclasses.png" alt="" />
              <span className="text">Live Classes</span>
            </div>
            <div className="float-badge mentor">
              <img className="badge-icon" src="assets/mentorconnect.png" alt="" />
              <span className="text">Mentor Connect</span>
            </div>
            <div className="float-badge career">
              <img className="badge-icon" src="assets/careersupport.png" alt="" />
              <span className="text">Career Support</span>
            </div>
          </div>
        </div>

        {/* ③ CONTENT BLOCK — third on mobile, below title on desktop */}
        <div className="hero-content-block">
          {/* Stats */}
          <div className="stats-bar">
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 18 20" fill="none">
                  <path d="M0 3a1 1 0 011-1h16a1 1 0 011 1v1H0V3zm0 15h18v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1zm0-12h18v12H0V6zm12-5a1 1 0 112 0 1 1 0 01-2 0zM4 1a1 1 0 112 0 1 1 0 01-2 0z" fill="url(#g1)" />
                  <defs>
                    <linearGradient id="g1" x1="9" y1="0" x2="9" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3E38E0" /><stop offset="1" stopColor="#F7921E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="stat-label">16 weeks</div>
                <div className="stat-sub">3 tracks · 48+ live sessions</div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 20 18" fill="none">
                  <rect x="1" y="4" width="18" height="12" rx="2" stroke="url(#g2)" strokeWidth="1.5" />
                  <path d="M6 4V2.5A1.5 1.5 0 017.5 1h5A1.5 1.5 0 0114 2.5V4" stroke="url(#g2)" strokeWidth="1.5" />
                  <path d="M1 9h18" stroke="url(#g2)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="g2" x1="10" y1="0" x2="10" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3E38E0" /><stop offset="1" stopColor="#F7921E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="stat-label">16 ships</div>
                <div className="stat-sub">Saturday domain projects</div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 1l2.5 5.5L18 7l-4.5 4 1.5 6-5-3-5 3 1.5-6L2 7l5.5-.5L10 1z" stroke="url(#g3)" strokeWidth="1.5" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="g3" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3E38E0" /><stop offset="1" stopColor="#F7921E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="stat-label">₹1,25,000</div>
                <div className="stat-sub">EMI from ₹11,500/mo</div>
              </div>
            </div>
          </div>

          {/* Company logos */}
          <div className="learners-label">Learners working across 1700+ companies</div>
          <div className="learners-logos">
            <div className="logo-track">
              <div className="logo-track-inner">
                {[0, 1].map(k => (
                  <div key={k} className="logo-set">
                    <img src="Microsoft.png" alt="Microsoft" style={{ height: 28 }} />
                    <span style={{ fontWeight: 700, fontSize: 15, color: '#00467F' }}>BAJAJ <span style={{ color: '#FFA000' }}>FINSERV</span></span>
                    <span style={{ fontWeight: 700, fontSize: 18, color: '#000' }}>Deloitte<span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#86BC25', marginLeft: 2, verticalAlign: 'baseline' }}></span></span>
                    <div className="gov-item"><span style={{ fontSize: 16 }}>🇮🇳</span> Indian Government</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#" className="cta-primary">
              <span className="cta-pill">Apply for Tech Track →</span>
              <span className="cta-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
                </svg>
              </span>
            </a>
            <a href="#" className="cta-link">
              See the curriculum{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="social-proof">
        <div className="section-header">
          <span className="grad-label">Social Proof</span>
          <h2 className="section-heading">Our Alumni Are Working Across 1700+ Top MNCs</h2>
          <p className="section-sub">Our learners are building AI-powered workflows, automation systems, and real-world applications across top companies.</p>
        </div>
        <div className="sp-logos">
          <div className="sp-logos-track">
            {[0, 1].map(k => (
              <div key={k} className="sp-logos-set">
                <img src="Microsoft.png" alt="Microsoft" style={{ height: 32 }} />
                <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>Deloitte<span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#86BC25', marginLeft: 3, verticalAlign: 'baseline' }}></span></span>
                <span style={{ fontWeight: 700, fontSize: 18, color: '#1A1A1A' }}><em style={{ color: '#2BB3F0', fontStyle: 'normal' }}>paisa</em>bazaar<span style={{ background: '#2BB3F0', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 999, marginLeft: 4 }}>.com</span></span>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#00467F' }}>BAJAJ <span style={{ color: '#FFA000' }}>FINSERV</span></span>
                <span style={{ fontSize: 16 }}>🇮🇳</span><span style={{ fontWeight: 600, fontSize: 15, color: '#444' }}>Indian Government</span>
                <span style={{ fontWeight: 800, fontSize: 20, fontStyle: 'italic', color: '#0E2C50' }}>Razorpay</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
