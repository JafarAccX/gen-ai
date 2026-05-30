import { FaWhatsapp } from "react-icons/fa";
import { ASSETS, ALUMNI_LOGOS } from "../constants/GenAIv2Constants";

export default function Hero({ onDownloadBrochure }: { onDownloadBrochure?: () => void }) {
    const mobileSocialProofLogos = [
        {
            name: "Microsoft",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px', color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 9px)', gridTemplateRows: 'repeat(2, 9px)', gap: '2px', flexShrink: 0 }}>
                        <span style={{ background: '#F25022' }} />
                        <span style={{ background: '#7FBA00' }} />
                        <span style={{ background: '#00A4EF' }} />
                        <span style={{ background: '#FFB900' }} />
                    </span>
                    Microsoft
                </span>
            ),
        },
        {
            name: "Deloitte",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '22px', color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    Deloitte
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#86BC25', marginLeft: 3, alignSelf: 'flex-end', marginBottom: 4 }} />
                </span>
            ),
        },
        {
            name: "Paisabazaar",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Georgia', serif", fontWeight: 500, fontSize: '20px', color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    <em style={{ color: '#0B78FF', fontStyle: 'normal' }}>paisa</em>bazaar
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', background: '#0B78FF', color: '#FFFFFF', fontFamily: "'Inter', sans-serif", fontSize: 8, fontWeight: 700, marginLeft: 4, transform: 'rotate(-20deg)' }}>com</span>
                </span>
            ),
        },
        {
            name: "Bajaj Finserv",
            content: (
                <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", color: '#EAEAEA', lineHeight: 1, flexShrink: 0 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 22, borderRadius: 6, border: '4px solid #DFDFDF', fontSize: 16, fontWeight: 800, marginBottom: 1 }}>B</span>
                    <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 0.5 }}>BAJAJ</span>
                    <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.2, color: '#FFA000' }}>FINSERV</span>
                </span>
            ),
        },
        {
            name: "Indian Government",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '15px', color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    <span style={{ fontSize: 16 }}>🇮🇳</span>
                    Indian Government
                </span>
            ),
        },
        {
            name: "Razorpay",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, fontStyle: 'italic', color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    Razorpay
                </span>
            ),
        },
        {
            name: "Mastercard",
            content: (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#EAEAEA', whiteSpace: 'nowrap' }}>
                    <span style={{ position: 'relative', width: 32, height: 20, display: 'inline-block' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, width: 20, height: 20, borderRadius: '50%', background: '#EB001B' }} />
                        <span style={{ position: 'absolute', right: 0, top: 0, width: 20, height: 20, borderRadius: '50%', background: '#F79E1B', opacity: 0.92 }} />
                    </span>
                    mastercard
                </span>
            ),
        },
    ];

    return (
        <section className="business-hero-section w-full relative min-h-[600px] xl:h-[1250px] bg-[#000000] overflow-hidden flex flex-col items-center justify-start xl:justify-center pt-[120px] xl:pt-0 pb-[-10] xl:pb-0">
            {/* Background dots - restricted to hero top part using image */}
            <img
                src="/assets/dot-vector.png"
                alt=""
                className="absolute select-none pointer-events-none z-0 object-contain hidden xl:block"
                style={{
                    width: '1295px',
                    height: '672px',
                    left: 'calc(50% - 1295px/2 + 0.5px)',
                    top: '207px',
                    opacity: 0.4,
                    zIndex: 1
                }}
            />

            <div className="w-full max-w-[1440px] mx-auto relative flex flex-col xl:block px-4 sm:px-6 xl:px-[0px] z-10 xl:h-full">

                {/* 
                 =========================================
                 DESKTOP ABSOLUTE LAYOUT (xl:block)
                 =========================================
                */}
                <div className="hidden xl:block w-full h-full relative hero-section-desktop-container">

                    {/* Title */}
                    <h1 className="hero-title-desktop" style={{
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
                    <p className="hero-subtitle-desktop" style={{
                        position: 'absolute', width: '569px', height: '68px', left: '70px', top: '386px',
                        fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 400, fontSize: '16px', lineHeight: '34px',
                        display: 'flex', alignItems: 'center', color: '#C2C2C2', zIndex: 20, margin: 0, padding: 0
                    }}>
                        Build automations, voice bots, and multi-agent systems for your domain and graduate with a 90-day AI adoption roadmap your CFO will sign off on.
                    </p>

                    {/* Metrics Card */}
                    <div className="hero-metrics-desktop" style={{
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
                    <div className="hero-learners-title-desktop" style={{
                        position: 'absolute', left: '70px', top: '640px',
                        width: '414px', height: '34px', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 700, fontSize: '14px', lineHeight: '34px',
                        display: 'flex', alignItems: 'center', letterSpacing: '0.02em', textTransform: 'uppercase', color: '#9C9C9C'
                    }}>
                        Learners working across 1700+ companies
                    </div>

                    {/* Vacancies Logos */}
                    <div className="hero-logos-desktop" style={{
                        position: 'absolute', width: '679px', height: '72px', left: '70px', top: '675px', zIndex: 20
                    }}>
                        <div style={{ position: 'absolute', width: '679px', height: '48px', left: '0px', top: '24px', overflow: 'hidden' }}>
                            {/* Inner Marquee Track (Animating) */}
                            <div className="absolute flex h-full min-w-max animate-scroll-left">
                                {/* First Set */}
                                <div className="relative w-[630px] h-full flex-shrink-0" style={{ filter: 'grayscale(100%) opacity(60%)' }}>
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
                                    <div style={{ position: 'absolute', width: '135px', height: '37px', left: '478px', top: '6px' }}>
                                        <img src="/assets/indiangovernment.png" style={{ position: 'absolute', width: '28px', height: '41px', left: '10px', top: 'calc(50% - 41px/2 + 1px)', objectFit: 'contain' }} alt="Indian Gov" />
                                        <div style={{ position: 'absolute', width: '91px', height: '12px', left: '43px', top: 'calc(50% - 12px/2 + 0.5px)', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '10px', lineHeight: '12px', display: 'flex', alignItems: 'center', color: '#FFFFFF' }}>Indian Government</div>
                                    </div>
                                </div>
                                {/* Second Set for infinite loop */}
                                <div className="relative w-[630px] h-full flex-shrink-0" style={{ filter: 'grayscale(100%) opacity(60%)' }}>
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
                                    <div style={{ position: 'absolute', width: '135px', height: '37px', left: '478px', top: '6px' }}>
                                        <img src="/assets/indiangovernment.png" style={{ position: 'absolute', width: '28px', height: '41px', left: '10px', top: 'calc(50% - 41px/2 + 1px)', objectFit: 'contain' }} alt="Indian Gov" />
                                        <div style={{ position: 'absolute', width: '91px', height: '12px', left: '43px', top: 'calc(50% - 12px/2 + 0.5px)', fontFamily: "'Inter', sans-serif", fontStyle: 'normal', fontWeight: 500, fontSize: '10px', lineHeight: '12px', display: 'flex', alignItems: 'center', color: '#FFFFFF' }}>Indian Government</div>
                                    </div>
                                </div>
                            </div>

                            {/* Fade Overlays (placed inside the hidden overflow container) */}
                            <div style={{ position: 'absolute', width: '31px', height: '48px', left: '-1px', top: '0px', background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 77.42%)', zIndex: 10 }}></div>
                            <div style={{ position: 'absolute', width: '31px', height: '41px', right: '0px', top: '4px', background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 77.42%)', transform: 'matrix(-1, 0, 0, 1, 0, 0)', zIndex: 10 }}></div>
                        </div>
                    </div>

                    {/* Actions Panel - Frame 51544 */}
                    <div className="hero-actions-desktop" style={{
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
                    <div className="hero-image-frame-desktop" style={{
                        position: 'absolute',
                        width: '609px',
                        height: '683px',
                        right: '66px',
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
                            className="hero-image-pm1"
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
                            className="hero-image-collab"
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
                    <div className="badge-happy-students-desktop" style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '196px',
                        height: '109px',
                        right: '447px',
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
                    <div className="badge-live-classes-desktop" style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '163px',
                        height: '58px',
                        right: '431px',
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
                    <div className="badge-mentor-connect-desktop" style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '187px',
                        height: '58px',
                        right: '93px',
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
                    <div className="badge-career-support-desktop" style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '12px 24px',
                        gap: '8px',
                        position: 'absolute',
                        width: '187px',
                        height: '58px',
                        right: '443px',
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
                        width: 'calc(100% - 140px)',
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
                            width: '100%',
                            height: '96px',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0,
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {/* Frame 51405 - Logo layout (Animated Track) */}
                            <div style={{
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <div className="animate-scroll-left" style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    minWidth: 'max-content',
                                    alignItems: 'center',
                                    gap: '48px',
                                }}>
                                    {[1, 2].map((key) => (
                                        <div key={key} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '48px', paddingRight: '48px', flexShrink: 0 }}>
                                            {/* Microsoft */}
                                            <img src="/assets/microsoft.png" alt="Microsoft" style={{ height: '32px', objectFit: 'contain' }} />
                                            {/* Deloitte */}
                                            <img src="/assets/deloitte.png" alt="Deloitte" style={{ height: '32px', objectFit: 'contain' }} />
                                            {/* Paisabazaar */}
                                            <img src="/assets/paisabazaar.png" alt="Paisabazaar" style={{ height: '32px', objectFit: 'contain' }} />
                                            {/* Bajaj Finserv */}
                                            <img src="/assets/bajajfinserv.png" alt="Bajaj Finserv" style={{ height: '48px', objectFit: 'contain' }} />
                                            {/* Indian Government */}
                                            <img src="/assets/indiangovernment.png" alt="Indian Government" style={{ height: '36px', objectFit: 'contain' }} />
                                            {/* Razorpay */}
                                            <img src="/assets/Razorpay.png" alt="Razorpay" style={{ height: '48px', objectFit: 'contain' }} />
                                            {/* Mastercard */}
                                            <img src="/assets/companyLogos/new/mastercard.svg" alt="Mastercard" style={{ height: '36px', objectFit: 'contain' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rectangle 10033 - Left Fade Gradient Overlay */}
                            <div style={{
                                position: 'absolute',
                                width: '107px',
                                height: '96px',
                                left: '0px',
                                top: '0px',
                                background: 'linear-gradient(90deg, #000000 0%, #000000 41.6%, rgba(0, 0, 0, 0) 100%)',
                                pointerEvents: 'none',
                                zIndex: 2,
                            }} />

                            {/* Rectangle 10046 - Right Fade Gradient Overlay */}
                            <div style={{
                                position: 'absolute',
                                width: '175px',
                                height: '96px',
                                right: '0px',
                                top: '0px',
                                background: 'linear-gradient(90deg, #000000 0%, #000000 41.6%, rgba(0, 0, 0, 0) 100%)',
                                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                                pointerEvents: 'none',
                                zIndex: 2,
                            }} />
                        </div>
                    </div>
                </div>

                {/* 
                 =========================================
                 MOBILE RESPONSIVE LAYOUT (xl:hidden)
                 =========================================
                */}
                <div className="xl:hidden w-full flex flex-col gap-5 sm:gap-7 items-center text-center mt-6 px-4 sm:px-6 md:px-8" style={{ paddingTop: '20px' }}>
                    {/* ① Title & Subtitle */}
                    <div className="flex flex-col gap-3 sm:gap-5">
                        <h1 className="text-[22px] xs:text-[25px] sm:text-[30px] md:text-[34px] font-medium leading-[1.25] tracking-tight max-w-[580px] text-white mx-auto font-['Inter']">
                            Lead AI inside your company.{" "}
                            <span className="bg-gradient-to-r from-[#F4A460] via-[#E97451] to-[#FC6401] bg-clip-text text-transparent">
                                Without writing code.
                            </span>
                        </h1>
                        <p className="text-[13px] xs:text-[13.5px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[24px] text-[#A3A3A3] font-normal max-w-[540px] mx-auto font-['Inter']">
                            Build automations, voice bots, and multi-agent systems for your domain and graduate with a 90-day AI adoption roadmap your CFO will sign off on.
                        </p>
                    </div>

                    {/* ② Girl Image Mobile - Shifted here to sit between Title and Content */}
                    <div className="w-full h-auto relative flex justify-center mt-4">
                        <div className="business-hero-card">
                            <img className="hero-photo" src="/pm1.png" alt="Lead AI" />
                            <img className="ibm-badge" src="/Logo Prototype 1.png" alt="In collaboration with IBM" />
                            <img className="students-group-badge" src="/assets/happystudents.png" alt="Happy Students" />
                            <div className="float-badge live">
                                <img className="badge-icon" src="/assets/liveclasses.png" alt="" />
                                <span className="text">Live Classes</span>
                            </div>
                            <div className="float-badge mentor">
                                <img className="badge-icon" src="/assets/mentorconnect.png" alt="" />
                                <span className="text">Mentor Connect</span>
                            </div>
                            <div className="float-badge career">
                                <img className="badge-icon" src="/assets/careersupport.png" alt="" />
                                <span className="text">Career Support</span>
                            </div>
                        </div>
                    </div>

                    {/* ③ Metrics Card Mobile - Staged exactly like the Tech Track */}
                    <div className="stats-bar">
                        <div className="stat">
                            <div className="stat-icon">
                                <svg viewBox="0 0 18 20" fill="none">
                                    <path d="M0 3a1 1 0 011-1h16a1 1 0 011 1v1H0V3zm0 15h18v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1zm0-12h18v12H0V6zm12-5a1 1 0 112 0 1 1 0 01-2 0zM4 1a1 1 0 112 0 1 1 0 01-2 0z" fill="url(#bg1)" />
                                    <defs>
                                        <linearGradient id="bg1" x1="9" y1="0" x2="9" y2="20" gradientUnits="userSpaceOnUse">
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
                                    <rect x="1" y="4" width="18" height="12" rx="2" stroke="url(#bg2)" strokeWidth="1.5" />
                                    <path d="M6 4V2.5A1.5 1.5 0 017.5 1h5A1.5 1.5 0 0114 2.5V4" stroke="url(#bg2)" strokeWidth="1.5" />
                                    <path d="M1 9h18" stroke="url(#bg2)" strokeWidth="1.5" />
                                    <defs>
                                        <linearGradient id="bg2" x1="10" y1="0" x2="10" y2="18" gradientUnits="userSpaceOnUse">
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
                                    <path d="M10 1l2.5 5.5L18 7l-4.5 4 1.5 6-5-3-5 3 1.5-6L2 7l5.5-.5L10 1z" stroke="url(#bg3)" strokeWidth="1.5" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="bg3" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
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

                    {/* ④ Company Logos Section Mobile — Staged exactly like the Tech Track */}
                    <div className="learners-label">Learners working across 1700+ companies</div>
                    <div className="learners-logos">
                        <div className="logo-track">
                            <div className="logo-track-inner">
                                {[0, 1].map(k => (
                                    <div key={k} className="logo-set">
                                        <img src="/assets/microsoft.png" alt="Microsoft" style={{ height: 28 }} />
                                        <span style={{ fontWeight: 700, fontSize: 15, color: '#DFDFDF' }}>BAJAJ <span style={{ color: '#FFA000' }}>FINSERV</span></span>
                                        <span style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF' }}>Deloitte<span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#86BC25', marginLeft: 2, verticalAlign: 'baseline' }}></span></span>
                                        <div className="gov-item"><span style={{ fontSize: 16 }}>🇮🇳</span> Indian Government</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ⑤ Actions Mobile */}
                    {/* ⑤ Actions Mobile */}
                    <div className="hero-ctas">
                        <a href="#apply" className="cta-primary">
                            <span className="cta-pill">Apply for Business Track</span>
                            <span className="cta-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
                                </svg>
                            </span>
                        </a>
                        <a href="#curriculum" className="cta-link">
                            See the curriculum{" "}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* ⑥ Social Proof Mobile Section */}
                    <div className="social-proof border-t border-white/5 w-full overflow-hidden" style={{ marginTop: '48px', paddingTop: '0px', paddingBottom: '30px' }}>
                        <div className="flex justify-center mb-4">
                            <div
                                className="font-['Open_Sans',sans-serif] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase bg-clip-text text-transparent flex gap-0"
                                style={{ backgroundImage: "linear-gradient(90deg, #6366F1 0%, #A855F7 35%, #FC6401 70%, #F59E0B 100%)", WebkitBackgroundClip: "text" }}
                            >
                                SOCIAL PROOF
                            </div>
                        </div>
                        <p className="text-center text-[#F5F7FF] text-xl sm:text-2xl font-medium mb-3 px-4 leading-tight font-['Inter']">Our Alumni Are Working Across 1700+ Top MNCs</p>
                        <p className="text-center text-[#94A3B8] text-sm sm:text-base font-medium max-w-[500px] mx-auto px-4 font-['Inter']" style={{ marginBottom: '16px' }}>
                            Our learners are building AI-powered workflows, automation systems, and real-world applications across top companies.
                        </p>
                        <div className="hero-social-proof-mobile-marquee" style={{ marginTop: '12px' }}>
                            <div className="hero-social-proof-mobile-track" style={{ gap: '56px' }}>
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
