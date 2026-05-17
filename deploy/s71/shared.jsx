// s71-shared.jsx — design tokens, nav, footer, shared components

const CATS = [
  { k: '01', slug: 'web', t: 'Web Dev & Design',  s: 'Responsive sites · custom code · CMS',          color: '#3a2b78' },
  { k: '02', slug: 'graphic', t: 'Graphic Design', s: 'Logos · posters · brand systems · print',      color: '#E2A228' },
  { k: '03', slug: 'ux',  t: 'UX / UI',            s: 'Flows · interfaces · design systems',          color: '#5b8def' },
  { k: '04', slug: 'seo', t: 'Content Strat',      s: 'SEO · words · structure · narrative',          color: '#ED3D35' },
  { k: '05', slug: 'video', t: 'Video Editor',     s: 'Edit · color · sound · motion',                color: '#767676' },
];

const PROJECTS = [
  { id: 's71',     title: 'Studio 71',           kind: 'Brand Guidelines',   cat: 'graphic', year: 2025, featured: true, accent: '#E2A228',   blurb: 'Identity, system, and guidelines for my own studio.',          client: 'Self / Studio 71',       tools: 'Illustrator, InDesign, Figma',         liveUrl: null },
  { id: 'lamk3',   title: 'L.A. mkIII',          kind: 'Short Film',         cat: 'video',   year: 2025, featured: true, accent: '#a8a8a8',   blurb: 'Studio 71 vlog series — pilot episode.',                       client: 'Self / Studio 71',       tools: 'Premiere Pro, After Effects, DaVinci', liveUrl: 'https://youtube.com/@Studios-71' },
  { id: 'sfgiants',title: 'SF Giants Fan Fest',  kind: 'Animated Poster',    cat: 'graphic', year: 2024, accent: '#ED3D35',                   blurb: 'A poster that moves — printed and digital.',                   client: 'Self-initiated',         tools: 'Illustrator, After Effects',           liveUrl: null },
  { id: 'bizybee', title: 'Bizy Bee',            kind: 'Logo & Identity',    cat: 'graphic', year: 2024, accent: '#E2A228',                   blurb: 'A tiny mark with a lot of buzz.',                              client: 'Self-initiated',         tools: 'Illustrator, Photoshop',               liveUrl: null },
  { id: 'smartcity',title:'Smart City Proposal', kind: 'Narrative Site',     cat: 'web',     year: 2024, accent: '#5b8def',                   blurb: 'Long-form proposal site for a connected city.',                client: 'WSUV — Class brief',     tools: 'HTML/CSS, WordPress, Figma',           liveUrl: null },
  { id: 'chai',    title: 'Chai Recipe',         kind: 'Recipe Site',        cat: 'web',     year: 2024, accent: '#c97a3a',                   blurb: 'A warm little single-page site for a family recipe.',          client: 'Self-initiated',         tools: 'HTML/CSS, JavaScript',                 liveUrl: null },
  { id: 'blackbird',title:'Blackbird Poem',      kind: 'Poem Site',          cat: 'web',     year: 2024, accent: '#3a2b78',                   blurb: 'Wallace Stevens, in thirteen scrolling stanzas.',              client: 'WSUV — Class brief',     tools: 'HTML/CSS, JavaScript',                 liveUrl: null },
  { id: 'clone',   title: 'Best Clone Trooper',  kind: 'Info Card',          cat: 'web',     year: 2023, accent: '#5b8def',                   blurb: 'A persuasive info-card. Settles a debate.',                    client: 'Self-initiated',         tools: 'HTML/CSS',                             liveUrl: null },
  { id: 'lego',    title: 'Lego Benefits',       kind: 'Infographic',        cat: 'graphic', year: 2024, accent: '#ED3D35',                   blurb: 'Why building Legos is good for you, charted.',                 client: 'WSUV — Class brief',     tools: 'Illustrator, InDesign',                liveUrl: null },
];

const NAV_PAGES = [
  { id: 'home',     label: 'Home' },
  { id: 'portfolio',label: 'Portfolio' },
  { id: 'about',    label: 'About' },
  { id: 'contact',  label: 'Get in Touch' },
];

// ── Skip link ───────────────────────────────────────────────────────────
function SkipLink() {
  return <a href="#main-content" className="s71-skip-link">Skip to main content</a>;
}

// ── Site nav ────────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  return (
    <header className="s71-nav">
      <button className="s71-nav-brand" onClick={() => setPage('home')} aria-label="Studio 71 — go to home">
        <span className="brand-studio" aria-hidden="true">Studio</span>
        <span className="brand-71" aria-hidden="true">71</span>
      </button>
      <nav className="s71-nav-links" aria-label="Primary navigation">
        {NAV_PAGES.map(p => (
          <button key={p.id}
            className={`s71-nav-link ${page === p.id ? 'active' : ''}`}
            onClick={() => setPage(p.id)}
            aria-current={page === p.id ? 'page' : undefined}>
            {p.label}
          </button>
        ))}
      </nav>
      <div className="s71-nav-tag" aria-hidden="true">CAPTURE · DESIGN · DELIVER</div>
    </header>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="s71-footer">
      <div className="s71-footer-grid">
        <div>
          <div className="s71-footer-brand">
            <span className="brand-studio">Studio</span>
            <span className="brand-71">71</span>
          </div>
          <div className="s71-footer-tag">CAPTURE · DESIGN · DELIVER</div>
          <div className="s71-footer-meta">
            © 2026 Dakotta Bhatti · Vancouver WA
          </div>
        </div>
        <div>
          <div className="s71-footer-head" id="footer-pages-label">Pages</div>
          <nav aria-labelledby="footer-pages-label">
            {NAV_PAGES.map(p => (
              <a key={p.id} className="s71-footer-link" href="#"
                onClick={e => { e.preventDefault(); setPage(p.id); }}>{p.label}</a>
            ))}
          </nav>
        </div>
        <div>
          <div className="s71-footer-head" id="footer-disc-label">Disciplines</div>
          <nav aria-labelledby="footer-disc-label">
            {CATS.map(c => (
              <a key={c.slug} className="s71-footer-link" href="#"
                onClick={e => { e.preventDefault(); setPage('portfolio'); }}>{c.t}</a>
            ))}
          </nav>
        </div>
        <div>
          <div className="s71-footer-head">Elsewhere</div>
          <a className="s71-footer-link" href="https://youtube.com/@Studios-71" target="_blank" rel="noopener noreferrer" aria-label="YouTube · @Studios-71 (opens in new tab)">YouTube · @Studios-71 ↗</a>
          <a className="s71-footer-link" href="https://linkedin.com/in/dakottabhatti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">LinkedIn ↗</a>
          <a className="s71-footer-link" href="https://vimeo.com" target="_blank" rel="noopener noreferrer" aria-label="Vimeo (opens in new tab)">Vimeo ↗</a>
          <a className="s71-footer-link" href="mailto:contact.me@studios71.com">contact.me@studios71.com</a>
        </div>
      </div>
    </footer>
  );
}

// ── Buttons ─────────────────────────────────────────────────────────────
function Btn({ children, primary, onClick, icon, style, secondary }) {
  const cls = primary ? 's71-btn primary' : secondary ? 's71-btn secondary' : 's71-btn';
  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
      {icon && <span className="s71-btn-icon">{icon}</span>}
    </button>
  );
}

// ── Image placeholder (styled, branded) ─────────────────────────────────
function Thumb({ project, ratio = '4/3', style, large }) {
  const p = typeof project === 'string' ? PROJECTS.find(x => x.id === project) : project;
  if (!p) return null;
  return (
    <div className="s71-thumb" style={{ aspectRatio: ratio, '--thumb-accent': p.accent, ...style }}>
      <div className="s71-thumb-bg" aria-hidden="true" />
      <div className="s71-thumb-meta">
        <div className="s71-thumb-kind">{p.kind}</div>
        <div className={large ? 's71-thumb-title-lg' : 's71-thumb-title'}>{p.title}</div>
      </div>
      <div className="s71-thumb-year" aria-hidden="true">'{String(p.year).slice(-2)}</div>
    </div>
  );
}

// ── Category chip ───────────────────────────────────────────────────────
function CatChip({ cat }) {
  const c = CATS.find(x => x.slug === cat);
  if (!c) return null;
  return <span className="s71-catchip" style={{ '--chip-color': c.color }}>{c.k} · {c.t}</span>;
}

// ── Section header ──────────────────────────────────────────────────────
function SectionHead({ eyebrow, title, sub, align = 'left' }) {
  return (
    <div className={`s71-secthead align-${align}`}>
      {eyebrow && <div className="s71-eyebrow">{eyebrow}</div>}
      <h2 className="s71-h2">{title}</h2>
      {sub && <div className="s71-sub">{sub}</div>}
    </div>
  );
}

Object.assign(window, { CATS, PROJECTS, NAV_PAGES, SkipLink, Nav, Footer, Btn, Thumb, CatChip, SectionHead });
