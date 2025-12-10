import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const filters = ['all', 'events', 'programs', 'community', 'partnerships'];

  const galleryItems = [
    {
      type: 'image',
      category: 'events',
      title: 'CROP 2026 Conference Planning',
      description: 'Strategic planning session for our flagship cultural resilience conference bringing together global leaders and community representatives',
      url: 'https://readdy.ai/api/search-image?query=international%20conference%20planning%20diverse%20team%20strategic%20meeting%20professional%20setting%20cultural%20resilience%20theme%20modern%20office%20space%20natural%20lighting%20collaborative%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery1&orientation=landscape',
    },
    {
      type: 'image',
      category: 'programs',
      title: 'Mental Health & Wellbeing Workshop',
      description: 'Community-based mental health support program providing culturally sensitive care and wellness resources',
      url: 'https://readdy.ai/api/search-image?query=mental%20health%20workshop%20community%20support%20group%20diverse%20participants%20wellness%20program%20professional%20setting%20compassionate%20care%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery2&orientation=landscape',
    },
    {
      type: 'image',
      category: 'community',
      title: 'Cultural Heritage Celebration',
      description: 'Preserving and promoting cultural identity through vibrant community events and traditional celebrations',
      url: 'https://readdy.ai/api/search-image?query=cultural%20heritage%20celebration%20traditional%20festival%20diverse%20community%20members%20colorful%20authentic%20setting%20joyful%20atmosphere%20cultural%20pride%20simple%20clean%20background&width=800&height=600&seq=gallery3&orientation=landscape',
    },
    {
      type: 'video',
      category: 'programs',
      title: 'Health Recruitment Success Stories',
      description: 'Healthcare professionals sharing their transformative journey with KWETU CONNECT and the impact on their careers',
      url: 'https://www.youtube.com/embed/i8DuRLLgSAo',
      thumbnail: 'https://readdy.ai/api/search-image?query=healthcare%20professionals%20success%20stories%20diverse%20medical%20team%20professional%20setting%20hospital%20environment%20caring%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery4&orientation=landscape',
    },
    {
      type: 'image',
      category: 'partnerships',
      title: 'Strategic Partnership Signing',
      description: 'Formalizing partnerships for sustainable development and community empowerment initiatives',
      url: 'https://readdy.ai/api/search-image?query=business%20partnership%20signing%20ceremony%20diverse%20leaders%20handshake%20professional%20setting%20formal%20agreement%20collaboration%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery5&orientation=landscape',
    },
    {
      type: 'image',
      category: 'community',
      title: 'Seniors Wisdom Program',
      description: 'Intergenerational mentorship and knowledge sharing honoring the wisdom of our elders',
      url: 'https://readdy.ai/api/search-image?query=seniors%20elders%20mentoring%20youth%20intergenerational%20program%20community%20gathering%20wisdom%20sharing%20caring%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery6&orientation=landscape',
    },
    {
      type: 'image',
      category: 'programs',
      title: 'Cultural Exchange Initiative',
      description: 'Building bridges through authentic cultural experiences and international partnerships',
      url: 'https://readdy.ai/api/search-image?query=cultural%20exchange%20program%20diverse%20people%20traditional%20clothing%20international%20partnership%20cultural%20learning%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery7&orientation=landscape',
    },
    {
      type: 'image',
      category: 'events',
      title: 'Community Chaplaincy Services',
      description: 'Supporting reintegration and transformation through compassionate community chaplaincy programs',
      url: 'https://readdy.ai/api/search-image?query=community%20chaplaincy%20counseling%20support%20services%20compassionate%20care%20professional%20setting%20supportive%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery8&orientation=landscape',
    },
    {
      type: 'image',
      category: 'partnerships',
      title: 'Sustainable Trade Workshop',
      description: 'Facilitating market access and economic empowerment through capacity building and trade partnerships',
      url: 'https://readdy.ai/api/search-image?query=sustainable%20trade%20workshop%20business%20training%20diverse%20entrepreneurs%20professional%20setting%20economic%20empowerment%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery9&orientation=landscape',
    },
    {
      type: 'image',
      category: 'community',
      title: 'Health Equity Outreach',
      description: 'Connecting underserved communities with quality healthcare services and wellness programs',
      url: 'https://readdy.ai/api/search-image?query=healthcare%20outreach%20community%20health%20services%20diverse%20medical%20professionals%20caring%20for%20patients%20professional%20setting%20compassionate%20care%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery10&orientation=landscape',
    },
    {
      type: 'image',
      category: 'events',
      title: 'Turning Vulnerability to Opportunity',
      description: 'Empowerment programs transforming challenges into growth opportunities and sustainable solutions',
      url: 'https://readdy.ai/api/search-image?query=community%20empowerment%20transformation%20workshop%20diverse%20people%20collaborating%20professional%20setting%20positive%20change%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery11&orientation=landscape',
    },
    {
      type: 'image',
      category: 'partnerships',
      title: 'Sister Organization Collaboration',
      description: 'Working with kwetu4communities for grassroots impact and sustainable community development',
      url: 'https://readdy.ai/api/search-image?query=grassroots%20community%20collaboration%20partnership%20meeting%20diverse%20team%20working%20together%20professional%20setting%20collaborative%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery12&orientation=landscape',
    },
    {
      type: 'image',
      category: 'programs',
      title: 'Healthcare Professional Training',
      description: 'Comprehensive training and development programs for healthcare workers',
      url: 'https://readdy.ai/api/search-image?query=healthcare%20professional%20training%20medical%20education%20diverse%20healthcare%20workers%20learning%20environment%20professional%20setting%20educational%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery13&orientation=landscape',
    },
    {
      type: 'image',
      category: 'community',
      title: 'Community Resilience Building',
      description: 'Strengthening community bonds through integrated programs and capacity building initiatives',
      url: 'https://readdy.ai/api/search-image?query=community%20resilience%20building%20diverse%20community%20members%20working%20together%20collaborative%20environment%20empowerment%20atmosphere%20simple%20clean%20background&width=800&height=600&seq=gallery14&orientation=landscape',
    },
    {
      type: 'image',
      category: 'events',
      title: 'Annual Impact Celebration',
      description: 'Celebrating achievements and milestones with our community partners and stakeholders',
      url: 'https://readdy.ai/api/search-image?query=annual%20celebration%20event%20diverse%20people%20celebrating%20achievements%20professional%20setting%20joyful%20atmosphere%20success%20celebration%20simple%20clean%20background&width=800&height=600&seq=gallery15&orientation=landscape',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: any) => {
    setSelectedMedia(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=photo%20gallery%20exhibition%20modern%20professional%20design%20diverse%20community%20moments%20beautiful%20memories%20cultural%20heritage%20celebration%20simple%20background&width=1920&height=1080&seq=galleryhero&orientation=landscape"
          alt="Gallery"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              OUR GALLERY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100"
            >
              Moments of Impact, Stories of Transformation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-accent text-primary shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-accent/30'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative h-80 w-full overflow-hidden">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-20 h-20 flex items-center justify-center bg-accent rounded-full shadow-[0_0_30px_rgba(212,175,55,0.8)] group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-play-fill text-4xl text-primary"></i>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white text-3xl transition-all cursor-pointer z-50"
          >
            <i className="ri-close-line"></i>
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={selectedMedia.url}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedMedia.title}
                ></iframe>
              </div>
            )}
            <div className="mt-6 text-center text-white">
              <h3 className="text-3xl font-bold mb-3">{selectedMedia.title}</h3>
              <p className="text-lg text-gray-300">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
