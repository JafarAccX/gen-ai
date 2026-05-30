export const Curriculum = ({ modules, openCurr, setOpenCurr }) => {
  return (
    <section className="section-fluid curriculum-fluid" id="curriculum">
      <div className="section-inner">
        <div className="section-header-fluid">
          <span className="grad-label">16-Week Curriculum</span>
          <h2 className="section-heading">Every week ends with a working artifact, evaluated and version-controlled.</h2>
          <p className="section-sub">Sessions Tue / Thu / Sat live, plus AI Build Ninja Saturday. Total ≈ 110 live hours.</p>
        </div>
        <div className="curr-list-fluid">
          {modules.map((m, i) => {
            const isOpen = openCurr === i;
            return (
              <div
                key={i}
                className={`curr-row${isOpen ? " open" : ""}`}
                onClick={() => setOpenCurr(isOpen ? -1 : i)}
              >
                <div className="curr-top">
                  <div className="curr-left">
                    <span className="curr-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="curr-left-content">
                      <div className="curr-title-row">
                        <span className="curr-title">{m.t}</span>
                        <span className="curr-week-tag">{m.w.replace(/^WEEK 0/, 'WEEK ')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="curr-right">
                    <div className="curr-tags">
                      {m.tags.map((t, j) => (
                        <span key={j} className="curr-tag">{t}</span>
                      ))}
                    </div>
                    <svg className="curr-chev" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {m.goal ? (
                  <div className="curr-body">
                    <h4>Goal</h4>
                    <p>{m.goal}</p>
                    {m.sessions && (
                      <>
                        <h4 style={{ marginTop: 12 }}>Sessions</h4>
                        <ul>{m.sessions.map((s, j) => <li key={j}>{s}</li>)}</ul>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="curr-body" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
