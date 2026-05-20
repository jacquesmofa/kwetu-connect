import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CropSubNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const subNavLinks = [
    { name: 'Home', path: '/crop2026' },
    { name: 'Vision', path: '/crop2026/vision' },
    { name: 'Thematic Pillars', path: '/crop2026/pillars' },
    { name: 'Programme', path: '/crop2026/programme' },
    { name: 'Outcomes', path: '/crop2026/outcomes' },
    { name: 'Venue & Logistics', path: '/crop2026/venue' },
    { name: 'Partnership', path: '/crop2026/partnership' },
  ];

  const isActive = (path: string) => {
    if (path === '/crop2026') return location.pathname === '/crop2026';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sticky top-20 z-40">
      <div className="bg-[#0A2540] border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="hidden lg:flex items-center space-x-1">
              {subNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-[#D4AF37] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-white/60 text-sm flex items-center gap-1">
                <i className="ri-global-line"></i> EN
              </span>
              <Link
                to="/crop2026/register"
                className="px-5 py-2 bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2540] rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap"
              >
                Register Interest
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
              aria-label="Toggle conference menu"
            >
              <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0A2540] border-t border-white/10 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-1 pt-2">
              {subNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded-lg transition-all text-sm ${
                    isActive(link.path)
                      ? 'text-[#D4AF37] bg-white/10 font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/crop2026/register"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 py-2 px-3 bg-[#D4AF37] text-[#0A2540] rounded-lg font-semibold text-center text-sm"
              >
                Register Interest
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropSubNav;