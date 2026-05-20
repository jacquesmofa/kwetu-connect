import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';

export default function VenuePage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Sydney%20Showground%20The%20Dome%20exterior%20modern%20event%20venue%20Sydney%20Olympic%20Park%20NSW%202127%20architectural%20photography%20clear%20blue%20sky%20professional%20conference%20facility%20large%20dome%20structure%20impressive%20building&width=1920&height=700&seq=cropvenuehero&orientation=landscape"
              alt="Venue & Logistics"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Conference Venue</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Venue & Logistics
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to know to plan your visit to Australia's most vibrant city.
            </p>
          </div>
        </section>

        {/* The Dome */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">The Dome</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mt-3 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The Dome, Sydney Showground
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Sydney Showground is one of Australia's premier event destinations, located in Homebush Bay, Sydney. The Dome is a world-class, flexible venue featuring state-of-the-art facilities, modern amenities, and flexible spaces designed to host international conferences of the highest caliber.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-2-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">Address</div>
                      <div className="text-gray-600">1 Showground Road, Homebush Bay NSW 2127, Australia</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-train-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">Getting There</div>
                      <div className="text-gray-600">Showground Station (direct train from Sydney CBD, ~20 min)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-global-line text-[#D4AF37] text-xl flex-shrink-0 mt-0.5"></i>
                    <div>
                      <div className="font-semibold text-[#0A2540]">Website</div>
                      <a href="https://www.sydneyshowground.com.au" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">www.sydneyshowground.com.au</a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'State-of-the-art Conference Facilities',
                    'On-site Catering & Dining',
                    'High-speed WiFi Throughout',
                    'Multilingual Support Staff',
                    'Ample Parking Space',
                    'Security & Safety Measures',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <i className="ri-check-line text-green-600 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
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
              </div>
            </div>
          </div>
        </section>

        {/* Travel Benefits */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Exclusive Travel Benefits</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'ri-plane-line', title: 'Discounted Flights', desc: 'Find the best flight deals to Sydney from anywhere in the world.', cta: 'Search Flights' },
                { icon: 'ri-hotel-line', title: 'Discounted Hotels', desc: 'Special conference rates at partner hotels near the venue.', cta: 'Browse Hotels' },
                { icon: 'ri-taxi-line', title: 'Discounted Rides', desc: 'Convenient transport options and special rates for delegates.', cta: 'Plan Journey' },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-2xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{benefit.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-[#D4AF37] font-semibold text-sm hover:text-[#C4A137] transition-colors">
                    {benefit.cta} <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              For exclusive conference discount codes, contact our logistics team.
            </p>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Location Map</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Easily Accessible from Sydney CBD
              </h2>
            </div>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
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
        </section>

        {/* Travel & Logistics */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Travel & Logistics</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'ri-hotel-bed-line',
                  title: 'Accommodation',
                  items: [
                    'Partner hotels with conference rates available',
                    'Range of options from budget to luxury',
                    'Shuttle service from major hotels to venue',
                    'Early booking recommended for best rates',
                  ],
                },
                {
                  icon: 'ri-flight-takeoff-line',
                  title: 'Travel & Transport',
                  items: [
                    'Sydney Kingsford Smith Airport (20km from venue)',
                    'Direct train service to Showground Station',
                    'Taxi and rideshare services readily available',
                    'Parking facilities at the venue',
                  ],
                },
                {
                  icon: 'ri-passport-line',
                  title: 'Visa Information',
                  items: [
                    'Check visa requirements for Australia',
                    'Apply early - processing can take several weeks',
                    'Conference invitation letters available upon request',
                    'Contact your nearest Australian embassy',
                  ],
                },
                {
                  icon: 'ri-wheelchair-line',
                  title: 'Accessibility',
                  items: [
                    'Fully wheelchair-accessible venue',
                    'Accessible transport options available',
                    'Sign language interpretation provided',
                    'Special dietary requirements accommodated',
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#0A2540] rounded-lg flex items-center justify-center">
                      <i className={`${section.icon} text-lg text-[#D4AF37]`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2540]">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discover Sydney */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Discover Sydney</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Australia's Largest and Most Vibrant City
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Sydney is Australia's largest and most vibrant city, known for its iconic Opera House, stunning harbor, and multicultural atmosphere. The city offers world-class dining, cultural attractions, and natural beauty that seamlessly blend urban sophistication with coastal charm.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  November is springtime in Sydney, with pleasant temperatures ranging from 18-25°C (64-77°F) and ideal conditions for exploring the city's beaches, parks, and cultural sites. The weather is perfect for outdoor activities and networking events.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-sun-line', title: 'Perfect Climate', desc: 'Spring weather with comfortable temperatures and low rainfall' },
                    { icon: 'ri-global-line', title: 'Multicultural Hub', desc: 'Over 250 languages spoken, celebrating diversity' },
                    { icon: 'ri-restaurant-line', title: 'World-Class Dining', desc: 'Renowned restaurants and diverse culinary experiences' },
                    { icon: 'ri-tree-line', title: 'Natural Beauty', desc: 'Stunning beaches, harbor, and national parks' },
                  ].map((highlight) => (
                    <div key={highlight.title} className="flex items-start gap-2">
                      <i className={`${highlight.icon} text-[#D4AF37] mt-0.5 flex-shrink-0`}></i>
                      <div>
                        <div className="font-semibold text-[#0A2540] text-sm">{highlight.title}</div>
                        <div className="text-gray-600 text-xs">{highlight.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20iconic%20architecture%20waterfront%20UNESCO%20World%20Heritage%20professional%20photography%20clear%20sky%20beautiful%20lighting&width=400&height=300&seq=syd1&orientation=landscape"
                      alt="Sydney Opera House"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">Sydney Opera House</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Sydney%20Harbour%20Bridge%20iconic%20landmark%20spectacular%20city%20views%20professional%20photography%20golden%20hour%20beautiful%20landscape&width=400&height=300&seq=syd2&orientation=landscape"
                      alt="Harbour Bridge"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">Harbour Bridge</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Royal%20Botanic%20Gardens%20Sydney%20tranquil%20oasis%20lush%20greenery%20beautiful%20flowers%20professional%20photography%20peaceful%20setting&width=400&height=300&seq=syd3&orientation=landscape"
                      alt="Botanic Gardens"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">Botanic Gardens</p>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Sydney%20harbour%20waterfront%20sunset%20beautiful%20skyline%20cruise%20boats%20professional%20photography%20vibrant%20colors&width=400&height=300&seq=syd4&orientation=landscape"
                      alt="Sydney Harbour"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold text-[#0A2540]">Harbour Cruise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Assistance */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Need Assistance?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our logistics team is here to help with accommodation, travel arrangements, visa support, and any special requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg"></i>Email Logistics Team
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-download-line text-lg"></i>Download Travel Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}