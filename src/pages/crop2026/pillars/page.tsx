import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';

const pillars = [
  {
    num: 1,
    icon: 'ri-store-line',
    color: 'from-[#0A2540] to-[#1a4a7a]',
    accent: '#0A2540',
    title: 'Culture, Trade, Economies & Sustainable Livelihoods',
    subtitle: 'Exploring sustainable economic models rooted in cultural practices, traditional crafts, and community-based enterprises that support livelihoods while preserving heritage.',
    focus: [
      'Fair trade frameworks for cultural products',
      'Cultural entrepreneurship and innovation',
      'Revitalization of traditional economies',
      'Ethical cultural tourism development',
    ],
    outcomes: [
      'Establishment of Culture-Based Economy Working Group',
      'Fair trade certification guidelines for cultural products',
      'Cross-sector partnership frameworks for cultural enterprises',
    ],
    image: 'https://readdy.ai/api/search-image?query=traditional%20cultural%20marketplace%20artisans%20crafting%20handmade%20goods%20vibrant%20cultural%20products%20fair%20trade%20setting%20diverse%20community%20warm%20lighting%20professional%20photography%20simple%20background&width=800&height=500&seq=pillar1detail&orientation=landscape',
  },
  {
    num: 2,
    icon: 'ri-heart-pulse-line',
    color: 'from-[#D4AF37] to-yellow-600',
    accent: '#D4AF37',
    title: 'Global Health Equity & Wellness Systems',
    subtitle: 'Integrating traditional medicine, addressing health disparities, and promoting holistic wellbeing across diverse cultural communities.',
    focus: [
      'Integrating traditional medicine into health systems',
      'Addressing health disparities in cultural communities',
      'Mental health frameworks rooted in cultural practices',
      'One Health approach and pandemic preparedness',
    ],
    outcomes: [
      'Framework for integrating traditional medicine into national health systems',
      'Guidelines for culturally safe healthcare delivery',
      'Community wellness program templates',
    ],
    image: 'https://readdy.ai/api/search-image?query=holistic%20healthcare%20wellness%20traditional%20medicine%20integration%20diverse%20healers%20community%20health%20setting%20cultural%20healing%20practices%20warm%20professional%20environment%20simple%20background&width=800&height=500&seq=pillar2detail&orientation=landscape',
  },
  {
    num: 3,
    icon: 'ri-smartphone-line',
    color: 'from-teal-500 to-teal-700',
    accent: '#14b8a6',
    title: 'Technology, Digital Innovation & Data Sovereignty',
    subtitle: 'Harnessing digital tools for cultural preservation, AI for language revitalization, and ensuring Indigenous data sovereignty.',
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
      'Digital cultural preservation toolkit',
    ],
    image: 'https://readdy.ai/api/search-image?query=digital%20innovation%20technology%20Indigenous%20language%20preservation%20youth%20coding%20cultural%20data%20sovereignty%20modern%20tech%20setting%20diverse%20professionals%20simple%20background&width=800&height=500&seq=pillar3detail&orientation=landscape',
  },
  {
    num: 4,
    icon: 'ri-graduation-cap-line',
    color: 'from-green-600 to-green-800',
    accent: '#16a34a',
    title: 'Education, Research, Skills & Capacity Development',
    subtitle: 'Integrating Indigenous knowledge into formal education, decolonizing research, and enabling intergenerational knowledge transfer.',
    focus: [
      'Integration of Indigenous knowledge into formal education',
      'Decolonizing research methodologies',
      'Intergenerational knowledge transfer',
      'Social entrepreneurship and capacity building',
    ],
    outcomes: [
      'Global Cultural Research Network establishment',
      'Educational toolkit integrating cultural knowledge into curricula',
      'Intergenerational mentorship framework',
    ],
    image: 'https://readdy.ai/api/search-image?query=Indigenous%20education%20knowledge%20transfer%20elders%20teaching%20youth%20traditional%20learning%20intergenerational%20cultural%20wisdom%20modern%20classroom%20setting%20simple%20background&width=800&height=500&seq=pillar4detail&orientation=landscape',
  },
  {
    num: 5,
    icon: 'ri-earth-line',
    color: 'from-orange-500 to-orange-700',
    accent: '#f97316',
    title: 'Climate Justice, Cultural Governance & Planetary Stewardship',
    subtitle: 'Applying Indigenous knowledge for climate adaptation, strengthening cultural governance, and advancing sustainable planetary stewardship.',
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
    image: 'https://readdy.ai/api/search-image?query=Indigenous%20climate%20stewardship%20environmental%20justice%20traditional%20ecological%20knowledge%20community-led%20conservation%20sustainable%20land%20management%20nature%20setting%20simple%20background&width=800&height=500&seq=pillar5detail&orientation=landscape',
  },
  {
    num: 6,
    icon: 'ri-hand-heart-line',
    color: 'from-rose-500 to-rose-700',
    accent: '#e11d48',
    title: 'Care Industry & Cultural Transformation',
    subtitle: 'Redefining cultural transformative values for care, supporting caregivers, and empowering seniors in decision-making.',
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
    image: 'https://readdy.ai/api/search-image?query=cultural%20care%20transformation%20diverse%20caregivers%20elderly%20care%20community%20support%20cultural%20values%20in%20healthcare%20warm%20compassionate%20environment%20professional%20simple%20background&width=800&height=500&seq=pillar6detail&orientation=landscape',
  },
];

export default function PillarsPage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=six%20pillars%20concept%20abstract%20architectural%20columns%20representing%20cultural%20sustainability%20modern%20artistic%20interpretation%20dramatic%20lighting%20simple%20background&width=1920&height=700&seq=croppillarshero&orientation=landscape"
              alt="Six Strategic Pillars"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Conference Framework</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Six Strategic Pillars
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive frameworks addressing the intersection of culture, care, and global sustainability challenges.
            </p>
          </div>
        </section>

        {/* Pillars Detailed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {pillars.map((pillar, idx) => (
                <div key={pillar.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                      <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover object-center" />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${pillar.icon} text-xl text-white`}></i>
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Pillar {pillar.num}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pillar.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{pillar.subtitle}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <i className="ri-focus-3-line text-[#D4AF37]"></i>Key Focus Areas
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
                        <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <i className="ri-award-line text-[#D4AF37]"></i>Expected Outcomes
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore the Full Programme
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Dive deeper into how these pillars shape our conference sessions and workshops.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/crop2026/programme"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-calendar-line text-lg"></i>View Programme
              </Link>
              <Link
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>Register Interest
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}