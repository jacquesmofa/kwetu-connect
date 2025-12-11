import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Create floating stars and lights with increased frequency and size
    const footer = footerRef.current;
    if (!footer) return;

    const createFloatingStar = () => {
      const star = document.createElement('div');
      star.className = 'floating-star';
      star.innerHTML = '★';
      star.style.left = `${Math.random() * 100}%`;
      star.style.bottom = '0';
      star.style.fontSize = `${Math.random() * 30 + 25}px`; // Increased from 20+15 to 30+25
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${Math.random() * 4 + 6}s`;
      star.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.6), 0 0 30px rgba(212, 175, 55, 0.4)'; // More luminous
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
      light.style.width = '8px'; // Increased from default
      light.style.height = '8px'; // Increased from default
      light.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.9), 0 0 30px rgba(212, 175, 55, 0.7)'; // More luminous
      footer.appendChild(light);

      setTimeout(() => light.remove(), 8000);
    };

    // Increased frequency: from 400ms to 200ms for stars, from 300ms to 150ms for lights
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Subscribe */}
          <div className="lg:col-span-1">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 mb-3 group cursor-pointer inline-flex">
              {/* Logo Image */}
              <div className="w-12 h-12 glass-effect-gold rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500 volumetric-glow">
                <img 
                  src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/fc5ec43ccf97931d43a5fa168938a37f.png" 
                  alt="KWETU CONNECT Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              {/* Brand Text */}
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors duration-300">KWETU</span>
                <span className="text-accent font-bold text-lg -mt-1 group-hover:text-accent-light transition-colors duration-300">CONNECT</span>
              </div>
            </Link>
            <p className="text-accent italic font-serif text-base mb-3">
              Redefining Barriers, Navigating Opportunities
            </p>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Bridging communities, markets, and institutions through cultural resilience and sustainable partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full glass-effect border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:glass-effect-gold text-sm transition-all duration-300"
              />
              <button className="px-6 py-2.5 glass-effect-gold hover:bg-accent text-primary font-semibold rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-compass-line text-accent mr-2"></i>
              Explore
            </h3>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/crop2026" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    CROP 2026
                  </Link>
                </li>
                <li>
                  <Link to="/health-recruitment" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    Health Recruitment
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Programs */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-service-line text-accent mr-2"></i>
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs#mental-health" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Mental Health & Wellbeing
                </Link>
              </li>
              <li>
                <Link to="/programs#cultural-exchange" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Cultural Exchange Programs
                </Link>
              </li>
              <li>
                <Link to="/programs#chaplaincy" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Community Chaplaincy
                </Link>
              </li>
              <li>
                <Link to="/programs#job-opportunities" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Job Opportunities & Care
                </Link>
              </li>
              <li>
                <Link to="/programs#seniors-wisdom" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Seniors Wisdom & Guidance
                </Link>
              </li>
              <li>
                <Link to="/programs#vulnerability" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm magnetic-button inline-block">
                  Turning Vulnerability to Opportunity
                </Link>
              </li>
              <li className="mt-3">
                <Link to="/programs" className="text-accent hover:text-accent-light transition-all duration-300 hover:underline cursor-pointer text-sm font-medium magnetic-button inline-block">
                  View All Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Sister Org */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-customer-service-line text-accent mr-2"></i>
              Get In Touch
            </h3>
            <div className="space-y-2 mb-6">
              <a href="tel:0246279742" className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-phone-line mr-2 text-accent"></i>
                02 4627 9742
              </a>
              <a href="mailto:info@kwetuconnect.com.au" className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-mail-line mr-2 text-accent"></i>
                info@kwetuconnect.com.au
              </a>
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-line mr-2 text-accent mt-0.5"></i>
                <span>58 Illyria Street, Rosemeadow, Sydney 2560 NSW, Australia</span>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Sister Organization</h4>
            <a
              href="https://kwetu4communities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-effect-gold border-2 border-accent text-accent hover:bg-accent hover:text-primary px-5 py-2 rounded-full font-semibold transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow"
            >
              Visit kwetu4communities →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 glass-effect-dark relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} KWETU CONNECT. All rights reserved MJ.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-white/60 hover:text-accent transition-all duration-300 text-sm whitespace-nowrap magnetic-button">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="/terms-of-service" className="text-white/60 hover:text-accent transition-all duration-300 text-sm whitespace-nowrap magnetic-button">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}