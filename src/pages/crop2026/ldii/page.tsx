import { Link, useNavigate } from 'react-router-dom';
import CropConferenceLayout from '../components/CropConferenceLayout';

export default function LdiiPage() {
  const navigate = useNavigate();

  return (
    <CropConferenceLayout>
      <title>Livelihood Development International Initiatives (LDII) | Co-Organizer CROP 2026</title>
      <meta name="description" content="LDII - Co-Organizer of CROP 2026. Empowering communities through sustainable livelihood programs, cultural preservation, and resilience-building initiatives." />

      {/* ─── BACK NAVIGATION ─── */}
      <div className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-[#0A2540] font-medium hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Back to CROP 2026
          </button>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=sustainable%20livelihood%20development%20rural%20community%20empowerment%20green%20agriculture%20fields%20sunrise%20professional%20photography%20warm%20golden%20light%20diverse%20farmers%20working%20together&width=1920&height=900&seq=ldiihero1&orientation=landscape"
            alt="LDII community empowerment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            Co-Organizer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#D4AF37]">Livelihood Development</span><br />International Initiatives
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 italic">
            Empowering Communities Through Sustainable Livelihood Programs
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Building Resilient Communities Worldwide
          </p>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=sustainable%20agriculture%20training%20program%20smallholder%20farmers%20community%20garden%20lush%20green%20crops%20professional%20photography%20warm%20natural%20light&width=800&height=500&seq=ldiiimg1&orientation=landscape"
                  alt="LDII sustainable agriculture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=women%20empowerment%20workshop%20community%20development%20program%20diverse%20group%20professional%20training%20session%20warm%20lighting&width=400&height=300&seq=ldiiimg2&orientation=landscape"
                    alt="Women empowerment program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=microenterprise%20development%20small%20business%20artisan%20crafts%20market%20fair%20trade%20professional%20photography%20colorful%20products&width=400&height=300&seq=ldiiimg3&orientation=landscape"
                    alt="Microenterprise development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Global Force for Sustainable Development
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Livelihood Development International Initiatives (LDII) is a global organization committed to empowering vulnerable communities through sustainable livelihood programs, capacity building, and integrated development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With decades of experience working across diverse contexts — from rural agricultural communities to urban informal settlements — LDII has established itself as a trusted partner in community-driven development. We believe that sustainable livelihoods are the foundation for resilient communities and lasting social change.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our approach is holistic, addressing not only economic needs but also social, cultural, and environmental dimensions of development. We work hand-in-hand with communities, respecting local knowledge and traditions while introducing innovative solutions that enhance resilience and sustainability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ldiinitiatives.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-full hover:bg-[#1a4a7a] transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-global-line"></i>Visit Official Website
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-mail-line"></i>Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where all communities have access to sustainable livelihoods, where poverty is eradicated through dignified work and economic opportunity, and where development is inclusive, equitable, and respects both cultural heritage and environmental boundaries.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-focus-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower marginalized communities worldwide through integrated livelihood development programs that build capacity, create economic opportunities, strengthen resilience, and promote sustainable practices that honor cultural traditions and protect the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE PROGRAMS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Core Programs</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Comprehensive approaches to sustainable livelihood development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'ri-plant-line', title: 'Sustainable Agriculture', desc: 'Supporting smallholder farmers with climate-smart agricultural practices, market access, and value chain development.' },
              { icon: 'ri-store-2-line', title: 'Microenterprise Development', desc: 'Providing training, microfinance, and business development support to help communities create sustainable income streams.' },
              { icon: 'ri-tools-line', title: 'Skills Training', desc: 'Offering vocational training and capacity building programs that equip individuals with marketable skills.' },
              { icon: 'ri-women-line', title: "Women's Empowerment", desc: 'Implementing gender-focused programs that promote economic independence and leadership for women.' },
              { icon: 'ri-leaf-line', title: 'Environmental Conservation', desc: 'Integrating environmental sustainability into livelihood programs through conservation and restoration practices.' },
              { icon: 'ri-heart-pulse-line', title: 'Health & Nutrition', desc: 'Addressing health and nutrition needs as fundamental components of sustainable livelihoods.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-4">
                  <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Philosophy</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'ri-group-line', title: 'Community-Driven', desc: 'We believe communities are the experts on their own needs. Our programs are designed and implemented with full community participation.' },
              { icon: 'ri-ancient-pavilion-line', title: 'Culturally Sensitive', desc: 'We respect and integrate local cultural values, traditions, and knowledge systems into all our development interventions.' },
              { icon: 'ri-link-m', title: 'Holistic Integration', desc: 'We address multiple dimensions of wellbeing — economic, social, environmental, and cultural — in an integrated manner.' },
              { icon: 'ri-bar-chart-line', title: 'Evidence-Based', desc: 'Our programs are grounded in research, data, and proven methodologies, with continuous monitoring and evaluation.' },
              { icon: 'ri-team-line', title: 'Partnership-Oriented', desc: 'We collaborate with local organizations, governments, and international partners to maximize impact and sustainability.' },
              { icon: 'ri-time-line', title: 'Long-Term Commitment', desc: 'We invest in building local capacity and systems that ensure programs continue long after our direct involvement.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GLOBAL REACH ─── */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Reach</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Global Reach</h2>
            <p className="text-white/70 mt-3">Making a difference in communities across continents</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { value: '45+', label: 'Countries', sub: 'Across Africa, Asia-Pacific, Latin America, Middle East' },
              { value: '500+', label: 'Projects', sub: 'Sustainable livelihood and cultural preservation' },
              { value: '2M+', label: 'Beneficiaries', sub: 'Lives touched through our programs' },
              { value: '25+', label: 'Years Experience', sub: 'Decades of community-driven development' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">{value}</div>
                <div className="text-white font-semibold mb-1">{label}</div>
                <div className="text-white/60 text-sm">{sub}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { region: 'Africa', count: '20+ countries', color: 'from-green-500 to-green-700' },
              { region: 'Asia-Pacific', count: '15+ countries', color: 'from-teal-500 to-teal-700' },
              { region: 'Latin America', count: '8+ countries', color: 'from-orange-500 to-orange-700' },
              { region: 'Middle East', count: '5+ countries', color: 'from-rose-500 to-rose-700' },
            ].map(({ region, count, color }) => (
              <div key={region} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <div className={`w-10 h-10 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <i className="ri-map-pin-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">{region}</div>
                <div className="text-white/60 text-xs">{count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROLE IN CROP 2026 ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Conference</span>
          <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Role in CROP 2026</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            As a co-organizer of the CROP 2026 Conference, LDII brings its extensive experience in livelihood development, community engagement, and sustainable practices to ensure the conference addresses the real-world challenges faced by communities globally.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our role encompasses coordinating thematic working sessions on sustainable livelihoods and economic resilience, facilitating knowledge exchange between practitioners and policymakers, and ensuring that conference outcomes translate into actionable programs that benefit communities on the ground. We are particularly focused on the intersection of cultural resilience and economic sustainability, recognizing that livelihoods must be both economically viable and culturally appropriate to be truly sustainable. LDII is committed to ensuring that CROP 2026 produces concrete frameworks, partnerships, and initiatives that will advance sustainable livelihood development while respecting and strengthening cultural identity and community resilience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ldiinitiatives.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-group-line"></i>Partnership Opportunities
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] font-bold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-mail-line"></i>Contact Us
            </Link>
          </div>
        </div>
      </section>
    </CropConferenceLayout>
  );
}