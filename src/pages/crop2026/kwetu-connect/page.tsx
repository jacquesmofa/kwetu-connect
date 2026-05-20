import { Link, useNavigate } from 'react-router-dom';
import CropConferenceLayout from '../components/CropConferenceLayout';

export default function KwetuConnectPage() {
  const navigate = useNavigate();

  return (
    <CropConferenceLayout>
      <title>KWETU CONNECT PTY LTD | Co-Organizer CROP 2026</title>
      <meta name="description" content="KWETU CONNECT PTY LTD - Co-Organizer of CROP 2026. Redefining cultural understanding of care among Indigenous communities." />

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
            src="https://readdy.ai/api/search-image?query=diverse%20indigenous%20community%20gathering%20warm%20golden%20lighting%20cultural%20celebration%20heritage%20sustainable%20development%20professional%20photography%20beautiful%20composition%20vibrant%20colors&width=1920&height=900&seq=kwetuhero1&orientation=landscape"
            alt="KWETU CONNECT community"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            Co-Organizer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            KWETU CONNECT <span className="text-[#D4AF37]">PTY LTD</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 italic">
            Redefining Cultural Understanding of Care Among Indigenous Communities
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Prioritizing the Care Industry at All Levels
          </p>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Pioneering Organization for Cultural Resilience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                KWETU CONNECT PTY LTD is a pioneering organization dedicated to bridging cultural communities with sustainable development initiatives. Founded on the principles of inclusivity, empowerment, and cultural preservation, we work at the intersection of heritage and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our name <strong className="text-[#0A2540]">"Kwetu"</strong> means <em>"our home"</em> in Swahili, reflecting our commitment to creating spaces where diverse communities can thrive while maintaining their cultural identity and traditions. We believe that cultural resilience is fundamental to achieving sustainable development goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through strategic partnerships, community engagement, and innovative programs, KWETU CONNECT facilitates meaningful connections between cultural actors, policymakers, academics, and grassroots organizations to co-create solutions for a more equitable and sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://kwetuconnect.org/"
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
                  <i className="ri-mail-line"></i>Get in Touch
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=african%20indigenous%20community%20cultural%20gathering%20colorful%20traditional%20attire%20warm%20sunset%20lighting%20professional%20photography%20authentic%20celebration%20heritage%20preservation&width=800&height=500&seq=kwetuimg1&orientation=landscape"
                  alt="KWETU CONNECT community engagement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=indigenous%20cultural%20workshop%20traditional%20crafts%20hands%20weaving%20basketry%20professional%20photography%20warm%20natural%20light%20authentic%20expression&width=400&height=300&seq=kwetuimg2&orientation=landscape"
                    alt="Cultural preservation workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=diverse%20community%20leaders%20meeting%20collaboration%20strategic%20planning%20professional%20setting%20warm%20lighting%20cultural%20diversity&width=400&height=300&seq=kwetuimg3&orientation=landscape"
                    alt="Strategic partnerships"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                A world where cultural diversity is celebrated as a cornerstone of sustainable development, where Indigenous knowledge systems are valued and protected, and where communities have the agency to shape their own futures while preserving their heritage for generations to come.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-xl flex items-center justify-center mb-6">
                <i className="ri-focus-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower cultural communities through strategic partnerships, capacity building, and innovative programs that integrate traditional knowledge with contemporary solutions, fostering resilience, sustainability, and equitable development across diverse populations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Leadership Profile</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] p-8 flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#D4AF37] mb-4 shadow-lg">
                  <img
                    src="https://storage.readdy-site.link/project_files/62382cf1-e612-4aa3-9bbe-3e19cc10d1a0/7124da38-127c-404e-bb3d-15d24652c871_Morris-Kisito.webp?v=1f34e2e27ac9ec24b6488ff406a2481b"
                    alt="Mr Morris Mukasa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Mr Morris Mukasa</h3>
                <p className="text-[#D4AF37] font-semibold text-sm">Founder &amp; Director</p>
                <p className="text-white/70 text-xs mt-2">KWETU CONNECT PTY LTD</p>
              </div>
              <div className="md:col-span-2 p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Mr Morris Mukasa is a distinguished advocate, humanitarian, and community leader dedicated to promoting social justice, trauma recovery, utilising cultural &amp; religious values for empowerment of marginalised communities. With a career spanning multiple continents, he has been instrumental in bridging cultural understanding and fostering community resilience.
                </p>
                <h4 className="text-lg font-bold text-[#0A2540] mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'African Australian Community Service Award (2023 &amp; 2024)',
                    'Community Transformative Award (2024)',
                    'Sydney Archdiocese SYNOD Committee Member',
                    "Oceania's Region King's Representative (Kabaka Foundation)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <i className="ri-medal-line text-[#D4AF37] mt-0.5 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE FOCUS AREAS ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Core Focus Areas</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">We work across multiple domains to create holistic and sustainable impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'ri-community-line', title: 'Community Empowerment', desc: 'Building capacity and leadership within cultural communities to drive their own development initiatives and preserve their heritage.' },
              { icon: 'ri-ancient-gate-line', title: 'Cultural Preservation', desc: 'Protecting and promoting Indigenous knowledge systems, traditional practices, and cultural heritage in the face of globalization.' },
              { icon: 'ri-cpu-line', title: 'Innovation & Technology', desc: 'Leveraging digital tools and innovative approaches to document, share, and sustain cultural knowledge across generations.' },
              { icon: 'ri-plant-line', title: 'Sustainable Livelihoods', desc: 'Creating economic opportunities that honor cultural values while promoting environmental sustainability and fair trade practices.' },
              { icon: 'ri-team-line', title: 'Strategic Partnerships', desc: 'Facilitating collaboration between communities, governments, academia, and private sector for collective impact.' },
              { icon: 'ri-file-search-line', title: 'Research & Advocacy', desc: 'Conducting evidence-based research and advocating for policies that support cultural rights and community resilience.' },
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

      {/* ─── IMPACT ─── */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Results</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Impact</h2>
            <p className="text-white/70 mt-3">Creating meaningful change through dedicated action and collaboration</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Communities Served', sub: 'Across multiple continents and cultural contexts' },
              { value: '200+', label: 'Projects Implemented', sub: 'Ranging from cultural preservation to sustainable development' },
              { value: '10,000+', label: 'Lives Impacted', sub: 'Through direct programs and community initiatives' },
              { value: '30+', label: 'Strategic Partners', sub: 'Including NGOs, governments, and international organizations' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">{value}</div>
                <div className="text-white font-semibold mb-1">{label}</div>
                <div className="text-white/60 text-sm">{sub}</div>
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
            As a co-organizer of the CROP 2026 Conference, KWETU CONNECT brings extensive experience in community engagement, cultural programming, and international collaboration. We are committed to ensuring that the conference truly represents the voices and perspectives of diverse cultural communities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our responsibilities include facilitating community roundtables, coordinating cultural expositions, managing stakeholder engagement, and ensuring that Indigenous knowledge holders and cultural practitioners have meaningful participation throughout the conference. We are dedicated to making CROP 2026 a transformative event that not only discusses cultural resilience but actively demonstrates it through inclusive processes, respectful dialogue, and actionable outcomes that benefit communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kwetuconnect.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-global-line"></i>Explore Partnership
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A2540] text-[#0A2540] font-bold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              <i className="ri-mail-line"></i>Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </CropConferenceLayout>
  );
}