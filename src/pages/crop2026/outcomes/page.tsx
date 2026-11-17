import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import copy from '../../../content/pages/crop2026-outcomes.json';
// Text, images and links: src/content/pages/crop2026-outcomes.json (editable in the website editors).

const primaryOutcomes = copy.primaryOutcomes;

const additionalOutputs = copy.additionalOutputs;

const timeline = copy.timeline;

export default function OutcomesPage() {
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

        {/* Primary Outcomes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.primaryOutcomesSection.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.primaryOutcomesSection.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.primaryOutcomesSection.text}</p>
            </div>
            <div className="space-y-10">
              {primaryOutcomes.map((outcome) => (
                <div key={outcome.title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${outcome.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className={`${outcome.icon} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {outcome.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{outcome.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3">{copy.primaryOutcomesSection.subheading}</h4>
                        <ul className="space-y-2">
                          {outcome.components.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                              <i className="ri-checkbox-circle-fill text-[#D4AF37] mt-0.5 flex-shrink-0"></i>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-gray-100">
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <i className="ri-bar-chart-line text-[#D4AF37]"></i>{copy.primaryOutcomesSection.subheading2}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{outcome.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Outputs */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.additionalOutputsSection.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.additionalOutputsSection.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.additionalOutputsSection.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalOutputs.map((output) => (
                <div key={output.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${output.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{output.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{output.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.impactTimeline.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.impactTimeline.heading}</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30 hidden md:block"></div>
              <div className="space-y-8">
                {timeline.map((phase, idx) => (
                  <div key={phase.phase} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A2540] font-bold shadow-lg">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className="text-xl font-bold text-[#0A2540] mb-4">{phase.phase}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <i className="ri-check-line text-[#D4AF37] mt-0.5 flex-shrink-0"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
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
                to="/crop2026/partnership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-hand-heart-line text-lg"></i>{copy.cta.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}