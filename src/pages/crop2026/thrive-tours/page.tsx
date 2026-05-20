import { Link, useNavigate } from 'react-router-dom';
import CropConferenceLayout from '../components/CropConferenceLayout';

export default function ThriveToursPage() {
  const navigate = useNavigate();

  return (
    <CropConferenceLayout>
      <title>Thrive Tours | Co-Organizer CROP 2026</title>
      <meta name="description" content="Thrive Tours - Co-Organizer of CROP 2026. 100% Indigenous-owned eco-cultural tour company offering authentic land-based experiences in Northern Ontario." />

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
            src="https://readdy.ai/api/search-image?query=indigenous%20eco%20tourism%20outdoor%20adventure%20northern%20ontario%20canada%20beautiful%20wilderness%20landscape%20canoe%20kayak%20pristine%20lake%20forest%20sunrise%20majestic%20nature%20professional%20photography%20wide%20angle&width=1920&height=900&seq=thrivehero1&orientation=landscape"
            alt="Thrive Tours wilderness adventure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#0A2540]/80 to-[#0A2540]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-bold text-sm uppercase tracking-wider bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            Co-Organizer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[#D4AF37]">Thrive</span> Tours
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 italic">
            Outdoor Adventure Tours &mdash; Indigenous Eco-Cultural Experiences
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            100% Indigenous Owned &amp; Operated in Baawaating (Sault Ste. Marie, Ontario)
          </p>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                See the Land Through Eyes of Love
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Thrive Tours is a premier <strong className="text-[#0A2540]">100% Indigenous-owned</strong> eco-cultural tour company based in Baawaating (Sault Ste. Marie, Ontario), providing exceptional guided tours that offer guests a unique and immersive experience to learn and engage with the rich culture and traditions of our people.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our expert guides are highly trained and knowledgeable, focusing on our Indigenous teachings and traditions, to offer an unforgettable journey of discovery and appreciation for Mother Earth, each other, and how we are all connected.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our guided tours are crafted to showcase the natural beauty and historical significance of the local area, including hiking, canoeing, kayaking, snowshoeing, storytelling, Indigenous Food Sharing, and Cultural Workshops including Indigenous Art.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.thrivetours.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-full hover:bg-[#1a4a7a] transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-global-line"></i>Visit Thrive Tours Website
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  <i className="ri-mail-line"></i>Book With Us
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=indigenous%20guided%20canoe%20tour%20pristine%20lake%20northern%20ontario%20canada%20paddling%20through%20calm%20waters%20lush%20green%20forest%20shoreline%20professional%20photography%20warm%20golden%20light%20serene%20atmosphere&width=800&height=500&seq=thriveimg1&orientation=landscape"
                  alt="Indigenous guided canoe tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=indigenous%20snowshoeing%20guided%20tour%20winter%20forest%20northern%20ontario%20snow%20covered%20trees%20traditional%20experience%20warm%20clothing%20professional%20photography%20beautiful%20winter%20landscape&width=400&height=300&seq=thriveimg2&orientation=landscape"
                    alt="Winter snowshoeing experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=indigenous%20cultural%20workshop%20storytelling%20around%20campfire%20traditional%20drumming%20circle%20northern%20ontario%20evening%20warm%20firelight%20authentic%20cultural%20experience%20professional%20photography&width=400&height=300&seq=thriveimg3&orientation=landscape"
                    alt="Cultural storytelling workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Thrive Team</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Guided by the shared values of respect, sustainability, and cultural integrity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Brad Robinson */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://lirp.cdn-website.com/677be9c4/dms3rep/multi/opt/BRAD_THRIVETOURS_SSM_PHOTOBYTAYLORBURK0F1A3015+%281%29-719h.jpg"
                  alt="Brad Robinson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Brad Robinson</h3>
                <p className="text-[#D4AF37] font-semibold text-sm mb-4">Owner &amp; Operator</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A proud member of the <strong>Oneida Nation of the Thames</strong>, part of the Haudenosaunee Confederacy, Brad is dedicated to sharing Indigenous knowledge, land-based learning, and sustainable outdoor education through authentic, guided experiences.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>Bachelor's Degree in Native Studies, Laurentian University</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>Law and Security Administration Diploma, Cambrian College</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-music-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>Talented Indigenous artist: video, photography, graphic design, traditional drumming</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Amanda Robinson */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://lirp.cdn-website.com/677be9c4/dms3rep/multi/opt/Brad+-+Amanda+50th-479w.JPG"
                  alt="Amanda Robinson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Amanda Robinson</h3>
                <p className="text-[#D4AF37] font-semibold text-sm mb-4">Founder &amp; Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A settler ally, educator, and advocate for Truth and Reconciliation, Amanda is deeply committed to supporting Indigenous voices and creating inclusive spaces for learning, understanding, and connection.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-graduation-cap-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>Outdoor Wilderness Guiding Certificate, Cambrian College (2004)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-award-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>20+ years as entrepreneur, guide, and health educator</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <i className="ri-heart-line text-[#D4AF37] flex-shrink-0 mt-0.5"></i>
                    <span>Proud mother of five, inspired by Indigenous husband and children</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Services</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Outdoor Tour &amp; Adventure Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'ri-team-line',
                title: 'Small Groups',
                desc: 'Want a different sort of adventure with your friends or family. A guided trip into the wilderness is an excellent way to bond. We adapt the trip program to your group\'s individual needs, ages, and abilities.',
                color: 'from-[#0A2540] to-[#1a4a7a]',
              },
              {
                icon: 'ri-sailboat-line',
                title: 'Activity Tours',
                desc: 'Thrive Tours offers Authentic Indigenous year-round land-based experiences in Northern Ontario in the Algoma, Sault Ste. Marie (Baawaating) region like kayaking, canoeing, hiking, snowshoeing and more.',
                color: 'from-[#D4AF37] to-yellow-600',
              },
              {
                icon: 'ri-camera-line',
                title: 'Highlights',
                desc: 'Grab your camera! There are so many highlights on one of these tours, you\'ll want to capture them all. Better yet, join our Paint and Paddle Tour and we will provide supplies to create your own piece!',
                color: 'from-teal-500 to-teal-700',
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Custom Tours',
                desc: 'If you have something in mind that isn\'t described in these pages, just let us know, and we\'ll do our best to create a personalized outdoor workshop or team building experience for your group.',
                color: 'from-green-600 to-green-800',
              },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED EXPERIENCES ─── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Featured</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>Signature Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-footprint-line',
                title: 'Indigenous Guided Hikes',
                desc: 'Experience the beauty of the land with our interpretive hiking tours led by Indigenous guides. Immerse yourself in nature and learn about the rich cultural history and teachings of the area. Our tours vary in length and difficulty to accommodate all skill levels.',
                img: 'https://readdy.ai/api/search-image?query=indigenous%20guided%20hiking%20trail%20beautiful%20forest%20northern%20ontario%20interpretive%20nature%20walk%20professional%20photography%20lush%20green%20canopy%20sunlight%20filtering%20through%20trees&width=600&height=400&seq=thrivehike&orientation=landscape',
              },
              {
                icon: 'ri-sailboat-line',
                title: 'Paddle & Learn Kayak/Canoe Tour',
                desc: 'Explore the waterways of Baawaating (Sault Ste. Marie) with our guided kayaking and canoeing tours. From the calm waters of the river to the rugged shores of Lake Superior, our experienced guides will take you on an unforgettable journey.',
                img: 'https://readdy.ai/api/search-image?query=kayaking%20canoeing%20tour%20calm%20river%20northern%20ontario%20indigenous%20guided%20paddle%20experience%20beautiful%20shoreline%20forest%20reflection%20in%20water%20professional%20photography%20serene%20atmosphere&width=600&height=400&seq=thrivepaddle&orientation=landscape',
              },
              {
                icon: 'ri-brush-line',
                title: 'Custom Tours & Multi-Day Experiences',
                desc: 'Let us create a personalized outdoor workshop or team building experience for your group. We can tailor our tours to meet your specific needs and interests, whether it\'s culture, leadership, or team development. Multi-day experiences available.',
                img: 'https://readdy.ai/api/search-image?query=outdoor%20team%20building%20workshop%20indigenous%20cultural%20experience%20group%20campfire%20northern%20ontario%20wilderness%20sunset%20professional%20photography%20warm%20atmosphere%20community%20connection&width=600&height=400&seq=thrivecustom&orientation=landscape',
              },
            ].map(({ icon, title, desc, img }) => (
              <div key={title} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${icon} text-xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="inline-flex items-center text-[#0A2540] font-semibold text-sm">
                    <span>Full or Half-Day Interpretive Guided Experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>What Others Are Saying About Thrive Tours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: 'Amanda and Brad are truly special people that help you see the land through eyes of love. Our tour experience with Thrive was unforgettable &mdash; every moment served as a gentle reminder to slow down and take time to consider all the life that surrounds us.',
                author: 'Guest Review',
                rating: '5.0',
              },
              {
                text: 'What a great experience for our students! Thank you Brad and Amanda for your warmth and knowledge ...and pizza! Chi-baamapi.',
                author: 'Field Trip Educator',
                rating: '5.0',
              },
              {
                text: 'The half day I spent with Brad and the rest of our class was fantastic! His knowledge and passion was energizing. I highly recommend Thrive Tours to create your own meaningful experience.',
                author: 'Workshop Participant',
                rating: '5.0',
              },
              {
                text: 'Our Enbridge team had the privilege of participating in an Indigenous training session through Thrive and it was an incredibly impactful experience. The program was unique in that we were immersed in nature on Indigenous lands.',
                author: 'Corporate Training Client',
                rating: '5.0',
              },
              {
                text: 'Chi Miigwetch Brad, Amanda and Leslie &mdash; you made our train tour of the canyon a very memorable event. It was enlightening, entertaining and spiritual.',
                author: 'Agawa Canyon Tour Guest',
                rating: '5.0',
              },
              {
                text: 'We went on this tour as a team building day, and it was a terrific experience. The guides were incredibly knowledgeable and shared so much with us about Indigenous history, culture, and philosophy.',
                author: 'Team Building Group',
                rating: '5.0',
              },
            ].map(({ text, author, rating }) => (
              <div key={author} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="ri-star-fill text-[#D4AF37] text-sm"></i>
                  ))}
                  <span className="text-white/70 text-sm ml-1">{rating}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>
                <p className="text-[#D4AF37] font-semibold text-sm">&mdash; {author}</p>
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
            As a co-organizer of the CROP 2026 Conference, Thrive Tours brings its unique expertise in Indigenous eco-cultural tourism and land-based education to enrich the conference experience. We are committed to demonstrating how cultural resilience and sustainable practices can be integrated into meaningful experiences that honor Indigenous knowledge and traditions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our role includes facilitating cultural immersion experiences, leading workshops on Indigenous knowledge systems and land stewardship, and sharing our model of community-based tourism as a pathway to economic resilience. We believe that experiencing nature through Indigenous eyes is a powerful catalyst for understanding and action. Through CROP 2026, we aim to inspire delegates to see the world through eyes of love and to carry that perspective back to their own communities and work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.thrivetours.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-global-line"></i>Book With Us
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