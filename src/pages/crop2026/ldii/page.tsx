import { Link, useNavigate } from 'react-router-dom';
import CropConferenceLayout from '../components/CropConferenceLayout';
import copy from '../../../content/pages/crop2026-ldii.json';
// Text, images and links: src/content/pages/crop2026-ldii.json (editable in the website editors).

export default function LdiiPage() {
  const navigate = useNavigate();

  return (
    <CropConferenceLayout>

      {/* ─── BACK NAVIGATION ─── */}
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-[#0A2540] font-medium hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>{copy.backNavigation.button}</button>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={copy.hero.image}
            alt={copy.hero.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6">{copy.hero.label}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#D4AF37]">{copy.hero.label2}</span><br />{copy.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 italic">{copy.hero.text}</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{copy.hero.text2}</p>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={copy.whoWeAre.image}
                  alt={copy.whoWeAre.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={copy.whoWeAre.image2}
                    alt={copy.whoWeAre.imageAlt2}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={copy.whoWeAre.image3}
                    alt={copy.whoWeAre.imageAlt3}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.whoWeAre.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.whoWeAre.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{copy.whoWeAre.text}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{copy.whoWeAre.text2}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{copy.whoWeAre.text3}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={copy.whoWeAre.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-full hover:bg-[#1a4a7a] transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-global-line"></i>{copy.whoWeAre.link}</a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-mail-line"></i>{copy.whoWeAre.text4}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.visionAndMission.subheading}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.visionAndMission.text}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-focus-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.visionAndMission.subheading2}</h3>
              <p className="text-gray-600 leading-relaxed">{copy.visionAndMission.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE PROGRAMS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.corePrograms.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.corePrograms.heading}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{copy.corePrograms.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.items.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-4">
                  <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.approach.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.approach.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.items2.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GLOBAL REACH ─── */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">{copy.globalReach.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.globalReach.heading}</h2>
            <p className="text-white/70 mt-3">{copy.globalReach.text}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {copy.items3.map(({ value, label, sub }) => (
              <div key={label} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">{value}</div>
                <div className="text-white font-semibold mb-1">{label}</div>
                <div className="text-white/60 text-sm">{sub}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {copy.items4.map(({ region, count, color }) => (
              <div key={region} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <i className="ri-map-pin-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">{region}</div>
                <div className="text-white/60 text-xs">{count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROLE IN CROP 2026 ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.roleInCrop2026.label}</span>
          <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.roleInCrop2026.heading}</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">{copy.roleInCrop2026.text}</p>
          <p className="text-gray-600 leading-relaxed mb-10">{copy.roleInCrop2026.text2}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={copy.roleInCrop2026.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-group-line"></i>{copy.roleInCrop2026.link}</a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] font-bold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-mail-line"></i>{copy.roleInCrop2026.text3}</Link>
          </div>
        </div>
      </section>
    </CropConferenceLayout>
  );
}