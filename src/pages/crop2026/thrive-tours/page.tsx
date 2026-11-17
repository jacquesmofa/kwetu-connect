import { Link, useNavigate } from 'react-router-dom';
import CropConferenceLayout from '../components/CropConferenceLayout';
import copy from '../../../content/pages/crop2026-thrive-tours.json';
// Text, images and links: src/content/pages/crop2026-thrive-tours.json (editable in the website editors).

export default function ThriveToursPage() {
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
            <span className="text-[#D4AF37]">{copy.hero.label2}</span>{copy.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 italic">{copy.hero.text}</p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{copy.hero.text2}</p>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.aboutUs.label}</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.aboutUs.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{copy.aboutUs.text}<strong className="text-[#0A2540]">{copy.aboutUs.bold}</strong>{copy.aboutUs.text2}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{copy.aboutUs.text3}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{copy.aboutUs.text4}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={copy.aboutUs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-full hover:bg-[#1a4a7a] transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-global-line"></i>{copy.aboutUs.link}</a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-mail-line"></i>{copy.aboutUs.text5}</Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={copy.aboutUs.image}
                  alt={copy.aboutUs.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={copy.aboutUs.image2}
                    alt={copy.aboutUs.imageAlt2}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={copy.aboutUs.image3}
                    alt={copy.aboutUs.imageAlt3}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.leadership.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.leadership.heading}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{copy.leadership.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Brad Robinson */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gray-50 overflow-hidden">
                <img
                  src={copy.bradRobinson.image}
                  alt={copy.bradRobinson.imageAlt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.bradRobinson.subheading}</h3>
                <p className="text-[#D4AF37] font-semibold text-sm mb-4">{copy.bradRobinson.text}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{copy.bradRobinson.text2}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{copy.bradRobinson.text3}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.bradRobinson.label}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.bradRobinson.label2}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-music-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.bradRobinson.label3}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Amanda Robinson */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gray-50 overflow-hidden">
                <img
                  src={copy.amandaRobinson.image}
                  alt={copy.amandaRobinson.imageAlt}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.amandaRobinson.subheading}</h3>
                <p className="text-[#D4AF37] font-semibold text-sm mb-4">{copy.amandaRobinson.text}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{copy.amandaRobinson.text2}</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.amandaRobinson.label}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-award-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.amandaRobinson.label2}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-heart-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>{copy.amandaRobinson.label3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.services.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.services.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.items.map(({ icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED EXPERIENCES ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.featuredExperiences.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.featuredExperiences.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.items2.map(({ icon, title, desc, img }) => (
              <div key={title} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="inline-flex items-center text-[#0A2540] font-semibold text-sm">
                    <span>{copy.featuredExperiences.label2}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">{copy.reviews.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.reviews.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.items3.map(({ text, author, rating }) => (
              <div key={author} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-3">
                  {copy.sList.map((s) => (
                    <i key={s} className="ri-star-fill text-[#D4AF37] text-sm"></i>
                  ))}
                  <span className="text-white/70 text-sm ml-1">{rating}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-[#D4AF37] font-semibold text-sm">&mdash; {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AS FEATURED IN ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white px-6 md:px-8 py-4 rounded-full shadow-lg">
            <i className="ri-newspaper-line text-[#D4AF37] text-xl"></i>
            <span className="text-sm md:text-base font-medium">
              <span className="text-[#D4AF37] font-semibold">{copy.asFeaturedIn.label}</span>{copy.asFeaturedIn.label2}</span>
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
              <i className="ri-global-line"></i>{copy.roleInCrop2026.link}</a>
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