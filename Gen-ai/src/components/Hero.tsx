export default function Hero() {
    const mobileSocialProofLogos = [
        {
            name: "Cognizant",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-cognizant">
                    <span className="hero-mobile-brand-cognizant-mark" aria-hidden="true" />
                    <span>cognizant</span>
                </span>
            ),
        },
        {
            name: "EY",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-ey">
                    <span>EY</span>
                    <span className="hero-mobile-brand-ey-slash" aria-hidden="true" />
                </span>
            ),
        },
        {
            name: "PwC",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-pwc">
                    <span className="hero-mobile-brand-pwc-mark" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>
                    <span>pwc</span>
                </span>
            ),
        },
        {
            name: "Deutsche Bank",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-db">
                    <span className="hero-mobile-brand-db-mark" aria-hidden="true" />
                    <span>Deutsche Bank</span>
                </span>
            ),
        },
        {
            name: "Microsoft",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-microsoft">
                    <span className="hero-mobile-brand-microsoft-mark" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                    </span>
                    <span>Microsoft</span>
                </span>
            ),
        },
        {
            name: "Deloitte",
            content: (
                <span className="hero-mobile-brand hero-mobile-brand-deloitte">
                    <span>Deloitte</span>
                    <span className="hero-mobile-brand-deloitte-dot" aria-hidden="true" />
                </span>
            ),
        },
    ];

    return (
        <section className="hero-section relative min-h-[600px] lg:h-[1110px] bg-[#000000] overflow-hidden flex items-start lg:items-center justify-center pt-[88px] sm:pt-[96px] lg:pt-0 pb-12 lg:pb-0 lg:-mt-[170px]">
            {/* Background dots - restricted to hero top part using image */}
            <img
                src="/assets/dot-vector.png"
                alt=""
                className="absolute select-none pointer-events-none z-0 object-contain hidden lg:block"
                style={{
                    width: '1295px',
                    height: '672px',
                    left: 'calc(50% - 1295px/2 + 0.5px)',
                    top: '70px',
                    opacity: 0.4,
                    zIndex: 1
                }}
            />

            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:block px-4 sm:px-6 lg:px-[0px] z-10 lg:h-full">

                {/* 
                 =========================================
                 DESKTOP ABSOLUTE LAYOUT (lg:block)
                 =========================================
                */}
                <div className="hidden lg:block w-full h-full relative lg:-translate-y-[140px]">

                    {/* Title */}
                    <h1 style={{
                        position: 'absolute', width: '612px', height: '174px', left: '70px', top: '200px',
                        fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '48px', lineHeight: '58px',
                        display: 'flex', alignItems: 'center', color: '#FFFFFF', border: '1px solid #000000', zIndex: 20, margin: 0, padding: 0
                    }}>
                        <span>
                            Lead AI inside your<br />
                            company.{" "}
                            <span style={{
                                background: 'linear-gradient(270deg, #FFB889 35.58%, #FC6401 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Without writing<br />code.
                            </span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        position: 'absolute', width: '569px', height: '68px', left: '70px', top: '386px',
                        fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '34px',
                        display: 'flex', alignItems: 'center', color: '#C2C2C2', zIndex: 20, margin: 0, padding: 0
                    }}>
                        Build automations, voice bots, and multi-agent systems for your domain and graduate with a 90-day AI adoption roadmap your CFO will sign off on.
                    </p>

                    {/* Metrics Card */}
                    <div style={{
                        boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '20px', gap: '12px',
                        position: 'absolute', width: '663px', height: '92px', left: '70px', top: '516px',
                        background: 'linear-gradient(0deg, #000000, #000000)', border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(1.5px)', borderRadius: '14px', zIndex: 20
                    }}>
                        {/* 16 weeks */}
                        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px 12px 0px 0px', gap: '4px', width: '220px', height: '50px', borderRight: '1px solid #222222', flex: 'none', order: 0, flexGrow: 0 }}>
                            <div style={{ position: 'relative', width: '24px', height: '24px', flex: 'none', order: 0, flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3C0 2.44772 0.447715 2 1 2H17C17.5523 2 18 2.44772 18 3V4H0V3ZM0 18H18V19C18 19.5523 17.5523 20 17 20H1C0.447716 20 0 19.5523 0 19V18ZM0 8H1C1.55228 8 2 8.44771 2 9V17C2 17.5523 1.55228 18 1 18H0V8ZM0 4H1C1.55228 4 2 4.44772 2 5C2 5.55228 1.55228 6 1 6H0V4ZM16 5C16 4.44772 16.4477 4 17 4H18V6H17C16.4477 6 16 5.55228 16 5ZM16 9C16 8.44772 16.4477 8 17 8H18V18H17C16.4477 18 16 17.5523 16 17V9ZM0 6H18V8H0V6ZM12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2C12.4477 2 12 1.55228 12 1ZM4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1ZM4 11C4 10.4477 4.44772 10 5 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H5C4.44772 16 4 15.5523 4 15Z" fill="black" />
                                    <path d="M0 3C0 2.44772 0.447715 2 1 2H17C17.5523 2 18 2.44772 18 3V4H0V3ZM0 18H18V19C18 19.5523 17.5523 20 17 20H1C0.447716 20 0 19.5523 0 19V18ZM0 8H1C1.55228 8 2 8.44771 2 9V17C2 17.5523 1.55228 18 1 18H0V8ZM0 4H1C1.55228 4 2 4.44772 2 5C2 5.55228 1.55228 6 1 6H0V4ZM16 5C16 4.44772 16.4477 4 17 4H18V6H17C16.4477 6 16 5.55228 16 5ZM16 9C16 8.44772 16.4477 8 17 8H18V18H17C16.4477 18 16 17.5523 16 17V9ZM0 6H18V8H0V6ZM12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2C12.4477 2 12 1.55228 12 1ZM4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1ZM4 11C4 10.4477 4.44772 10 5 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H5C4.44772 16 4 15.5523 4 15Z" fill="url(#paint0_linear_2722_4533)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2722_4533" x1="9" y1="0" x2="9" y2="20" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#3E38E0" />
                                            <stop offset="1" stopColor="#F7921E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '2px', width: '180px', height: '50px', flex: 'none', order: 1, flexGrow: 0 }}>
                                <div style={{ width: '73px', height: '28px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '16px', lineHeight: '28px', display: 'flex', alignItems: 'center', background: 'linear-gradient(0deg, #F6F6F6, #F6F6F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    16 weeks
                                </div>
                                <div style={{ width: '180px', height: '20px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '20px', display: 'flex', alignItems: 'center', color: '#A0A8B8', whiteSpace: 'nowrap' }}>
                                    3 tracks · 48+ live sessions
                                </div>
                            </div>
                        </div>

                        {/* 16 ships */}
                        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px 12px 0px 0px', gap: '4px', width: '210px', height: '50px', borderRight: '1px solid #222222', flex: 'none', order: 1, flexGrow: 0 }}>
                            <div style={{ position: 'relative', width: '24px', height: '24px', flex: 'none', order: 0, flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.65629 3.23462V2.06462C4.65643 1.64564 4.80688 1.24062 5.0803 0.923155C5.35372 0.605694 5.73196 0.396863 6.14629 0.334615L7.36629 0.151615C8.71878 -0.0505385 10.0938 -0.0505385 11.4463 0.151615L12.6663 0.334615C13.0806 0.396863 13.4589 0.605694 13.7323 0.923155C14.0057 1.24062 14.1562 1.64564 14.1563 2.06462V3.23462L15.8703 3.37262C16.508 3.42413 17.11 3.68798 17.5801 4.12198C18.0501 4.55597 18.3611 5.13505 18.4633 5.76662C18.929 8.63919 18.929 11.568 18.4633 14.4406C18.3611 15.0722 18.0501 15.6513 17.5801 16.0853C17.11 16.5192 16.508 16.7831 15.8703 16.8346L13.9983 16.9846C10.9419 17.2316 7.87064 17.2316 4.81429 16.9846L2.94229 16.8346C2.30459 16.7831 1.70258 16.5192 1.23251 16.0853C0.762436 15.6513 0.451457 15.0722 0.349291 14.4406C-0.11643 11.568 -0.11643 8.63919 0.349291 5.76662C0.45166 5.13523 0.762728 4.55638 1.23278 4.12259C1.70283 3.68879 2.30473 3.42508 2.94229 3.37362L4.65629 3.23462ZM7.58929 1.63462C8.79394 1.45469 10.0186 1.45469 11.2233 1.63462L12.4433 1.81762C12.5025 1.82647 12.5565 1.85627 12.5956 1.9016C12.6347 1.94692 12.6562 2.00477 12.6563 2.06462V3.12962C10.4914 3.00598 8.32119 3.00598 6.15629 3.12962V2.06362C6.15635 2.00377 6.17788 1.94592 6.21696 1.9006C6.25605 1.85527 6.3101 1.82547 6.36929 1.81662L7.58929 1.63462ZM4.93529 4.71662C7.91129 4.47662 10.9013 4.47662 13.8773 4.71662L15.7493 4.86862C16.0526 4.89289 16.3391 5.0182 16.5628 5.22452C16.7865 5.43083 16.9346 5.70621 16.9833 6.00662C17.0453 6.39128 17.0986 6.77728 17.1433 7.16462C14.7362 8.3494 12.0892 8.96554 9.40629 8.96554C6.72342 8.96554 4.07638 8.3494 1.66929 7.16462C1.71329 6.77795 1.76662 6.39195 1.82929 6.00662C1.878 5.70621 2.02605 5.43083 2.24977 5.22452C2.47349 5.0182 2.75994 4.89289 3.06329 4.86862L4.93529 4.71662ZM1.53529 8.76062C4.00717 9.88428 6.691 10.4657 9.40629 10.4657C12.1216 10.4657 14.8054 9.88428 17.2773 8.76062C17.3731 10.5792 17.2745 12.4029 16.9833 14.2006C16.9348 14.5012 16.7868 14.7768 16.5631 14.9833C16.3394 15.1898 16.0528 15.3153 15.7493 15.3396L13.8773 15.4896C10.9013 15.7296 7.91129 15.7296 4.93529 15.4896L3.06329 15.3396C2.75979 15.3153 2.47323 15.1898 2.2495 14.9833C2.02576 14.7768 1.87779 14.5012 1.82929 14.2006C1.53829 12.4006 1.43929 10.5766 1.53529 8.76062Z" fill="url(#paint0_ships)" /><defs><linearGradient id="paint0_ships" x1="9.40629" y1="0" x2="9.40629" y2="17.1699" gradientUnits="userSpaceOnUse"><stop stopColor="#3E38E0" /><stop offset="1" stopColor="#F7921E" /></linearGradient></defs></svg>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '2px', width: '170px', height: '50px', flex: 'none', order: 1, flexGrow: 0 }}>
                                <div style={{ width: '65px', height: '28px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '16px', lineHeight: '28px', display: 'flex', alignItems: 'center', background: 'linear-gradient(0deg, #F6F6F6, #F6F6F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    16 ships
                                </div>
                                <div style={{ width: '170px', height: '20px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '20px', display: 'flex', alignItems: 'center', color: '#A0A8B8' }}>
                                    Saturday domain projects
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '4px', width: '167px', height: '50px', flex: 'none', order: 2, flexGrow: 0 }}>
                            <div style={{ position: 'relative', width: '24px', height: '24px', flex: 'none', order: 0, flexGrow: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.65629 3.23462V2.06462C4.65643 1.64564 4.80688 1.24062 5.0803 0.923155C5.35372 0.605694 5.73196 0.396863 6.14629 0.334615L7.36629 0.151615C8.71878 -0.0505385 10.0938 -0.0505385 11.4463 0.151615L12.6663 0.334615C13.0806 0.396863 13.4589 0.605694 13.7323 0.923155C14.0057 1.24062 14.1562 1.64564 14.1563 2.06462V3.23462L15.8703 3.37262C16.508 3.42413 17.11 3.68798 17.5801 4.12198C18.0501 4.55597 18.3611 5.13505 18.4633 5.76662C18.929 8.63919 18.929 11.568 18.4633 14.4406C18.3611 15.0722 18.0501 15.6513 17.5801 16.0853C17.11 16.5192 16.508 16.7831 15.8703 16.8346L13.9983 16.9846C10.9419 17.2316 7.87064 17.2316 4.81429 16.9846L2.94229 16.8346C2.30459 16.7831 1.70258 16.5192 1.23251 16.0853C0.762436 15.6513 0.451457 15.0722 0.349291 14.4406C-0.11643 11.568 -0.11643 8.63919 0.349291 5.76662C0.45166 5.13523 0.762728 4.55638 1.23278 4.12259C1.70283 3.68879 2.30473 3.42508 2.94229 3.37362L4.65629 3.23462ZM7.58929 1.63462C8.79394 1.45469 10.0186 1.45469 11.2233 1.63462L12.4433 1.81762C12.5025 1.82647 12.5565 1.85627 12.5956 1.9016C12.6347 1.94692 12.6562 2.00477 12.6563 2.06462V3.12962C10.4914 3.00598 8.32119 3.00598 6.15629 3.12962V2.06362C6.15635 2.00377 6.17788 1.94592 6.21696 1.9006C6.25605 1.85527 6.3101 1.82547 6.36929 1.81662L7.58929 1.63462ZM4.93529 4.71662C7.91129 4.47662 10.9013 4.47662 13.8773 4.71662L15.7493 4.86862C16.0526 4.89289 16.3391 5.0182 16.5628 5.22452C16.7865 5.43083 16.9346 5.70621 16.9833 6.00662C17.0453 6.39128 17.0986 6.77728 17.1433 7.16462C14.7362 8.3494 12.0892 8.96554 9.40629 8.96554C6.72342 8.96554 4.07638 8.3494 1.66929 7.16462C1.71329 6.77795 1.76662 6.39195 1.82929 6.00662C1.878 5.70621 2.02605 5.43083 2.24977 5.22452C2.47349 5.0182 2.75994 4.89289 3.06329 4.86862L4.93529 4.71662ZM1.53529 8.76062C4.00717 9.88428 6.691 10.4657 9.40629 10.4657C12.1216 10.4657 14.8054 9.88428 17.2773 8.76062C17.3731 10.5792 17.2745 12.4029 16.9833 14.2006C16.9348 14.5012 16.7868 14.7768 16.5631 14.9833C16.3394 15.1898 16.0528 15.3153 15.7493 15.3396L13.8773 15.4896C10.9013 15.7296 7.91129 15.7296 4.93529 15.4896L3.06329 15.3396C2.75979 15.3153 2.47323 15.1898 2.2495 14.9833C2.02576 14.7768 1.87779 14.5012 1.82929 14.2006C1.53829 12.4006 1.43929 10.5766 1.53529 8.76062Z" fill="url(#paint0_price)" /><defs><linearGradient id="paint0_price" x1="9.40629" y1="0" x2="9.40629" y2="17.1699" gradientUnits="userSpaceOnUse"><stop stopColor="#3E38E0" /><stop offset="1" stopColor="#F7921E" /></linearGradient></defs></svg>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '2px', width: '139px', height: '50px', flex: 'none', order: 1, flexGrow: 0 }}>
                                <div style={{ width: '79px', height: '28px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '16px', lineHeight: '28px', display: 'flex', alignItems: 'center', background: 'linear-gradient(0deg, #F6F6F6, #F6F6F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    ₹1,25,000
                                </div>
                                <div style={{ width: '139px', height: '20px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '14px', lineHeight: '20px', display: 'flex', alignItems: 'center', color: '#A0A8B8' }}>
                                    EMI from ₹11,500/mo
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learners Title */}
                    <div style={{
                        position: 'absolute', left: '70px', top: '640px',
                        width: '414px', height: '34px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '34px',
                        display: 'flex', alignItems: 'center', letterSpacing: '0.02em', textTransform: 'uppercase', color: '#9C9C9C'
                    }}>
                        Learners working across 1700+ companies
                    </div>

                    {/* Vacancies Logos */}
                    <div style={{
                        position: 'absolute', width: '679px', height: '72px', left: '70px', top: '675px', zIndex: 20
                    }}>
                        <div style={{ position: 'absolute', width: '679px', height: '48px', left: '0px', top: '24px', overflow: 'hidden' }}>
                            {/* Inner Marquee Track (Animating) */}
                            <div className="absolute flex h-full min-w-max animate-scroll-left">
                                {/* First Set */}
                                <div className="relative w-[630px] h-full flex-shrink-0" style={{ filter: 'brightness(0) opacity(0.75)' }}>
                                    {/* Microsoft */}
                                    <div style={{ position: 'absolute', width: '135px', height: '37px', left: '2px', top: '6px' }}>
                                        <img src="/assets/microsoft.png" style={{ position: 'absolute', width: '144px', height: '41px', left: 'calc(50% - 144px/2 + 0.5px)', top: 'calc(50% - 41px/2 + 1px)', objectFit: 'contain' }} alt="Microsoft" />
                                    </div>
                                    {/* Bajaj */}
                                    <div style={{ position: 'absolute', width: '134px', height: '37px', left: '175px', top: '6px' }}>
                                        <img src="/assets/bajajfinserv.png" style={{ position: 'absolute', width: '119px', height: '31px', left: 'calc(50% - 119px/2 + 0.5px)', top: 'calc(50% - 31px/2 + 1px)', objectFit: 'contain' }} alt="Bajaj" />
                                    </div>
                                    {/* Deloitte */}
                                    <div style={{ position: 'absolute', width: '134px', height: '37px', left: '332px', top: '6px' }}>
                                        <img src="/assets/deloitte.png" style={{ position: 'absolute', width: '135.65px', height: '26px', left: 'calc(50% - 135.65px/2 - 0px)', top: 'calc(50% - 26px/2 + 0.5px)', objectFit: 'contain' }} alt="Deloitte" />
                                    </div>
                                    {/* Indian Gov */}
                                    <div style={{ position: 'absolute', width: '154px', height: '37px', left: '468px', top: '6px' }}>
                                        <img src="/assets/indiangovernment.png" style={{ position: 'absolute', width: '154px', height: '37px', left: 0, top: 0, objectFit: 'contain' }} alt="Indian Government" />
                                    </div>
                                </div>
                                {/* Second Set for infinite loop */}
                                <div className="relative w-[630px] h-full flex-shrink-0" style={{ filter: 'brightness(0) opacity(0.75)' }}>
                                    {/* Microsoft */}
                                    <div style={{ position: 'absolute', width: '135px', height: '37px', left: '2px', top: '6px' }}>
                                        <img src="/assets/microsoft.png" style={{ position: 'absolute', width: '144px', height: '41px', left: 'calc(50% - 144px/2 + 0.5px)', top: 'calc(50% - 41px/2 + 1px)', objectFit: 'contain' }} alt="Microsoft" />
                                    </div>
                                    {/* Bajaj */}
                                    <div style={{ position: 'absolute', width: '134px', height: '37px', left: '175px', top: '6px' }}>
                                        <img src="/assets/bajajfinserv.png" style={{ position: 'absolute', width: '119px', height: '31px', left: 'calc(50% - 119px/2 + 0.5px)', top: 'calc(50% - 31px/2 + 1px)', objectFit: 'contain' }} alt="Bajaj" />
                                    </div>
                                    {/* Deloitte */}
                                    <div style={{ position: 'absolute', width: '134px', height: '37px', left: '332px', top: '6px' }}>
                                        <img src="/assets/deloitte.png" style={{ position: 'absolute', width: '135.65px', height: '26px', left: 'calc(50% - 135.65px/2 - 0px)', top: 'calc(50% - 26px/2 + 0.5px)', objectFit: 'contain' }} alt="Deloitte" />
                                    </div>
                                    {/* Indian Gov */}
                                    <div style={{ position: 'absolute', width: '154px', height: '37px', left: '468px', top: '6px' }}>
                                        <img src="/assets/indiangovernment.png" style={{ position: 'absolute', width: '154px', height: '37px', left: 0, top: 0, objectFit: 'contain' }} alt="Indian Government" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions Panel - Frame 51544 */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '17px',
                        position: 'absolute',
                        width: '497.99px',
                        height: '61.99px',
                        left: '70px',
                        top: '789px',
                        zIndex: 20
                    }}>
                        {/* Frame 51401 - Left button group */}
                        <a href="#apply" className="group" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px',
                            width: '281.99px',
                            height: '61.99px',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0
                        }}>
                            {/* Frame 51219 - Pill Background */}
                            <div className="transition-all duration-300 group-hover:brightness-110" style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 20px',
                                gap: '10px',
                                width: '233px',
                                height: '44px',
                                background: '#FC6401',
                                borderRadius: '40px',
                                flex: 'none',
                                order: 0,
                                flexGrow: 0,
                                margin: '0px -13px',
                                boxSizing: 'border-box'
                            }}>
                                {/* Apply for Business Track */}
                                <div style={{
                                    width: '193px',
                                    height: '34px',
                                    fontFamily: "'Inter', sans-serif",
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    lineHeight: '34px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#DFDFDF',
                                    flex: 'none',
                                    order: 0,
                                    flexGrow: 0
                                }}>
                                    Apply for Business Track
                                </div>
                            </div>

                            {/* Frame 51220 - Arrow Circle */}
                            <div className="transition-all duration-300 group-hover:brightness-110" style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10px',
                                padding: '15px',
                                gap: 'px',
                                width: '44px',
                                height: '44px',
                                background: '#FC6401',
                                borderRadius: '40px',
                                transform: 'rotate(-10.98deg)',
                                flex: 'none',
                                order: 1,
                                flexGrow: 0,
                                boxSizing: 'border-box'
                            }}>
                                {/* Diagonal Arrow - matches visual reference */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DFDFDF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{
                                    width: '24px',
                                    height: '24px',
                                    transform: 'rotate(50.02deg)',
                                    flex: 'none',
                                    order: 0,
                                    flexGrow: 0
                                }}>
                                    <path d="M12 19V5" />
                                    <path d="M5 12l7-7 7 7" />
                                </svg>
                            </div>
                        </a>

                        {/* Frame 51299 - Right Curriculum Link */}
                        <a href="#curriculum" className="group" style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 2px',
                            gap: '6px',
                            width: '199px',
                            height: '54px',
                            borderBottom: '1px solid #FC6401',
                            textDecoration: 'none',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0,
                            cursor: 'pointer'
                        }}>
                            {/* See the curriculum */}
                            <div className="transition-colors duration-200 group-hover:text-white" style={{
                                width: '165px',
                                height: '34px',
                                fontFamily: "'Inter', sans-serif",
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '34px',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#DFDFDF',
                                flex: 'none',
                                order: 0,
                                flexGrow: 0
                            }}>
                                See the curriculum
                            </div>

                            {/* Rightward arrow */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DFDFDF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" style={{
                                width: '24px',
                                height: '24px',
                                transform: 'rotate(90deg)',
                                flex: 'none',
                                order: 1,
                                flexGrow: 0
                            }}>
                                <path d="M12 19V5" />
                                <path d="M5 12l7-7 7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Frame 51432 */}
                    <div style={{
                        position: 'absolute',
                        width: '609px',
                        height: '683px',
                        left: '765px',
                        top: '200px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: 'inset 0px -50px 50px #000000',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        zIndex: 10
                    }}>
                        {/* Rectangle 10216 */}
                        <div style={{
                            boxSizing: 'border-box',
                            position: 'absolute',
                            width: '618px',
                            height: '683px',
                            left: '-1px',
                            top: '0px',
                            background: 'linear-gradient(180deg, #000000 0%, #FC6401 100%)',
                            border: '1px solid #202020',
                            borderRadius: '21px',
                        }} />

                        {/* pm 1 */}
                        <img
                            src="/pm1.png"
                            alt="Product Manager"
                            style={{
                                position: 'absolute',
                                width: '643px',
                                height: '636px',
                                left: '9px',
                                top: '47px',
                                objectFit: 'contain',
                                pointerEvents: 'none',
                                zIndex: 2
                            }}
                        />

                        {/* Logo Prototype 1 */}
                        <img
                            src="/Logo Prototype 1.png"
                            alt="Collaboration Badge"
                            style={{
                                position: 'absolute',
                                width: '156px',
                                height: '84px',
                                left: '438px',
                                top: '38px',
                                objectFit: 'contain',
                                pointerEvents: 'none',
                                zIndex: 3
                            }}
                        />
                    </div>

                    {/* Happy Students Badge - Frame 51221 */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '196px',
                        height: '109px',
                        left: '797px',
                        top: '226px',
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        zIndex: 20,
                        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)'
                    }}>
                        {/* Group 198 Container */}
                        <div style={{
                            position: 'relative',
                            width: '160px',
                            height: '43px',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0,
                        }}>
                            {/* Ellipses overlapping with their calculated offsets from Figma padding */}
                            <img src="/Ellipse 71.png" alt="Student" style={{ position: 'absolute', width: '43px', height: '43px', left: '0px', top: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                            <img src="/Ellipse 70.png" alt="Student" style={{ position: 'absolute', width: '43px', height: '43px', left: '22px', top: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                            <img src="/Ellipse 69.png" alt="Student" style={{ position: 'absolute', width: '43px', height: '43px', left: '44px', top: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                            <img src="/Ellipse 68.png" alt="Student" style={{ position: 'absolute', width: '43px', height: '43px', left: '66px', top: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                            <img src="/Ellipse 67.png" alt="Student" style={{ position: 'absolute', width: '43px', height: '43px', left: '88px', top: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />

                            {/* Ellipse 72 (Counter background) */}
                            <div style={{ position: 'absolute', width: '43px', height: '43px', left: '117px', top: '0px', background: '#1A1A1A', borderRadius: '50%', border: '2px solid #FFFFFF', boxSizing: 'border-box' }} />

                            {/* 1998+ Text */}
                            <div style={{
                                position: 'absolute', width: '37px', height: '34px', left: '121px', top: '5px',
                                fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '12px', lineHeight: '34px',
                                display: 'flex', alignItems: 'center', color: '#EAEAEA', justifyContent: 'center'
                            }}>
                                1998+
                            </div>
                        </div>

                        {/* Happy Students Text */}
                        <div style={{
                            width: '148px', height: '34px',
                            fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '14px', lineHeight: '34px',
                            display: 'flex', alignItems: 'center', color: '#161616',
                            flex: 'none', order: 1, alignSelf: 'stretch', flexGrow: 0
                        }}>
                            Happy Students
                        </div>
                    </div>

                    {/* Live Classes Badge - Frame 51223 */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '163px',
                        height: '58px',
                        left: '846px',
                        top: '454px',
                        background: '#FFFFFF',
                        borderRadius: '46px',
                        zIndex: 20,
                        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)'
                    }}>
                        <img
                            src="/hugeicons_marketing.png"
                            alt="Live Classes"
                            style={{ width: '32px', height: '32px', flex: 'none', order: 0, flexGrow: 0, objectFit: 'contain' }}
                        />
                        <div style={{
                            width: '85px', height: '34px',
                            fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '14px', lineHeight: '34px',
                            display: 'flex', alignItems: 'center', color: '#166E13',
                            flex: 'none', order: 1, flexGrow: 0
                        }}>
                            Live Classes
                        </div>
                    </div>

                    {/* Mentor Connect Badge - Frame 51224 */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '187px',
                        height: '58px',
                        left: '1160px',
                        top: '539px',
                        background: '#FFFFFF',
                        borderRadius: '46px',
                        zIndex: 20,
                        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)'
                    }}>
                        <img
                            src="/ri_code-ai-fill.png"
                            alt="Mentor Connect"
                            style={{ width: '32px', height: '32px', flex: 'none', order: 0, flexGrow: 0, objectFit: 'contain' }}
                        />
                        <div style={{
                            width: '110px', height: '34px',
                            fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '14px', lineHeight: '34px',
                            display: 'flex', alignItems: 'center', color: '#F96736',
                            flex: 'none', order: 1, flexGrow: 0
                        }}>
                            Mentor Connect
                        </div>
                    </div>

                    {/* Career Support Badge */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '187px',
                        height: '58px',
                        left: '810px',
                        top: '775px',
                        background: '#FFFFFF',
                        borderRadius: '46px',
                        zIndex: 20,
                        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)'
                    }}>
                        <img
                            src="/mynaui_briefcase-business-solid.png"
                            alt="Career Support"
                            style={{ width: '32px', height: '32px', flex: 'none', order: 0, flexGrow: 0, objectFit: 'contain' }}
                        />
                        <div style={{
                            width: '110px', height: '34px',
                            fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 600, fontSize: '14px', lineHeight: '34px',
                            display: 'flex', alignItems: 'center', color: '#4C5BFA',
                            flex: 'none', order: 1, flexGrow: 0
                        }}>
                            Career Support
                        </div>
                    </div>

                    {/* Social Proof - Frame 51315 */}
                    <div style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '0px 6px 30px',
                        gap: '16px',
                        position: 'absolute',
                        width: '1300px',
                        height: '263px',
                        left: '70px',
                        top: '927px',
                        borderBottom: '1px solid #1F1F1F',
                        zIndex: 20
                    }}>
                        {/* Heading Container */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0px',
                            gap: '6px',
                            width: '1047px',
                            height: '121px',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0
                        }}>
                            {/* Social Proof Gradient Label */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '0px',
                                width: 'auto',
                                height: 'auto',
                                flex: 'none',
                                order: 0,
                                flexGrow: 0
                            }}>
                                <div style={{
                                    width: 'auto',
                                    height: 'auto',
                                    fontFamily: "'Open Sans', sans-serif",
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '12px',
                                    lineHeight: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    letterSpacing: '1.2px',
                                    textTransform: 'uppercase',
                                    background: 'linear-gradient(90deg, #3E38E0 0%, #5B46C1 38.46%, #BF7759 72.12%, #F7921E 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    flex: 'none',
                                    order: 0,
                                    flexGrow: 0
                                }}>
                                    SOCIAL PROOF
                                </div>
                            </div>

                            {/* Headline */}
                            <h2 style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '0px',
                                width: '1047px',
                                height: '60px',
                                flex: 'none',
                                order: 1,
                                alignSelf: 'stretch',
                                flexGrow: 0,
                                margin: 0
                            }}>
                                <div style={{
                                    width: 'auto',
                                    height: 'auto',
                                    minHeight: '60px',
                                    whiteSpace: 'nowrap',
                                    fontFamily: "'Inter', sans-serif",
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '32px',
                                    lineHeight: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#F5F7FF',
                                    flex: 'none',
                                    order: 0,
                                    flexGrow: 0
                                }}>
                                    Our Alumni Are Working Across 1700+ Top MNCs
                                </div>
                            </h2>

                            {/* Subheadline */}
                            <p style={{
                                width: '1047px',
                                height: '19px',
                                fontFamily: "'Inter', sans-serif",
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '19px',
                                textAlign: 'center',
                                color: '#C2C2C2',
                                flex: 'none',
                                order: 2,
                                alignSelf: 'stretch',
                                flexGrow: 0,
                                margin: 0
                            }}>
                                Our learners are building AI-powered workflows, automation systems, and real-world applications across top companies.
                            </p>
                        </div>

                        {/* Company Logos Container */}
                        <div style={{
                            width: '1160px',
                            height: '96px',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0,
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Frame 51405 - Logo layout (Animated Track) */}
                            <div style={{
                                position: 'absolute',
                                height: '69px',
                                left: '49px',
                                top: '13px',
                                width: 'calc(100% - 49px)', // take up remaining width for scroll
                            }}>
                                <div className="absolute flex h-full min-w-max animate-scroll-left items-center">
                                    {[1, 2].map((key) => (
                                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '56px', height: '69px', flexShrink: 0, paddingRight: '56px' }}>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', height: '36px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '24px', color: '#3A3A3A', whiteSpace: 'nowrap' }}>
                                                <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 13px)', gridTemplateRows: 'repeat(2, 13px)', gap: '3px', flexShrink: 0 }}>
                                                    <span style={{ background: '#F25022' }} />
                                                    <span style={{ background: '#7FBA00' }} />
                                                    <span style={{ background: '#00A4EF' }} />
                                                    <span style={{ background: '#FFB900' }} />
                                                </span>
                                                Microsoft
                                            </span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', height: '38px', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '30px', color: '#222222', whiteSpace: 'nowrap' }}>
                                                Deloitte
                                                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#86BC25', marginLeft: 4, alignSelf: 'flex-end', marginBottom: 6 }} />
                                            </span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', height: '38px', fontFamily: "'Georgia', serif", fontWeight: 500, fontSize: '33px', color: '#4B4B4B', whiteSpace: 'nowrap' }}>
                                                <em style={{ color: '#0B78FF', fontStyle: 'normal' }}>paisa</em>bazaar
                                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%', background: '#0B78FF', color: '#FFFFFF', fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, marginLeft: 5, transform: 'rotate(-20deg)' }}>com</span>
                                            </span>
                                            <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '92px', height: '58px', fontFamily: "'Inter', sans-serif", color: '#263238', lineHeight: 1, flexShrink: 0 }}>
                                                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 30, borderRadius: 8, border: '5px solid #29333B', fontSize: 23, fontWeight: 800, marginBottom: 2 }}>B</span>
                                                <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>BAJAJ</span>
                                                <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.5 }}>FINSERV</span>
                                            </span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', height: '42px', width: '218px', flexShrink: 0 }}>
                                                <img src="/assets/indiangovernment.png" alt="Indian Government" style={{ width: '218px', height: '42px', objectFit: 'contain', filter: 'brightness(0) opacity(0.75)' }} />
                                            </span>
                                            <span style={{ height: '38px', display: 'inline-flex', alignItems: 'center', fontFamily: "'Inter', sans-serif", fontSize: '30px', fontWeight: 800, fontStyle: 'italic', color: '#666666', whiteSpace: 'nowrap' }}>Razorpay</span>
                                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', height: '30px', fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#6A6A6A', whiteSpace: 'nowrap' }}>
                                                <span style={{ position: 'relative', width: 46, height: 30, display: 'inline-block' }}>
                                                    <span style={{ position: 'absolute', left: 0, top: 0, width: 30, height: 30, borderRadius: '50%', background: '#EB001B' }} />
                                                    <span style={{ position: 'absolute', right: 0, top: 0, width: 30, height: 30, borderRadius: '50%', background: '#F79E1B', opacity: 0.92 }} />
                                                </span>
                                                mastercard
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* No fade overlays — logos always fully visible */}
                        </div>
                    </div>
                </div>

                {/* 
                 =========================================
                 MOBILE RESPONSIVE LAYOUT (lg:hidden)
                 =========================================
                */}
                    <div className="mobile-hero-layout lg:hidden w-full flex flex-col gap-6 sm:gap-8 text-center mt-[20px]">
                    <div className="order-1 flex flex-col gap-4 sm:gap-6">
                        <h1 className="mobile-hero-title text-[32px] sm:text-[42px] md:text-[48px] font-medium leading-[1.15] tracking-tight max-w-[580px] text-white mx-auto font-['Inter']">
                            Lead AI inside your company.{" "}
                            <span className="bg-gradient-to-r from-[#F4A460] via-[#E97451] to-[#FC6401] bg-clip-text text-transparent">
                                Without writing code.
                            </span>
                        </h1>
                    </div>

                    <p className="order-3 text-[14px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] text-[#A3A3A3] font-normal max-w-[540px] mx-auto font-['Inter']">
                        Build automations, voice bots, and multi-agent systems for your domain and graduate with a 90-day AI adoption roadmap your CFO will sign off on.
                    </p>

                    {/* Metrics Card Mobile */}
                    <div className="order-4 hero-mobile-metrics w-full rounded-[16px] flex flex-row items-center justify-center p-5 gap-4 relative overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-md select-none mt-2">
                        {/* 16 weeks */}
                        <div className="flex-1 flex flex-row items-center gap-3">
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-[16px] font-bold text-white font-['Inter'] leading-tight">16 weeks</span>
                                <span className="text-[11px] text-[#7C7C7C] font-['Inter'] mt-1">3 tracks · 48+ live sessions</span>
                            </div>
                        </div>
                        {/* 16 ships */}
                        <div className="flex-1 flex flex-row items-center gap-3">
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-[16px] font-bold text-white font-['Inter'] leading-tight">16 ships</span>
                                <span className="text-[11px] text-[#7C7C7C] font-['Inter'] mt-1">Saturday domain projects</span>
                            </div>
                        </div>
                        {/* Price */}
                        <div className="flex-1 flex flex-row items-center gap-3">
                            <div className="flex flex-col text-center sm:text-left">
                                <span className="text-[16px] font-bold text-white font-['Inter'] leading-tight">₹1,25,000</span>
                                <span className="text-[11px] text-[#7C7C7C] font-['Inter'] mt-1">EMI from ₹11,500/mo</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Logos Section Mobile */}
                    <div className="order-5 hero-company-section-mobile w-full flex flex-col gap-4 items-center mt-2">
                        <div className="text-[10px] sm:text-[11px] font-bold text-[#6B6B6B] tracking-[0.1em] uppercase">
                            LEARNERS WORKING ACROSS 1700+ COMPANIES
                        </div>
                        <div className="hero-company-marquee mt-1">
                            <div className="hero-company-track">
                                {[1, 2].map((set) => (
                                    <div key={set} className="hero-company-set">
                                        <img src="/assets/microsoft.png" alt="Microsoft" className="hero-company-logo h-[20px] sm:h-[24px] object-contain" />
                                        <img src="/assets/bajajfinserv.png" alt="Bajaj Finserv" className="hero-company-logo h-[20px] sm:h-[24px] object-contain" />
                                        <img src="/assets/deloitte.png" alt="Deloitte" className="hero-company-logo h-[20px] sm:h-[24px] object-contain" />
                                        <img src="/assets/indiangovernment.png" alt="Indian Government" className="hero-company-logo hero-company-logo-wide h-[30px] sm:h-[36px] object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions Mobile */}
                    <div className="order-6 hero-mobile-actions flex flex-row items-center justify-center gap-3 sm:gap-6 pt-4">
                        <a href="#apply" className="group flex items-center cursor-pointer select-none">
                            <button className="hero-mobile-apply h-[48px] sm:h-[52px] px-6 sm:px-8 bg-[#FC6401] border-none rounded-full font-bold text-white text-[14px] sm:text-[15px] tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(252,100,1,0.2)]">
                                Apply for Business Track
                            </button>
                        </a>
                        <a href="#curriculum" className="hero-mobile-curriculum group flex items-center gap-2 text-white/90 font-semibold text-[14px] sm:text-[15px] border-b border-white/20 pb-1">
                            <span>See the curriculum</span>
                        </a>
                    </div>

                    {/* Girl Image Mobile */}
                    <div className="order-2 w-full h-auto relative flex justify-center mt-2">
                        <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-[620/650] bg-gradient-to-b from-[#000000] to-[#FC6401] rounded-[21px] border border-[#202020] overflow-hidden shadow-2xl shadow-orange-950/20">
                            <img src="/pm1.png" alt="Lead AI" className="absolute bottom-[-10px] left-[50%] -translate-x-1/2 h-[92%] w-auto object-contain z-10 pointer-events-none" />

                            {/* Happy Students Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                left: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '8px 12px',
                                gap: '4px',
                                background: '#FFFFFF',
                                borderRadius: '12px',
                                zIndex: 20,
                                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)'
                            }}>
                                <div style={{ position: 'relative', width: '100px', height: '28px' }}>
                                    <img src="/Ellipse 71.png" alt="" style={{ position: 'absolute', width: '28px', height: '28px', left: '0px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                                    <img src="/Ellipse 70.png" alt="" style={{ position: 'absolute', width: '28px', height: '28px', left: '14px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                                    <img src="/Ellipse 69.png" alt="" style={{ position: 'absolute', width: '28px', height: '28px', left: '28px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                                    <img src="/Ellipse 68.png" alt="" style={{ position: 'absolute', width: '28px', height: '28px', left: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FFFFFF' }} />
                                    <div style={{ position: 'absolute', width: '28px', height: '28px', left: '56px', background: '#1A1A1A', borderRadius: '50%', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: '8px', color: '#EAEAEA' }}>1998+</span>
                                    </div>
                                </div>
                                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '11px', color: '#161616' }}>Happy Students</span>
                            </div>

                            {/* Live Classes Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '8px',
                                transform: 'translateY(-50%)',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '8px 12px',
                                gap: '6px',
                                background: '#FFFFFF',
                                borderRadius: '30px',
                                zIndex: 20,
                                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)'
                            }}>
                                <img src="/hugeicons_marketing.png" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '11px', color: '#166E13' }}>Live Classes</span>
                            </div>

                            {/* Mentor Connect Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '80px',
                                right: '8px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '8px 12px',
                                gap: '6px',
                                background: '#FFFFFF',
                                borderRadius: '30px',
                                zIndex: 20,
                                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)'
                            }}>
                                <img src="/ri_code-ai-fill.png" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '11px', color: '#F96736' }}>Mentor Connect</span>
                            </div>

                            {/* Career Support Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '8px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '8px 12px',
                                gap: '6px',
                                background: '#FFFFFF',
                                borderRadius: '30px',
                                zIndex: 20,
                                boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)'
                            }}>
                                <img src="/mynaui_briefcase-business-solid.png" alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                                <span style={{ fontFamily: "'Inter'", fontWeight: 600, fontSize: '11px', color: '#4C5BFA' }}>Career Support</span>
                            </div>
                        </div>
                    </div>
                    {/* Social Proof Mobile Section */}
                    <div className="order-7 hero-social-proof-mobile mt-16 border-t border-white/5 pt-12 w-full overflow-hidden">
                        <div className="flex justify-center mb-4">
                            <div
                                className="font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex gap-0"
                                style={{ backgroundImage: "linear-gradient(90deg, #3E38E0 0%, #5B46C1 33%, #BF7759 66%, #F7921E 100%)", WebkitBackgroundClip: "text" }}
                            >
                                SOCIAL PROOF
                            </div>
                        </div>
                        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl font-medium mb-3 px-4 leading-tight font-['Inter']">Our Alumni Are Working Across 1700+ Top MNCs</p>
                        <p className="text-center text-[#94A3B8] text-sm sm:text-base font-medium mb-10 max-w-[500px] mx-auto px-4 font-['Inter']">
                            Our learners are building AI-powered workflows, automation systems, and real-world applications across top companies.
                        </p>
                        <div className="hero-social-proof-mobile-marquee">
                            <div className="hero-social-proof-mobile-track">
                                {[...mobileSocialProofLogos, ...mobileSocialProofLogos].map((brand, idx) => (
                                    <div key={`${brand.name}-${idx}`} className="hero-social-proof-mobile-logo-item">
                                        {brand.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
