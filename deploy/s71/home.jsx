// s71-home.jsx — Home page: Mega Wordmark direction, mid-fi

const _homeKey = (fn) => (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } };

function HomePage({ setPage, setProject }) {
  const featured = PROJECTS.find(p => p.id === 's71');
  return (
    <div className="s71-page home">
      {/* HERO ─────────────────────────────────────────────────────── */}
      <section className="s71-hero s71-wrap">
        <div className="s71-hero-meta">
          <div className="s71-eyebrow">Studio 71 · Est. 2023</div>
          <div className="s71-hero-availability">
            <span className="dot" /> Open for work — Spring 2026
          </div>
          <div className="s71-hero-index" aria-hidden="true">
            <div>VOL. 03</div>
            <div>2026 / WA</div>
          </div>
        </div>

        <h1 className="s71-h1 s71-hero-name">
          Dakotta<br />
          <span className="bhatti">Bhatti<span className="period">.</span></span>
        </h1>

        <div className="s71-hero-tag tag-line">Capture · Design · Deliver</div>

        <p className="s71-hero-blurb">
          A <span className="hl">digital designer</span> at Studio 71 — working in
          video, web, graphic design, UX, and content strategy from Vancouver,
          Washington.
        </p>

        <div className="s71-hero-ctas">
          <Btn primary onClick={() => setPage('portfolio')} icon="→">View portfolio</Btn>
          <Btn onClick={() => setPage('contact')}>Get in touch</Btn>
          <Btn secondary icon="↓">Resume (PDF)</Btn>
        </div>

        {/* featured tile floating bottom-right of hero */}
        <div className="s71-hero-feature"
          role="button" tabIndex={0}
          aria-label="View featured project: Studio 71 brand guidelines"
          onClick={() => { setProject('s71'); setPage('project'); }}
          onKeyDown={_homeKey(() => { setProject('s71'); setPage('project'); })}>
          <Thumb project={featured} ratio="3/2" large />
          <div className="s71-hero-feature-label" aria-hidden="true">
            <span>↳ Featured · Studio 71 brand guidelines</span>
            <span className="arrow">→</span>
          </div>
        </div>

      </section>

      {/* DISCIPLINES STRIP ────────────────────────────────────────── */}
      <section className="s71-wrap s71-strip">
        <div className="s71-strip-head">
          <div className="s71-eyebrow">What I make</div>
          <button className="s71-strip-link" onClick={() => setPage('portfolio')}>
            See the whole portfolio →
          </button>
        </div>
        <div className="s71-strip-grid">
          {CATS.map((c, i) => (
            <div key={c.slug} className="s71-strip-cell"
              style={{ '--cat-color': c.color }}
              role="button" tabIndex={0}
              aria-label={`${c.t} — view in portfolio`}
              onClick={() => setPage('portfolio')}
              onKeyDown={_homeKey(() => setPage('portfolio'))}>
              <div className="cell-k" aria-hidden="true">{c.k}</div>
              <div className="cell-bar" aria-hidden="true" />
              <div className="cell-title">{c.t}</div>
              <div className="cell-sub">{c.s}</div>
              <div className="cell-arrow" aria-hidden="true">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT WORK ─────────────────────────────────────────────── */}
      <section className="s71-wrap s71-recent">
        <SectionHead
          eyebrow="Recently shipped"
          title="A few things from the bench."
          sub="Selected work from 2024 and 2025. The full archive lives in the portfolio."
        />
        <div className="s71-recent-grid">
          {PROJECTS.slice(0, 6).map(p => (
            <div key={p.id} className="s71-recent-item"
              role="button" tabIndex={0}
              aria-label={`View project: ${p.title} — ${p.kind}, ${p.year}`}
              onClick={() => { setProject(p.id); setPage('project'); }}
              onKeyDown={_homeKey(() => { setProject(p.id); setPage('project'); })}>
              <Thumb project={p} ratio="4/3" />
              <div className="recent-meta" aria-hidden="true">
                <CatChip cat={p.cat} />
                <span className="recent-year">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT TEASE ───────────────────────────────────────────── */}
      <section className="s71-wrap s71-teaser">
        <div className="s71-teaser-card">
          <div className="s71-eyebrow">Currently</div>
          <h2 className="s71-h2">Open for freelance,<br />open for full-time.</h2>
          <p className="s71-sub">Reply within a day or two. Coffee in the Portland-Vancouver area welcome.</p>
          <div className="s71-teaser-ctas">
            <Btn primary onClick={() => setPage('contact')} icon="→">Get in touch</Btn>
            <Btn onClick={() => setPage('about')}>About me</Btn>
          </div>
        </div>
      </section>

      <style>{`
        .home .s71-hero {
          position: relative;
          padding: 80px 56px 120px;
          min-height: calc(100vh - 80px);
        }
        .s71-hero-meta {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin-bottom: 56px;
        }
        .s71-hero-meta .s71-eyebrow { margin-bottom: 0; }
        .s71-hero-meta .s71-hero-availability { justify-self: center; }
        .s71-hero-meta .s71-hero-index { justify-self: end; }
        .s71-hero-availability {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
        }
        .s71-hero-availability .dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #6cc26a;
          box-shadow: 0 0 0 0 rgba(108,194,106,0.6);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(108,194,106,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(108,194,106,0); }
          100% { box-shadow: 0 0 0 0 rgba(108,194,106,0); }
        }
        .s71-hero-name {
          font-size: clamp(72px, 13vw, 220px);
        }
        .s71-hero-name .bhatti { display: inline-flex; align-items: baseline; }
        .s71-hero-name .period { color: var(--yellow); }
        .s71-hero-tag {
          color: var(--yellow);
          margin-top: 24px;
          font-size: clamp(13px, 1.1vw, 16px);
        }
        .s71-hero-blurb {
          margin-top: 28px;
          max-width: 540px;
          font-size: clamp(16px, 1.4vw, 20px);
          line-height: 1.55;
          color: rgba(255,255,255,0.78);
        }
        .s71-hero-blurb .hl {
          background: linear-gradient(180deg, transparent 60%, rgba(226,162,40,0.4) 60%);
          padding: 0 2px;
        }
        .s71-hero-ctas {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 38px;
        }
        .s71-hero-feature {
          position: absolute;
          right: 56px;
          bottom: 120px;
          width: clamp(220px, 22vw, 320px);
          cursor: pointer;
        }
        .s71-hero-feature-label {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-top: 12px;
        }
        .s71-hero-feature:hover .arrow { color: var(--yellow); }
        .s71-hero-index {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.16em;
          text-align: right;
          line-height: 1.7;
          margin-left: auto;
        }
        @media (max-width: 880px) {
          .home .s71-hero { padding: 48px 22px 64px; }
          .s71-hero-feature {
            position: static; width: 100%;
            margin-top: 36px;
          }
          .s71-hero-index { display: none; }
        }

        /* DISCIPLINES STRIP */
        .s71-strip {
          padding-top: 64px;
          padding-bottom: 64px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .s71-strip-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 32px;
        }
        .s71-strip-link {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }
        .s71-strip-link:hover { color: var(--yellow); }
        .s71-strip-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        .s71-strip-cell {
          position: relative;
          padding: 24px 22px 28px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius);
          transition: background .2s, border-color .2s, transform .2s;
          cursor: pointer;
          min-height: 200px;
          display: flex; flex-direction: column;
        }
        .s71-strip-cell:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--cat-color);
          transform: translateY(-2px);
        }
        .cell-k {
          font-family: var(--display);
          font-size: 12px;
          color: var(--cat-color);
          letter-spacing: 0.12em;
        }
        .cell-bar {
          height: 1px;
          width: 24px;
          background: var(--cat-color);
          margin: 14px 0 18px;
        }
        .cell-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: 19px;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .cell-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          line-height: 1.45;
          flex: 1;
        }
        .cell-arrow {
          margin-top: 14px;
          font-size: 18px;
          color: rgba(255,255,255,0.35);
        }
        .s71-strip-cell:hover .cell-arrow { color: var(--cat-color); }
        @media (max-width: 880px) {
          .s71-strip-grid { grid-template-columns: 1fr 1fr; }
        }

        /* RECENT WORK */
        .s71-recent { padding-top: 64px; }
        .s71-recent-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .s71-recent-item { cursor: pointer; }
        .recent-meta {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 12px;
        }
        .recent-year {
          font-family: var(--display);
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.06em;
        }
        @media (max-width: 880px) {
          .s71-recent-grid { grid-template-columns: 1fr; }
        }

        /* TEASER */
        .s71-teaser { padding-top: 96px; }
        .s71-teaser-card {
          background: linear-gradient(135deg, var(--purple-light), var(--purple-deep));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          padding: 56px 56px 60px;
          text-align: center;
        }
        .s71-teaser-card .s71-h2 { margin-top: 4px; }
        .s71-teaser-card .s71-sub { margin-left: auto; margin-right: auto; }
        .s71-teaser-ctas {
          display: inline-flex; gap: 12px; margin-top: 28px; flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { HomePage });
