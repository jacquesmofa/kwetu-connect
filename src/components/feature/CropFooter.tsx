import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function CropFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const createFloatingStar = () => {
      const star = document.createElement('div');
      star.className = 'floating-star';
      star.innerHTML = '★';
      star.style.left = `${Math.random() * 100}%`;
      star.style.bottom = '0';
      star.style.fontSize = `${Math.random() * 30 + 25}px`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 4 + 6}s`;
      star.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.4)';
      footer.appendChild(star);

      setTimeout(() => star.remove(), 10000);
    };

    const createFloatingLight = () => {
      const light = document.createElement('div');
      light.className = 'floating-light';
      light.style.left = `${Math.random() * 100}%`;
      light.style.bottom = '0';
      light.style.animationDelay = `${Math.random() * 2}s`;
      light.style.animationDuration = `${Math.random() * 3 + 5}s`;
      light.style.width = '8px';
      light.style.height = '8px';
      light.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.9), 0 0 30px rgba(212, 175, 55, 0.7)';
      footer.appendChild(light);

      setTimeout(() => light.remove(), 8000);
    };

    const starInterval = setInterval(createFloatingStar, 200);
    const lightInterval = setInterval(createFloatingLight, 150);

    return () => {
      clearInterval(starInterval);
      clearInterval(lightInterval);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0A2540] text-white relative overflow-hidden">
      {/* Volumetric Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Upper Footer */}
      <div className="container-custom py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1 — Conference Brand + Kwetu Brand */}
          <div>
            {/* CROP 2026 Brand */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-full flex items-center justify-center">
                <i className="ri-global-line text-xl text-[#0A2540]"></i>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>CROP 2026</span>
            </div>
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">Cultural Resilience, One Planet</p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Bridging cultural actors with global sustainability agendas, protecting Indigenous knowledge, and promoting community resilience.
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 my-5"></div>

            {/* KWETU CONNECT Brand */}
            <Link to="/" className="flex items-center gap-3 mb-2 group cursor-pointer inline-flex">
              <div className="w-10 h-10 glass-effect-gold rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500">
                <img
                  src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/fc5ec43ccf97931d43a5fa168938a37f.png"
                  alt="KWETU CONNECT Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-white group-hover:text-accent transition-colors duration-300">KWETU</span>
                <span className="text-accent font-bold text-base -mt-0.5 group-hover:text-accent-light transition-colors duration-300">CONNECT</span>
              </div>
            </Link>
            <p className="text-accent italic font-serif text-sm mb-2">
              Redefining Barriers, Navigating Opportunities
            </p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Bridging communities, markets, and institutions through cultural resilience and sustainable partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full glass-effect border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:glass-effect-gold text-sm transition-all duration-300"
              />
              <button className="px-5 py-2.5 glass-effect-gold hover:bg-accent text-primary font-semibold rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-compass-line text-accent mr-2"></i>
              Explore
            </h3>
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">Conference</h4>
              <ul className="space-y-2 mb-5">
                <li><Link to="/crop2026/vision" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">The Vision</Link></li>
                <li><Link to="/crop2026/pillars" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Thematic Pillars</Link></li>
                <li><Link to="/crop2026/programme" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Programme Overview</Link></li>
                <li><Link to="/crop2026/outcomes" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Expected Outcomes</Link></li>
                <li><Link to="/crop2026/venue" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Venue &amp; Logistics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">Website</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">About Us</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Programs</Link></li>
                <li><Link to="/crop2026" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">CROP 2026</Link></li>
                <li><Link to="/health-recruitment" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Health Recruitment</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 — Organizers + Programs */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-hand-heart-line text-accent mr-2"></i>
              Organizers
            </h3>
            <div className="space-y-3 mb-6">
              <div>
                <a
                  href="https://kwetuconnect.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  KWETU CONNECT PTY LTD
                  <i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">Co-Organizer</p>
              </div>
              <div>
                <a
                  href="https://ldiinitiatives.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Livelihood Development International Initiatives (LDII)
                  <i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">Co-Organizer</p>
              </div>
              <div>
                <a
                  href="https://www.thrivetours.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Thrive Tours
                  <i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">Co-Organizer</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h3 className="text-white font-bold text-base mb-3 flex items-center">
                <i className="ri-service-line text-accent mr-2"></i>
                Our Programs
              </h3>
              <ul className="space-y-2">
                <li><Link to="/programs#mental-health" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Mental Health &amp; Wellbeing</Link></li>
                <li><Link to="/programs#cultural-exchange" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Cultural Exchange Programs</Link></li>
                <li><Link to="/programs#chaplaincy" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Community Chaplaincy</Link></li>
                <li><Link to="/programs#job-opportunities" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Job Opportunities &amp; Care</Link></li>
                <li><Link to="/programs#seniors-wisdom" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Seniors Wisdom &amp; Guidance</Link></li>
                <li><Link to="/programs#vulnerability" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">Turning Vulnerability to Opportunity</Link></li>
                <li className="mt-2">
                  <Link to="/programs" className="text-accent hover:text-accent-light transition-all duration-300 hover:underline cursor-pointer text-sm font-medium">
                    View All Programs →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 — Contact + Social + Sister Org */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-customer-service-line text-accent mr-2"></i>
              Get In Touch
            </h3>
            <div className="space-y-2 mb-5">
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-line mr-2 text-accent mt-0.5 flex-shrink-0"></i>
                <span>The Dome, Sydney Showground, NSW, Australia</span>
              </div>
              <a href="mailto:info@kwetuconnect.org" className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-mail-line mr-2 text-accent"></i>
                info@kwetuconnect.org
              </a>
              <div className="flex items-center text-gray-300 text-sm">
                <i className="ri-calendar-line mr-2 text-accent flex-shrink-0"></i>
                <span>November 6-8, 2026</span>
              </div>
              <a href="tel:0246279742" className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-phone-line mr-2 text-accent"></i>
                02 4627 9742
              </a>
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-2-line mr-2 text-accent mt-0.5 flex-shrink-0"></i>
                <span>58 Illyria Street, Rosemeadow, Sydney 2560 NSW, Australia</span>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
            <div className="flex items-center gap-2 mb-6">
              {[
                { icon: 'ri-facebook-fill', url: 'https://facebook.com/crop2026', label: 'Facebook' },
                { icon: 'ri-youtube-fill', url: 'https://youtube.com/crop2026', label: 'YouTube' },
                { icon: 'ri-instagram-fill', url: 'https://instagram.com/crop2026', label: 'Instagram' },
                { icon: 'ri-twitter-x-line', url: 'https://x.com/crop2026', label: 'X' },
                { icon: 'ri-linkedin-fill', url: 'https://linkedin.com/company/crop2026', label: 'LinkedIn' },
              ].map(({ icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={label}>
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>

            <h4 className="text-white font-semibold text-sm mb-2">Sister Organization</h4>
            <a
              href="https://kwetu4communities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-effect-gold border-2 border-accent text-accent hover:bg-accent hover:text-primary px-4 py-2 rounded-full font-semibold transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow"
            >
              Visit kwetu4communities →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 glass-effect-dark relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p className="text-white/60 text-sm">
                © 2025 KWETU CONNECT PTY LTD &amp; Livelihood Development International Initiatives (LDII). All rights reserved.
              </p>
              <span className="hidden sm:block text-white/30">|</span>
              <p className="text-white/60 text-sm">
                © 2026 KWETU CONNECT. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-white/60 hover:text-accent transition-all duration-300 text-sm whitespace-nowrap magnetic-button">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/terms-of-service" className="text-white/60 hover:text-accent transition-all duration-300 text-sm whitespace-nowrap magnetic-button">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}