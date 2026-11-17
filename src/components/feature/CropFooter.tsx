import { Link } from 'react-router-dom';
import { sendForm } from '../../lib/forms';
import { useEffect, useRef } from 'react';
import copy from '../../content/layout/crop-footer.json';
// Text, images and links: src/content/layout/crop-footer.json (editable in the website editors).

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
              <img
                src={copy.crop2026Brand.image}
                alt={copy.crop2026Brand.imageAlt}
                className="h-10 w-auto object-contain rounded-full"
              />
              <span className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{copy.crop2026Brand.label}</span>
            </div>
            <p className="text-[#D4AF37] text-sm font-semibold mb-2">{copy.crop2026Brand.text}</p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{copy.crop2026Brand.text2}</p>

            {/* Divider */}
            <div className="border-t border-white/10 my-5"></div>

            {/* KWETU CONNECT Brand */}
            <Link to="/" className="flex items-center gap-3 mb-2 group cursor-pointer inline-flex">
              <div className="w-10 h-10 glass-effect-gold rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500">
                <img
                  src={copy.kwetuConnectBrand.image}
                  alt={copy.kwetuConnectBrand.imageAlt}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-white group-hover:text-accent transition-colors duration-300">{copy.kwetuConnectBrand.label}</span>
                <span className="text-accent font-bold text-base -mt-0.5 group-hover:text-accent-light transition-colors duration-300">{copy.kwetuConnectBrand.label2}</span>
              </div>
            </Link>
            <p className="text-accent italic font-serif text-sm mb-2">{copy.kwetuConnectBrand.text}</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{copy.kwetuConnectBrand.text2}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).querySelector<HTMLInputElement>('input[name="email"]')?.value;
                if (!email) return;
                const formData = new URLSearchParams();
                formData.append('email', email);
                sendForm('[NEWSLETTER] New subscriber', formData)
                  .then(() => alert('Thank you for subscribing!'))
                  .catch(() => alert('Something went wrong. Please try again.'));
              }}
              className="flex flex-col sm:flex-row gap-2"
             
            >
              <input
                type="email"
                name="email"
                placeholder={copy.kwetuConnectBrand.placeholder}
                required
                className="flex-1 px-4 py-2.5 rounded-full glass-effect border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:glass-effect-gold text-sm transition-all duration-300"
              />
              <button type="submit" className="px-5 py-2.5 glass-effect-gold hover:bg-accent text-primary font-semibold rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow">{copy.kwetuConnectBrand.button}</button>
            </form>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-compass-line text-accent mr-2"></i>{copy.column2QuickLinks.subheading}</h3>
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">{copy.column2QuickLinks.subheading2}</h4>
              <ul className="space-y-2 mb-5">
                <li><Link to="/crop2026/vision" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text}</Link></li>
                <li><Link to="/crop2026/pillars" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text2}</Link></li>
                <li><Link to="/crop2026/programme" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text3}</Link></li>
                <li><Link to="/crop2026/outcomes" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text4}</Link></li>
                <li><Link to="/crop2026/venue" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text5}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">{copy.column2QuickLinks.subheading3}</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text6}</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text7}</Link></li>
                <li><Link to="/crop2026" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text8}</Link></li>
                <li><Link to="/health-recruitment" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text9}</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text10}</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer text-sm">{copy.column2QuickLinks.text11}</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 — Organizers + Programs */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-hand-heart-line text-accent mr-2"></i>{copy.column3OrganizersPrograms.subheading}</h3>
            <div className="space-y-3 mb-6">
              <div>
                <a
                  href={copy.column3OrganizersPrograms.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >{copy.column3OrganizersPrograms.link}<i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">{copy.column3OrganizersPrograms.text}</p>
              </div>
              <div>
                <a
                  href={copy.column3OrganizersPrograms.url2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >{copy.column3OrganizersPrograms.link2}<i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">{copy.column3OrganizersPrograms.text2}</p>
              </div>
              <div>
                <a
                  href={copy.column3OrganizersPrograms.url3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                >{copy.column3OrganizersPrograms.link3}<i className="ri-external-link-line text-xs opacity-60"></i>
                </a>
                <p className="text-gray-500 text-xs">{copy.column3OrganizersPrograms.text3}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h3 className="text-white font-bold text-base mb-3 flex items-center">
                <i className="ri-service-line text-accent mr-2"></i>{copy.column3OrganizersPrograms.subheading2}</h3>
              <ul className="space-y-2">
                <li><Link to="/programs#mental-health" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text4}</Link></li>
                <li><Link to="/programs#cultural-exchange" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text5}</Link></li>
                <li><Link to="/programs#chaplaincy" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text6}</Link></li>
                <li><Link to="/programs#job-opportunities" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text7}</Link></li>
                <li><Link to="/programs#seniors-wisdom" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text8}</Link></li>
                <li><Link to="/programs#vulnerability" className="text-gray-300 hover:text-accent transition-all duration-300 hover:underline cursor-pointer text-sm">{copy.column3OrganizersPrograms.text9}</Link></li>
                <li className="mt-2">
                  <Link to="/programs" className="text-accent hover:text-accent-light transition-all duration-300 hover:underline cursor-pointer text-sm font-medium">{copy.column3OrganizersPrograms.text10}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 — Contact + Social + Sister Org */}
          <div className="glass-effect-dark p-6 rounded-xl border border-accent/10">
            <h3 className="text-white font-bold text-base mb-4 flex items-center">
              <i className="ri-customer-service-line text-accent mr-2"></i>{copy.column4ContactSocialSister.subheading}</h3>
            <div className="space-y-2 mb-5">
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-line mr-2 text-accent mt-0.5 flex-shrink-0"></i>
                <span>{copy.column4ContactSocialSister.label}</span>
              </div>
              <a href={copy.column4ContactSocialSister.emailLink} className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-mail-line mr-2 text-accent"></i>{copy.column4ContactSocialSister.link}</a>
              <div className="flex items-center text-gray-300 text-sm">
                <i className="ri-calendar-line mr-2 text-accent flex-shrink-0"></i>
                <span>{copy.column4ContactSocialSister.label2}</span>
              </div>
              <a href={copy.column4ContactSocialSister.phoneLink} className="flex items-center text-gray-300 hover:text-accent transition-all duration-300 cursor-pointer text-sm magnetic-button">
                <i className="ri-phone-line mr-2 text-accent"></i>{copy.column4ContactSocialSister.link2}</a>
              <div className="flex items-start text-gray-300 text-sm">
                <i className="ri-map-pin-2-line mr-2 text-accent mt-0.5 flex-shrink-0"></i>
                <span>{copy.column4ContactSocialSister.label3}</span>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-3">{copy.column4ContactSocialSister.subheading2}</h4>
            <div className="flex items-center gap-2 mb-6">
              {copy.items.map(({ icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={label}>
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>

            <h4 className="text-white font-semibold text-sm mb-2">{copy.column4ContactSocialSister.subheading3}</h4>
            <a
              href={copy.column4ContactSocialSister.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block glass-effect-gold border-2 border-accent text-accent hover:bg-accent hover:text-primary px-4 py-2 rounded-full font-semibold transition-all duration-500 whitespace-nowrap cursor-pointer text-sm magnetic-button volumetric-glow"
            >{copy.column4ContactSocialSister.link3}</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 glass-effect-dark relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()}{copy.bottomBar.text}</p>
            </div>
            <div className="flex items-center gap-4">
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}