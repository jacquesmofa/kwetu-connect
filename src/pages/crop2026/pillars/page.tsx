import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import copy from '../../../content/pages/crop2026-pillars.json';
// Text, images and links: src/content/pages/crop2026-pillars.json (editable in the website editors).

const pillars = copy.pillars;

export default function PillarsPage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={copy.hero.image}
              alt={copy.hero.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{copy.hero.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.hero.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{copy.hero.text}</p>
          </div>
        </section>

        {/* Pillars Detailed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {pillars.map((pillar, idx) => (
                <div key={pillar.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                      <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${pillar.icon} text-xl text-white`}></i>
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider text-gray-400">{copy.pillarsDetailed.label}{pillar.num}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pillar.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{pillar.subtitle}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <i className="ri-focus-3-line text-[#D4AF37]"></i>{copy.pillarsDetailed.subheading}</h4>
                        <ul className="space-y-2">
                          {pillar.focus.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <i className="ri-checkbox-circle-fill text-[#D4AF37] mt-0.5 flex-shrink-0"></i>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <i className="ri-award-line text-[#D4AF37]"></i>{copy.pillarsDetailed.subheading2}</h4>
                        <ul className="space-y-2">
                          {pillar.outcomes.map((o, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <i className="ri-check-double-line text-green-600 mt-0.5 flex-shrink-0"></i>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.cta.heading}</h2>
            <p className="text-lg text-white/80 mb-8">{copy.cta.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/crop2026/programme"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-calendar-line text-lg"></i>{copy.cta.text2}</Link>
              <Link
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>{copy.cta.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}