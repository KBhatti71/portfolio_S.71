// s71-portfolio.jsx — Portfolio page: Five Doors direction

const _portKey = (fn) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };

function PortfolioPage({ setPage, setProject }) {
  const [openDoor, setOpenDoor] = React.useState(null);

  const projectsByCategory = React.useMemo(() => {
    const map = {};
    CATS.forEach(c => { map[c.slug] = PROJECTS.filter(p => p.cat === c.slug); });
    return map;
  }, []);

  return (
    <div className="s71-page portfolio">
      <section className="s71-wrap portfolio-head">
        <SectionHead
          eyebrow="Portfolio · 2023→"
          title={<>Five doors,<br />one studio.</>}
          sub="Each door opens to that discipline's work. Pick a lane — or scroll the full mosaic below."
        />
        <div className="portfolio-counts">
          <span>{PROJECTS.length} projects</span>
          <span className="dot">·</span>
          <span>5 disciplines</span>
          <span className="dot">·</span>
          <span>Open for hire ↗</span>
        </div>
      </section>

      {/* FIVE DOORS ──────────────────────────────────────────────── */}
      <section className="s71-wrap doors-section">
        <div className="doors-grid">
          {CATS.map((c, i) => {
            const projs = projectsByCategory[c.slug] || [];
            const isOpen = openDoor === c.slug;
            return (
              <div key={c.slug}
                className={`door ${isOpen ? 'open' : ''} ${i === 4 ? 'span-wide' : ''}`}
                style={{ '--door-color': c.color }}>
                <button className="door-face" onClick={() => setOpenDoor(isOpen ? null : c.slug)}>
                  <div className="door-k">{c.k}</div>
                  <div className="door-title">{c.t}</div>
                  <div className="door-sub">{c.s}</div>
                  <div className="door-count">
                    <span>{projs.length} {projs.length === 1 ? 'project' : 'projects'}</span>
                    <span className="door-toggle">{isOpen ? 'close ✕' : 'enter →'}</span>
                  </div>
                </button>
                {isOpen && (
                  <div className="door-drawer">
                    <div className="door-projects">
                      {projs.map(p => (
                        <button key={p.id} className="door-project"
                          onClick={() => { setProject(p.id); setPage('project'); }}>
                          <Thumb project={p} ratio="16/9" />
                          <div className="dp-meta">
                            <div className="dp-title">{p.title}</div>
                            <div className="dp-kind">{p.kind} · {p.year}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* OR — SEE EVERYTHING ────────────────────────────────────── */}
      <section className="s71-wrap mosaic-section">
        <div className="mosaic-divider">
          <span>or — see everything ↓</span>
        </div>
        <div className="mosaic-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`mosaic-item ${i === 0 ? 'big' : ''}`}
              role="button" tabIndex={0}
              aria-label={`View project: ${p.title} — ${p.kind}, ${p.year}`}
              onClick={() => { setProject(p.id); setPage('project'); }}
              onKeyDown={_portKey(() => { setProject(p.id); setPage('project'); })}>
              <Thumb project={p} ratio={i === 0 ? '16/10' : '4/3'} large={i === 0} />
              <div className="mosaic-meta" aria-hidden="true">
                <CatChip cat={p.cat} />
                <span className="mosaic-year">'{String(p.year).slice(-2)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .portfolio-head { padding-top: 64px; }
        .portfolio-counts {
          display: flex; align-items: center; gap: 12px;
          margin-top: 32px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          font-family: var(--body);
        }
        .portfolio-counts .dot { color: rgba(255,255,255,0.25); }

        /* DOORS */
        .doors-section { padding-top: 32px; }
        .doors-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .door {
          border-radius: var(--radius-lg);
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: background .25s, border-color .25s;
        }
        .door.span-wide { grid-column: span 2; }
        .door:hover { background: rgba(255,255,255,0.045); }
        .door.open {
          border-color: var(--door-color);
          background:
            radial-gradient(ellipse at 30% 0%, color-mix(in oklab, var(--door-color) 12%, transparent) 0%, transparent 60%),
            rgba(255,255,255,0.025);
        }
        .door-face {
          width: 100%;
          text-align: left;
          padding: 32px 36px;
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-rows: auto auto auto auto;
          gap: 4px 24px;
          align-items: center;
        }
        .door-k {
          font-family: var(--display);
          font-size: 12px;
          color: var(--door-color);
          letter-spacing: 0.16em;
          grid-column: 1 / -1;
          margin-bottom: 8px;
        }
        .door-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: clamp(28px, 3.2vw, 44px);
          letter-spacing: -0.01em;
          line-height: 1;
          grid-column: 1;
        }
        .door-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          grid-column: 1;
          margin-top: 4px;
        }
        .door-count {
          grid-column: 1 / -1;
          margin-top: 18px;
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .door-toggle {
          color: var(--door-color);
          font-weight: 500;
        }
        .door-drawer {
          padding: 0 36px 32px;
          animation: drawer .35s var(--ease) both;
        }
        @keyframes drawer {
          from { opacity: 0; transform: translateY(-8px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 800px; }
        }
        .door-projects {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .door.span-wide .door-projects {
          grid-template-columns: repeat(4, 1fr);
        }
        .door-project {
          display: flex; flex-direction: column; gap: 8px;
          text-align: left;
        }
        .dp-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: 16px;
          margin-top: 4px;
        }
        .dp-kind {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @media (max-width: 880px) {
          .doors-grid { grid-template-columns: 1fr; }
          .door.span-wide { grid-column: 1; }
          .door-face { padding: 22px 24px; }
          .door-drawer { padding: 0 24px 22px; }
        }

        /* MOSAIC */
        .mosaic-section { padding-top: 96px; }
        .mosaic-divider {
          text-align: center;
          margin-bottom: 36px;
          font-family: var(--display);
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.14em;
        }
        .mosaic-divider span {
          padding: 0 16px;
          background: var(--purple);
          position: relative;
          z-index: 1;
        }
        .mosaic-divider::before {
          content: ''; display: block;
          height: 1px; background: rgba(255,255,255,0.1);
          margin-bottom: -10px;
        }
        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .mosaic-item { cursor: pointer; }
        .mosaic-item.big { grid-column: span 2; grid-row: span 2; }
        .mosaic-meta {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 10px;
        }
        .mosaic-year {
          font-family: var(--display);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 880px) {
          .mosaic-grid { grid-template-columns: 1fr 1fr; }
          .mosaic-item.big { grid-column: span 2; grid-row: auto; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { PortfolioPage });
