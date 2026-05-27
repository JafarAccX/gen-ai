export const BuildNinja = ({ ninjaCards }) => {
  return (
    <section className="section-fluid ninja-fluid">
      <div className="section-inner">
        <div className="section-header-fluid">
          <span className="grad-label">AI Build Ninja</span>
          <h2 className="section-heading">16 Saturdays. 16 industries. 16 public ships.</h2>
          <p className="section-sub">Every Saturday for 16 weeks, a 30-min domain primer from an industry expert (BFSI head, healthcare CIO, retail CTO) then 2 hours of building, 1 hour of demo and voting. By 10:30 PM IST every learner posts a public Loom + GitHub link to cohort Slack.</p>
        </div>
        <div className="ninja-grid-fluid">
          {[0, 1, 2, 3].map(r => (
            <div key={r} className="ninja-row-fluid">
              {[0, 1, 2, 3].map(c => {
                const card = ninjaCards[r * 4 + c];
                return (
                  <div key={c} className={`ninja-card${card.f ? " featured" : ""}`}>
                    <div className="ninja-top">
                      <span className="ninja-industry">{card.i}</span>
                      <span className="ninja-sat">{card.s}</span>
                      {!card.f && (
                        <svg className="ninja-lock" viewBox="0 0 14 18" fill="none">
                          <path d="M1.67 17.5a1.17 1.17 0 01-1.17-1.17V7.5c0-.46.16-.85.49-1.18.32-.33.72-.49 1.18-.49h.83V4.17a3.33 3.33 0 016.67 0v1.66h.83c.46 0 .85.16 1.18.49.33.32.49.72.49 1.18v8.83c0 .46-.16.85-.49 1.18-.33.33-.72.49-1.18.49H1.67zM6.67 13.33a1.67 1.67 0 100-3.33 1.67 1.67 0 000 3.33zM4.17 5.83h5V4.17a2.5 2.5 0 00-5 0v1.66z" fill="#C2AFA3" />
                        </svg>
                      )}
                    </div>
                    <div className="ninja-title">
                      {card.t[0]}<br />{card.t[1]}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Capstone = ({ capstones }) => {
  return (
    <section className="section-fluid capstone-fluid">
      <div className="section-inner">
        <div className="section-header-fluid">
          <span className="grad-label">Capstone Menu</span>
          <h2 className="section-heading">Pick one of 8 Tech Track capstones each portfolio-grade.</h2>
          <p className="section-sub">Five session sprint with mentor sign-off. Each capstone has explicit acceptance criteria passing eval suite, deployment URL, public demo.</p>
        </div>
        <div className="cap-grid-fluid">
          {capstones.map((cap, i) => (
            <div key={i} className="cap-card">
              <div className="cap-tag">{cap.tag}</div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-desc">{cap.desc}</p>
              <div className="cap-stack">
                {cap.chips.map((c, j) => (
                  <span key={j} className="cap-chip">{c}</span>
                ))}
              </div>
              <p className="cap-accept"><b>ACCEPT:</b> {cap.accept}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
