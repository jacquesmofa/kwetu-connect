import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import CropFooter from '../../components/feature/CropFooter';
import copy from '../../content/pages/crop2026.json';
// Text, images and links: src/content/pages/crop2026.json (editable in the website editors).

export default function Crop2026() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const [activeSponsor, setActiveSponsor] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = copy.heroImages;

  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-11-06T09:00:00+11:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const agenda = copy.agenda;

  const sponsorshipTiers = copy.sponsorshipTiers;

  /*
   * ============================================================
   * PARTNER LOGOS — HOW TO UPDATE WHEN YOU GET REAL LOGOS
   * ============================================================
   *
   * The partner logos below currently use auto-generated search images.
   * When you receive real partner logo files, upload them to Cloudinary
   * and replace each entry with a direct logo URL.
   *
   * STEP 1: Upload the logo image to Cloudinary (drag & drop).
   * STEP 2: Copy the URL from Cloudinary.
   * STEP 3: Replace the entry below with a 'logo' property.
   *
   * Example change:
   *   BEFORE: { name: 'UN Women', url: 'https://www.unwomen.org/', seq: 'unwomen' }
   *   AFTER:  { name: 'UN Women', url: 'https://www.unwomen.org/', logo: 'https://res.cloudinary.com/.../unwomen-logo.png', seq: 'unwomen' }
   *
   * STEP 4: In the rendering grid below, change the <img> src from:
   *     src={`https://readdy.ai/api/search-image?query=...`}
   *   To:
   *     src={partner.logo}
   *
   * Keep the same width/height for consistent layout.
   * ============================================================
   */
  const partners = copy.partners;

  const trackColors: Record<string, string> = {
    Cultural: 'border-orange-500 bg-orange-50',
    Health: 'border-teal-500 bg-teal-50',
    Resilience: 'border-[#0A2540] bg-[#0A2540]/5',
    General: 'border-gray-300 bg-gray-50',
  };

  const trackBadge: Record<string, string> = {
    Cultural: 'bg-orange-100 text-orange-700',
    Health: 'bg-teal-100 text-teal-700',
    Resilience: 'bg-[#0A2540]/10 text-[#0A2540]',
    General: 'bg-gray-100 text-gray-600',
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "CROP Conference 2026 - Cultural Resilience, One Planet",
        "startDate": "2026-11-06T09:00:00+11:00",
        "endDate": "2026-11-08T20:00:00+11:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "The Dome, Sydney Showground",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Showground Road",
            "addressLocality": "Homebush Bay",
            "addressRegion": "NSW",
            "postalCode": "2127",
            "addressCountry": "AU"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "KWETU CONNECT PTY LTD",
          "url": "https://kwetuconnect.org"
        },
        "description": "Cultural Resilience, One Planet Conference 2026 - A global gathering of Indigenous leaders, policymakers, academics, and changemakers in Sydney, Australia.",
        "url": "https://kwetuconnect.org/crop2026",
        "image": "https://res.cloudinary.com/dzppzxpad/image/upload/w_1200,q_auto,f_auto/v1780502472/Artboard_3_copy_2_2x_nxsxcz.png"
      })}</script>

      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-28">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`CROP 2026 Conference ${index + 1}`} className="w-full h-full object-cover object-top" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/75 via-[#0A2540]/65 to-[#0A2540]/75"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-6">
            <a href={copy.hero.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src={copy.hero.image}
                alt={copy.hero.imageAlt}
                className="h-14 md:h-20 w-auto object-contain drop-shadow-2xl bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2"
              />
            </a>
            <a href={copy.hero.url2} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src={copy.hero.image2}
                alt={copy.hero.imageAlt2}
                className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
              />
            </a>
            <a href={copy.hero.url3} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img
                src={copy.hero.image3}
                alt={copy.hero.imageAlt3}
                className="h-14 md:h-20 w-auto object-contain drop-shadow-2xl bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2"
              />
            </a>
          </div>
          <div className="inline-block mb-4">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">{copy.hero.label}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.hero.title}<br /><span className="text-[#D4AF37]">{copy.hero.label2}</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2 text-white/90">{copy.hero.text}</p>
          <p className="text-lg md:text-xl mb-3 text-white/80">{copy.hero.text2}</p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-white/75 mb-6">
            <i className="ri-map-pin-line text-[#D4AF37]"></i>
            <span>{copy.hero.label3}</span>
          </div>

          <div className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
            <p className="text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">{copy.hero.text3}</p>
          </div>

          <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">{copy.hero.text4}<strong className="text-[#D4AF37]">{copy.hero.bold}</strong>{copy.hero.text5}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold text-base rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap">
              <i className="ri-user-add-line text-lg"></i>{copy.hero.link}</a>
            <a href="#programme" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-calendar-line text-lg"></i>{copy.hero.link2}</a>
            <a href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2540]/60 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-white/20 hover:bg-[#0A2540]/80 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-file-text-line text-lg"></i>{copy.hero.link3}</a>
          </div>

          {/* Countdown */}
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-5 border border-white/20 shadow-2xl">
            <p className="text-xs uppercase tracking-widest mb-3 text-[#D4AF37] font-bold">{copy.countdown.text}</p>
            <div className="grid grid-cols-4 gap-6 md:gap-10">
              {[
                { val: timeLeft.days, label: 'Days' },
                { val: timeLeft.hours, label: 'Hours' },
                { val: timeLeft.minutes, label: 'Minutes' },
                { val: timeLeft.seconds, label: 'Seconds' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-1">{String(val).padStart(2, '0')}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/40 w-2'}`}
              aria-label={`Slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-16 bg-gradient-to-br from-[#0A2540] via-[#0d3060] to-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.items.map(({ icon, value, label, sub }) => (
              <div key={label} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4">
                  <i className={`${icon} text-2xl text-[#0A2540]`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-[#D4AF37] text-lg font-semibold mb-1">{label}</div>
                <div className="text-white/70 text-sm">{sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center border-t border-white/20 pt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-3">
              <i className="ri-award-line text-[#D4AF37] text-xl"></i>
              <p className="text-white/90 text-sm md:text-base font-medium">
                <span className="text-[#D4AF37] font-semibold">{copy.statsBar.label}</span>{copy.statsBar.text}</p>
            </div>
            <p className="text-white/70 text-sm max-w-3xl mx-auto">{copy.statsBar.text2}</p>
          </div>
        </div>
      </section>

      {/* ─── THE VISION ─── */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.theVision.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.theVision.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{copy.theVision.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {copy.items2.map(({ icon, title, desc }) => (
              <div key={title} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/30 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-[#0A2540] mb-4 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#programme"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-lg hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap">{copy.theVision.link}<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SIX STRATEGIC PILLARS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.sixStrategicPillars.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.sixStrategicPillars.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.sixStrategicPillars.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {copy.items3.map(({ icon, color, title, desc }) => (
              <div key={title} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-3 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#programme"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">{copy.sixStrategicPillars.link}<i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── COUNTDOWN BANNER WITH FOCUS AREAS ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={copy.countdownBannerWithFocusAreas.image}
            alt={copy.countdownBannerWithFocusAreas.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#0A2540]/70 to-[#0A2540]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full">{copy.countdownBannerWithFocusAreas.label}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-3 rounded-2xl">{copy.countdownBannerWithFocusAreas.label2}</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl">{copy.countdownBannerWithFocusAreas.label3}</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white text-lg mb-10">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
              <i className="ri-map-pin-line text-[#D4AF37]"></i>
              <span className="font-semibold">{copy.countdownBannerWithFocusAreas.label4}</span>
            </div>
            <div className="hidden md:block text-white/50 text-2xl">|</div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
              <i className="ri-calendar-line text-[#D4AF37]"></i>
              <span className="font-semibold">{copy.countdownBannerWithFocusAreas.label5}</span>
            </div>
          </div>

          {/* Live Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hours' },
              { val: timeLeft.minutes, label: 'Minutes' },
              { val: timeLeft.seconds, label: 'Seconds' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-black/50 backdrop-blur-sm rounded-2xl p-5 text-center shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{String(val).padStart(2, '0')}</div>
                <div className="text-white font-semibold text-sm uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

          {/* Focus Areas */}
          <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl">{copy.focusAreas.label}</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-10">
            {copy.items4.map(({ icon, label, color }) => (
              <div key={label} className="bg-black/50 backdrop-blur-sm rounded-2xl p-5 text-center shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <h4 className="font-semibold text-white text-sm">{label}</h4>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap">
              <i className="ri-user-add-line text-lg"></i>{copy.focusAreas.link}</a>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-hand-heart-line text-lg"></i>{copy.focusAreas.link2}</a>
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540]/60 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/20 hover:bg-[#0A2540]/80 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-file-text-line text-lg"></i>{copy.focusAreas.link3}</a>
          </div>
        </div>
      </section>

      {/* ─── CO-ORGANIZERS ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.coOrganizers.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.coOrganizers.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {copy.items5.map(({ name, desc, link, website, logo }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="flex justify-center mb-4">
                  <img src={logo} alt={`${name} logo`} className="h-16 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-col gap-3">
                  <Link
                    to={link}
                    className="inline-flex items-center justify-center text-[#0A2540] font-semibold cursor-pointer group hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{copy.coOrganizers.label2}</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-[#D4AF37] font-semibold text-sm cursor-pointer group hover:text-[#C4A137] transition-colors"
                  >
                    <i className="ri-global-line mr-1.5"></i>
                    <span>{copy.coOrganizers.label3}</span>
                    <i className="ri-external-link-line ml-1 text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ─── AS FEATURED IN ─── */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white px-6 md:px-8 py-4 rounded-full shadow-lg">
              <i className="ri-newspaper-line text-[#D4AF37] text-xl"></i>
              <span className="text-sm md:text-base font-medium">
                <span className="text-[#D4AF37] font-semibold">{copy.asFeaturedIn.label}</span>{copy.asFeaturedIn.label2}</span>
            </div>
          </div>

          {/* Collaborative Partners */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.collaborativePartners.subheading}</h3>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">{copy.collaborativePartners.text}</p>
          </div>

          {/*
            ============================================================
            PARTNER LOGO RENDERING — HOW TO UPDATE
            ============================================================
            The images below use auto-generated search images.
            When you add real logos to the 'partners' array above
            (see the comment block above the partners array for steps),
            replace the <img> src below with:
                src={partner.logo}
            Make sure each partner object has a 'logo' property.
            ============================================================
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {partners.map(({ name, url, seq }) => (
              <a key={seq} href={url} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer hover:-translate-y-2"
                title={name}>
                <img
                  alt={name}
                  className="w-full h-12 object-contain transition-all duration-300"
                  loading="lazy"
                  src={`https://readdy.ai/api/search-image?query=$%7BencodeURIComponent%28name%20%20%20%20official%20logo%20high%20resolution%20colorful%29%7D&width=200&height=100&seq=${seq}&orientation=landscape`}
                />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">{copy.collaborativePartners.text2}</p>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">{copy.collaborativePartners.link}<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── VENUE ─── */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">{copy.venue.label}</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.venue.heading}</h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">{copy.venue.text}</p>
              <div className="space-y-4 mb-8">
                {copy.items6.map(({ icon, label, val }) => (
                  <div key={label} className="flex items-start gap-3">
                    <i className={`${icon} text-[#D4AF37] text-xl flex-shrink-0 mt-0.5`}></i>
                    <div>
                      <div className="font-semibold">{label}</div>
                      <div className="text-white/70">{val}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <i className="ri-global-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                  <div>
                    <div className="font-semibold">{copy.venue.text2}</div>
                    <a href={copy.venue.url} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">{copy.venue.link}</a>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-sm italic">{copy.venue.text3}</p>
            </div>
            <div className="space-y-4">
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src={copy.venue.image}
                  alt={copy.venue.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={copy.venue.image2}
                    alt={copy.venue.imageAlt2}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={copy.venue.image3}
                    alt={copy.venue.imageAlt3}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <iframe
                  src={copy.venue.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={copy.venue.title}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3-DAY PROGRAMME ─── */}
      <section id="programme" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.s3DayProgramme.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.s3DayProgramme.heading}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">{copy.s3DayProgramme.text}</p>
            <Link to="/crop2026/programme"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-md whitespace-nowrap">
              <i className="ri-download-line text-lg"></i>{copy.s3DayProgramme.text2}</Link>
          </div>

          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {agenda.map((d, i) => (
              <button key={i} onClick={() => setActiveDay(i)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer text-sm md:text-base ${activeDay === i ? 'bg-[#0A2540] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {d.day} — {d.date}
              </button>
            ))}
          </div>

          {agenda.map((day, dayIndex) => (
            <div key={dayIndex} className={dayIndex === activeDay ? 'block' : 'hidden'}>
              <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] rounded-2xl p-6 mb-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{day.day}: {day.date}</h3>
                <p className="text-[#D4AF37] font-semibold text-lg">{copy.dayTabs.text}{day.theme}</p>
              </div>

              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => {
                  const globalIndex = dayIndex * 100 + sessionIndex;
                  return (
                    <div key={sessionIndex}
                      className={`border-l-4 ${trackColors[session.track] || 'border-gray-300 bg-gray-50'} p-5 rounded-r-xl hover:shadow-md transition-shadow`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-[#D4AF37] font-bold text-base">{session.time}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${trackBadge[session.track] || 'bg-gray-100 text-gray-600'}`}>
                              {session.track}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#0A2540] mb-2">{session.title}</h4>
                          {session.speakers && (
                            <p className="text-gray-600 mb-1 text-sm"><i className="ri-user-line mr-2"></i>{session.speakers}</p>
                          )}
                          <p className="text-gray-500 text-sm"><i className="ri-map-pin-line mr-2"></i>{session.location}</p>
                          {session.description && expandedSession === globalIndex && (
                            <p className="text-gray-700 mt-3 leading-relaxed text-sm border-t border-gray-200 pt-3">{session.description}</p>
                          )}
                        </div>
                        {session.description && (
                          <button onClick={() => setExpandedSession(expandedSession === globalIndex ? null : globalIndex)}
                            className="text-[#0A2540] hover:text-[#D4AF37] font-semibold whitespace-nowrap cursor-pointer text-sm flex items-center gap-1 flex-shrink-0">
                            {expandedSession === globalIndex ? 'Show Less' : 'Learn More'}
                            <i className={expandedSession === globalIndex ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OPENING CEREMONY & KEYNOTE SPEAKER ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.openingCeremonyAndKeynoteSpeaker.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.openingCeremonyAndKeynoteSpeaker.heading}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] p-8 text-white flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-mic-line text-3xl text-[#D4AF37]"></i>
                </div>
                <p className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider mb-2">{copy.openingCeremonyAndKeynoteSpeaker.text}</p>
                <p className="text-xl font-bold text-center" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.openingCeremonyAndKeynoteSpeaker.text2}</p>
                <p className="text-white/70 text-sm text-center mt-2">{copy.openingCeremonyAndKeynoteSpeaker.text3}</p>
              </div>
              <div className="md:col-span-2 p-8">
                <p className="text-gray-600 leading-relaxed mb-4">{copy.openingCeremonyAndKeynoteSpeaker.text4}</p>
                <p className="text-gray-600 leading-relaxed">{copy.openingCeremonyAndKeynoteSpeaker.text5}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPONSORSHIP ─── */}
      <section id="sponsorship" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">{copy.sponsorship.label}</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.sponsorship.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.sponsorship.text}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${tier.highlight ? 'ring-4 ring-[#D4AF37] lg:scale-105' : ''}`}
                onMouseEnter={() => setActiveSponsor(index)}
                onMouseLeave={() => setActiveSponsor(null)}>
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{tier.tier}</h3>
                  <div className="text-xl font-bold opacity-90">{tier.price}</div>
                  {tier.highlight && <div className="mt-2 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full inline-block">{copy.sponsorship.text2}</div>}
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <i className="ri-check-line text-green-600 text-lg mr-2 mt-0.5 flex-shrink-0"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${tier.highlight ? 'bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2540]' : 'bg-[#0A2540] hover:bg-[#1a4a7a] text-white'}`}>{copy.sponsorship.link}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">{copy.sponsorship.text3}</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-lg hover:bg-[#1a4a7a] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              <i className="ri-mail-line text-xl"></i>{copy.sponsorship.text4}</Link>
          </div>
        </div>
      </section>

      {/* ─── BE PART OF THE CHANGE ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={copy.bePartOfTheChange.image}
            alt={copy.bePartOfTheChange.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/88 to-[#1a3a5a]/88"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.bePartOfTheChange.heading}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{copy.bePartOfTheChange.text}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap">
              <i className="ri-user-add-line text-lg"></i>{copy.bePartOfTheChange.link}</a>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-hand-heart-line text-lg"></i>{copy.bePartOfTheChange.link2}</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {copy.items7.map(({ icon, color, title, desc }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-white/20">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                <p className="text-white/75 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CropFooter />
    </div>
  );
}
