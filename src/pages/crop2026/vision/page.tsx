import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import copy from '../../../content/pages/crop2026-vision.json';
// Text, images and links: src/content/pages/crop2026-vision.json (editable in the website editors).

const globalContext = copy.globalContext;

const pillars = copy.pillars;

const crossCutting = copy.crossCutting;

const methodology = copy.methodology;

export default function VisionPage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero Banner */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={copy.heroBanner.image}
              alt={copy.heroBanner.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{copy.heroBanner.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.heroBanner.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{copy.heroBanner.text}</p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.executiveSummary.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.executiveSummary.text}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{copy.executiveSummary.text2}<strong className="text-[#0A2540]">{copy.executiveSummary.bold}</strong>{copy.executiveSummary.text3}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{copy.executiveSummary.text4}</p>
            </div>
          </div>
        </section>

        {/* Global Context */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.globalContextSection.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.globalContextSection.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalContext.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Central Question */}
        <section className="py-20 bg-[#0A2540]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-4 block">{copy.centralQuestion.label}</span>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed">{copy.centralQuestion.quote}</blockquote>
          </div>
        </section>

        {/* Six Strategic Pillars Detailed */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.sixStrategicPillarsDetailed.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.sixStrategicPillarsDetailed.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.sixStrategicPillarsDetailed.text}</p>
            </div>
            <div className="space-y-10">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${pillar.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className={`${pillar.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">{pillar.num}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <i className="ri-focus-3-line text-[#D4AF37]"></i>{copy.sixStrategicPillarsDetailed.subheading}</h4>
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
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <i className="ri-award-line text-[#D4AF37]"></i>{copy.sixStrategicPillarsDetailed.subheading2}</h4>
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
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Cutting Themes */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.crossCuttingThemes.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.crossCuttingThemes.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.crossCuttingThemes.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crossCutting.map((theme) => (
                <div key={theme.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${theme.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{theme.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conference Methodology */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.conferenceMethodology.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.conferenceMethodology.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.conferenceMethodology.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
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
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>{copy.cta.text2}</Link>
              <Link
                to="/crop2026/programme"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-calendar-line text-lg"></i>{copy.cta.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}