import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';

const components = [
  {
    icon: 'ri-presentation-line',
    title: 'Plenary Panels',
    desc: 'High-level discussions featuring global leaders, policymakers, and cultural experts addressing critical intersections of culture and sustainability.',
  },
  {
    icon: 'ri-team-line',
    title: 'Community Roundtables',
    desc: 'Grassroots-led sessions where community practitioners share lived experiences and locally-driven resilience strategies.',
  },
  {
    icon: 'ri-gallery-line',
    title: 'Cultural Expositions',
    desc: 'Showcasing traditional arts, crafts, and cultural practices from diverse communities, celebrating cultural diversity and innovation.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Youth Forums',
    desc: 'Dedicated spaces for young leaders to present innovative solutions and shape the future of cultural resilience.',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Research Presentations',
    desc: 'Academic and community-based research on cultural resilience, sustainability, and Indigenous knowledge systems.',
  },
  {
    icon: 'ri-group-fill',
    title: 'Thematic Working Groups',
    desc: 'Collaborative sessions developing actionable strategies and commitments for each of the six thematic pillars.',
  },
];

const schedule = [
  {
    day: 'Day 1',
    date: 'November 6, 2026',
    theme: 'Opening & Foundation',
    sessions: [
      { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', type: 'General', location: 'Main Foyer', desc: 'Welcome reception with refreshments and networking opportunities. Collect your conference materials and connect with fellow delegates.' },
      { time: '09:00 - 10:30', title: 'Opening Ceremony & Keynote Address', type: 'Plenary', location: 'Main Auditorium', desc: 'Welcome addresses from co-organizers, Indigenous acknowledgment, and keynote on cultural resilience and care transformation in the 21st century.' },
      { time: '10:30 - 11:00', title: 'Morning Tea & Networking', type: 'General', location: 'Exhibition Hall' },
      { time: '11:00 - 13:00', title: 'Plenary Panel: Bridging Culture, Care & Climate', type: 'Plenary', location: 'Main Auditorium', desc: 'Global leaders discuss integrating cultural perspectives into climate action and care industry transformation.' },
      { time: '13:00 - 14:00', title: 'Lunch & Cultural Exposition', type: 'General', location: 'Exhibition Hall' },
      { time: '14:00 - 16:00', title: 'Parallel Thematic Workshops: Culture & Care Integration', type: 'Workshop', location: 'Multiple Rooms', desc: 'Deep-dive sessions on Climate Justice, Culture-Based Trade, and Cultural Approaches to Care.' },
      { time: '16:00 - 16:30', title: 'Afternoon Tea', type: 'General', location: 'Exhibition Hall' },
      { time: '16:30 - 18:00', title: 'Community Roundtables: Care for Caregivers', type: 'Roundtable', location: 'Multiple Rooms', desc: 'Grassroots leaders share community-led resilience initiatives and cultural heritage perspectives on care.' },
      { time: '18:30 - 20:30', title: 'Welcome Reception & Cultural Performance', type: 'Social', location: 'Waterfront Terrace' },
    ],
  },
  {
    day: 'Day 2',
    date: 'November 7, 2026',
    theme: 'Deep Dive & Innovation',
    sessions: [
      { time: '09:00 - 10:30', title: 'Plenary: Indigenous Knowledge & Care Systems', type: 'Plenary', location: 'Main Auditorium', desc: 'Indigenous leaders present traditional knowledge as solutions to contemporary care and environmental challenges.' },
      { time: '10:30 - 11:00', title: 'Morning Tea', type: 'General', location: 'Exhibition Hall' },
      { time: '11:00 - 13:00', title: 'Parallel Workshops: Redefining Care Industry', type: 'Workshop', location: 'Multiple Rooms', desc: 'Sessions on Cultural Transformative Values for Care, Senior Participation in Decision-Making, and Technology Integration.' },
      { time: '13:00 - 14:00', title: 'Lunch', type: 'General', location: 'Exhibition Hall' },
      { time: '14:00 - 16:00', title: 'Youth Forum: Next Generation Leadership in Care', type: 'Youth', location: 'Main Auditorium', desc: 'Young leaders present innovative approaches to cultural resilience and care transformation.' },
      { time: '16:00 - 16:30', title: 'Afternoon Tea', type: 'General', location: 'Exhibition Hall' },
      { time: '16:30 - 18:00', title: 'Research Presentations: Culture Meets Care', type: 'Research', location: 'Innovation Hub', desc: 'Academic and community researchers share findings on cultural approaches to care industry innovation.' },
      { time: '19:00 - 22:00', title: 'Gala Dinner & Awards Ceremony', type: 'Social', location: 'Grand Ballroom' },
    ],
  },
  {
    day: 'Day 3',
    date: 'November 8, 2026',
    theme: 'Sydney Discovery & Cultural Immersion',
    sessions: [
      { time: '09:00 - 10:30', title: 'Optional: Working Group Sessions', type: 'Workshop', location: 'Multiple Rooms', desc: 'Final collaborative sessions for action planning and commitments.' },
      { time: '10:30 - 11:00', title: 'Morning Tea & Departure Preparation', type: 'General', location: 'Exhibition Hall' },
      { time: '11:00 - 17:00', title: 'Sydney Cultural & Tourism Experience', type: 'Cultural', location: 'Sydney City', desc: "Guided tours of Sydney's iconic landmarks: Opera House, Harbour Bridge, Royal Botanic Gardens, and cultural sites. Experience Australia's vibrant multicultural heritage." },
      { time: '17:00 - 18:00', title: 'Optional: Sunset Harbour Cruise', type: 'Social', location: 'Sydney Harbour', desc: 'Relaxing cruise on Sydney Harbour with networking opportunities.' },
      { time: '18:30 - 20:00', title: 'Farewell Dinner (Optional)', type: 'Social', location: 'Waterfront Restaurant', desc: 'Closing celebration with Australian cuisine and cultural performances.' },
    ],
  },
];

const typeColors: Record<string, string> = {
  Plenary: 'bg-[#0A2540] text-white',
  Workshop: 'bg-teal-600 text-white',
  Roundtable: 'bg-orange-500 text-white',
  Youth: 'bg-rose-500 text-white',
  Research: 'bg-green-600 text-white',
  Cultural: 'bg-purple-600 text-white',
  Social: 'bg-[#D4AF37] text-[#0A2540]',
  General: 'bg-gray-100 text-gray-700',
};

export default function ProgrammePage() {
  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20conference%20schedule%20planning%20modern%20event%20agenda%20elegant%20design%20cultural%20sustainability%20theme%20simple%20background&width=1920&height=700&seq=cropproghero&orientation=landscape"
              alt="Programme Overview"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Conference Schedule</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Programme Overview
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Three transformative days: two days of dialogue, collaboration, and action, plus one day exploring Sydney's vibrant culture and iconic landmarks.
            </p>
          </div>
        </section>

        {/* Programme Components */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Programme Components</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Diverse Formats for Maximum Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Day Schedule */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">3-Day Schedule</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Detailed Programme Timeline
              </h2>
              <p className="text-gray-500 text-sm mt-2">(Subject to updates)</p>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-md whitespace-nowrap"
              >
                <i className="ri-download-line text-lg"></i>Download Full Programme (PDF)
              </Link>
            </div>

            <div className="space-y-12">
              {schedule.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="bg-gradient-to-r from-[#0A2540] to-[#1a4a7a] px-6 py-5 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {day.day}: {day.date}
                        </h3>
                        <p className="text-[#D4AF37] font-semibold">Theme: {day.theme}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    {day.sessions.map((session, i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="md:w-40 flex-shrink-0">
                          <span className="text-[#D4AF37] font-bold text-sm">{session.time}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-base font-bold text-[#0A2540]">{session.title}</h4>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[session.type] || 'bg-gray-100 text-gray-600'}`}>
                              {session.type}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                            <i className="ri-map-pin-line"></i>{session.location}
                          </p>
                          {session.desc && <p className="text-gray-600 text-sm leading-relaxed">{session.desc}</p>}
                        </div>
                      </div>
                    ))}
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
              Secure Your Place
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Early bird registration is now open. Join us for three transformative days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/crop2026/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-lg"></i>Register Now
              </Link>
              <Link
                to="/crop2026/outcomes"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-award-line text-lg"></i>Expected Outcomes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}