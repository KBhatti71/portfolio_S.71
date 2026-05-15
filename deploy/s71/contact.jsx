// s71-contact.jsx — Contact page: Calendar + Brief direction

const PROJECT_KINDS = [
  'Brand identity',
  'Website / web design',
  'UX / product',
  'Video production',
  'Editing only',
  'Print / poster',
  'Something else',
];

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function ContactPage({ setPage }) {
  const [picked, setPicked] = React.useState({ day: 12, time: '11:00' });
  const [form, setForm] = React.useState({ name: '', company: '', kind: '', message: '' });

  // a small fake month
  const today = 10;
  const availableDays = [3, 5, 9, 10, 12, 13, 17, 19, 24, 26, 27, 31];
  const slotsByDay = {
    3:  ['10:00', '11:00', '2:00', '3:30'],
    5:  ['9:30', '10:30', '1:00'],
    9:  ['10:00', '2:00'],
    10: ['11:00', '1:30', '3:00'],
    12: ['10:00', '11:00', '1:00', '2:30', '4:00'],
    13: ['9:00', '10:30'],
    17: ['10:00', '11:00', '2:00'],
    19: ['1:30', '3:00'],
    24: ['10:00', '11:00', '1:00'],
    26: ['9:30', '2:30'],
    27: ['11:00'],
    31: ['10:00', '11:00', '1:00', '2:00'],
  };
  const slots = slotsByDay[picked.day] || [];

  return (
    <div className="s71-page contact">
      <section className="s71-wrap contact-head">
        <SectionHead
          eyebrow="Get in Touch"
          title={<>Let's <span style={{ color: 'var(--yellow)' }}>talk.</span></>}
          sub="Book a 20-minute intro call, or fire over a project brief. I respond within a day or two."
        />
      </section>

      {/* MAIN — BRIEF + CALENDAR ──────────────────────────────── */}
      <section className="s71-wrap contact-main">
        <div className="brief">
          <div className="brief-head">
            <div className="s71-eyebrow">Project brief</div>
            <div className="brief-progress">
              <span className={form.name ? 'done' : ''}>· name</span>
              <span className={form.kind ? 'done' : ''}>· kind</span>
              <span className={form.message ? 'done' : ''}>· note</span>
            </div>
          </div>

          <label className="field">
            <span className="field-label">Your name</span>
            <input className="field-input"
              type="text" placeholder="Jane Designer"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </label>

          <label className="field">
            <span className="field-label">Company / project</span>
            <input className="field-input"
              type="text" placeholder="Acme Inc · a new identity"
              value={form.company}
              onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
          </label>

          <div className="field">
            <span className="field-label">Project kind</span>
            <div className="kind-chips">
              {PROJECT_KINDS.map(k => (
                <button key={k} type="button"
                  className={`kind-chip ${form.kind === k ? 'active' : ''}`}
                  onClick={() => setForm(f => ({ ...f, kind: k }))}>
                  {k}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span className="field-label">A short note</span>
            <textarea className="field-input textarea"
              rows={4}
              placeholder="A few sentences about the project, timeline, and what you'd like to chat about."
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
          </label>
        </div>

        {/* CALENDAR ──────────────────────────────────────────── */}
        <div className="calendar">
          <div className="cal-head">
            <div>
              <div className="s71-eyebrow">Pick a day</div>
              <div className="cal-title">March 2026 · PST</div>
            </div>
            <div className="cal-nav">
              <button>‹</button>
              <button>›</button>
            </div>
          </div>

          <div className="cal-days">
            {DAYS.map((d, i) => <div key={i} className="cal-dow">{d}</div>)}
          </div>
          <div className="cal-grid">
            {/* offset: month starts on a Sunday in 2026 March (so Mon=2nd) — we just fake 3 blanks */}
            {[0, 0, 0].map((_, i) => <div key={'b' + i} />)}
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const avail = availableDays.includes(day);
              const isToday = day === today;
              const isPicked = day === picked.day;
              return (
                <button key={day}
                  disabled={!avail}
                  className={`cal-day ${isPicked ? 'picked' : ''} ${isToday ? 'today' : ''} ${avail ? 'avail' : 'na'}`}
                  onClick={() => setPicked(p => ({ ...p, day, time: (slotsByDay[day] || [])[0] || null }))}>
                  {day}
                </button>
              );
            })}
          </div>

          <div className="cal-slots-wrap">
            <div className="slots-head">
              <span>Thu Mar {picked.day} — slots</span>
              <span className="slots-count">{slots.length} avail.</span>
            </div>
            <div className="cal-slots">
              {slots.length ? slots.map(s => (
                <button key={s}
                  className={`cal-slot ${picked.time === s ? 'picked' : ''}`}
                  onClick={() => setPicked(p => ({ ...p, time: s }))}>
                  {s}
                </button>
              )) : <div className="no-slots">Pick a day with availability.</div>}
            </div>
          </div>

          <div className="cal-summary">
            <div>
              <div className="cs-eyebrow">Booking</div>
              <div className="cs-line">
                {picked.time ? `Thu Mar ${picked.day} · ${picked.time} PST` : 'Pick a slot →'}
              </div>
              <div className="cs-sub">20 minutes · video call</div>
            </div>
            <Btn primary icon="→" onClick={() => alert('In a real build this would confirm the booking.')}>
              Book the call
            </Btn>
          </div>
        </div>
      </section>

      {/* OR — DIRECT LINES ─────────────────────────────────────── */}
      <section className="s71-wrap contact-direct">
        <div className="direct-divider">
          <span>or — skip the form</span>
        </div>
        <div className="direct-grid">
          <a className="direct-card" href="mailto:contact.me@studios71.com" style={{ '--dc-color': S71.yellow }}>
            <div className="dc-glyph">✉</div>
            <div className="dc-name">Email</div>
            <div className="dc-handle">contact.me@studios71.com</div>
            <div className="dc-cta">Open ↗</div>
          </a>
          <a className="direct-card" href="#" style={{ '--dc-color': '#0a66c2' }}>
            <div className="dc-glyph">in</div>
            <div className="dc-name">LinkedIn</div>
            <div className="dc-handle">@dakottabhatti</div>
            <div className="dc-cta">Message ↗</div>
          </a>
          <a className="direct-card" href="#" style={{ '--dc-color': '#FF0033' }}>
            <div className="dc-glyph">▶</div>
            <div className="dc-name">YouTube</div>
            <div className="dc-handle">@Studios-71</div>
            <div className="dc-cta">Subscribe ↗</div>
          </a>
        </div>
      </section>

      {/* FAQ STRIP ────────────────────────────────────────────── */}
      <section className="s71-wrap contact-faq">
        <div className="faq-grid">
          <div>
            <div className="s71-eyebrow">Reply time</div>
            <div className="faq-answer">Within 1–2 business days, PST.</div>
          </div>
          <div>
            <div className="s71-eyebrow">Currently</div>
            <div className="faq-answer">Open for freelance &amp; full-time from Spring 2026.</div>
          </div>
          <div>
            <div className="s71-eyebrow">Working hours</div>
            <div className="faq-answer">M–F, 9–6 PT. Weekends for the side projects.</div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-head { padding-top: 64px; }

        /* MAIN GRID */
        .contact-main {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 36px;
          align-items: flex-start;
        }
        @media (max-width: 1024px) { .contact-main { grid-template-columns: 1fr; } }

        /* BRIEF */
        .brief {
          padding: 36px 36px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          display: flex; flex-direction: column; gap: 22px;
        }
        .brief-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 4px;
        }
        .brief-head .s71-eyebrow { margin-bottom: 0; }
        .brief-progress {
          display: flex; gap: 8px;
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .brief-progress .done { color: var(--yellow); }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field-label {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .field-input {
          width: 100%;
          padding: 14px 16px;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: var(--white);
          font-family: var(--body);
          font-size: 15px;
          transition: border-color .2s, background .2s;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.3); }
        .field-input:focus {
          outline: none;
          border-color: var(--yellow);
          background: rgba(0,0,0,0.3);
        }
        .field-input.textarea { resize: vertical; min-height: 100px; }
        .kind-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .kind-chip {
          padding: 8px 14px;
          font-size: 13px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          color: rgba(255,255,255,0.7);
          transition: all .15s;
        }
        .kind-chip:hover { background: rgba(255,255,255,0.08); color: var(--white); }
        .kind-chip.active {
          background: var(--yellow);
          border-color: var(--yellow);
          color: var(--purple);
          font-weight: 500;
        }

        /* CALENDAR */
        .calendar {
          padding: 30px 30px 28px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          position: sticky;
          top: 96px;
        }
        @media (max-width: 1024px) { .calendar { position: static; } }
        .cal-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 20px;
        }
        .cal-head .s71-eyebrow { margin-bottom: 6px; }
        .cal-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: 22px;
        }
        .cal-nav { display: flex; gap: 6px; }
        .cal-nav button {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--white);
          font-size: 16px;
        }
        .cal-nav button:hover { background: rgba(255,255,255,0.1); }
        .cal-days, .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .cal-dow {
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.4);
          padding: 6px 0;
        }
        .cal-day {
          aspect-ratio: 1;
          border-radius: 8px;
          font-family: var(--display);
          font-size: 13px;
          background: transparent;
          border: 1px solid transparent;
          color: rgba(255,255,255,0.85);
          transition: background .15s, border-color .15s, color .15s, transform .1s;
        }
        .cal-day.na { color: rgba(255,255,255,0.18); cursor: default; }
        .cal-day.avail { border-color: rgba(255,255,255,0.1); }
        .cal-day.avail:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.25); }
        .cal-day.today { border-color: rgba(226,162,40,0.5); }
        .cal-day.picked {
          background: var(--yellow);
          color: var(--purple);
          border-color: var(--yellow);
          font-weight: 600;
        }

        .cal-slots-wrap { margin-top: 22px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.06); }
        .slots-head {
          display: flex; justify-content: space-between;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 10px;
        }
        .slots-count { color: var(--yellow); }
        .cal-slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
          gap: 6px;
        }
        .cal-slot {
          padding: 10px;
          font-size: 13px;
          font-family: var(--display);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: rgba(255,255,255,0.85);
        }
        .cal-slot:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.25); }
        .cal-slot.picked {
          background: var(--yellow);
          color: var(--purple);
          border-color: var(--yellow);
          font-weight: 600;
        }
        .no-slots { font-size: 13px; color: rgba(255,255,255,0.4); padding: 8px 0; }

        .cal-summary {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          gap: 14px;
        }
        .cs-eyebrow { font-size: 10px; letter-spacing: 0.18em; color: rgba(255,255,255,0.5); text-transform: uppercase; }
        .cs-line {
          font-family: var(--display);
          font-weight: 700;
          font-size: 18px;
          margin-top: 4px;
          color: var(--white);
        }
        .cs-sub { font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 2px; }

        /* DIRECT */
        .contact-direct { padding-top: 96px; }
        .direct-divider {
          text-align: center;
          margin-bottom: 30px;
          color: rgba(255,255,255,0.45);
          font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
          position: relative;
        }
        .direct-divider span {
          padding: 0 16px;
          background: var(--purple); position: relative; z-index: 1;
        }
        .direct-divider::before {
          content: ''; display: block; height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: -8px;
        }
        .direct-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 880px) { .direct-grid { grid-template-columns: 1fr; } }
        .direct-card {
          padding: 28px 26px 24px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
          display: flex; flex-direction: column; gap: 6px;
          transition: border-color .2s, transform .2s, background .2s;
        }
        .direct-card:hover {
          border-color: var(--dc-color);
          transform: translateY(-2px);
          background: color-mix(in oklab, var(--dc-color) 6%, rgba(255,255,255,0.025));
        }
        .dc-glyph {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--dc-color);
          color: var(--white);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--display); font-weight: 700; font-size: 18px;
          margin-bottom: 14px;
        }
        .dc-name { font-family: var(--display); font-weight: 700; font-size: 22px; }
        .dc-handle { font-size: 14px; color: rgba(255,255,255,0.7); }
        .dc-cta {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--dc-color);
        }

        /* FAQ */
        .contact-faq {
          padding-top: 64px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          padding: 32px 36px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius);
        }
        @media (max-width: 720px) { .faq-grid { grid-template-columns: 1fr; } }
        .faq-grid .s71-eyebrow { margin-bottom: 8px; }
        .faq-answer { font-size: 15px; line-height: 1.5; }
      `}</style>
    </div>
  );
}

Object.assign(window, { ContactPage });
