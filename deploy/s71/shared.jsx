// s71-shared.jsx — design tokens, nav, footer, shared components

const S71 = {
  purple: '#211451',
  purpleDeep: '#15093a',
  purpleLight: '#3a2b78',
  yellow: '#E2A228',
  yellowLight: '#f3c25e',
  coral: '#ED3D35',
  white: '#ffffff',
  grey: '#767676',
  greyLight: '#a8a8a8',
  paper: '#f4f3ef',
};

const CATS = [
  { k: '01', slug: 'web', t: 'Web Dev & Design',  s: 'Responsive sites · custom code · CMS',          color: '#3a2b78' },
  { k: '02', slug: 'graphic', t: 'Graphic Design', s: 'Logos · posters · brand systems · print',      color: '#E2A228' },
  { k: '03', slug: 'ux',  t: 'UX / UI',            s: 'Flows · interfaces · design systems',          color: '#5b8def' },
  { k: '04', slug: 'seo', t: 'Content Strat',      s: 'SEO · words · structure · narrative',          color: '#ED3D35' },
  { k: '05', slug: 'video', t: 'Video Editor',     s: 'Edit · color · sound · motion',                color: '#767676' },
];

const PROJECTS = [
  { id: 's71',     title: 'Studio 71',           kind: 'Brand Guidelines',   cat: 'graphic', year: 2025, featured: true, accent: S71.yellow,  blurb: 'Identity, system, and guidelines for my own studio.' },
  { id: 'lamk3',   title: 'L.A. mkIII',          kind: 'Short Film',         cat: 'video',   year: 2025, featured: true, accent: '#a8a8a8',   blurb: 'Studio 71 vlog series — pilot episode.' },
  { id: 'sfgiants',title: 'SF Giants Fan Fest',  kind: 'Animated Poster',    cat: 'graphic', year: 2024, accent: S71.coral,                   blurb: 'A poster that moves — printed and digital.' },
  { id: 'bizybee', title: 'Bizy Bee',            kind: 'Logo & Identity',    cat: 'graphic', year: 2024, accent: S71.yellow,                  blurb: 'A tiny mark with a lot of buzz.' },
  { id: 'smartcity',title:'Smart City Proposal', kind: 'Narrative Site',     cat: 'web',     year: 2024, accent: '#5b8def',                   blurb: 'Long-form proposal site for a connected city.' },
  { id: 'chai',    title: 'Chai Recipe',         kind: 'Recipe Site',        cat: 'web',     year: 2024, accent: '#c97a3a',                   blurb: 'A warm little single-page site for a family recipe.' },
  { id: 'blackbird',title:'Blackbird Poem',      kind: 'Poem Site',          cat: 'web',     year: 2024, accent: '#3a2b78',                   blurb: 'Wallace Stevens, in thirteen scrolling stanzas.' },
  { id: 'clone',   title: 'Best Clone Trooper',  kind: 'Info Card',          cat: 'web',     year: 2023, accent: '#5b8def',                   blurb: 'A persuasive info-card. Settles a debate.' },
  { id: 'lego',    title: 'Lego Benefits',       kind: 'Infographic',        cat: 'graphic', year: 2024, accent: S71.coral,                   blurb: 'Why building Legos is good for you, charted.' },
];

const NAV_PAGES = [
  { id: 'home',     label: 'Home' },
  { id: 'portfolio',label: 'Portfolio' },
  { id: 'about',    label: 'About' },
  { id: 'contact',  label: 'Get in Touch' },
];

// ── Site nav ────────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  return (
    <header className="s71-nav">
      <button className="s71-nav-brand" onClick={() => setPage('home')}>
        <span className="brand-studio">Studio</span>
        <span className="brand-71">71</span>
      </button>
      <nav className="s71-nav-links">
        {NAV_PAGES.map(p => (
          <button key={p.id}
            className={`s71-nav-link ${page === p.id ? 'active' : ''}`}
            onClick={() => setPage(p.id)}>
            {p.label}
          </button>
        ))}
      </nav>
      <div className="s71-nav-tag">CAPTURE · DESIGN · DELIVER</div>
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
          <div className="s71-footer-head">Pages</div>
          {NAV_PAGES.map(p => (
            <button key={p.id} className="s71-footer-link" onClick={() => setPage(p.id)}>{p.label}</button>
          ))}
        </div>
        <div>
          <div className="s71-footer-head">Disciplines</div>
          {CATS.map(c => (
            <button key={c.slug} className="s71-footer-link"
              onClick={() => setPage('portfolio')}>{c.t}</button>
          ))}
        </div>
        <div>
          <div className="s71-footer-head">Elsewhere</div>
          <a className="s71-footer-link" href="#">YouTube · @Studios-71 ↗</a>
          <a className="s71-footer-link" href="#">LinkedIn ↗</a>
          <a className="s71-footer-link" href="#">Vimeo ↗</a>
          <a className="s71-footer-link" href="#">contact.me@studios71.com</a>
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
      <div className="s71-thumb-bg" />
      <div className="s71-thumb-meta">
        <div className="s71-thumb-kind">{p.kind}</div>
        <div className={large ? 's71-thumb-title-lg' : 's71-thumb-title'}>{p.title}</div>
      </div>
      <div className="s71-thumb-year">'{String(p.year).slice(-2)}</div>
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

Object.assign(window, { S71, CATS, PROJECTS, NAV_PAGES, Nav, Footer, Btn, Thumb, CatChip, SectionHead });
