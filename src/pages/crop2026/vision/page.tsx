import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';

const globalContext = [
  {
    icon: 'ri-earth-line',
    title: 'Climate Crisis',
    desc: 'Accelerating climate change threatens cultural heritage sites, traditional livelihoods, and Indigenous knowledge systems.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: 'ri-group-line',
    title: 'Mass Displacement',
    desc: 'Over 100 million people forcibly displaced, facing loss of cultural identity and community continuity.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: 'ri-building-line',
    title: 'Rapid Urbanization',
    desc: 'Urban populations growing by 1.5 million weekly, challenging cultural spaces and traditional practices.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: 'Growing Inequality',
    desc: 'Widening gaps in access to resources, opportunities, and cultural participation across communities.',
    color: 'from-rose-500 to-rose-700',
  },
];

const pillars = [
  {
    num: 'PILLAR 1',
    icon: 'ri-store-line',
    color: 'from-[#0A2540] to-[#1a4a7a]',
    title: 'Culture, Trade, Economies & Sustainable Livelihoods',
    focus: [
      'Fair trade frameworks for cultural products',
      'Cultural entrepreneurship and innovation',
      'Revitalization of traditional economies',
      'Ethical cultural tourism development',
    ],
    outcomes: [
      'Establishment of Culture-Based Economy Working Group',
      'Fair trade certification guidelines for cultural products',
      'Cross-sector partnership frameworks',
    ],
  },
  {
    num: 'PILLAR 2',
    icon: 'ri-heart-pulse-line',
    color: 'from-[#D4AF37] to-yellow-600',
    title: 'Global Health Equity & Wellness Systems',
    focus: [
      'Integrating traditional medicine into health systems',
      'Addressing health disparities in cultural communities',
      'Mental health frameworks rooted in cultural practices',
      'One Health approach and pandemic preparedness',
    ],
    outcomes: [
      'Framework for integrating traditional medicine into national health systems',
      'Guidelines for culturally safe healthcare delivery',
    ],
  },
  {
    num: 'PILLAR 3',
    icon: 'ri-smartphone-line',
    color: 'from-teal-500 to-teal-700',
    title: 'Technology, Digital Innovation & Data Sovereignty',
    focus: [
      'Digital tools for cultural preservation',
      'AI applications for language revitalization',
      'Indigenous data sovereignty frameworks',
      'Preventing digital colonialism',
      'Youth-led technological innovation',
    ],
    outcomes: [
      'Launch of Youth Cultural Innovation Lab',
      'Data sovereignty frameworks and protocols',
    ],
  },
  {
    num: 'PILLAR 4',
    icon: 'ri-graduation-cap-line',
    color: 'from-green-600 to-green-800',
    title: 'Education, Research, Skills & Capacity Development',
    focus: [
      'Integration of Indigenous knowledge into formal education',
      'Decolonizing research methodologies',
      'Intergenerational knowledge transfer',
      'Social entrepreneurship and capacity building',
    ],
    outcomes: [
      'Global Cultural Research Network establishment',
      'Educational toolkit integrating cultural knowledge into curricula',
    ],
  },
  {
    num: 'PILLAR 5',
    icon: 'ri-earth-line',
    color: 'from-orange-500 to-orange-700',
    title: 'Climate Justice, Cultural Governance & Planetary Stewardship',
    focus: [
      'Indigenous knowledge for climate adaptation',
      'Cultural governance and rights frameworks',
      'Migration and cultural continuity',
      'Participatory urban planning',
    ],
    outcomes: [
      'Multi-stakeholder Sydney Declaration on Cultural Resilience',
      'Indigenous Climate Knowledge Network establishment',
      'Urban cultural resilience toolkit',
    ],
  },
  {
    num: 'PILLAR 6',
    icon: 'ri-hand-heart-line',
    color: 'from-rose-500 to-rose-700',
    title: 'Care Industry & Cultural Transformation',
    focus: [
      'How culture can transform and improve the care industry',
      'Redefining cultural transformative values for care in the new era',
      'Care for caregivers in cultural heritage perspective',
      'Bringing seniors to partake in decision-making',
      'Cultural approaches to aged care and disability support',
    ],
    outcomes: [
      'Framework for culturally-informed care practices',
      'Guidelines for senior participation in care governance',
      'Caregiver support programs rooted in cultural values',
    ],
  },
];

const crossCutting = [
  {
    icon: 'ri-scales-3-line',
    title: 'Justice & Equity',
    desc: 'Ensuring fair access to resources, opportunities, and cultural participation across all communities.',
  },
  {
    icon: 'ri-loop-left-line',
    title: 'Intergenerational Continuity',
    desc: 'Bridging traditional knowledge with contemporary innovation for sustainable cultural futures.',
  },
  {
    icon: 'ri-community-line',
    title: 'Community Leadership',
    desc: 'Centering community voices and grassroots leadership in all decision-making processes.',
  },
  {
    icon: 'ri-book-open-line',
    title: 'Knowledge Democracy',
    desc: 'Recognizing diverse knowledge systems as equally valid and essential to global progress.',
  },
  {
    icon: 'ri-seedling-line',
    title: 'Sustainability',
    desc: 'Integrating environmental, social, and cultural sustainability in all initiatives.',
  },
];

const methodology = [
  {
    icon: 'ri-presentation-line',
    title: 'Plenary Sessions',
    desc: 'High-level discussions featuring global leaders addressing critical intersections of culture and sustainability.',
  },
  {
    icon: 'ri-team-line',
    title: 'Parallel Thematic Working Sessions',
    desc: 'Deep-dive workshops focused on each strategic pillar, developing actionable strategies.',
  },
  {
    icon: 'ri-discuss-line',
    title: 'Community Roundtables',
    desc: 'Grassroots-led sessions where community practitioners share lived experiences and local solutions.',
  },
  {
    icon: 'ri-gallery-line',
    title: 'Cultural Expositions',
    desc: 'Showcasing traditional arts, crafts, and cultural practices from diverse communities worldwide.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Youth Forums',
    desc: 'Dedicated spaces for young leaders to present innovative solutions and shape future agendas.',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Research Presentations',
    desc: 'Academic and community-based research on cultural resilience and sustainability.',
  },
];

export default function VisionPage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero Banner */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20Indigenous%20cultural%20leaders%20global%20conference%20meeting%20modern%20professional%20venue%20dramatic%20lighting%20cultural%20patterns%20sustainability%20theme%20simple%20background&width=1920&height=700&seq=cropvisionhero&orientation=landscape"
              alt="CROP 2026 Vision"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vision & Mission
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Repositioning culture as a central pillar of global sustainability and planetary stewardship.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Executive Summary</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Cultural Resilience, One Planet (CROP) Conference 2026 represents a transformative moment in global sustainability discourse. For too long, culture has been treated as peripheral to environmental and development agendas. This conference boldly repositions culture as a central pillar of planetary stewardship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bringing together <strong className="text-[#0A2540]">800+</strong> international Indigenous and cultural leaders, policymakers, academics, private sector innovators, and youth changemakers, CROP 2026 will forge new pathways for integrating cultural resilience into global sustainability frameworks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through three intensive days of dialogue, collaboration, and action, we will co-create strategies that honor cultural diversity while addressing the urgent challenges facing our shared planet.
              </p>
            </div>
          </div>
        </section>

        {/* Global Context */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">The Global Context</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Cultural Resilience Matters Now
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalContext.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Central Question */}
        <section className="py-20 bg-[#0A2540]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-4 block">The Central Question</span>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed">
              "How can cultural resilience shape a sustainable future for our shared planet?"
            </blockquote>
          </div>
        </section>

        {/* Six Strategic Pillars Detailed */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Six Strategic Pillars</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Comprehensive Frameworks
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Addressing the intersection of culture, care, and global sustainability challenges.
              </p>
            </div>
            <div className="space-y-10">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <div className={`bg-gradient-to-r ${pillar.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className={`${pillar.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">{pillar.num}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <i className="ri-focus-3-line text-[#D4AF37]"></i> Key Focus Areas
                      </h4>
                      <ul className="space-y-2">
                        {pillar.focus.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <i className="ri-checkbox-circle-fill text-[#D4AF37] mt-0.5 flex-shrink-0"></i>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <i className="ri-award-line text-[#D4AF37]"></i> Expected Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {pillar.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <i className="ri-check-double-line text-green-600 mt-0.5 flex-shrink-0"></i>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Cutting Themes */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Cross-Cutting Themes</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Essential Perspectives
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Themes that weave through all six strategic pillars, shaping every conversation and outcome.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crossCutting.map((theme) => (
                <div key={theme.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${theme.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{theme.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conference Methodology */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Conference Methodology</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Transdisciplinary Approach
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Bringing together diverse perspectives and knowledge systems through multiple engaging formats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((item) => (
                <div key={item.title} className="bg-gradient-to-br from-[#0A2540] to-[#1a4a7a] rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Be Part of This Transformative Vision
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join 800+ global leaders in Sydney, November 6-8, 2026.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>Register Your Interest
              </Link>
              <Link
                to="/crop2026/programme"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-calendar-line text-lg"></i>View Programme
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}