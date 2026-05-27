import { CheckSvg, CheckSvg16 } from "./GenAIv2Constants";

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
      <div className="mentors-scroll">
        {[...mentors, ...mentors, ...mentors, ...mentors].map((m, i) => (
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
      </div>
    </div>
  </SectionWrap>
);

/* ─── Tool Stack ─── */
const toolCategories = [
  { l: "Foundation Models", t: ["GPT-5.5", "Claude Opus 4.7", "Gemini 2.5 Pro", "DeepSeek V3", "Llama 3.2", "Mistral Large"] },
  { l: "Agent Frameworks", t: ["LangGraph", "CrewAI", "OpenAI Agents SDK", "AutoGen", "DSPy", "LlamaIndex"] },
  { l: "Voice AI", t: ["Vapi", "ElevenLabs", "Retell AI", "Whisper v3", "Deepgram", "PlayHT"] },
  { l: "Vibe Coding", t: ["Cursor", "Claude Code", "v0", "Bolt", "Lovable", "Replit Agent"] },
  { l: "Eval & Observability", t: ["RAGAS", "DeepEval", "LangSmith", "LangFuse", "Phoenix", "W&B"] },
  { l: "Automation & No-Code", t: ["N8N", "Make", "Zapier AI", "Flowise", "Voiceflow", "Bubble"] },
];

export const ToolStack = () => (
  <SectionWrap id="tools" className="tools-fluid">
    <SectionHead
      label="2026 Tool Stack"
      heading="Six categories. Updated quarterly. Frontier models within 30 days of release."
      sub="Every tool appears in at least one session activity. The full list is reviewed every quarter — your cohort never trains on yesterday's stack."
    />
    <div className="tools-rows-v2">
      {toolCategories.map((row, i) => (
        <div key={i} className="tool-row-v2">
          <div className="tool-cat-label-v2">{row.l}</div>
          <div className="tool-marquee-wrap-v2">
            <div
              className="tool-marquee-track-v2"
              style={{ animationDuration: i % 2 === 0 ? '38s' : '44s' }}
            >
              {[...row.t, ...row.t, ...row.t].map((t, j) => (
                <span key={j} className="tool-marquee-pill-v2">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
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
