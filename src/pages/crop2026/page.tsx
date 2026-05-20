import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import CropFooter from '../../components/feature/CropFooter';

export default function Crop2026() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const [activeSponsor, setActiveSponsor] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Sydney%20Showground%20The%20Dome%20exterior%20modern%20event%20venue%20Sydney%20Olympic%20Park%20NSW%202127%20architectural%20photography%20clear%20blue%20sky%20professional%20conference%20facility%20large%20dome%20structure%20impressive%20building&width=1920&height=1080&seq=crop2026hero1v2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Sydney%20Olympic%20Park%20precinct%20aerial%20view%20green%20parklands%20modern%20stadium%20facilities%20Homebush%20Bay%20NSW%20Australia%20professional%20photography%20vibrant%20daytime%20clear%20sky%20urban%20landscape&width=1920&height=1080&seq=crop2026hero2v2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20and%20Harbour%20Bridge%20at%20golden%20hour%20iconic%20Australian%20landmarks%20vibrant%20blue%20sky%20stunning%20harbor%20view%20professional%20travel%20photography%20high%20quality%20cityscape&width=1920&height=1080&seq=crop2026hero3v2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Indigenous%20cultural%20celebration%20traditional%20dancers%20colorful%20ceremonial%20attire%20vibrant%20cultural%20patterns%20community%20gathering%20rich%20cultural%20heritage%20diverse%20people%20celebrating%20authentic%20expression%20warm%20lighting%20professional%20photography&width=1920&height=1080&seq=crop2026hero4v2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=International%20conference%20attendees%20diverse%20group%20professionals%20networking%20Indigenous%20leaders%20policymakers%20discussion%20modern%20conference%20setting%20collaborative%20atmosphere%20cultural%20diversity%20professional%20business%20environment%20bright%20natural%20lighting&width=1920&height=1080&seq=crop2026hero5v2&orientation=landscape',
  ];

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

  const agenda = [
    {
      day: 'Day 1',
      date: 'November 6, 2026',
      theme: 'Opening & Foundation',
      sessions: [
        { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', track: 'General', location: 'Main Foyer', description: 'Welcome reception with refreshments and networking opportunities. Collect your conference materials and connect with fellow delegates.' },
        { time: '09:00 - 10:30', title: 'Opening Ceremony & Keynote Address', track: 'Cultural', location: 'Main Auditorium', speakers: 'Co-organizers & Indigenous Leaders', description: 'Welcome addresses from co-organizers, Indigenous acknowledgment, and keynote on cultural resilience and care transformation in the 21st century.' },
        { time: '10:30 - 11:00', title: 'Morning Tea & Networking', track: 'General', location: 'Exhibition Hall' },
        { time: '11:00 - 13:00', title: 'Plenary Panel: Bridging Culture, Care & Climate', track: 'Resilience', location: 'Main Auditorium', speakers: 'Global Leaders Panel', description: 'Global leaders discuss integrating cultural perspectives into climate action and care industry transformation.' },
        { time: '13:00 - 14:00', title: 'Lunch & Cultural Exposition', track: 'General', location: 'Exhibition Hall' },
        { time: '14:00 - 16:00', title: 'Parallel Thematic Workshops: Culture & Care Integration', track: 'Cultural', location: 'Multiple Rooms', description: 'Deep-dive sessions on Climate Justice, Culture-Based Trade, and Cultural Approaches to Care.' },
        { time: '16:00 - 16:30', title: 'Afternoon Tea', track: 'General', location: 'Exhibition Hall' },
        { time: '16:30 - 18:00', title: 'Community Roundtables: Care for Caregivers', track: 'Health', location: 'Multiple Rooms', description: 'Grassroots leaders share community-led resilience initiatives and cultural heritage perspectives on care.' },
        { time: '18:30 - 20:30', title: 'Welcome Reception & Cultural Performance', track: 'General', location: 'Waterfront Terrace' },
      ],
    },
    {
      day: 'Day 2',
      date: 'November 7, 2026',
      theme: 'Deep Dive & Innovation',
      sessions: [
        { time: '09:00 - 10:30', title: 'Plenary: Indigenous Knowledge & Care Systems', track: 'Cultural', location: 'Main Auditorium', speakers: 'Indigenous Leaders', description: 'Indigenous leaders present traditional knowledge as solutions to contemporary care and environmental challenges.' },
        { time: '10:30 - 11:00', title: 'Morning Tea', track: 'General', location: 'Exhibition Hall' },
        { time: '11:00 - 13:00', title: 'Parallel Workshops: Redefining Care Industry', track: 'Health', location: 'Multiple Rooms', description: 'Sessions on Cultural Transformative Values for Care, Senior Participation in Decision-Making, and Technology Integration.' },
        { time: '13:00 - 14:00', title: 'Lunch', track: 'General', location: 'Exhibition Hall' },
        { time: '14:00 - 16:00', title: 'Youth Forum: Next Generation Leadership in Care', track: 'Resilience', location: 'Main Auditorium', description: 'Young leaders present innovative approaches to cultural resilience and care transformation.' },
        { time: '16:00 - 16:30', title: 'Afternoon Tea', track: 'General', location: 'Exhibition Hall' },
        { time: '16:30 - 18:00', title: 'Research Presentations: Culture Meets Care', track: 'Cultural', location: 'Innovation Hub', description: 'Academic and community researchers share findings on cultural approaches to care industry innovation.' },
        { time: '19:00 - 22:00', title: 'Gala Dinner & Awards Ceremony', track: 'General', location: 'Grand Ballroom' },
      ],
    },
    {
      day: 'Day 3',
      date: 'November 8, 2026',
      theme: 'Sydney Discovery & Cultural Immersion',
      sessions: [
        { time: '09:00 - 10:30', title: 'Optional: Working Group Sessions', track: 'Resilience', location: 'Multiple Rooms', description: 'Final collaborative sessions for action planning and commitments.' },
        { time: '10:30 - 11:00', title: 'Morning Tea & Departure Preparation', track: 'General', location: 'Exhibition Hall' },
        { time: '11:00 - 17:00', title: 'Sydney Cultural & Tourism Experience', track: 'Cultural', location: 'Sydney City', description: "Guided tours of Sydney's iconic landmarks: Opera House, Harbour Bridge, Royal Botanic Gardens, and cultural sites. Experience Australia's vibrant multicultural heritage." },
        { time: '17:00 - 18:00', title: 'Optional: Sunset Harbour Cruise', track: 'General', location: 'Sydney Harbour', description: 'Relaxing cruise on Sydney Harbour with networking opportunities.' },
        { time: '18:30 - 20:00', title: 'Farewell Dinner (Optional)', track: 'General', location: 'Waterfront Restaurant', description: 'Closing celebration with Australian cuisine and cultural performances.' },
      ],
    },
  ];

  const sponsorshipTiers = [
    {
      tier: 'Platinum Partner',
      price: 'AUD $50,000',
      color: 'from-slate-400 to-slate-600',
      highlight: true,
      benefits: [
        'Logo prominently featured on all event promotional emails',
        'Advertisement with hyperlink on our dedicated Sponsors page',
        'Logo inclusion in all event promotional videos',
        '3x banners displayed at the event venue',
        'Logo on all uniforms worn by the event crew',
        'Premium Exhibition Stand at a prime event location',
        'Ability to sell or distribute branded merchandise at the event',
        'Acknowledgement and recognition by the MC throughout the event',
        'Promotion across all social media channels: Facebook, Snapchat, Instagram, TikTok',
        'Inclusion in all event media releases (radio, TV, and newspaper)',
      ],
    },
    {
      tier: 'Gold Partner',
      price: 'AUD $30,000',
      color: 'from-yellow-500 to-yellow-700',
      highlight: false,
      benefits: [
        'Your logo on emails promoting the event',
        'Advertisement with hyperlink on the sponsors\' page',
        'Logo inclusion in event promotional videos',
        'Acknowledgement by the MC at the event',
        'Personal introductions to our network and circles of influence',
        '2x banners at the event',
        'Ability to sell or give away branded merchandise at the event',
        'Promotion via all social media channels',
        'Premium location Exhibition stand at the event',
      ],
    },
    {
      tier: 'Silver Partner',
      price: 'AUD $15,000',
      color: 'from-gray-300 to-gray-500',
      highlight: false,
      benefits: [
        'Your signage / banner on site at the event',
        'Your logo on emails promoting the event',
        'Advertisement with hyperlink on the sponsors\' page',
        'Logo inclusion in event promotional videos',
        'Acknowledgement by the MC at the event',
        'Promotion via all social media channels',
        'Included Exhibition Stand at the event',
      ],
    },
    {
      tier: 'Bronze Partner',
      price: 'AUD $10,000',
      color: 'from-orange-400 to-orange-600',
      highlight: false,
      benefits: [
        'Your signage / banner on site at the event',
        'Your logo on emails promoting the event',
        'Advertisement with hyperlink on the sponsor\'s page',
        'Acknowledgement by the MC at the event',
        'Inclusion – Exhibition Stand at the event',
      ],
    },
  ];

  const partners = [
    { name: 'UN Women', url: 'https://www.unwomen.org/', seq: 'unwomen' },
    { name: 'UNHCR', url: 'https://www.unhcr.org/', seq: 'unhcr' },
    { name: 'UNESCO', url: 'https://www.unesco.org/', seq: 'unesco' },
    { name: 'UNDP', url: 'https://www.undp.org/', seq: 'undp' },
    { name: 'UNICEF', url: 'https://www.unicef.org/', seq: 'unicef' },
    { name: 'WHO', url: 'https://www.who.int/', seq: 'who' },
    { name: 'ILO', url: 'https://www.ilo.org/', seq: 'ilo' },
    { name: 'FAO', url: 'https://www.fao.org/', seq: 'fao' },
    { name: 'UNEP', url: 'https://www.unep.org/', seq: 'unep' },
    { name: 'IFAD', url: 'https://www.ifad.org/', seq: 'ifad' },
    { name: 'WFP', url: 'https://www.wfp.org/', seq: 'wfp' },
    { name: 'UNODC', url: 'https://www.unodc.org/', seq: 'unodc' },
    { name: 'IOM', url: 'https://www.iom.int/', seq: 'iom' },
    { name: 'UNIDO', url: 'https://www.unido.org/', seq: 'unido' },
    { name: 'ITU', url: 'https://www.itu.int/', seq: 'itu' },
    { name: 'WIPO', url: 'https://www.wipo.int/', seq: 'wipo' },
    { name: 'WMO', url: 'https://public.wmo.int/', seq: 'wmo' },
    { name: 'IMO', url: 'https://www.imo.org/', seq: 'imo' },
    { name: 'ICAO', url: 'https://www.icao.int/', seq: 'icao' },
    { name: 'UNWTO', url: 'https://www.unwto.org/', seq: 'unwto' },
    { name: 'UPU', url: 'https://www.upu.int/', seq: 'upu' },
    { name: 'The Salvation Army', url: 'https://www.salvationarmy.org.au/', seq: 'salvationarmy' },
    { name: 'CCHR', url: 'https://www.cchr.org/', seq: 'cchr' },
    { name: 'World Bank', url: 'https://www.worldbank.org/', seq: 'worldbank' },
    { name: 'IMF', url: 'https://www.imf.org/', seq: 'imf' },
    { name: 'OECD', url: 'https://www.oecd.org/', seq: 'oecd' },
    { name: 'Commonwealth Secretariat', url: 'https://thecommonwealth.org/', seq: 'commonwealth' },
    { name: 'African Union', url: 'https://au.int/', seq: 'africanunion' },
    { name: 'ASEAN', url: 'https://asean.org/', seq: 'asean' },
    { name: 'Pacific Islands Forum', url: 'https://www.forumsec.org/', seq: 'pacificforum' },
  ];

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
      <title>CROP Conference 2026 | Cultural Resilience One Planet | The Dome, Sydney Showground | November 6-8</title>
      <meta name="description" content="CROP Conference 2026 - Cultural Resilience, One Planet. Join 800+ global leaders at The Dome, Sydney Showground, November 6-8, 2026. Indigenous knowledge, care transformation, planetary sustainability." />
      <meta name="keywords" content="CROP 2026, Cultural Resilience One Planet, Sydney conference 2026, Sydney Showground, Indigenous conference Australia, cultural resilience conference" />
      <link rel="canonical" href="https://kwetuconnect.com.au/crop2026" />
      <meta property="og:title" content="CROP Conference 2026 | Cultural Resilience One Planet | Sydney" />
      <meta property="og:description" content="Join 800+ global leaders at The Dome, Sydney Showground for CROP 2026 - November 6-8, 2026." />
      <meta property="og:url" content="https://kwetuconnect.com.au/crop2026" />
      <meta property="og:type" content="event" />
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
          "url": "https://kwetuconnect.com.au"
        },
        "description": "Cultural Resilience, One Planet Conference 2026 - A global gathering of Indigenous leaders, policymakers, academics, and changemakers in Sydney, Australia.",
        "url": "https://kwetuconnect.com.au/crop2026"
      })}</script>

      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <div className="inline-block mb-4">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">Sydney, Australia</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cultural Resilience,<br /><span className="text-[#D4AF37]">One Planet</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-2 text-white/90">CROP Conference 2026</p>
          <p className="text-lg md:text-xl mb-3 text-white/80">November 6th – 8th, 2026</p>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-white/75 mb-6">
            <i className="ri-map-pin-line text-[#D4AF37]"></i>
            <span>The Dome, Sydney Showground &bull; 1 Showground Road, Homebush Bay NSW 2127</span>
          </div>

          <div className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
            <p className="text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">
              "One Planet One Resilience"
            </p>
          </div>

          <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join <strong className="text-[#D4AF37]">800+</strong> international Indigenous and cultural leaders, policymakers, academics, private sector innovators, and youth changemakers in shaping the future of cultural resilience, care transformation, and planetary sustainability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold text-base rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap">
              <i className="ri-user-add-line text-lg"></i>Register Interest
            </a>
            <a href="#programme" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-calendar-line text-lg"></i>View Programme
            </a>
            <a href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A2540]/60 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-white/20 hover:bg-[#0A2540]/80 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-file-text-line text-lg"></i>Submit Abstract
            </a>
          </div>

          {/* Countdown */}
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-5 border border-white/20 shadow-2xl">
            <p className="text-xs uppercase tracking-widest mb-3 text-[#D4AF37] font-bold">Conference Begins In</p>
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
            {[
              { icon: 'ri-calendar-line', value: '3', label: 'Days', sub: 'November 6-8, 2026' },
              { icon: 'ri-team-line', value: '800+', label: 'Attendees', sub: 'Global leaders & innovators' },
              { icon: 'ri-global-line', value: '6', label: 'Strategic Pillars', sub: 'Comprehensive frameworks' },
              { icon: 'ri-map-pin-line', value: '1', label: 'Venue', sub: 'The Dome, Sydney Showground' },
            ].map(({ icon, value, label, sub }) => (
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
        </div>
      </section>

      {/* ─── THE VISION ─── */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging cultural actors with global sustainability agendas, protecting Indigenous knowledge, and promoting community resilience in the face of climate change and urbanization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'ri-links-line', title: 'Bridge the Gap', desc: 'Connect cultural actors with global sustainability agendas and climate action frameworks.' },
              { icon: 'ri-volume-up-line', title: 'Amplify Voices', desc: 'Elevate Indigenous knowledge and community-led resilience strategies on the world stage.' },
              { icon: 'ri-team-line', title: 'Co-create Strategies', desc: 'Develop collaborative solutions for cultural preservation and environmental sustainability.' },
            ].map(({ icon, title, desc }) => (
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
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-lg hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap">
              Learn More About Our Vision <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SIX STRATEGIC PILLARS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Conference Framework</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Six Strategic Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive frameworks addressing the intersection of culture, care, and global sustainability challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'ri-store-line', color: 'from-[#0A2540] to-[#1a4a7a]', title: 'Culture, Trade, Economies & Sustainable Livelihoods', desc: 'Fair trade frameworks, cultural entrepreneurship, and revitalization of traditional economies.' },
              { icon: 'ri-heart-pulse-line', color: 'from-[#D4AF37] to-yellow-600', title: 'Global Health Equity & Wellness Systems', desc: 'Integrating traditional medicine, addressing health disparities, and promoting holistic wellbeing.' },
              { icon: 'ri-smartphone-line', color: 'from-teal-500 to-teal-700', title: 'Technology, Digital Innovation & Data Sovereignty', desc: 'Digital tools for cultural preservation, AI for language revitalization, and Indigenous data sovereignty.' },
              { icon: 'ri-graduation-cap-line', color: 'from-green-600 to-green-800', title: 'Education, Research, Skills & Capacity Development', desc: 'Integration of Indigenous knowledge, decolonizing research, and intergenerational knowledge transfer.' },
              { icon: 'ri-earth-line', color: 'from-orange-500 to-orange-700', title: 'Climate Justice, Cultural Governance & Planetary Stewardship', desc: 'Indigenous knowledge for climate adaptation, cultural governance, and sustainable planetary stewardship.' },
              { icon: 'ri-hand-heart-line', color: 'from-rose-500 to-rose-700', title: 'Care Industry & Cultural Transformation', desc: 'Redefining cultural transformative values for care, supporting caregivers, and empowering seniors in decision-making.' },
            ].map(({ icon, color, title, desc }) => (
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
              Explore All Pillars <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── COUNTDOWN BANNER WITH FOCUS AREAS ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Sydney%20Olympic%20Park%20aerial%20sunset%20golden%20hour%20dramatic%20sky%20vibrant%20colors%20beautiful%20landscape%20Australia%20professional%20photography%20wide%20angle%20panoramic%20view&width=1920&height=900&seq=cropbannerbg2026&orientation=landscape"
            alt="Sydney Showground precinct"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 via-[#0A2540]/70 to-[#0A2540]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full">Annual Signature Initiative</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-3 rounded-2xl">CROP 2026 Conference</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl">Cultural Resilience, One Planet</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white text-lg mb-10">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
              <i className="ri-map-pin-line text-[#D4AF37]"></i>
              <span className="font-semibold">The Dome, Sydney Showground, Australia</span>
            </div>
            <div className="hidden md:block text-white/50 text-2xl">|</div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
              <i className="ri-calendar-line text-[#D4AF37]"></i>
              <span className="font-semibold">November 6-8, 2026</span>
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
            <span className="inline-block bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl">Conference Focus Areas</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-10">
            {[
              { icon: 'ri-store-3-line', label: 'Culture & Trade', color: 'from-orange-500 to-orange-600' },
              { icon: 'ri-heart-pulse-line', label: 'Health Equity', color: 'from-green-500 to-green-600' },
              { icon: 'ri-cpu-line', label: 'Technology', color: 'from-teal-500 to-teal-600' },
              { icon: 'ri-graduation-cap-line', label: 'Education', color: 'from-red-500 to-red-600' },
              { icon: 'ri-leaf-line', label: 'Climate Justice', color: 'from-emerald-500 to-emerald-600' },
              { icon: 'ri-hand-heart-line', label: 'Care Industry', color: 'from-rose-500 to-rose-600' },
            ].map(({ icon, label, color }) => (
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
              <i className="ri-user-add-line text-lg"></i>Register Now
            </a>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-hand-heart-line text-lg"></i>Become a Sponsor
            </a>
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540]/60 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/20 hover:bg-[#0A2540]/80 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-file-text-line text-lg"></i>Call for Papers
            </a>
          </div>
        </div>
      </section>

      {/* ─── CO-ORGANIZERS ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Collaboration</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Co-Organizers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: 'ri-global-line',
                color: 'from-[#0A2540] to-[#1a4a7a]',
                name: 'KWETU CONNECT PTY LTD',
                desc: 'A pioneering organization dedicated to bridging cultural communities with sustainable development initiatives, redefining cultural understanding of care among Indigenous communities.',
                link: '/crop2026/kwetu-connect',
                website: 'https://kwetuconnect.org/',
              },
              {
                icon: 'ri-hand-heart-line',
                color: 'from-[#D4AF37] to-yellow-600',
                name: 'Livelihood Development International Initiatives (LDII)',
                desc: 'A global organization committed to empowering vulnerable communities through sustainable livelihood programs, cultural preservation, and resilience-building initiatives.',
                link: '/crop2026/ldii',
                website: 'https://ldiinitiatives.org/',
              },
              {
                icon: 'ri-sailboat-line',
                color: 'from-teal-500 to-teal-700',
                name: 'Thrive Tours',
                desc: 'A 100% Indigenous-owned eco-cultural tour company based in Baawaating (Sault Ste. Marie, Ontario), providing authentic Indigenous land-based experiences.',
                link: '/crop2026/thrive-tours',
                website: 'https://www.thrivetours.ca/',
              },
            ].map(({ icon, color, name, desc, link, website }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-4`}>
                  <i className={`${icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-col gap-3">
                  <Link
                    to={link}
                    className="inline-flex items-center text-[#0A2540] font-semibold cursor-pointer group hover:text-[#D4AF37] transition-colors"
                  >
                    <span>Learn More</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#D4AF37] font-semibold text-sm cursor-pointer group hover:text-[#C4A137] transition-colors"
                  >
                    <i className="ri-global-line mr-1.5"></i>
                    <span>Visit Official Website</span>
                    <i className="ri-external-link-line ml-1 text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Collaborative Partners */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Collaborative Partners</h3>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Working together with leading international organizations, UN agencies, and civil society partners to advance cultural resilience globally.
            </p>
          </div>

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
            <p className="text-gray-500 text-sm mb-4">Partnership opportunities available for organizations committed to cultural resilience and sustainability</p>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
              Become a Partner <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ─── VENUE ─── */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">Conference Venue</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Dome, Sydney Showground
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Sydney Showground is one of Australia's premier event destinations, located in Homebush Bay, Sydney. The Dome is a world-class, flexible venue capable of hosting large-scale international conferences, exhibitions, and cultural events.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'ri-map-pin-2-line', label: 'Address', val: '1 Showground Road, Homebush Bay NSW 2127' },
                  { icon: 'ri-phone-line', label: 'Venue Contact', val: '+61 2 9704 1203' },
                  { icon: 'ri-train-line', label: 'Getting There', val: 'Showground Station (direct train from Sydney CBD, ~20 min)' },
                ].map(({ icon, label, val }) => (
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
                    <div className="font-semibold">Website</div>
                    <a href="https://www.sydneyshowground.com.au" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.sydneyshowground.com.au</a>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-sm italic">
                Sydney Showground acknowledges the traditional custodians of the land and waters on which we meet. We pay our respects to Elders past and present.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Sydney%20Showground%20The%20Dome%20exterior%20large%20modern%20event%20venue%20Sydney%20Olympic%20Park%20NSW%20professional%20architectural%20photography%20clear%20blue%20sky%20impressive%20dome%20structure%20conference%20facility&width=800&height=500&seq=venue1showground&orientation=landscape"
                  alt="The Dome, Sydney Showground exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Sydney%20Olympic%20Park%20precinct%20green%20parklands%20modern%20facilities%20Homebush%20Bay%20aerial%20view%20professional%20photography%20vibrant%20daytime%20clear%20sky&width=400&height=300&seq=venue2olympic&orientation=landscape"
                    alt="Sydney Showground precinct"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Sydney%20Showground%20interior%20exhibition%20hall%20large%20conference%20setup%20professional%20event%20space%20modern%20architecture%20high%20ceiling%20warm%20lighting&width=400&height=300&seq=venue3interior&orientation=landscape"
                    alt="Sydney Showground interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d151.0694!3d-33.8469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bae5e3c3c3c3%3A0x1234567890abcdef!2sSydney%20Showground%2C%201%20Showground%20Rd%2C%20Sydney%20Olympic%20Park%20NSW%202127!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="The Dome, Sydney Showground - CROP 2026 Venue"
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
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Conference Schedule</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>3-Day Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">Detailed programme timeline (subject to updates)</p>
            <a href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-md whitespace-nowrap">
              <i className="ri-download-line text-lg"></i>Download Full Programme (PDF)
            </a>
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
                <p className="text-[#D4AF37] font-semibold text-lg">Theme: {day.theme}</p>
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

      {/* ─── SPONSORSHIP ─── */}
      <section id="sponsorship" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Partnership Opportunities</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Sponsorship Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible sponsorship packages designed to maximize your impact and visibility.
            </p>
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
                  {tier.highlight && <div className="mt-2 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full inline-block">Most Impactful</div>}
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
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${tier.highlight ? 'bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2540]' : 'bg-[#0A2540] hover:bg-[#1a4a7a] text-white'}`}>
                    Proceed to Payment
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">Custom partnership packages available. Contact us to discuss tailored opportunities.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-lg hover:bg-[#1a4a7a] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              <i className="ri-mail-line text-xl"></i>Contact Us for Custom Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BE PART OF THE CHANGE ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=inspiring%20diverse%20people%20conference%20collaboration%20networking%20cultural%20resilience%20Sydney%20Australia%20professional%20setting%20warm%20golden%20lighting%20beautiful%20modern%20venue&width=1920&height=900&seq=cropctabg2026v2&orientation=landscape"
            alt="Be Part of the Change"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/88 to-[#1a3a5a]/88"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Be Part of the Change</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join us in Sydney for three transformative days of dialogue, collaboration, and action towards a culturally resilient and sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap">
              <i className="ri-user-add-line text-lg"></i>Register Your Interest
            </a>
            <a href="#sponsorship"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              <i className="ri-hand-heart-line text-lg"></i>Partnership Opportunities
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'ri-file-text-line', color: 'from-[#0A2540] to-[#1a4a7a]', title: 'Submit Abstract', desc: 'Share your research and insights with global experts' },
              { icon: 'ri-hand-heart-line', color: 'from-[#D4AF37] to-yellow-600', title: 'Become a Sponsor', desc: 'Support cultural resilience and sustainability initiatives' },
              { icon: 'ri-megaphone-line', color: 'from-teal-500 to-teal-700', title: 'Media Partnership', desc: 'Amplify the message of cultural and environmental resilience' },
            ].map(({ icon, color, title, desc }) => (
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
