import React, { useRef, useState, useCallback } from "react";
import { Cpu, Bot, Mic, Code2, Activity, Zap } from "lucide-react";
import { CheckSvg, CheckSvg16 } from "./GenAIv2Constants";
import MobileMarquee from "../components/MobileMarquee";

/* ─── shared section wrapper ─── */
const SectionWrap = ({ children, className = "", id = "" }) => (
  <section id={id} className={`section-fluid ${className}`}>
    <div className="section-inner">{children}</div>
  </section>
);

const SectionHead = ({ label, heading, sub }) => (
  <div className="section-header-fluid">
    <span className="grad-label">{label}</span>
    <h2 className="section-heading">{heading}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </div>
);

/* ─── Outcomes ─── */
export const Outcomes = () => (
  <SectionWrap id="outcomes" className="outcomes-fluid">
    <SectionHead
      label="Outcomes & Hiring"
      heading="From engineer → AI engineer → senior AI engineer."
      sub="India salary bands by experience. Path mapped to track + portfolio components."
    />
    <div className="outcomes-grid-fluid">
      <div className="sal-table">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Experience</th>
              <th>India · LPA</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>AI / GenAI Engineer</td><td>0–2 yrs</td><td>₹8–18</td></tr>
            <tr><td>AI / GenAI Engineer</td><td>3–6 yrs</td><td>₹40–80</td></tr>
            <tr><td>Senior / Staff AI Engineer</td><td>7+ yrs</td><td>₹18–40</td></tr>
            <tr><td>AI Solutions Architect (GCC)</td><td>8+ yrs</td><td>₹40–80+</td></tr>
            <tr><td>ML Engineer</td><td>3–6 yrs</td><td>₹20–45</td></tr>
          </tbody>
        </table>
      </div>
      <div className="demo-panel">
        <h3>Demo Day · Industry Panel</h3>
        <ul>
          {[
            "12+ panelists confirmed across 2 days",
            "GCC hiring managers: Walmart Labs, Target, JPMC, Goldman",
            "India's product co's: Razorpay, Swiggy, Flipkart",
            "5-min live demo + 3-min Q&A per learner",
            "Build Ninja Award · ₹25,000 cash prize",
            "Direct referral pathway · alumni hiring channel",
          ].map((p, i) => (
            <li key={i}><CheckSvg16 /> {p}</li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrap>
);

/* ─── Mentors ─── */
export const Mentors = ({ mentors }) => (
  <SectionWrap id="mentors" className="mentors-fluid">
    <SectionHead
      label="Learn From Industry"
      heading="Mentors who've shipped, not just taught."
      sub="Senior AI engineers and product leaders from Apple, Meesho, and India's top startups. Each cohort gets a 1:8 mentor:learner ratio for capstone reviews."
    />
    <div className="mentors-track">
      <MobileMarquee speed={60} gap={28} resumeDelay={500} pauseOnHover={true}>
        {mentors.map((m, i) => (
          <div key={i} className="mentor-card">
            {/* Main Card with Left-Fade */}
            <div className="mentor-card-body">
              <img src={m.img} alt={m.n} loading="lazy" />
            </div>

            {/* Floating Logo Top-Right */}
            {m.logo && (
              <div className="mentor-floating-logo">
                <div className="mentor-logo-inner">
                  <img src={m.logo} alt="" loading="lazy" />
                </div>
              </div>
            )}

            {/* Floating LinkedIn Icon Top-Left */}
            {m.linkedinUrl && (
              <div className="mentor-floating-linkedin">
                <a
                  href={m.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mentor-linkedin-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            )}

            {/* Info Pill — bottom */}
            <div className="mentor-info-pill">
              <div className="name">{m.n}</div>
              <div className="role">{m.r}</div>
              <div className="mentor-info-line" />
            </div>
          </div>
        ))}
      </MobileMarquee>
    </div>
  </SectionWrap>
);

/* ─── Tool Stack ─── */
const toolCategories = [
  { 
    l: "Foundation Models", 
    icon: Cpu,
    t: ["GPT-5.5", "Claude Opus 4.7", "Gemini 2.5 Pro", "DeepSeek V3", "Llama 3.2", "Mistral Large"] 
  },
  { 
    l: "Agent Frameworks", 
    icon: Bot,
    t: ["LangGraph", "CrewAI", "OpenAI Agents SDK", "AutoGen", "DSPy", "LlamaIndex"] 
  },
  { 
    l: "Voice AI", 
    icon: Mic,
    t: ["Vapi", "ElevenLabs", "Retell AI", "Whisper v3", "Deepgram", "PlayHT"] 
  },
  { 
    l: "Vibe Coding", 
    icon: Code2,
    t: ["Cursor", "Claude Code", "v0", "Bolt", "Lovable", "Replit Agent"] 
  },
  { 
    l: "Eval & Observability", 
    icon: Activity,
    t: ["RAGAS", "DeepEval", "LangSmith", "LangFuse", "Phoenix", "W&B"] 
  },
  { 
    l: "Automation & No-Code", 
    icon: Zap,
    t: ["N8N", "Make", "Zapier AI", "Flowise", "Voiceflow", "Bubble"] 
  },
];

function ToolMarqueeTrack({ category, rowIndex }) {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    currentTranslateX: 0,
    lastTranslateX: 0,
  });

  const speed = rowIndex % 2 === 0 ? 40 : 45;

  const getCurrentTranslateX = useCallback(() => {
    if (!trackRef.current) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const matrix = style.transform;
    if (matrix === 'none' || !matrix) return 0;
    const values = matrix.match(/matrix.*\((.+)\)/);
    if (values && values[1]) {
      const parts = values[1].split(', ');
      return parseFloat(parts[4]) || 0;
    }
    return 0;
  }, []);

  const pauseAnimation = useCallback(() => {
    if (!trackRef.current) return;
    const currentX = getCurrentTranslateX();
    dragState.current.currentTranslateX = currentX;
    dragState.current.lastTranslateX = currentX;
    trackRef.current.style.animationPlayState = 'paused';
    trackRef.current.style.transform = `translateX(${currentX}px)`;
    trackRef.current.style.animation = 'none';
  }, [getCurrentTranslateX]);

  const resumeAnimation = useCallback(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const totalWidth = el.scrollWidth / 2;
    const currentX = dragState.current.currentTranslateX;
    let normalizedX = currentX % totalWidth;
    if (normalizedX > 0) normalizedX -= totalWidth;
    const progress = Math.abs(normalizedX) / totalWidth;

    el.style.transform = `translateX(${normalizedX}px)`;
    void el.offsetHeight;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = `scroll-left ${speed}s linear infinite`;
    el.style.animationDelay = `-${progress * speed}s`;
    el.style.animationPlayState = 'running';
    el.style.transform = '';
  }, [speed]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    dragState.current.startX = e.touches[0].clientX;
    pauseAnimation();
  }, [pauseAnimation]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.touches[0].clientX - dragState.current.startX;
    const newX = dragState.current.lastTranslateX + deltaX;
    dragState.current.currentTranslateX = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    resumeAnimation();
  }, [resumeAnimation]);

  const CategoryIcon = category.icon;

  return (
    <div
      className="tools-marquee-track tool-stack-marquee-container"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 0px',
        width: '970px',
        height: '108px',
        background: 'rgba(0, 0, 0, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: 'inset 80px 0px 40px -20px #0A0A0A, inset -80px 0px 40px -20px #0A0A0A',
        borderRadius: '4px',
        flex: 'none',
        order: 1,
        flexGrow: 1,
        overflow: 'hidden',
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="animate-scroll-left"
        style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: 'max-content',
          alignItems: 'center',
          animationDuration: `${speed}s`,
          animationDirection: 'normal',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {[...category.t, ...category.t].map((toolName, index) => (
          <div
            key={`${rowIndex}-${index}`}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 24px',
              width: '194px',
              height: '68px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              flex: 'none',
              marginRight: '20px',
              gap: '12px',
              transition: 'all 0.3s ease',
            }}
          >
            <CategoryIcon size={22} color="rgba(255, 255, 255, 0.8)" />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.7px',
                lineHeight: '28px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.36px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {toolName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const ToolStack = () => (
  <SectionWrap id="tools" className="tools-fluid responsive-section tool-stack-grid-section">
    <SectionHead
      label="2026 Tool Stack"
      heading="Six categories. Updated quarterly. Frontier models within 30 days of release."
      sub="Every tool appears in at least one session activity. The full list is reviewed every quarter — your cohort never trains on yesterday's stack."
    />
    <div
      style={{
        position: 'relative',
        width: '1301px',
        margin: '24px auto 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        zIndex: 10,
      }}
    >
      {toolCategories.map((category, rowIndex) => {
        const CategoryIcon = category.icon;
        return (
          <div
            key={rowIndex}
            className="tool-stack-row"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              width: '1301px',
              height: '111px',
            }}
          >
            {/* Left Side: Category Title */}
            <div
              className="tool-stack-category-left"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '21px',
                width: '331px',
                height: '111px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              <h2
                className="tool-stack-category-title"
                style={{
                  width: '331px',
                  height: 'auto',
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'left',
                  letterSpacing: '-0.96px',
                  color: '#FFFFFF',
                  margin: 0,
                }}
              >
                {category.l}
              </h2>
            </div>

            {/* Desktop static layout: no duplicate items, no scrolling animation */}
            <div
              className="tools-marquee-track tool-stack-marquee-container mobile-marquee-desktop-only"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '20px 16px',
                width: '970px',
                height: '108px',
                background: 'rgba(0, 0, 0, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '4px',
                flex: 'none',
                order: 1,
                flexGrow: 1,
                position: 'relative',
                gap: '12px',
              }}
            >
              {category.t.map((toolName, index) => (
                <div
                  key={index}
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0 8px',
                    height: '68px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    flex: '1 1 0px',
                    minWidth: '0px',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                  }}
                  className="tool-stack-card hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1 cursor-pointer"
                >
                  <CategoryIcon size={22} color="rgba(255, 255, 255, 0.8)" />
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '14.5px',
                      lineHeight: '18px',
                      display: 'block',
                      letterSpacing: '-0.2px',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {toolName}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile marquee layout (Animations for mobiles/tablets only) */}
            <div className="mobile-marquee-mobile-only" style={{ width: '68%', flexGrow: 1 }}>
              <ToolMarqueeTrack category={category} rowIndex={rowIndex} />
            </div>
          </div>
        );
      })}
    </div>
  </SectionWrap>
);

/* ─── Comparison ─── */
export const Comparison = () => (
  <SectionWrap id="comparison" className="comparison-fluid">
    <SectionHead
      label="Vs The Alternatives"
      heading="Why AcceleratorX, in one table."
      sub="We respect the alternatives but here's where we measurably beat them. Source: curriculum doc §2.5."
    />
    <div className="comp-scroll-wrap">
      <div className="comp-table">
        <table>
          <thead>
            <tr>
              <th>Dimension</th><th>AcceleratorX</th><th>Outskill</th><th>100x Engineers</th><th>Scaler GenAI</th><th>Be10x</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Format</td><td>16 weeks</td><td>14 days / 6 mo</td><td>6 months</td><td>11 months</td><td>3 hours</td></tr>
            <tr><td>Tech + Business tracks</td><td className="check">✓</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td></tr>
            <tr><td>LangGraph + MCP depth</td><td className="check">✓</td><td className="dash">—</td><td>Partial</td><td>Partial</td><td className="dash">—</td></tr>
            <tr><td>Live phone agent · Indian number</td><td className="check">✓</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td></tr>
            <tr><td>Eval-driven dev (RAGAS, DeepEval)</td><td className="check">✓</td><td className="dash">—</td><td>Basic</td><td>Basic</td><td className="dash">—</td></tr>
            <tr><td>16-domain Build Ninja</td><td className="check">✓</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td><td className="dash">—</td></tr>
            <tr><td>Demo Day · GCC hiring panel</td><td className="check">✓</td><td className="dash">—</td><td>Virtual</td><td>Academic</td><td className="dash">—</td></tr>
            <tr><td>Capstone briefs available</td><td>16</td><td>~3</td><td>~3</td><td>~2</td><td>0</td></tr>
            <tr><td>Approx. price (₹)</td><td>1.25–1.5L</td><td>1–1.6L</td><td>1.5–2L</td><td>3–3.5L</td><td>9–28k</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </SectionWrap>
);

/* ─── Pricing ─── */
export const Pricing = () => (
  <SectionWrap id="pricing" className="pricing-fluid">
    <SectionHead
      label="Investment"
      heading="One price. Both tracks open. EMI-friendly."
      sub="You don't have to choose at admission — most learners flip between tracks during the first 4 weeks of Common Foundations and lock specialization by Week 8."
    />
    <div className="pricing-grid-fluid">
      <div className="price-card">
        <div className="price-badge">Cohort Fee</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span className="price-amount">₹1,25,000</span>
          <span className="price-meta">onwards all-inclusive</span>
          <span style={{ color: "#31BE2C", fontSize: 20 }}>✓</span>
        </div>
        <p className="price-emi">EMI from <b style={{ color: "var(--ink)" }}>₹11,500/month</b> · 0% interest · partner finance available</p>
        <ul className="price-list">
          {[
            "16-week live program (Tue · Thu · Sat) both tracks accessible",
            "16 AI Build Ninja Saturdays + 16-domain portfolio",
            "1:8 mentor ratio · capstone architecture review",
            "Demo Day with industry panel + alumni hiring channel",
            "Cohort tooling – LangSmith, ElevenLabs, Vapi credits",
            "Lifetime access to recordings + content updates",
            "LangChain Academy free certification",
          ].map((f, i) => (
            <li key={i} className="price-item"><CheckSvg />{f}</li>
          ))}
        </ul>
        <button className="price-cta">Join The Program</button>
        <p className="price-foot">Refund up to Day 14 · Next cohort rolling admissions · 60 seats</p>
      </div>
      <div className="info-cards">
        <div className="info-card">
          <h3>What's not included</h3>
          <p>Compute / API costs after free credits run out — typical learner spends ₹2–4k across 16 weeks. Optional cloud cert exam fees (AWS / Azure / GCP) are separate. We help you get cohort-rate discounts on Vapi, ElevenLabs, LangSmith, Bolt.</p>
        </div>
        <div className="info-card">
          <h3>Who shouldn't enroll</h3>
          <p>If you want a tools-tour or a 3-hour ChatGPT class, this isn't it. If you can't commit to 8–10 hours/week including Saturday Build Ninja, wait for a cohort that fits.</p>
        </div>
      </div>
    </div>
  </SectionWrap>
);
