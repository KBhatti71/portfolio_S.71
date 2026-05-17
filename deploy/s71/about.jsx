// s71-about.jsx — About page: combines Timeline spine + Skills grid + Index card moments

const TIMELINE = [
  { year: '2026',  label: 'B.A. Digital Tech & Culture',          place: 'WSU Vancouver',         tag: 'Graduating · Spring',         kind: 'milestone' },
  { year: '2025',  label: 'Studio 71 — brand guidelines shipped',  place: 'Self-initiated',        tag: 'Identity / system',           kind: 'work' },
  { year: '2025',  label: 'L.A. mkIII — short film',               place: 'Studio 71 / YouTube',   tag: 'Video / direction',           kind: 'work' },
  { year: '2024',  label: 'SF Giants Fan Fest poster (animated)',  place: 'Self-initiated',        tag: 'Graphic / motion',            kind: 'work' },
  { year: '2024',  label: 'Smart City — narrative web proposal',   place: 'WSUV — class brief',    tag: 'Web / story',                 kind: 'work' },
  { year: '2023',  label: 'Studio 71 founded',                     place: 'Vancouver, WA',         tag: 'Beginning',                   kind: 'milestone' },
  { year: '2023',  label: 'YouTube channel · @Studios-71',         place: 'Online',                tag: 'Platform',                    kind: 'work' },
  { year: 'before', label: 'Customer service & operations',         place: 'Foundation',           tag: 'Listening, problem-solving',  kind: 'note' },
];

const SKILLS = [
  { group: 'Design', items: ['Branding', 'Identity systems', 'Editorial', 'UX/UI', 'Information design', 'Typography'] },
  { group: 'Video',  items: ['Camera', 'Lighting', 'Editing', 'Color correction', 'Sound design', 'Motion graphics'] },
  { group: 'Web',    items: ['Responsive design', 'Front-end (HTML/CSS)', 'WordPress', 'Accessibility', 'CMS architecture', 'SEO'] },
  { group: 'Tools',  items: ['Adobe CC', 'After Effects', 'Premiere', 'Photoshop', 'Illustrator', 'InDesign', 'Figma'] },
];

const PLATFORMS = [
  { name: 'YouTube',   handle: '@Studios-71',   tag: 'Studio 71 video work', color: '#FF0033', url: 'https://youtube.com/@Studios-71' },
  { name: 'Vimeo',     handle: 'studio 71',     tag: 'Reels & shorts',       color: '#1ab7ea', url: 'https://vimeo.com' },
  { name: 'LinkedIn',  handle: 'dakottabhatti', tag: 'Professional',         color: '#0a66c2', url: 'https://linkedin.com/in/dakottabhatti' },
  { name: 'WordPress', handle: 'studios71.com', tag: 'Client sites',         color: '#21759b', url: 'https://studios71.com' },
];

function AboutPage({ setPage }) {
  return (
    <div className="s71-page about">
      {/* HEAD ─────────────────────────────────────────────────── */}
      <section className="s71-wrap about-head">
        <SectionHead
          eyebrow="About — Dakotta Bhatti"
          title={<>A digital designer<br />from <span style={{ color: 'var(--coral)' }}>Studio 71.</span></>}
          sub="Working in video, web, and brand from Vancouver, WA. Currently finishing a B.A. in Digital Technology & Culture at WSU Vancouver."
        />
      </section>

      {/* PORTRAIT + INTRO ──────────────────────────────────────── */}
      <section className="s71-wrap about-portrait-row">
        <div className="portrait">
          <div className="portrait-frame">
            <div className="portrait-bg" />
            <div className="portrait-label tag-line">Portrait · 2026</div>
          </div>
          <div className="portrait-meta">
            <div><b>Dakotta Bhatti</b></div>
            <div className="dim">Vancouver, WA · Pacific Time</div>
            <div className="dim">b. 1999</div>
          </div>
        </div>

        <div className="intro">
          <div className="s71-eyebrow">A letter</div>
          <p className="intro-lede">
            I'm a digital designer dedicated to making impactful work across
            video, web, and brand. I started Studio 71 in 2023 to give my
            curiosity a name and a place to live.
          </p>
          <p>
            My foundation is in customer service and operations — which means I
            show up, listen, and ship. The design vocabulary I've built since
            then runs from logos and posters through full responsive sites and
            edited video. I care about <span className="hl">careful craft</span>,
            useful structure, and the small bit of play that makes work feel
            alive.
          </p>
          <p>
            I'm finishing a B.A. in Digital Technology & Culture at WSU
            Vancouver and looking for the next chapter. <span className="hl">Open
            for freelance and full-time roles</span> for Spring 2026 onward.
          </p>
          <div className="intro-ctas">
            <Btn primary icon="→" onClick={() => setPage('contact')}>Get in touch</Btn>
            <Btn icon="↓">Download resume</Btn>
          </div>
        </div>
      </section>

      {/* TIMELINE ─────────────────────────────────────────────── */}
      <section className="s71-wrap about-timeline">
        <SectionHead
          eyebrow="Timeline"
          title="How I got here."
          sub="A vertical spine — milestones in gold, work in white, notes in muted grey."
        />
        <div className="timeline">
          <div className="timeline-spine" />
          {TIMELINE.map((e, i) => (
            <div key={i} className={`tl-event kind-${e.kind}`}>
              <div className="tl-dot" aria-hidden="true" />
              <div className="tl-year" aria-hidden="true">{e.year}</div>
              <div className="tl-card">
                <div className="tl-tag"><span className="sr-only">{e.year} — </span>{e.tag}</div>
                <div className="tl-label">{e.label}</div>
                <div className="tl-place">{e.place}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS ───────────────────────────────────────────────── */}
      <section className="s71-wrap about-skills">
        <SectionHead
          eyebrow="Skills & toolkit"
          title="What's on the desk."
          sub="A working list of the tools and disciplines I reach for on most projects."
        />
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.group} className="skill-block">
              <div className="skill-head">{s.group}</div>
              <div className="skill-items">
                {s.items.map(it => <span key={it} className="skill-pill">{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS ────────────────────────────────────────────── */}
      <section className="s71-wrap about-platforms">
        <SectionHead
          eyebrow="Elsewhere"
          title="Where the work lives."
        />
        <div className="platforms-grid">
          {PLATFORMS.map(p => (
            <a key={p.name} className="platform-card" href={p.url}
              target="_blank" rel="noopener noreferrer"
              aria-label={`${p.name} — ${p.handle} — ${p.tag} (opens in new tab)`}
              style={{ '--platform-color': p.color }}>
              <div className="platform-icon" aria-hidden="true">{p.name.slice(0, 2).toUpperCase()}</div>
              <div className="platform-meta" aria-hidden="true">
                <div className="platform-name">{p.name}</div>
                <div className="platform-handle">{p.handle}</div>
                <div className="platform-tag">{p.tag}</div>
              </div>
              <div className="platform-arrow" aria-hidden="true">↗</div>
            </a>
          ))}
        </div>
      </section>

      {/* INDEX CARDS — playful moments ─────────────────────────── */}
      <section className="s71-wrap about-cards">
        <SectionHead
          eyebrow="On the side"
          title="A few more cards."
          sub="The bits of me that don't fit a CV."
        />
        <div className="card-stack">
          <div className="ix-card now" style={{ '--rot': '-1.2deg' }}>
            <div className="ix-head">Now</div>
            <div className="ix-body">
              Finishing DTC at WSUV. Drafting a print zine. Looking for the
              right team to join.
            </div>
            <div className="ix-foot tag-line">Spring 2026</div>
          </div>

          <div className="ix-card moto" style={{ '--rot': '1.4deg' }}>
            <div className="ix-head">Working motto</div>
            <div className="ix-body big">
              Capture.<br />Design.<br /><span style={{ color: 'var(--yellow)' }}>Deliver.</span>
            </div>
          </div>

          <div className="ix-card list" style={{ '--rot': '-0.6deg' }}>
            <div className="ix-head">Currently consuming</div>
            <ul>
              <li>♪ Studio mix #12 — Sunday loop</li>
              <li>▶ Watching: indie shorts &amp; behind-the-scenes</li>
              <li>★ Reading: Grid Systems by Müller-Brockmann</li>
              <li>✦ Liking: small studios with big personalities</li>
            </ul>
          </div>

          <div className="ix-card stats" style={{ '--rot': '0.8deg' }}>
            <div className="ix-head">A few numbers</div>
            <div className="ix-stats">
              <div><b>9</b><span>projects shipped</span></div>
              <div><b>3</b><span>disciplines daily</span></div>
              <div><b>2023</b><span>est.</span></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-head { padding-top: 64px; }

        /* PORTRAIT ROW */
        .about-portrait-row {
          margin-top: 56px;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        @media (max-width: 1024px) { .about-portrait-row { grid-template-columns: 1fr; } }
        .portrait { position: sticky; top: 96px; }
        @media (max-width: 1024px) { .portrait { position: static; } }
        .portrait-frame {
          aspect-ratio: 4/5;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, var(--purple-light), var(--purple-deep));
          border: 1px solid rgba(255,255,255,0.08);
        }
        .portrait-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 50% 30%, rgba(226,162,40,0.18) 0%, transparent 60%),
            repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 14px);
        }
        .portrait-label {
          position: absolute;
          bottom: 18px; left: 18px;
          color: rgba(255,255,255,0.82);
          font-size: 11px;
        }
        .portrait-meta {
          margin-top: 16px;
          font-size: 13px;
          line-height: 1.7;
        }
        .portrait-meta .dim { color: rgba(255,255,255,0.75); }
        .intro p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.88);
          margin: 0 0 16px;
          max-width: 60ch;
        }
        .intro-lede { font-size: 19px !important; color: rgba(255,255,255,0.96) !important; font-weight: 500; }
        .intro .hl { background: linear-gradient(180deg, transparent 60%, rgba(226,162,40,0.4) 60%); padding: 0 2px; }
        .intro-ctas { display: flex; gap: 12px; margin-top: 12px; flex-wrap: wrap; }

        /* TIMELINE */
        .about-timeline { padding-top: 120px; }
        .timeline { position: relative; padding-left: 120px; max-width: 820px; }
        .timeline-spine {
          position: absolute;
          left: 90px;
          top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(255,255,255,0.2) 6%,
            rgba(255,255,255,0.2) 94%,
            transparent 100%);
        }
        .tl-event {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          padding: 18px 0;
        }
        .tl-event:not(:last-child) {
          border-bottom: 1px dashed rgba(255,255,255,0.06);
        }
        .tl-year {
          position: absolute;
          left: -120px;
          top: 22px;
          width: 80px;
          font-family: var(--display);
          font-size: 14px;
          color: rgba(255,255,255,0.82);
          text-align: right;
          letter-spacing: 0.04em;
        }
        .tl-dot {
          position: absolute;
          left: -34px;
          top: 26px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.06);
        }
        .tl-event.kind-milestone .tl-dot { background: var(--yellow); box-shadow: 0 0 0 4px rgba(226,162,40,0.18); }
        .tl-event.kind-milestone .tl-year { color: var(--yellow); }
        .tl-event.kind-note .tl-dot { background: rgba(255,255,255,0.35); }
        .tl-event.kind-note .tl-card { opacity: 0.65; }
        .tl-tag {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          margin-bottom: 6px;
        }
        .tl-label {
          font-family: var(--display);
          font-weight: 700;
          font-size: 18px;
          line-height: 1.15;
        }
        .tl-place {
          font-size: 13px;
          color: rgba(255,255,255,0.82);
          margin-top: 4px;
        }
        @media (max-width: 720px) {
          .timeline { padding-left: 40px; }
          .timeline-spine { left: 10px; }
          .tl-year { position: static; text-align: left; margin-bottom: 4px; width: auto; }
          .tl-dot { left: -34px; top: 30px; }
        }

        /* SKILLS */
        .about-skills { padding-top: 120px; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 720px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-block {
          padding: 28px 28px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
        }
        .skill-head {
          font-family: var(--display);
          font-weight: 700;
          font-size: 22px;
          color: var(--yellow);
          margin-bottom: 16px;
        }
        .skill-items { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-pill {
          padding: 6px 14px;
          font-size: 13px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          color: rgba(255,255,255,0.85);
        }

        /* PLATFORMS */
        .about-platforms { padding-top: 96px; }
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 880px) { .platforms-grid { grid-template-columns: 1fr 1fr; } }
        .platform-card {
          display: grid;
          grid-template-columns: 48px 1fr 20px;
          align-items: center;
          gap: 16px;
          padding: 22px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          transition: border-color .2s, transform .2s;
        }
        .platform-card:hover {
          border-color: var(--platform-color);
          transform: translateY(-2px);
        }
        .platform-icon {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: var(--platform-color);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--display); font-weight: 700; font-size: 14px;
          color: var(--white);
        }
        .platform-name { font-family: var(--display); font-weight: 700; font-size: 15px; }
        .platform-handle { font-size: 12px; color: rgba(255,255,255,0.88); margin-top: 2px; }
        .platform-tag { font-size: 11px; color: rgba(255,255,255,0.75); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px; }
        .platform-arrow { color: rgba(255,255,255,0.82); font-size: 18px; }
        .platform-card:hover .platform-arrow { color: var(--platform-color); }

        /* INDEX CARDS */
        .about-cards { padding-top: 96px; }
        .card-stack {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 880px) { .card-stack { grid-template-columns: 1fr 1fr; } }
        .ix-card {
          padding: 22px 22px 24px;
          background: var(--paper);
          color: var(--purple);
          border-radius: 10px;
          transform: rotate(var(--rot));
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          min-height: 200px;
          display: flex; flex-direction: column; gap: 10px;
          transition: transform .25s var(--ease);
        }
        .ix-card:hover { transform: rotate(0deg) translateY(-4px); }
        .ix-head {
          font-family: var(--body);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--coral);
          font-weight: 600;
        }
        .ix-body { font-size: 14px; line-height: 1.5; }
        .ix-body.big {
          font-family: var(--display);
          font-weight: 700;
          font-size: 28px;
          line-height: 1.05;
        }
        .ix-foot { font-size: 11px; color: #595959; margin-top: auto; }
        .ix-card.list ul { margin: 0; padding: 0; list-style: none; font-size: 13px; line-height: 1.7; }
        .ix-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: auto; }
        .ix-stats > div { display: flex; flex-direction: column; }
        .ix-stats b { font-family: var(--display); font-size: 24px; line-height: 1; }
        .ix-stats span { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #595959; margin-top: 2px; }
      `}</style>
    </div>
  );
}

Object.assign(window, { AboutPage });
