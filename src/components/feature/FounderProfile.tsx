import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import founder from '../../content/founder.json';

type Block = { type: string; text?: string; items?: string[] };

/**
 * Mr Morris Kizito Mukasa's profile, told in chapters.
 * Only the first chapter is open. "Read more" opens the next one, so nobody faces a wall of text;
 * the chapter list lets a reader jump straight to what interests them.
 * `preview` (home page) shows the opening chapter and hands over to the full profile page.
 */
export default function FounderProfile({ preview = false }: { preview?: boolean }) {
  const chapters = founder.chapters;
  const [open, setOpen] = useState(1); // how many chapters are open, from the top
  const refs = useRef<(HTMLElement | null)[]>([]);
  const justOpened = useRef<number | null>(null);

  useEffect(() => {
    if (justOpened.current === null) return;
    const el = refs.current[justOpened.current];
    justOpened.current = null;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    el.querySelector<HTMLElement>('h3')?.focus({ preventScroll: true });
  }, [open]);

  const goTo = (index: number) => {
    justOpened.current = index;
    setOpen((n) => Math.max(n, index + 1));
    if (index < open) {
      // already open: the effect will not run, so move there now
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      refs.current[index]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      justOpened.current = null;
    }
  };

  const next = chapters[open];
  const shown = preview ? chapters.slice(0, 1) : chapters.slice(0, open);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Portrait and chapter list */}
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <div className="relative max-w-xs mx-auto lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-navy-50">
              <img src={founder.photo} alt={founder.photoAlt} className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-3 left-4 right-4 bg-primary text-white px-4 py-3 border-l-4 border-accent shadow-lg">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">Leadership</p>
              <p className="text-sm font-semibold leading-snug">{founder.role}</p>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 justify-center lg:justify-start">
            {(founder.identity || []).map((line, i) => (
              <li key={line} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />}
                {line}
              </li>
            ))}
          </ul>

          {!preview && (
            <nav aria-label="Chapters of the profile" className="hidden lg:block mt-8 border-t border-gray-200 pt-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold mb-3">In this profile</p>
              <ol className="space-y-1">
                {chapters.map((c, i) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className={`group w-full text-left flex gap-3 py-1.5 text-sm cursor-pointer transition-colors ${i < open ? 'text-primary font-medium' : 'text-gray-500 hover:text-primary'}`}
                    >
                      <span className={`mt-0.5 font-semibold tabular-nums ${i < open ? 'text-[#8a6d10]' : 'text-gray-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="group-hover:underline underline-offset-4">{c.title}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </aside>

      {/* Chapters */}
      <div className="lg:col-span-8">
        <p className="text-[#8a6d10] font-semibold tracking-wide text-sm uppercase">{(founder.titles || []).join(' · ')}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-['Playfair_Display'] leading-tight">{founder.name}</h2>

        <div className="mt-8 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" aria-hidden="true" />
          {shown.map((c, i) => (
            <section
              key={c.id}
              id={`profile-${c.id}`}
              ref={(el) => { refs.current[i] = el; }}
              className="relative pl-10 pb-10 scroll-mt-28 founder-chapter"
              aria-labelledby={`profile-${c.id}-title`}
            >
              <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-accent flex items-center justify-center text-[10px] font-bold text-primary" aria-hidden="true">{i + 1}</span>
              <h3 id={`profile-${c.id}-title`} tabIndex={-1} className="text-xl sm:text-2xl font-bold text-primary font-['Playfair_Display'] outline-none">{c.title}</h3>
              <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-base sm:text-[17px]">
                {((c.blocks || []) as Block[]).slice(0, preview ? 2 : undefined).map((b, k) =>
                  b.type === 'list' ? (
                    <ul key={k} className="space-y-2">
                      {(b.items || []).map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={k}>{b.text}</p>
                  ),
                )}
              </div>
            </section>
          ))}

          {/* What comes next */}
          <div className="relative pl-10">
            <span className="absolute left-0 top-3 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary" aria-hidden="true">
              <i className={preview || next ? 'ri-arrow-down-line text-sm' : 'ri-check-line text-sm'} />
            </span>
            {preview ? (
              <Link to={founder.path} className="group inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-primary text-white px-6 py-4 rounded-sm hover:bg-primary-light transition-colors">
                <span className="font-semibold">Read the full profile</span>
                <span className="text-sm text-white/70">{chapters.length} short chapters <i className="ri-arrow-right-line ml-1 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ) : next ? (
              <button
                type="button"
                onClick={() => goTo(open)}
                aria-controls={`profile-${next.id}`}
                className="group w-full text-left border border-gray-200 hover:border-accent bg-white hover:bg-navy-50 px-6 py-5 rounded-sm transition-colors cursor-pointer"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8a6d10] font-semibold">Read more · chapter {open + 1} of {chapters.length}</span>
                <span className="mt-1 flex items-center justify-between gap-4">
                  <span>
                    <span className="block text-lg font-bold text-primary font-['Playfair_Display']">{next.title}</span>
                    {next.teaser && <span className="block text-sm text-gray-600 mt-0.5">{next.teaser}</span>}
                  </span>
                  <i className="ri-arrow-down-s-line text-2xl text-primary transition-transform group-hover:translate-y-1" aria-hidden="true" />
                </span>
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-4 py-2">
                <p className="text-gray-600">You have read the full profile.</p>
                <button type="button" onClick={() => { setOpen(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-primary font-semibold underline underline-offset-4 hover:text-[#8a6d10] cursor-pointer">
                  Back to the start
                </button>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary px-5 py-2.5 rounded-sm font-semibold transition-colors">
                  Contact KWETU CONNECT <i className="ri-arrow-right-line" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
