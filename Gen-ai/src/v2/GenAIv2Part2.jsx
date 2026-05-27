export const ProgramArchitecture = () => {
  return (
    <section className="program" id="programs">
      <div className="section-header" style={{ width: "100%", maxWidth: 1041, boxSizing: "border-box" }}>
        <span className="grad-label">Program Architecture</span>
        <h2 className="section-heading">A three-track program built for both engineers and business leaders</h2>
        <p className="section-sub">Everyone starts together in 8 weeks of Common Foundations: models, prompts, RAG, voice, vibe coding, automation. From Week 9 you split into Tech or Business and go deep. AI Build Ninja Saturdays run in parallel: 16 Saturdays, 16 industries, 16 public ships.</p>
      </div>
      <div className="prog-cards">
        {/* Left Card */}
        <div className="prog-card side">
          <svg className="prog-card-shape" viewBox="0 0 435 350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 334C0 342.837 7.163 350 16 350H342.21C349.605 350 356.037 344.932 357.766 337.742L434.252 19.742C436.672 9.678 429.046 0 418.695 0H16C7.163 0 0 7.163 0 16V334Z" fill="url(#pl0)" fillOpacity="0.35" />
            <path d="M0 334C0 342.837 7.163 350 16 350H342.21C349.605 350 356.037 344.932 357.766 337.742L434.252 19.742C436.672 9.678 429.046 0 418.695 0H16C7.163 0 0 7.163 0 16V334Z" fill="url(#pl1)" fillOpacity="0.5" />
            <path d="M16 349.25H342.21C349.259 349.25 355.389 344.419 357.037 337.566L433.522 19.566C435.829 9.975 428.56 0.75 418.695 0.75H16C7.578 0.75 0.75 7.578 0.75 16V334C0.75 342.422 7.578 349.25 16 349.25Z" stroke="rgba(150,67,13,0.3)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="pl0" x1="204" y1="0" x2="204" y2="185" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C5A37B" />
                <stop offset="1" stopColor="#F6F6F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="pl1" x1="204" y1="255" x2="204" y2="366" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#CA5509" />
              </linearGradient>
            </defs>
          </svg>
          <div className="prog-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="prog-card-content">
            <div className="prog-phase">Phase 1 · Weeks 1–8</div>
            <div className="prog-title">Common Foundations</div>
            <div className="prog-desc">All learners. Build the same fluency before specializing so a PM and an SDE end Week 8 having shipped the same artifacts.</div>
          </div>
          <div className="prog-tags">
            <span className="prog-tag">Models 2026</span>
            <span className="prog-tag">RAG</span>
            <span className="prog-tag">Voice Agents</span>
            <span className="prog-tag">Vibe Coding</span>
            <span className="prog-tag">N8N</span>
          </div>
        </div>
        {/* Center Card */}
        <div className="prog-card center">
          <svg className="prog-card-shape" viewBox="0 0 479 350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M404.571 12.393C402.892 5.137 396.43 0 388.983 0H92.493C85.098 0 78.666 5.068 76.937 12.258L0.451 330.258C-1.969 340.322 5.658 350 16.008 350H462.577C472.871 350 480.486 340.421 478.165 330.392L404.571 12.393Z" fill="url(#pc0)" fillOpacity="0.35" />
            <path d="M404.571 12.393C402.892 5.137 396.43 0 388.983 0H92.493C85.098 0 78.666 5.068 76.937 12.258L0.451 330.258C-1.969 340.322 5.658 350 16.008 350H462.577C472.871 350 480.486 340.421 478.165 330.392L404.571 12.393Z" fill="url(#pc1)" fillOpacity="0.5" />
            <path d="M388.983 0.5H92.493C85.329 0.5 79.098 5.41 77.423 12.375L0.938 330.375C-1.407 340.124 5.981 349.5 16.008 349.5H462.577C472.549 349.5 479.927 340.22 477.679 330.505L404.084 12.505C402.457 5.477 396.197 0.5 388.983 0.5Z" stroke="rgba(150,67,13,0.3)" />
            <defs>
              <linearGradient id="pc0" x1="239" y1="185" x2="239" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F6F6F5" stopOpacity="0" />
                <stop offset="1" stopColor="#C5A37B" />
              </linearGradient>
              <linearGradient id="pc1" x1="215" y1="370" x2="215" y2="241" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CA5509" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="prog-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="prog-card-content">
            <div className="prog-phase">Phase 2 · Weeks 9–16</div>
            <div className="prog-title">Tech Track</div>
            <div className="prog-desc">For SDEs, ML engineers, GCC mid-career. Production LLM apps, agent frameworks, LangGraph + MCP, agent engineering, fine-tuning.</div>
          </div>
          <div className="prog-tags">
            <span className="prog-tag">LangGraph</span>
            <span className="prog-tag">MCP</span>
            <span className="prog-tag">RAGAS · DeepEval</span>
            <span className="prog-tag">QLoRA</span>
          </div>
        </div>
        {/* Right Card */}
        <div className="prog-card side">
          <svg className="prog-card-shape" viewBox="0 0 435 350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M434.703 334C434.703 342.837 427.54 350 418.703 350H92.493C85.098 350 78.666 344.932 76.937 337.742L0.451 19.742C-1.969 9.678 5.658 0 16.008 0H418.703C427.54 0 434.703 7.163 434.703 16V334Z" fill="url(#pr0)" fillOpacity="0.35" />
            <path d="M434.703 334C434.703 342.837 427.54 350 418.703 350H92.493C85.098 350 78.666 344.932 76.937 337.742L0.451 19.742C-1.969 9.678 5.658 0 16.008 0H418.703C427.54 0 434.703 7.163 434.703 16V334Z" fill="url(#pr1)" fillOpacity="0.5" />
            <path d="M418.703 349.5H92.493C85.329 349.5 79.098 344.59 77.423 337.625L0.938 19.625C-1.407 9.876 5.981 0.5 16.008 0.5H418.703C427.264 0.5 434.203 7.44 434.203 16V334C434.203 342.56 427.264 349.5 418.703 349.5Z" stroke="rgba(150,67,13,0.3)" />
            <defs>
              <linearGradient id="pr0" x1="200" y1="80" x2="200" y2="265" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C5A37B" />
                <stop offset="1" stopColor="#F6F6F5" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="pr1" x1="230" y1="255" x2="230" y2="366" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="#CA5509" />
              </linearGradient>
            </defs>
          </svg>
          <div className="prog-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 14h18M12 8v12" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="prog-card-content">
            <div className="prog-phase">Phase 2 · Weeks 9–16</div>
            <div className="prog-title">Business Track</div>
            <div className="prog-desc">For PMs, marketers, HR, ops, founders. No-code agents, document intelligence, AI strategy, governance, ROI modeling.</div>
          </div>
          <div className="prog-tags">
            <span className="prog-tag">Flowise</span>
            <span className="prog-tag">Voiceflow</span>
            <span className="prog-tag">ROI Playbook</span>
            <span className="prog-tag">DPDP-Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
