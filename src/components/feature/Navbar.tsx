import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [cropDropdownOpen, setCropDropdownOpen] = useState(false);
  const [mobileCropOpen, setMobileCropOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Health Recruitment', path: '/health-recruitment' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const programsMenu = [
    { name: 'Mental Health & Wellbeing', path: '/programs#mental-health', icon: 'ri-mental-health-line' },
    { name: 'Cultural Exchange Programs', path: '/programs#cultural-exchange', icon: 'ri-earth-line' },
    { name: 'Community Chaplaincy', path: '/programs#chaplaincy', icon: 'ri-hand-heart-line' },
    { name: 'Job Opportunities & Care', path: '/programs#job-opportunities', icon: 'ri-briefcase-line' },
    { name: 'Seniors Wisdom & Guidance', path: '/programs#seniors-wisdom', icon: 'ri-user-star-line' },
    { name: 'Turning Vulnerability to Opportunity', path: '/programs#vulnerability', icon: 'ri-seedling-line' },
  ];

  const cropMenu = [
    { name: 'Home', path: '/crop2026', icon: 'ri-home-line' },
    { name: 'Vision', path: '/crop2026/vision', icon: 'ri-eye-line' },
    { name: 'Thematic Pillars', path: '/crop2026/pillars', icon: 'ri-layout-masonry-line' },
    { name: 'Programme', path: '/crop2026/programme', icon: 'ri-calendar-event-line' },
    { name: 'Outcomes', path: '/crop2026/outcomes', icon: 'ri-bar-chart-grouped-line' },
    { name: 'Venue & Logistics', path: '/crop2026/venue', icon: 'ri-map-pin-line' },
    { name: 'Partnership', path: '/crop2026/partnership', icon: 'ri-team-line' },
    { name: 'Register Interest', path: '/crop2026/register', icon: 'ri-edit-line', highlight: true },
  ];

  const isCropActive = location.pathname.startsWith('/crop2026');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect-dark shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10 group cursor-pointer">
            {/* Logo Image */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 volumetric-glow ${
              scrolled ? 'glass-effect-gold group-hover:bg-accent/30' : 'glass-effect group-hover:bg-white/30'
            }`}>
              <img 
                src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/fc5ec43ccf97931d43a5fa168938a37f.png" 
                alt="KWETU CONNECT Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-lg transition-colors duration-300 ${
                scrolled ? 'text-white group-hover:text-accent' : 'text-white group-hover:text-accent'
              }`}>
                KWETU
              </span>
              <span className="text-accent font-bold text-lg -mt-1 group-hover:text-accent-light transition-colors duration-300">
                CONNECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap magnetic-button ${
                  scrolled ? 'text-white hover:text-accent' : 'text-white hover:text-accent'
                } ${location.pathname === link.path ? 'font-bold' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shimmer" />
                )}
              </Link>
            ))}
            
            {/* CROP 2026 Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCropDropdownOpen(true)}
              onMouseLeave={() => setCropDropdownOpen(false)}
            >
              <Link
                to="/crop2026"
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap flex items-center magnetic-button ${
                  scrolled ? 'text-white hover:text-accent' : 'text-white hover:text-accent'
                } ${isCropActive ? 'font-bold' : ''}`}
              >
                CROP 2026
                <i className={`ri-arrow-down-s-line ml-1 transition-transform duration-300 ${cropDropdownOpen ? 'rotate-180' : ''}`}></i>
                {isCropActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shimmer" />
                )}
              </Link>
              
              {/* CROP 2026 Dropdown Menu - Two Column */}
              {cropDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] glass-effect-dark rounded-xl shadow-2xl border border-accent/20 overflow-hidden">
                  <div className="animate-fadeIn">
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 flex items-center justify-center glass-effect-gold rounded-lg">
                          <i className="ri-calendar-check-line text-xl text-accent"></i>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">CROP 2026 Conference</p>
                          <p className="text-white/60 text-xs">November 6-8, 2026 &middot; Sydney, Australia</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {cropMenu.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center px-3 py-2.5 rounded-lg transition-colors duration-300 group cursor-pointer ${
                              item.highlight 
                                ? 'bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#D4AF37]' 
                                : 'text-white hover:bg-accent/20 hover:text-accent'
                            }`}
                          >
                            <div className={`w-8 h-8 flex items-center justify-center rounded-md mr-2.5 transition-colors duration-300 ${
                              item.highlight ? 'bg-[#D4AF37]/20' : 'glass-effect-gold group-hover:bg-accent/30'
                            }`}>
                              <i className={`${item.icon} text-sm ${item.highlight ? 'text-[#D4AF37]' : 'text-accent'}`}></i>
                            </div>
                            <span className="text-sm font-medium">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="glass-effect-gold px-5 py-3 border-t border-accent/20">
                      <Link
                        to="/crop2026"
                        className="text-accent hover:text-accent-light text-sm font-semibold flex items-center cursor-pointer transition-colors duration-300"
                      >
                        Visit Conference Home <i className="ri-arrow-right-line ml-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link
                to="/programs"
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap flex items-center magnetic-button ${
                  scrolled ? 'text-white hover:text-accent' : 'text-white hover:text-accent'
                } ${location.pathname === '/programs' ? 'font-bold' : ''}`}
              >
                Programs
                <i className={`ri-arrow-down-s-line ml-1 transition-transform duration-300 ${programsDropdownOpen ? 'rotate-180' : ''}`}></i>
                {location.pathname === '/programs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent shimmer" />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-effect-dark rounded-xl shadow-2xl border border-accent/20 overflow-hidden">
                  <div className="animate-fadeIn">
                    <div className="p-2">
                      {programsMenu.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="flex items-center px-4 py-3 text-white hover:bg-accent/20 hover:text-accent rounded-lg transition-colors duration-300 group cursor-pointer volumetric-glow"
                        >
                          <div className="w-10 h-10 flex items-center justify-center glass-effect-gold rounded-lg mr-3 group-hover:bg-accent/30 transition-colors duration-300">
                            <i className={`${item.icon} text-xl text-accent`}></i>
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="glass-effect-gold px-4 py-3 border-t border-accent/20">
                      <Link
                        to="/programs"
                        className="text-accent hover:text-accent-light text-sm font-semibold flex items-center cursor-pointer transition-colors duration-300"
                      >
                        View All Programs <i className="ri-arrow-right-line ml-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://kwetu4communities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap magnetic-button ${
                scrolled ? 'text-accent hover:text-accent-light' : 'text-white hover:text-accent'
              }`}
            >
              <i className="ri-links-line mr-1"></i>
              kwetu4communities
            </a>
            <Link
              to="/contact"
              className="bg-[#D4AF37] hover:bg-[#E5C047] text-[#0A2540] px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 hover:scale-105 whitespace-nowrap cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.9)] animate-pulse-glow relative z-50"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'} cursor-pointer z-10`}
            aria-label="Toggle menu"
          >
            <i className={`text-2xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-effect-dark border-t border-accent/20 shadow-xl">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-300 rounded-lg cursor-pointer ${
                  location.pathname === link.path ? 'font-bold bg-accent/10' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CROP 2026 Mobile Dropdown */}
            <div>
              <button
                onClick={() => setMobileCropOpen(!mobileCropOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-300 rounded-lg cursor-pointer ${
                  isCropActive ? 'font-bold bg-accent/10' : ''
                }`}
              >
                <span>CROP 2026</span>
                <i className={`ri-arrow-down-s-line transition-transform duration-300 ${mobileCropOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {mobileCropOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {cropMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center py-2 px-4 text-sm rounded-lg transition-all duration-300 cursor-pointer ${
                        item.highlight
                          ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-medium'
                          : 'text-gray-300 hover:bg-accent/20 hover:text-accent'
                      }`}
                    >
                      <i className={`${item.icon} mr-2 ${item.highlight ? 'text-[#D4AF37]' : 'text-accent'}`}></i>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Programs Mobile Dropdown */}
            <div>
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-300 rounded-lg cursor-pointer ${
                  location.pathname === '/programs' ? 'font-bold bg-accent/10' : ''
                }`}
              >
                <span>Programs</span>
                <i className={`ri-arrow-down-s-line transition-transform duration-300 ${programsDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {programsDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {programsMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-2 px-4 text-sm text-gray-300 hover:bg-accent/20 hover:text-accent rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <i className={`${item.icon} text-accent mr-2`}></i>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="https://kwetu4communities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-4 text-accent hover:bg-accent/20 hover:text-accent-light transition-all duration-300 rounded-lg cursor-pointer"
            >
              <i className="ri-links-line mr-1"></i>
              kwetu4communities
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-[#D4AF37] hover:bg-[#E5C047] text-[#0A2540] px-6 py-3 rounded-full text-center font-bold transition-all duration-500 cursor-pointer mt-4 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;