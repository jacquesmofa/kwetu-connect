import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import copy from '../../../content/pages/crop2026-venue.json';
// Text, images and links: src/content/pages/crop2026-venue.json (editable in the website editors).

export default function VenuePage() {
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

        {/* The Dome */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">{copy.theDome.label}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.theDome.heading}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{copy.theDome.text}</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-2-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">{copy.theDome.text2}</div>
                      <div className="text-gray-600">{copy.theDome.text3}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-train-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">{copy.theDome.text4}</div>
                      <div className="text-gray-600">{copy.theDome.text5}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-global-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">{copy.theDome.text6}</div>
                      <a href={copy.theDome.url} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">{copy.theDome.link}</a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {copy.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-green-600 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-64 rounded-2xl overflow-hidden">
                  <img
                    src={copy.theDome.image}
                    alt={copy.theDome.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full h-40 rounded-xl overflow-hidden">
                    <img
                      src={copy.theDome.image2}
                      alt={copy.theDome.imageAlt2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-40 rounded-xl overflow-hidden">
                    <img
                      src={copy.theDome.image3}
                      alt={copy.theDome.imageAlt3}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Benefits */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.travelBenefits.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-2xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{benefit.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold text-sm hover:text-[#C4A137] transition-colors">
                    {benefit.cta} <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">{copy.travelBenefits.text}</p>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.locationMap.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.locationMap.heading}</h2>
            </div>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={copy.locationMap.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title={copy.locationMap.title}
              ></iframe>
            </div>
          </div>
        </section>

        {/* Travel & Logistics */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.travelAndLogistics.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#0A2540] rounded-lg flex items-center justify-center">
                      <i className={`${section.icon} text-lg text-[#D4AF37]`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2540]">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discover Sydney */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.discoverSydney.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.discoverSydney.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{copy.discoverSydney.text}</p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{copy.discoverSydney.text2}</p>
                <div className="grid grid-cols-2 gap-4">
                  {copy.highlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-start gap-2">
                      <i className={`${highlight.icon} text-[#D4AF37] mt-0.5 flex-shrink-0`}></i>
                      <div>
                        <div className="font-semibold text-[#0A2540] text-sm">{highlight.title}</div>
                        <div className="text-gray-600 text-xs">{highlight.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src={copy.discoverSydney.image}
                      alt={copy.discoverSydney.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">{copy.discoverSydney.text3}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src={copy.discoverSydney.image2}
                      alt={copy.discoverSydney.imageAlt2}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">{copy.discoverSydney.text4}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src={copy.discoverSydney.image3}
                      alt={copy.discoverSydney.imageAlt3}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">{copy.discoverSydney.text5}</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src={copy.discoverSydney.image4}
                      alt={copy.discoverSydney.imageAlt4}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">{copy.discoverSydney.text6}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Assistance */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.needAssistance.heading}</h2>
            <p className="text-lg text-white/80 mb-8">{copy.needAssistance.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg"></i>{copy.needAssistance.text2}</Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-download-line text-lg"></i>{copy.needAssistance.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}