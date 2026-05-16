// Studio 71 — vanilla JS SPA

// ─── Data ────────────────────────────────────────────────────────────────

const CATS = [
  { k: '01', slug: 'web',     t: 'Web Dev & Design',  s: 'Responsive sites · custom code · CMS',    color: '#3a2b78' },
  { k: '02', slug: 'graphic', t: 'Graphic Design',    s: 'Logos · posters · brand systems · print',  color: '#E2A228' },
  { k: '03', slug: 'ux',      t: 'UX / UI',           s: 'Flows · interfaces · design systems',      color: '#5b8def' },
  { k: '04', slug: 'seo',     t: 'Content Strat',     s: 'SEO · words · structure · narrative',      color: '#ED3D35' },
  { k: '05', slug: 'video',   t: 'Video Editor',      s: 'Edit · color · sound · motion',            color: '#767676' },
];

const PROJECTS = [
  { id: 's71',      title: 'Studio 71',          kind: 'Brand Guidelines',  cat: 'graphic', year: 2025, accent: '#E2A228', blurb: 'Identity, system, and guidelines for my own studio.' },
  { id: 'lamk3',    title: 'L.A. mkIII',         kind: 'Short Film',        cat: 'video',   year: 2025, accent: '#a8a8a8', blurb: 'Studio 71 vlog series — pilot episode.' },
  { id: 'sfgiants', title: 'SF Giants Fan Fest',  kind: 'Animated Poster',  cat: 'graphic', year: 2024, accent: '#ED3D35', blurb: 'A poster that moves — printed and digital.' },
  { id: 'bizybee',  title: 'Bizy Bee',            kind: 'Logo & Identity',   cat: 'graphic', year: 2024, accent: '#E2A228', blurb: 'A tiny mark with a lot of buzz.' },
  { id: 'smartcity',title: 'Smart City Proposal', kind: 'Narrative Site',    cat: 'web',     year: 2024, accent: '#5b8def', blurb: 'Long-form proposal site for a connected city.' },
  { id: 'chai',     title: 'Chai Recipe',         kind: 'Recipe Site',       cat: 'web',     year: 2024, accent: '#c97a3a', blurb: 'A warm little single-page site for a family recipe.' },
  { id: 'blackbird',title: 'Blackbird Poem',      kind: 'Poem Site',         cat: 'web',     year: 2024, accent: '#3a2b78', blurb: 'Wallace Stevens, in thirteen scrolling stanzas.' },
  { id: 'clone',    title: 'Best Clone Trooper',  kind: 'Info Card',         cat: 'web',     year: 2023, accent: '#5b8def', blurb: 'A persuasive info-card. Settles a debate.' },
  { id: 'lego',     title: 'Lego Benefits',       kind: 'Infographic',       cat: 'graphic', year: 2024, accent: '#ED3D35', blurb: 'Why building Legos is good for you, charted.' },
];

const TIMELINE = [
  { year: '2026',   label: 'B.A. Digital Tech & Culture',         place: 'WSU Vancouver',        tag: 'Graduating · Spring',       kind: 'milestone' },
  { year: '2025',   label: 'Studio 71 — brand guidelines shipped', place: 'Self-initiated',       tag: 'Identity / system',         kind: 'work' },
  { year: '2025',   label: 'L.A. mkIII — short film',             place: 'Studio 71 / YouTube',  tag: 'Video / direction',         kind: 'work' },
  { year: '2024',   label: 'SF Giants Fan Fest poster (animated)', place: 'Self-initiated',       tag: 'Graphic / motion',          kind: 'work' },
  { year: '2024',   label: 'Smart City — narrative web proposal',  place: 'WSUV — class brief',   tag: 'Web / story',               kind: 'work' },
  { year: '2023',   label: 'Studio 71 founded',                    place: 'Vancouver, WA',        tag: 'Beginning',                 kind: 'milestone' },
  { year: '2023',   label: 'YouTube channel · @Studios-71',        place: 'Online',               tag: 'Platform',                  kind: 'work' },
  { year: 'before', label: 'Customer service & operations',        place: 'Foundation',           tag: 'Listening, problem-solving', kind: 'note' },
];

const SKILLS = [
  { group: 'Design', items: ['Branding','Identity systems','Editorial','UX/UI','Information design','Typography'] },
  { group: 'Video',  items: ['Camera','Lighting','Editing','Color correction','Sound design','Motion graphics'] },
  { group: 'Web',    items: ['Responsive design','Front-end (HTML/CSS)','WordPress','Accessibility','CMS architecture','SEO'] },
  { group: 'Tools',  items: ['Adobe CC','After Effects','Premiere','Photoshop','Illustrator','InDesign','Figma'] },
];

const PLATFORMS = [
  { name: 'YouTube',   handle: '@Studios-71',   tag: 'Studio 71 video work', color: '#FF0033' },
  { name: 'Vimeo',     handle: 'studio 71',     tag: 'Reels & shorts',       color: '#1ab7ea' },
  { name: 'LinkedIn',  handle: 'dakottabhatti', tag: 'Professional',         color: '#0a66c2' },
  { name: 'WordPress', handle: 'studios71.com', tag: 'Client sites',         color: '#21759b' },
];

const PROJECT_KINDS = ['Brand identity','Website / web design','UX / product','Video production','Editing only','Print / poster','Something else'];

const AVAIL_DAYS = [3,5,9,10,12,13,17,19,24,26,27,31];
const SLOTS = { 3:['10:00','11:00','2:00','3:30'], 5:['9:30','10:30','1:00'], 9:['10:00','2:00'], 10:['11:00','1:30','3:00'], 12:['10:00','11:00','1:00','2:30','4:00'], 13:['9:00','10:30'], 17:['10:00','11:00','2:00'], 19:['1:30','3:00'], 24:['10:00','11:00','1:00'], 26:['9:30','2:30'], 27:['11:00'], 31:['10:00','11:00','1:00','2:00'] };

// ─── State ────────────────────────────────────────────────────────────────

const st = {
  page: 'home',
  projectId: 's71',
  cal: { day: 12, time: '11:00' },
  form: { name: '', company: '', kind: '', message: '' },
};

// ─── Utilities ────────────────────────────────────────────────────────────

function h(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function thumb(p, ratio, large) {
  if (typeof p === 'string') p = PROJECTS.find(x => x.id === p);
  if (!p) return '';
  const yr = "'" + String(p.year).slice(-2);
  const cls = large ? 's71-thumb-title-lg' : 's71-thumb-title';
  return `<div class="s71-thumb" style="aspect-ratio:${ratio};--thumb-accent:${p.accent}">
    <div class="s71-thumb-bg" aria-hidden="true"></div>
    <div class="s71-thumb-meta">
      <div class="s71-thumb-kind">${h(p.kind)}</div>
      <div class="${cls}">${h(p.title)}</div>
    </div>
    <div class="s71-thumb-year" aria-hidden="true">${yr}</div>
  </div>`;
}

function chip(cat) {
  const c = CATS.find(x => x.slug === cat);
  return c ? `<span class="s71-catchip" style="--chip-color:${c.color}">${c.k} · ${h(c.t)}</span>` : '';
}

// ─── Navigation ───────────────────────────────────────────────────────────

function nav(page, projectId) {
  st.page = page;
  if (projectId) st.projectId = projectId;

  const navPage = page === 'project' ? 'portfolio' : page;
  document.querySelectorAll('.s71-nav-link').forEach(el => {
    const active = el.dataset.nav === navPage;
    el.classList.toggle('active', active);
    if (active) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });

  const main = document.getElementById('main-content');
  main.innerHTML = render(page);
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (page === 'contact')   initContact();
  if (page === 'portfolio') initPortfolio();
}

function render(page) {
  switch (page) {
    case 'portfolio': return pagePortfolio();
    case 'project':   return pageProject(st.projectId);
    case 'about':     return pageAbout();
    case 'contact':   return pageContact();
    default:          return pageHome();
  }
}

// ─── Home ─────────────────────────────────────────────────────────────────

function pageHome() {
  const featured = PROJECTS.find(p => p.id === 's71');
  return `<div class="s71-page home">
    <section class="s71-hero s71-wrap">
      <div class="s71-hero-meta">
        <div class="s71-eyebrow">Studio 71 · Est. 2023</div>
        <div class="s71-hero-availability"><span class="dot" aria-hidden="true"></span> Open for work — Spring 2026</div>
      </div>
      <h1 class="s71-h1 s71-hero-name">Dakotta<br><span class="bhatti">Bhatti<span class="period">.</span></span></h1>
      <div class="s71-hero-tag tag-line">Capture · Design · Deliver</div>
      <p class="s71-hero-blurb">A <span class="hl">digital designer</span> at Studio 71 — working in video, web, graphic design, UX, and content strategy from Vancouver, Washington.</p>
      <div class="s71-hero-ctas">
        <button class="s71-btn primary" data-nav="portfolio">View portfolio <span class="s71-btn-icon" aria-hidden="true">→</span></button>
        <button class="s71-btn" data-nav="contact">Get in touch</button>
        <button class="s71-btn secondary">Resume (PDF) <span class="s71-btn-icon" aria-hidden="true">↓</span></button>
      </div>
      <div class="s71-hero-feature" role="button" tabindex="0" data-nav="project" data-project="s71"
        aria-label="View featured project: Studio 71 brand guidelines">
        ${thumb(featured,'3/2',true)}
        <div class="s71-hero-feature-label" aria-hidden="true">
          <span>↳ Featured · Studio 71 brand guidelines</span><span class="arrow">→</span>
        </div>
      </div>
      <div class="s71-hero-index" aria-hidden="true"><div>VOL. 03</div><div>2026 / WA</div></div>
    </section>

    <section class="s71-wrap s71-strip">
      <div class="s71-strip-head">
        <div class="s71-eyebrow">What I make</div>
        <button class="s71-strip-link" data-nav="portfolio">See the whole portfolio →</button>
      </div>
      <div class="s71-strip-grid">
        ${CATS.map(c => `<div class="s71-strip-cell" style="--cat-color:${c.color}"
            role="button" tabindex="0" data-nav="portfolio" aria-label="${h(c.t)} — view in portfolio">
          <div class="cell-k" aria-hidden="true">${c.k}</div>
          <div class="cell-bar" aria-hidden="true"></div>
          <div class="cell-title">${h(c.t)}</div>
          <div class="cell-sub">${h(c.s)}</div>
          <div class="cell-arrow" aria-hidden="true">→</div>
        </div>`).join('')}
      </div>
    </section>

    <section class="s71-wrap s71-recent">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Recently shipped</div>
        <h2 class="s71-h2">A few things from the bench.</h2>
        <div class="s71-sub">Selected work from 2024 and 2025. The full archive lives in the portfolio.</div>
      </div>
      <div class="s71-recent-grid">
        ${PROJECTS.slice(0,6).map(p => `<div class="s71-recent-item" role="button" tabindex="0"
            data-nav="project" data-project="${p.id}"
            aria-label="View project: ${h(p.title)} — ${h(p.kind)}, ${p.year}">
          ${thumb(p,'4/3')}
          <div class="recent-meta" aria-hidden="true">${chip(p.cat)}<span class="recent-year">${p.year}</span></div>
        </div>`).join('')}
      </div>
    </section>

    <section class="s71-wrap s71-teaser">
      <div class="s71-teaser-card">
        <div class="s71-eyebrow">Currently</div>
        <h2 class="s71-h2">Open for freelance,<br>open for full-time.</h2>
        <p class="s71-sub">Reply within a day or two. Coffee in the Portland-Vancouver area welcome.</p>
        <div class="s71-teaser-ctas">
          <button class="s71-btn primary" data-nav="contact">Get in touch <span class="s71-btn-icon" aria-hidden="true">→</span></button>
          <button class="s71-btn" data-nav="about">About me</button>
        </div>
      </div>
    </section>
  </div>`;
}

// ─── Portfolio ────────────────────────────────────────────────────────────

function pagePortfolio() {
  const bycat = {};
  CATS.forEach(c => { bycat[c.slug] = PROJECTS.filter(p => p.cat === c.slug); });

  const doors = CATS.map((c, i) => {
    const projs = bycat[c.slug] || [];
    return `<div class="door${i===4?' span-wide':''}" style="--door-color:${c.color}" data-door="${c.slug}">
      <button class="door-face" aria-expanded="false" aria-controls="drawer-${c.slug}">
        <div class="door-k">${c.k}</div>
        <div class="door-title">${h(c.t)}</div>
        <div class="door-sub">${h(c.s)}</div>
        <div class="door-count">
          <span>${projs.length} ${projs.length===1?'project':'projects'}</span>
          <span class="door-toggle">enter →</span>
        </div>
      </button>
      <div class="door-drawer" id="drawer-${c.slug}" hidden>
        <div class="door-projects">
          ${projs.map(p => `<button class="door-project" data-nav="project" data-project="${p.id}">
            ${thumb(p,'16/9')}
            <div class="dp-meta"><div class="dp-title">${h(p.title)}</div><div class="dp-kind">${h(p.kind)} · ${p.year}</div></div>
          </button>`).join('')}
        </div>
      </div>
    </div>`;
  }).join('');

  const mosaic = PROJECTS.map((p,i) => `<div class="mosaic-item${i===0?' big':''}" role="button" tabindex="0"
      data-nav="project" data-project="${p.id}"
      aria-label="View project: ${h(p.title)} — ${h(p.kind)}, ${p.year}">
    ${thumb(p, i===0?'16/10':'4/3', i===0)}
    <div class="mosaic-meta" aria-hidden="true">${chip(p.cat)}<span class="mosaic-year">'${String(p.year).slice(-2)}</span></div>
  </div>`).join('');

  return `<div class="s71-page portfolio">
    <section class="s71-wrap portfolio-head">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Portfolio · 2023→</div>
        <h2 class="s71-h2">Five doors,<br>one studio.</h2>
        <div class="s71-sub">Each door opens to that discipline's work. Pick a lane — or scroll the full mosaic below.</div>
      </div>
      <div class="portfolio-counts">
        <span>${PROJECTS.length} projects</span><span class="dot">·</span>
        <span>5 disciplines</span><span class="dot">·</span><span>Open for hire ↗</span>
      </div>
    </section>
    <section class="s71-wrap doors-section"><div class="doors-grid">${doors}</div></section>
    <section class="s71-wrap mosaic-section">
      <div class="mosaic-divider"><span>or — see everything ↓</span></div>
      <div class="mosaic-grid">${mosaic}</div>
    </section>
  </div>`;
}

function initPortfolio() {
  document.querySelectorAll('.door-face').forEach(btn => {
    btn.addEventListener('click', () => {
      const door = btn.closest('.door');
      const drawer = document.getElementById('drawer-' + door.dataset.door);
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // close all
      document.querySelectorAll('.door').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.door-face').setAttribute('aria-expanded','false');
        d.querySelector('.door-toggle').textContent = 'enter →';
        document.getElementById('drawer-' + d.dataset.door).hidden = true;
      });
      if (!isOpen) {
        door.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        btn.querySelector('.door-toggle').textContent = 'close ✕';
        drawer.hidden = false;
      }
    });
  });
}

// ─── Project ──────────────────────────────────────────────────────────────

function pageProject(id) {
  const p = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  const cat = CATS.find(c => c.slug === p.cat);
  const idx = PROJECTS.indexOf(p);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const client = p.id === 's71' ? 'Self / Studio 71' : p.id === 'smartcity' ? 'WSUV — Class brief' : 'Self-initiated';
  const headline = p.id === 's71' ? 'A studio of one, with a system that scales.' : 'A short story about the work.';
  const body = p.id === 's71'
    ? 'Studio 71 began in 2023 as a YouTube channel and a Saturday-morning side project. By 2025 it needed a real brand — one I could use for client work, for the channel, and for the print spreads I keep dreaming about.'
    : 'The story behind the work — what the brief was, what was hard, and what I learned getting it to the finish line.';

  return `<div class="s71-page project">
    <section class="s71-wrap project-head">
      <button class="project-back" data-nav="portfolio">← Portfolio</button>
      <div class="project-counter">
        <span>${String(idx+1).padStart(2,'0')}</span><span class="sep">/</span><span>${String(PROJECTS.length).padStart(2,'0')}</span>
      </div>
    </section>
    <div class="s71-wrap project-grid">
      <aside class="project-meta">
        <div class="meta-inner">
          ${chip(p.cat)}
          <h1 class="s71-h1 project-title">${h(p.title)}</h1>
          <div class="project-kind">${h(p.kind)} · ${p.year}</div>
          <p class="project-blurb">${h(p.blurb)}</p>
          <dl class="project-specs">
            <div><dt>Discipline</dt><dd>${h(cat?.t||'')}</dd></div>
            <div><dt>Client</dt><dd>${h(client)}</dd></div>
            <div><dt>Tools</dt><dd>Adobe CC, Figma, After FX</dd></div>
            <div><dt>Year</dt><dd>${p.year}</dd></div>
            <div><dt>Live link</dt><dd><a href="#">View ↗</a></dd></div>
          </dl>
          <div class="project-cta">
            <button class="s71-btn primary">View live <span class="s71-btn-icon" aria-hidden="true">↗</span></button>
            <button class="s71-btn secondary">Spec sheet <span class="s71-btn-icon" aria-hidden="true">↓</span></button>
          </div>
          <div class="project-share">
            <span class="share-label" aria-hidden="true">Share →</span>
            <span class="sr-only">Share this project:</span>
            <button aria-label="Share on X (Twitter)">𝕏</button>
            <button aria-label="Share on LinkedIn">in</button>
            <button aria-label="Share via email">✉</button>
            <button aria-label="Copy link" id="copy-link-btn">⌘C</button>
          </div>
        </div>
      </aside>
      <main class="project-reel">
        <div class="reel-hero">
          ${thumb(p,'16/9',true)}
          <div class="reel-hero-label tag-line">01 · The brief</div>
        </div>
        <div class="reel-prose">
          <h3 class="s71-h3">${h(headline)}</h3>
          <p>${h(body)}</p>
          <p>The brand had to feel like late nights in a small studio: tight, technical, a little bit playful. Deep purple as the bedrock, gold for emphasis, coral when something needs to stop you.</p>
        </div>
        <div class="reel-block">
          <div class="block-label tag-line">02 · Color</div>
          <div class="color-row">
            <div class="color-card" style="background:#211451"><div class="cc-meta"><b>Deep Purple</b><span>#211451</span></div></div>
            <div class="color-card" style="background:#E2A228"><div class="cc-meta dark"><b>Golden Yellow</b><span>#E2A228</span></div></div>
            <div class="color-card" style="background:#ED3D35"><div class="cc-meta"><b>Coral Red</b><span>#ED3D35</span></div></div>
          </div>
        </div>
        <div class="reel-block">
          <div class="block-label tag-line">03 · Type</div>
          <div class="type-card">
            <div class="type-row">
              <div class="type-spec">
                <div class="ts-label">Display — Orbitron</div>
                <div class="ts-sample" style="font-family:Orbitron,sans-serif;font-weight:700">Studio <span style="color:var(--yellow)">71</span></div>
              </div>
              <div class="type-spec">
                <div class="ts-label">Body — Inter</div>
                <div class="ts-sample" style="font-family:Inter,sans-serif">Capture, design, deliver — the working motto.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="reel-block">
          <div class="block-label tag-line">04 · System in use</div>
          <div class="reel-twoup">
            ${thumb({...p,title:'Cover spread',kind:'Print'},'3/4')}
            ${thumb({...p,title:'Web header',kind:'Digital'},'3/4')}
          </div>
        </div>
        <div class="reel-block">${thumb({...p,title:'Animated wordmark',kind:'Motion'},'21/9',true)}</div>
        <div class="reel-block">
          <div class="block-label tag-line">05 · Outcomes</div>
          <div class="numbers">
            <div class="num"><div class="n">4</div><div class="l">brand assets shipped</div></div>
            <div class="num"><div class="n">12pp</div><div class="l">guidelines doc</div></div>
            <div class="num"><div class="n">2025</div><div class="l">live · ongoing</div></div>
          </div>
        </div>
        <div class="reel-upnext">
          <button class="upnext-btn" data-nav="project" data-project="${prev.id}">
            <div class="un-label">← Previous</div><div class="un-title">${h(prev.title)}</div>
          </button>
          <button class="upnext-btn align-right" data-nav="project" data-project="${next.id}">
            <div class="un-label">Next →</div><div class="un-title">${h(next.title)}</div>
          </button>
        </div>
      </main>
    </div>
  </div>`;
}

// ─── About ────────────────────────────────────────────────────────────────

function pageAbout() {
  return `<div class="s71-page about">
    <section class="s71-wrap about-head">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">About — Dakotta Bhatti</div>
        <h2 class="s71-h2">A digital designer<br>from <span style="color:var(--coral)">Studio 71.</span></h2>
        <div class="s71-sub">Working in video, web, and brand from Vancouver, WA. Currently finishing a B.A. in Digital Technology &amp; Culture at WSU Vancouver.</div>
      </div>
    </section>

    <section class="s71-wrap about-portrait-row">
      <div class="portrait">
        <div class="portrait-frame">
          <div class="portrait-bg" aria-hidden="true"></div>
          <div class="portrait-label tag-line">Portrait · 2026</div>
        </div>
        <div class="portrait-meta">
          <div><b>Dakotta Bhatti</b></div>
          <div class="dim">Vancouver, WA · Pacific Time</div>
          <div class="dim">b. 1999</div>
        </div>
      </div>
      <div class="intro">
        <div class="s71-eyebrow">A letter</div>
        <p class="intro-lede">I'm a digital designer dedicated to making impactful work across video, web, and brand. I started Studio 71 in 2023 to give my curiosity a name and a place to live.</p>
        <p>My foundation is in customer service and operations — which means I show up, listen, and ship. The design vocabulary I've built since then runs from logos and posters through full responsive sites and edited video. I care about <span class="hl">careful craft</span>, useful structure, and the small bit of play that makes work feel alive.</p>
        <p>I'm finishing a B.A. in Digital Technology &amp; Culture at WSU Vancouver and looking for the next chapter. <span class="hl">Open for freelance and full-time roles</span> for Spring 2026 onward.</p>
        <div class="intro-ctas">
          <button class="s71-btn primary" data-nav="contact">Get in touch <span class="s71-btn-icon" aria-hidden="true">→</span></button>
          <button class="s71-btn">Download resume <span class="s71-btn-icon" aria-hidden="true">↓</span></button>
        </div>
      </div>
    </section>

    <section class="s71-wrap about-timeline">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Timeline</div>
        <h2 class="s71-h2">How I got here.</h2>
        <div class="s71-sub">A vertical spine — milestones in gold, work in white, notes in muted grey.</div>
      </div>
      <div class="timeline">
        <div class="timeline-spine" aria-hidden="true"></div>
        ${TIMELINE.map(e => `<div class="tl-event kind-${e.kind}">
          <div class="tl-dot" aria-hidden="true"></div>
          <div class="tl-year" aria-hidden="true">${h(e.year)}</div>
          <div class="tl-card">
            <div class="tl-tag"><span class="sr-only">${h(e.year)} — </span>${h(e.tag)}</div>
            <div class="tl-label">${h(e.label)}</div>
            <div class="tl-place">${h(e.place)}</div>
          </div>
        </div>`).join('')}
      </div>
    </section>

    <section class="s71-wrap about-skills">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Skills &amp; toolkit</div>
        <h2 class="s71-h2">What's on the desk.</h2>
        <div class="s71-sub">A working list of the tools and disciplines I reach for on most projects.</div>
      </div>
      <div class="skills-grid">
        ${SKILLS.map(s => `<div class="skill-block">
          <div class="skill-head">${h(s.group)}</div>
          <div class="skill-items">${s.items.map(it => `<span class="skill-pill">${h(it)}</span>`).join('')}</div>
        </div>`).join('')}
      </div>
    </section>

    <section class="s71-wrap about-platforms">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Elsewhere</div>
        <h2 class="s71-h2">Where the work lives.</h2>
      </div>
      <div class="platforms-grid">
        ${PLATFORMS.map(p => `<a class="platform-card" href="#" style="--platform-color:${p.color}">
          <div class="platform-icon" aria-hidden="true">${p.name.slice(0,2).toUpperCase()}</div>
          <div class="platform-meta">
            <div class="platform-name">${h(p.name)}</div>
            <div class="platform-handle">${h(p.handle)}</div>
            <div class="platform-tag">${h(p.tag)}</div>
          </div>
          <div class="platform-arrow" aria-hidden="true">↗</div>
        </a>`).join('')}
      </div>
    </section>

    <section class="s71-wrap about-cards">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">On the side</div>
        <h2 class="s71-h2">A few more cards.</h2>
        <div class="s71-sub">The bits of me that don't fit a CV.</div>
      </div>
      <div class="card-stack">
        <div class="ix-card now" style="--rot:-1.2deg">
          <div class="ix-head">Now</div>
          <div class="ix-body">Finishing DTC at WSUV. Drafting a print zine. Looking for the right team to join.</div>
          <div class="ix-foot tag-line">Spring 2026</div>
        </div>
        <div class="ix-card moto" style="--rot:1.4deg">
          <div class="ix-head">Working motto</div>
          <div class="ix-body big">Capture.<br>Design.<br><span style="color:var(--yellow)">Deliver.</span></div>
        </div>
        <div class="ix-card list" style="--rot:-0.6deg">
          <div class="ix-head">Currently consuming</div>
          <ul>
            <li>♪ Studio mix #12 — Sunday loop</li>
            <li>▶ Watching: indie shorts &amp; behind-the-scenes</li>
            <li>★ Reading: Grid Systems by Müller-Brockmann</li>
            <li>✦ Liking: small studios with big personalities</li>
          </ul>
        </div>
        <div class="ix-card stats" style="--rot:0.8deg">
          <div class="ix-head">A few numbers</div>
          <div class="ix-stats">
            <div><b>9</b><span>projects shipped</span></div>
            <div><b>3</b><span>disciplines daily</span></div>
            <div><b>2023</b><span>est.</span></div>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}

// ─── Contact ──────────────────────────────────────────────────────────────

function pageContact() {
  const { day, time } = st.cal;
  const slots = SLOTS[day] || [];
  const DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const DAY_ABBR  = ['M','T','W','T','F','S','S'];
  const TODAY = 10;

  let calCells = [0,0,0].map((_,i) => `<div aria-hidden="true"></div>`).join('');
  for (let d = 1; d <= 31; d++) {
    const avail = AVAIL_DAYS.includes(d);
    const cls = ['cal-day', d===day?'picked':'', d===TODAY?'today':'', avail?'avail':'na'].filter(Boolean).join(' ');
    calCells += `<button class="${cls}" ${!avail?'disabled':''} data-cal-day="${d}"
      aria-label="March ${d}${d===TODAY?', today':''}${!avail?', unavailable':''}"
      ${avail?`aria-pressed="${d===day}"`:''} >${d}</button>`;
  }

  const slotBtns = slots.length
    ? slots.map(s => `<button class="cal-slot${s===time?' picked':''}" data-cal-slot="${s}"
        aria-label="${s} PST" aria-pressed="${s===time}">${s}</button>`).join('')
    : `<div class="no-slots">Pick a day with availability.</div>`;

  return `<div class="s71-page contact">
    <section class="s71-wrap contact-head">
      <div class="s71-secthead align-left">
        <div class="s71-eyebrow">Get in Touch</div>
        <h2 class="s71-h2">Let's <span style="color:var(--yellow)">talk.</span></h2>
        <div class="s71-sub">Book a 20-minute intro call, or fire over a project brief. I respond within a day or two.</div>
      </div>
    </section>

    <section class="s71-wrap contact-main">
      <div class="brief">
        <div class="brief-head">
          <div class="s71-eyebrow">Project brief</div>
          <div class="brief-progress">
            <span class="${st.form.name?'done':''}">· name</span>
            <span class="${st.form.kind?'done':''}">· kind</span>
            <span class="${st.form.message?'done':''}">· note</span>
          </div>
        </div>
        <label class="field">
          <span class="field-label">Your name</span>
          <input class="field-input" type="text" id="f-name" placeholder="Jane Designer" value="${h(st.form.name)}">
        </label>
        <label class="field">
          <span class="field-label">Company / project</span>
          <input class="field-input" type="text" id="f-company" placeholder="Acme Inc · a new identity" value="${h(st.form.company)}">
        </label>
        <div class="field">
          <span class="field-label" id="kind-label">Project kind</span>
          <div class="kind-chips" role="group" aria-labelledby="kind-label">
            ${PROJECT_KINDS.map(k => `<button type="button" class="kind-chip${st.form.kind===k?' active':''}"
              aria-pressed="${st.form.kind===k}" data-kind="${h(k)}">${h(k)}</button>`).join('')}
          </div>
        </div>
        <label class="field">
          <span class="field-label">A short note</span>
          <textarea class="field-input textarea" id="f-message" rows="4"
            placeholder="A few sentences about the project, timeline, and what you'd like to chat about.">${h(st.form.message)}</textarea>
        </label>
      </div>

      <div class="calendar">
        <div class="cal-head">
          <div>
            <div class="s71-eyebrow">Pick a day</div>
            <div class="cal-title">March 2026 · PST</div>
          </div>
          <div class="cal-nav">
            <button aria-label="Previous month">‹</button>
            <button aria-label="Next month">›</button>
          </div>
        </div>
        <div class="cal-days" aria-hidden="true">
          ${DAY_ABBR.map((a,i) => `<div class="cal-dow" title="${DAY_NAMES[i]}">${a}</div>`).join('')}
        </div>
        <div class="cal-grid">${calCells}</div>
        <div class="cal-slots-wrap">
          <div class="slots-head">
            <span id="slots-date">Thu Mar ${day} — slots</span>
            <span class="slots-count" id="slots-count">${slots.length} avail.</span>
          </div>
          <div class="cal-slots" id="cal-slots">${slotBtns}</div>
        </div>
        <div class="cal-summary">
          <div>
            <div class="cs-eyebrow">Booking</div>
            <div class="cs-line" id="cs-line">${time ? `Thu Mar ${day} · ${time} PST` : 'Pick a slot →'}</div>
            <div class="cs-sub">20 minutes · video call</div>
          </div>
          <button class="s71-btn primary" id="book-btn">Book the call <span class="s71-btn-icon" aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>

    <section class="s71-wrap contact-direct">
      <div class="direct-divider"><span>or — skip the form</span></div>
      <div class="direct-grid">
        <a class="direct-card" href="mailto:contact.me@studios71.com" style="--dc-color:#E2A228">
          <div class="dc-glyph" aria-hidden="true">✉</div>
          <div class="dc-name">Email</div><div class="dc-handle">contact.me@studios71.com</div>
          <div class="dc-cta">Open ↗</div>
        </a>
        <a class="direct-card" href="#" style="--dc-color:#0a66c2">
          <div class="dc-glyph" aria-hidden="true">in</div>
          <div class="dc-name">LinkedIn</div><div class="dc-handle">@dakottabhatti</div>
          <div class="dc-cta">Message ↗</div>
        </a>
        <a class="direct-card" href="#" style="--dc-color:#FF0033">
          <div class="dc-glyph" aria-hidden="true">▶</div>
          <div class="dc-name">YouTube</div><div class="dc-handle">@Studios-71</div>
          <div class="dc-cta">Subscribe ↗</div>
        </a>
      </div>
    </section>

    <section class="s71-wrap contact-faq">
      <div class="faq-grid">
        <div><div class="s71-eyebrow">Reply time</div><div class="faq-answer">Within 1–2 business days, PST.</div></div>
        <div><div class="s71-eyebrow">Currently</div><div class="faq-answer">Open for freelance &amp; full-time from Spring 2026.</div></div>
        <div><div class="s71-eyebrow">Working hours</div><div class="faq-answer">M–F, 9–6 PT. Weekends for the side projects.</div></div>
      </div>
    </section>
  </div>`;
}

function initContact() {
  const q = id => document.getElementById(id);

  q('f-name')?.addEventListener('input', e => { st.form.name = e.target.value; refreshProgress(); });
  q('f-company')?.addEventListener('input', e => { st.form.company = e.target.value; });
  q('f-message')?.addEventListener('input', e => { st.form.message = e.target.value; refreshProgress(); });

  document.querySelectorAll('.kind-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      st.form.kind = btn.dataset.kind;
      document.querySelectorAll('.kind-chip').forEach(b => {
        b.classList.toggle('active', b.dataset.kind === st.form.kind);
        b.setAttribute('aria-pressed', String(b.dataset.kind === st.form.kind));
      });
      refreshProgress();
    });
  });

  document.querySelectorAll('[data-cal-day]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      const day = +btn.dataset.calDay;
      st.cal.day = day;
      st.cal.time = (SLOTS[day] || [])[0] || null;
      refreshCal();
    });
  });

  bindSlotClicks();

  q('book-btn')?.addEventListener('click', () => alert('In a real build this would confirm the booking.'));
}

function bindSlotClicks() {
  document.querySelectorAll('[data-cal-slot]').forEach(btn => {
    btn.addEventListener('click', () => {
      st.cal.time = btn.dataset.calSlot;
      document.querySelectorAll('[data-cal-slot]').forEach(b => {
        b.classList.toggle('picked', b.dataset.calSlot === st.cal.time);
        b.setAttribute('aria-pressed', String(b.dataset.calSlot === st.cal.time));
      });
      const line = document.getElementById('cs-line');
      if (line) line.textContent = `Thu Mar ${st.cal.day} · ${st.cal.time} PST`;
    });
  });
}

function refreshCal() {
  const { day, time } = st.cal;
  const slots = SLOTS[day] || [];

  document.querySelectorAll('[data-cal-day]').forEach(btn => {
    const d = +btn.dataset.calDay;
    btn.classList.toggle('picked', d === day);
    if (!btn.disabled) btn.setAttribute('aria-pressed', String(d === day));
  });

  const slotsEl = document.getElementById('cal-slots');
  if (slotsEl) {
    slotsEl.innerHTML = slots.length
      ? slots.map(s => `<button class="cal-slot${s===time?' picked':''}" data-cal-slot="${s}"
          aria-label="${s} PST" aria-pressed="${s===time}">${s}</button>`).join('')
      : `<div class="no-slots">Pick a day with availability.</div>`;
    bindSlotClicks();
  }

  const dateEl = document.getElementById('slots-date');
  const countEl = document.getElementById('slots-count');
  if (dateEl) dateEl.textContent = `Thu Mar ${day} — slots`;
  if (countEl) countEl.textContent = `${slots.length} avail.`;

  const lineEl = document.getElementById('cs-line');
  if (lineEl) lineEl.textContent = time ? `Thu Mar ${day} · ${time} PST` : 'Pick a slot →';
}

function refreshProgress() {
  const spans = document.querySelectorAll('.brief-progress span');
  if (spans[0]) spans[0].className = st.form.name    ? 'done' : '';
  if (spans[1]) spans[1].className = st.form.kind    ? 'done' : '';
  if (spans[2]) spans[2].className = st.form.message ? 'done' : '';
}

// ─── Footer ───────────────────────────────────────────────────────────────

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="s71-footer-grid">
      <div>
        <div class="s71-footer-brand"><span class="brand-studio">Studio</span><span class="brand-71">71</span></div>
        <div class="s71-footer-tag">CAPTURE · DESIGN · DELIVER</div>
        <div class="s71-footer-meta">© 2026 Dakotta Bhatti · Vancouver WA</div>
      </div>
      <div>
        <div class="s71-footer-head">Pages</div>
        <button class="s71-footer-link" data-nav="home">Home</button>
        <button class="s71-footer-link" data-nav="portfolio">Portfolio</button>
        <button class="s71-footer-link" data-nav="about">About</button>
        <button class="s71-footer-link" data-nav="contact">Get in Touch</button>
      </div>
      <div>
        <div class="s71-footer-head">Disciplines</div>
        ${CATS.map(c => `<button class="s71-footer-link" data-nav="portfolio">${h(c.t)}</button>`).join('')}
      </div>
      <div>
        <div class="s71-footer-head">Elsewhere</div>
        <a class="s71-footer-link" href="#">YouTube · @Studios-71 ↗</a>
        <a class="s71-footer-link" href="#">LinkedIn ↗</a>
        <a class="s71-footer-link" href="#">Vimeo ↗</a>
        <a class="s71-footer-link" href="#">contact.me@studios71.com</a>
      </div>
    </div>`;
}

// ─── Boot ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderFooter();

  // Click delegation
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-nav]');
    if (el) nav(el.dataset.nav, el.dataset.project);

    if (e.target.id === 'copy-link-btn') {
      navigator.clipboard?.writeText(location.href).catch(() => {});
    }
  });

  // Keyboard delegation for role=button divs
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('[role="button"][data-nav]');
    if (el) { e.preventDefault(); nav(el.dataset.nav, el.dataset.project); }
  });

  nav('home');
});
