import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import copy from '../../../content/pages/crop2026-partnership.json';
// Text, images and links: src/content/pages/crop2026-partnership.json (editable in the website editors).

const categories = copy.categories;

const tiers = copy.tiers;

const extras = copy.extras;

const whyPartner = copy.whyPartner;

const inKind = copy.inKind;

export default function PartnershipPage() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

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

        {/* Partnership Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.partnershipCategories.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.partnershipCategories.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${cat.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{copy.partnershipCategories.text}</p>
                    <ul className="space-y-1">
                      {cat.opportunities.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.sponsorshipTiers.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.sponsorshipTiers.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.sponsorshipTiers.text}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, idx) => (
                <div
                  key={tier.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    tier.highlight ? 'ring-4 ring-[#D4AF37] lg:scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredTier(idx)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{tier.name}</h3>
                    <div className="text-2xl font-bold mt-1">{tier.price}</div>
                    {tier.highlight && (
                      <div className="mt-2 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full inline-block">{copy.sponsorshipTiers.text2}</div>
                    )}
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2 mb-5">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm ${
                        tier.highlight
                          ? 'bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2540]'
                          : 'bg-[#0A2540] hover:bg-[#1a4a7a] text-white'
                      }`}
                    >{copy.sponsorshipTiers.text3}</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Exhibition extras */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {extras.map((extra) => (
                <div key={extra.name} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center">
                  <h4 className="text-lg font-bold text-[#0A2540]">{extra.name}</h4>
                  <div className="text-xl font-bold text-[#D4AF37] my-1">{extra.price}</div>
                  <p className="text-gray-600 text-sm">{extra.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-block mt-3 px-4 py-2 bg-[#0A2540] hover:bg-[#1a4a7a] text-white text-sm font-semibold rounded-lg transition-all"
                  >{copy.exhibitionExtras.text}</Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-lg text-gray-700 mb-4">{copy.exhibitionExtras.text2}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-lg hover:bg-[#1a4a7a] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <i className="ri-mail-line text-xl"></i>{copy.exhibitionExtras.text3}</Link>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.whyPartnerSection.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.whyPartnerSection.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-Kind */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.inKindSection.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.inKindSection.heading}</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{copy.inKindSection.text}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inKind.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg"></i>{copy.cta.text2}</Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-download-line text-lg"></i>{copy.cta.text3}</Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}