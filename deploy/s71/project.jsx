// s71-project.jsx — Project Detail: Sticky Meta + Reel direction
// We use the Studio 71 brand guidelines as the showcase project.

function ProjectPage({ setPage, projectId, setProject }) {
  const p = PROJECTS.find(x => x.id === projectId) || PROJECTS[0];
  const cat = CATS.find(c => c.slug === p.cat);

  // sibling navigation
  const idx = PROJECTS.findIndex(x => x.id === p.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div className="s71-page project">
      <section className="s71-wrap project-head">
        <button className="project-back" onClick={() => setPage('portfolio')}>
          ← Portfolio
        </button>
        <div className="project-counter">
          <span>{String(idx + 1).padStart(2, '0')}</span>
          <span className="sep">/</span>
          <span>{String(PROJECTS.length).padStart(2, '0')}</span>
        </div>
      </section>

      <div className="s71-wrap project-grid">
        {/* STICKY META ─────────────────────────────────────────── */}
        <aside className="project-meta">
          <div className="meta-inner">
            <CatChip cat={p.cat} />
            <h1 className="s71-h1 project-title">{p.title}</h1>
            <div className="project-kind">{p.kind} · {p.year}</div>

            <p className="project-blurb">{p.blurb}</p>

            <dl className="project-specs">
              <div>
                <dt>Discipline</dt>
                <dd>{cat?.t}</dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>{p.id === 's71' ? 'Self / Studio 71' : p.id === 'smartcity' ? 'WSUV — Class brief' : 'Self-initiated'}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Adobe CC, Figma, After FX</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{p.year}</dd>
              </div>
              <div>
                <dt>Live link</dt>
                <dd><a href="#">View ↗</a></dd>
              </div>
            </dl>

            <div className="project-cta">
              <Btn primary icon="↗">View live</Btn>
              <Btn secondary icon="↓">Spec sheet</Btn>
            </div>

            <div className="project-share">
              <span className="share-label">Share →</span>
              <button>𝕏</button>
              <button>in</button>
              <button>✉</button>
              <button>⌘C</button>
            </div>
          </div>
        </aside>

        {/* REEL — scrolling image column ────────────────────────── */}
        <main className="project-reel">
          {/* hero plate */}
          <div className="reel-hero">
            <Thumb project={p} ratio="16/9" large />
            <div className="reel-hero-label tag-line">
              01 · The brief
            </div>
          </div>

          {/* paragraph */}
          <div className="reel-prose">
            <h3 className="s71-h3">{p.id === 's71' ? 'A studio of one, with a system that scales.' : 'A short story about the work.'}</h3>
            <p>
              {p.id === 's71'
                ? "Studio 71 began in 2023 as a YouTube channel and a Saturday-morning side project. By 2025 it needed a real brand — one I could use for client work, for the channel, and for the print spreads I keep dreaming about."
                : "The story behind the work — what the brief was, what was hard, and what I learned getting it to the finish line."}
            </p>
            <p>
              The brand had to feel like late nights in a small studio: tight, technical, a little bit playful. Deep purple as the bedrock, gold for emphasis, coral when something needs to stop you.
            </p>
          </div>

          {/* color row */}
          <div className="reel-block">
            <div className="block-label tag-line">02 · Color</div>
            <div className="color-row">
              <div className="color-card" style={{ background: '#211451' }}>
                <div className="cc-meta"><b>Deep Purple</b><span>#211451</span></div>
              </div>
              <div className="color-card" style={{ background: '#E2A228' }}>
                <div className="cc-meta dark"><b>Golden Yellow</b><span>#E2A228</span></div>
              </div>
              <div className="color-card" style={{ background: '#ED3D35' }}>
                <div className="cc-meta"><b>Coral Red</b><span>#ED3D35</span></div>
              </div>
            </div>
          </div>

          {/* type spec */}
          <div className="reel-block">
            <div className="block-label tag-line">03 · Type</div>
            <div className="type-card">
              <div className="type-row">
                <div className="type-spec">
                  <div className="ts-label">Display — Orbitron</div>
                  <div className="ts-sample" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700 }}>
                    Studio <span style={{ color: 'var(--yellow)' }}>71</span>
                  </div>
                </div>
                <div className="type-spec">
                  <div className="ts-label">Body — Inter</div>
                  <div className="ts-sample" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Capture, design, deliver — the working motto.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* two-up image grid */}
          <div className="reel-block">
            <div className="block-label tag-line">04 · System in use</div>
            <div className="reel-twoup">
              <Thumb project={{ ...p, title: 'Cover spread', kind: 'Print' }} ratio="3/4" />
              <Thumb project={{ ...p, title: 'Web header', kind: 'Digital' }} ratio="3/4" />
            </div>
          </div>

          {/* big wide image */}
          <div className="reel-block">
            <Thumb project={{ ...p, title: 'Animated wordmark', kind: 'Motion' }} ratio="21/9" large />
          </div>

          {/* outcomes / numbers */}
          <div className="reel-block">
            <div className="block-label tag-line">05 · Outcomes</div>
            <div className="numbers">
              <div className="num"><div className="n">4</div><div className="l">brand assets shipped</div></div>
              <div className="num"><div className="n">12pp</div><div className="l">guidelines doc</div></div>
              <div className="num"><div className="n">2025</div><div className="l">live · ongoing</div></div>
            </div>
          </div>

          {/* up next */}
          <div className="reel-upnext">
            <button className="upnext-btn" onClick={() => { setProject(prev.id); }}>
              <div className="un-label">← Previous</div>
              <div className="un-title">{prev.title}</div>
            </button>
            <button className="upnext-btn align-right" onClick={() => { setProject(next.id); }}>
              <div className="un-label">Next →</div>
              <div className="un-title">{next.title}</div>
            </button>
          </div>
        </main>
      </div>

      <style>{`
        .project-head {
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-back {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.04em;
        }
        .project-back:hover { color: var(--yellow); }
        .project-counter {
          font-family: var(--display);
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
        }
        .project-counter .sep { margin: 0 6px; color: rgba(255,255,255,0.2); }

        /* GRID */
        .project-grid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        /* STICKY META */
        .project-meta {
          position: sticky;
          top: 96px;
          align-self: flex-start;
        }
        @media (max-width: 1024px) {
          .project-meta { position: static; }
        }
        .meta-inner {
          display: flex; flex-direction: column;
          gap: 18px;
        }
        .project-title {
          font-size: clamp(40px, 5vw, 76px);
          line-height: 0.92;
        }
        .project-kind {
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--yellow);
        }
        .project-blurb {
          margin: 0;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255,255,255,0.75);
        }
        .project-specs {
          margin: 8px 0 0;
          padding: 18px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column; gap: 10px;
        }
        .project-specs > div {
          display: flex; justify-content: space-between;
          font-size: 13px;
        }
        .project-specs dt { color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.12em; font-size: 11px; }
        .project-specs dd { margin: 0; font-weight: 500; }
        .project-specs a { color: var(--yellow); }
        .project-specs a:hover { text-decoration: underline; }
        .project-cta { display: flex; gap: 10px; flex-wrap: wrap; }
        .project-share {
          margin-top: 14px;
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: rgba(255,255,255,0.5);
        }
        .project-share .share-label { letter-spacing: 0.1em; text-transform: uppercase; margin-right: 6px; }
        .project-share button {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--white); font-size: 12px;
          transition: background .15s, color .15s;
        }
        .project-share button:hover { background: var(--yellow); color: var(--purple); border-color: var(--yellow); }

        /* REEL */
        .project-reel {
          display: flex; flex-direction: column;
          gap: 48px;
        }
        .reel-hero-label, .block-label {
          margin-top: 14px;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
        }
        .reel-prose {
          max-width: 60ch;
          margin-top: 16px;
        }
        .reel-prose h3 { margin-bottom: 16px; }
        .reel-prose p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0 0 14px;
        }
        .reel-block { display: flex; flex-direction: column; }
        .color-row {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 12px;
          margin-top: 14px;
        }
        .color-card {
          aspect-ratio: 16/9;
          border-radius: var(--radius);
          position: relative;
          overflow: hidden;
          padding: 18px;
          display: flex;
          align-items: flex-end;
        }
        .cc-meta {
          display: flex; flex-direction: column; gap: 2px;
          color: var(--white);
          font-size: 12px;
        }
        .cc-meta.dark { color: var(--purple); }
        .cc-meta b { font-family: var(--display); font-weight: 700; font-size: 18px; }
        .cc-meta span { letter-spacing: 0.08em; opacity: 0.8; }

        .type-card {
          margin-top: 14px;
          padding: 36px 32px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
        }
        .type-row { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
        .ts-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--yellow); margin-bottom: 12px; }
        .ts-sample {
          font-size: clamp(22px, 2.4vw, 38px);
          line-height: 1.2;
        }
        @media (max-width: 720px) { .type-row { grid-template-columns: 1fr; } }

        .reel-twoup { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px; }

        .numbers {
          margin-top: 14px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        .num {
          padding: 28px 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
        }
        .num .n {
          font-family: var(--display);
          font-weight: 700;
          font-size: 44px;
          line-height: 1;
          color: var(--yellow);
        }
        .num .l {
          margin-top: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @media (max-width: 720px) { .numbers { grid-template-columns: 1fr; } }

        .reel-upnext {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; justify-content: space-between; gap: 12px;
        }
        .upnext-btn {
          padding: 18px 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          text-align: left;
          flex: 1; max-width: 320px;
          transition: border-color .2s, background .2s;
        }
        .upnext-btn:hover { border-color: var(--yellow); background: rgba(226,162,40,0.05); }
        .upnext-btn.align-right { text-align: right; }
        .un-label { font-size: 11px; letter-spacing: 0.14em; color: rgba(255,255,255,0.5); text-transform: uppercase; }
        .un-title { font-family: var(--display); font-weight: 700; font-size: 20px; margin-top: 6px; }
      `}</style>
    </div>
  );
}

Object.assign(window, { ProjectPage });
