import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Upper Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Subscribe */}
          <div className="lg:col-span-1">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 mb-3">
              {/* Logo Image */}
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20abstract%20logo%20design%20representing%20connection%20and%20community%20with%20geometric%20shapes%20in%20gold%20and%20teal%20colors%20on%20transparent%20background%20minimalist%20professional%20consultancy%20brand%20identity&width=100&height=100&seq=kwetu-logo-002&orientation=squarish" 
                  alt="KWETU CONNECT Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              {/* Brand Text */}
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-lg text-white">KWETU</span>
                <span className="text-accent font-bold text-lg -mt-1">CONNECT</span>
              </div>
            </div>
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
                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-sm"
              />
              <button className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-primary font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  Programs & Services
                </Link>
              </li>
              <li>
                <Link to="/crop2026" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  CROP 2026 Conference
                </Link>
              </li>
              <li>
                <Link to="/health-recruitment" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  Health Recruitment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors hover:underline cursor-pointer text-sm">
                  Contact & Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Cultural Resilience & Heritage</li>
              <li className="text-gray-300 text-sm">Health Equity & Wellbeing</li>
              <li className="text-gray-300 text-sm">Sustainable Trade & Livelihood</li>
              <li className="text-gray-300 text-sm">Global Partnership Projects</li>
              <li className="text-gray-300 text-sm">Events & Expo Management</li>
              <li className="mt-3">
                <Link to="/programs" className="text-accent hover:text-accent-light transition-colors hover:underline cursor-pointer text-sm font-medium">
                  View All Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Sister Org */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Get In Touch</h3>
            <div className="space-y-2 mb-6">
              <a href="tel:0246279742" className="flex items-center text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">
                <i className="ri-phone-line mr-2 text-accent"></i>
                02 4627 9742
              </a>
              <a href="mailto:info@kwetuconnect.com.au" className="flex items-center text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">
                <i className="ri-mail-line mr-2 text-accent"></i>
                info@kwetuconnect.com.au
              </a>
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-line mr-2 text-accent mt-0.5"></i>
                <span>Sydney, NSW, Australia</span>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">Sister Organization</h4>
            <a
              href="https://kwetu4communities.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-primary px-5 py-2 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer text-sm"
            >
              Visit kwetu4communities →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} KWETU CONNECT. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="/terms-of-service" className="text-white/60 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}