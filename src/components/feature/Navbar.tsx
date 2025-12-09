import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
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
    { name: 'CROP 2026', path: '/crop2026' },
    { name: 'Health Recruitment', path: '/health-recruitment' },
    { name: 'Contact', path: '/contact' },
  ];

  const programsMenu = [
    { name: 'Mental Health & Wellbeing', path: '/programs#mental-health', icon: 'ri-mental-health-line' },
    { name: 'Cultural Exchange Programs', path: '/programs#cultural-exchange', icon: 'ri-earth-line' },
    { name: 'Community Chaplaincy', path: '/programs#chaplaincy', icon: 'ri-hand-heart-line' },
    { name: 'Job Opportunities & Care', path: '/programs#job-opportunities', icon: 'ri-briefcase-heart-line' },
    { name: 'Seniors Wisdom & Guidance', path: '/programs#seniors-wisdom', icon: 'ri-user-star-line' },
    { name: 'Turning Vulnerability to Opportunity', path: '/programs#vulnerability', icon: 'ri-seedling-line' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            {/* Logo Image */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-primary' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20abstract%20logo%20design%20representing%20connection%20and%20community%20with%20geometric%20shapes%20in%20gold%20and%20teal%20colors%20on%20transparent%20background%20minimalist%20professional%20consultancy%20brand%20identity&width=100&height=100&seq=kwetu-logo-001&orientation=squarish" 
                alt="KWETU CONNECT Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            {/* Brand Text */}
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-lg transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                KWETU
              </span>
              <span className="text-accent font-bold text-lg -mt-1">
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
                className={`relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                } ${location.pathname === link.path ? 'font-bold' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            ))}
            
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link
                to="/programs"
                className={`relative px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center ${
                  scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                } ${location.pathname === '/programs' ? 'font-bold' : ''}`}
              >
                Programs
                <i className={`ri-arrow-down-s-line ml-1 transition-transform ${programsDropdownOpen ? 'rotate-180' : ''}`}></i>
                {location.pathname === '/programs' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {programsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                  <div className="p-2">
                    {programsMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center px-4 py-3 text-primary hover:bg-accent/10 hover:text-accent rounded-lg transition-all group cursor-pointer"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg mr-3 group-hover:bg-accent/20 transition-colors">
                          <i className={`${item.icon} text-xl text-accent`}></i>
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                    <Link
                      to="/programs"
                      className="text-accent hover:text-accent-dark text-sm font-semibold flex items-center cursor-pointer"
                    >
                      View All Programs <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
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
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                scrolled ? 'text-teal hover:text-teal-dark' : 'text-white hover:text-accent'
              }`}
            >
              <i className="ri-links-line mr-1"></i>
              kwetu4communities
            </a>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-primary px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-primary' : 'text-white'} cursor-pointer z-10`}
            aria-label="Toggle menu"
          >
            <i className={`text-2xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-primary hover:bg-gray-50 hover:text-accent transition-colors rounded-lg cursor-pointer ${
                  location.pathname === link.path ? 'font-bold bg-gray-50' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Programs Mobile Dropdown */}
            <div>
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 text-primary hover:bg-gray-50 hover:text-accent transition-colors rounded-lg cursor-pointer ${
                  location.pathname === '/programs' ? 'font-bold bg-gray-50' : ''
                }`}
              >
                <span>Programs</span>
                <i className={`ri-arrow-down-s-line transition-transform ${programsDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {programsDropdownOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {programsMenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent rounded-lg transition-colors cursor-pointer"
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
              className="block py-3 px-4 text-teal hover:bg-gray-50 hover:text-teal-dark transition-colors rounded-lg cursor-pointer"
            >
              <i className="ri-links-line mr-1"></i>
              kwetu4communities
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-accent hover:bg-accent-dark text-primary px-6 py-3 rounded-full text-center font-semibold transition-all cursor-pointer mt-4"
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