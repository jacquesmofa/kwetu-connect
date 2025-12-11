import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=diverse%20multicultural%20community%20members%20connecting%20hands%20together%20in%20modern%20Australian%20setting%20with%20professional%20business%20atmosphere%20representing%20unity%20and%20partnership%20collaboration%20warm%20natural%20lighting%20simple%20clean%20background&width=1920&height=1080&seq=hero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=stunning%20Australian%20landscape%20meeting%20global%20cultural%20elements%20abstract%20artistic%20representation%20of%20bridges%20connecting%20continents%20professional%20consulting%20atmosphere%20vibrant%20colors%20simple%20background&width=1920&height=1080&seq=hero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=professional%20international%20conference%20setting%20with%20diverse%20speakers%20and%20engaged%20audience%20modern%20venue%20sophisticated%20lighting%20representing%20global%20partnership%20opportunities%20simple%20background&width=1920&height=1080&seq=hero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=healthcare%20workers%20and%20caregivers%20in%20professional%20setting%20diverse%20team%20collaboration%20modern%20medical%20environment%20representing%20health%20equity%20and%20community%20wellbeing%20simple%20background&width=1920&height=1080&seq=hero4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=sustainable%20trade%20and%20commerce%20abstract%20visualization%20with%20cultural%20heritage%20elements%20modern%20professional%20design%20representing%20economic%20empowerment%20and%20transnational%20partnerships%20simple%20background&width=1920&height=1080&seq=hero5&orientation=landscape',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const pillars = [
    {
      icon: 'ri-ancient-gate-line',
      title: 'Cultural Resilience & Heritage',
      description: 'Preserving and promoting cultural heritage as economic and social capital for community empowerment and sustainable development',
      bgColor: 'bg-primary',
      hoverBg: 'hover:bg-primary-light',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Health Equity & Wellbeing',
      description: 'Connecting communities with quality health and care services for sustainable community development and improved quality of life',
      bgColor: 'bg-accent',
      hoverBg: 'hover:bg-accent-dark',
    },
    {
      icon: 'ri-global-line',
      title: 'Sustainable Trade & Livelihood',
      description: 'Facilitating transnational partnerships for economic empowerment, sustainable livelihoods, and market access',
      bgColor: 'bg-primary',
      hoverBg: 'hover:bg-primary-light',
    },
    {
      icon: 'ri-community-line',
      title: 'Community Resilience',
      description: 'Building resilient communities through integrated programs, strategic partnerships, and capacity building initiatives',
      bgColor: 'bg-accent',
      hoverBg: 'hover:bg-accent-dark',
    },
  ];

  const stats = [
    { number: '500+', label: 'Communities Served' },
    { number: '50+', label: 'Strategic Partnerships' },
    { number: '15', label: 'Countries Reached' },
    { number: '10+', label: 'Years of Excellence' },
  ];

  const testimonials = [
    {
      quote: 'KWETU CONNECT has been instrumental in bridging our organization with communities across the Global South. Their expertise in cultural resilience is unmatched.',
      author: 'Dr. Sarah Mitchell',
      role: 'Director, Global Health Initiative',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20director%20healthcare%20executive%20portrait%20confident%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=test1&orientation=squarish',
    },
    {
      quote: 'The CROP 2026 Conference promises to be a landmark event. KWETU CONNECT\'s vision for cultural resilience is exactly what our world needs right now.',
      author: 'Prof. James Okonkwo',
      role: 'Cultural Studies, University of Sydney',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20professor%20academic%20portrait%20warm%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=test2&orientation=squarish',
    },
    {
      quote: 'Their health recruitment program connected us with exceptional caregivers who truly understand community needs. A transformative partnership.',
      author: 'Maria Rodriguez',
      role: 'CEO, Community Care Services',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20woman%20CEO%20healthcare%20executive%20portrait%20confident%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=test3&orientation=squarish',
    },
  ];

  const newPrograms = [
    {
      title: 'Mental Health & Wellbeing',
      description: 'Redefining and addressing mental health challenges within communities through culturally sensitive support, professional services, and community-based wellness programs.',
      icon: 'ri-mental-health-line',
      link: '/programs#mental-health',
    },
    {
      title: 'Cultural Exchange Programs',
      description: 'Building bridges through authentic cultural experiences, knowledge sharing, and collaborative partnerships that promote mutual understanding and preserve heritage.',
      icon: 'ri-earth-line',
      link: '/programs#cultural-exchange',
    },
    {
      title: 'Community Chaplaincy',
      description: 'Supporting reintegration and transformation through compassionate care, mentoring, and holistic rehabilitation services for individuals and families.',
      icon: 'ri-hand-heart-line',
      link: '/programs#chaplaincy',
    },
    {
      title: 'Job Opportunities & Care for Caregivers',
      description: 'Navigating career pathways for caregivers while providing comprehensive support, training, and wellbeing programs for those who care for others.',
      icon: 'ri-briefcase-heart-line',
      link: '/programs#job-opportunities',
    },
    {
      title: 'Seniors Wisdom & Guidance',
      description: 'Promoting sense of belonging and guidance by honoring elders and harnessing their wisdom for intergenerational connection and community strength.',
      icon: 'ri-user-star-line',
      link: '/programs#seniors-wisdom',
    },
    {
      title: 'Turning Vulnerability into Opportunity',
      description: 'Transforming challenges into pathways for empowerment, helping individuals and communities convert barriers into catalysts for growth and positive change.',
      icon: 'ri-seedling-line',
      link: '/programs#vulnerability',
    },
  ];

  const programs = [
    {
      title: 'Cultural Resilience & Heritage Promotion',
      description: 'Comprehensive programs preserving cultural identity while creating economic opportunities through heritage tourism, cultural enterprises, and traditional knowledge systems.',
      icon: 'ri-ancient-pavilion-line',
      features: ['Heritage Tourism Development', 'Cultural Enterprise Support', 'Traditional Knowledge Preservation', 'Community Cultural Centers'],
    },
    {
      title: 'Health Equity & Community Wellbeing',
      description: 'Connecting underserved communities with quality healthcare services, mental health support, and wellness programs through strategic partnerships.',
      icon: 'ri-hospital-line',
      features: ['Healthcare Access Programs', 'Mental Health Support', 'Caregiver Recruitment', 'Community Health Education'],
    },
    {
      title: 'Sustainable Trade & Livelihood Empowerment',
      description: 'Facilitating market access, trade partnerships, and economic empowerment through capacity building and transnational business connections.',
      icon: 'ri-exchange-line',
      features: ['Market Access Support', 'Trade Partnership Facilitation', 'Business Capacity Building', 'Export Development'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide px-4">
              REDEFINING BARRIERS,
              <br />
              NAVIGATING OPPORTUNITIES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-4xl mx-auto px-4">
              Dynamic Australian Consultancy Bridging Communities, Markets & Institutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <a
                href="#pillars"
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Explore Our Pillars
              </a>
              <Link
                to="/crop2026"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                CROP 2026 Conference
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl"></i>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-4 sm:right-8 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 text-gray-300 text-[200px] font-bold hidden lg:block">2025</div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Transforming Vulnerabilities into Pathways for Opportunities and Empowerment
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                KWETU CONNECT PTY LTD is a dynamic Australian consultancy dedicated to redefining barriers and navigating opportunities across cultural heritage, health equity, sustainable trade, and community resilience. We serve as a bridge between communities, institutions, and markets, transforming challenges into sustainable solutions through strategic partnerships and innovative programs.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Our approach is rooted in community-centered values, integrity, equity, and innovation. We work with governments, NGOs, private sector partners, and community organizations to create lasting impact and drive transformative change across the Global South and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">
                  Community-Centered
                </span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">
                  Integrity
                </span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">
                  Equity
                </span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Pillars */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-['Playfair_Display']">
              Our Four Core Pillars
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions driving transformative impact across communities, markets, and institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src="https://readdy.ai/api/search-image?query=cultural%20heritage%20preservation%20traditional%20artifacts%20indigenous%20art%20museum%20display%20cultural%20identity%20community%20empowerment%20beautiful%20professional%20setting%20warm%20lighting%20high%20quality%20detailed%20photography&width=800&height=600&seq=pillar1bg&orientation=landscape"
                alt="Cultural Resilience Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-ancient-gate-line text-3xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cultural Resilience & Heritage</h3>
                  <p className="text-white/90 leading-relaxed">
                    Preserving and promoting cultural heritage as economic and social capital for community empowerment and sustainable development
                  </p>
                </div>
                <Link
                  to="/programs#cultural-heritage"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 2 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src="https://readdy.ai/api/search-image?query=healthcare%20equity%20community%20wellbeing%20diverse%20medical%20professionals%20caring%20for%20patients%20quality%20health%20services%20hospital%20clinic%20setting%20compassionate%20care%20professional%20medical%20environment%20warm%20lighting&width=800&height=600&seq=pillar2bg&orientation=landscape"
                alt="Health Equity Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#0A2540] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-heart-pulse-line text-3xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Health Equity & Wellbeing</h3>
                  <p className="text-white/90 leading-relaxed">
                    Connecting communities with quality health and care services for sustainable community development and improved quality of life
                  </p>
                </div>
                <Link
                  to="/programs#health-equity"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 3 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src="https://readdy.ai/api/search-image?query=sustainable%20trade%20business%20partnership%20international%20commerce%20market%20access%20economic%20empowerment%20professional%20business%20meeting%20diverse%20entrepreneurs%20collaboration%20modern%20office%20setting%20bright%20lighting&width=800&height=600&seq=pillar3bg&orientation=landscape"
                alt="Sustainable Trade Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-global-line text-3xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sustainable Trade & Livelihood</h3>
                  <p className="text-white/90 leading-relaxed">
                    Facilitating transnational partnerships for economic empowerment, sustainable livelihoods, and market access
                  </p>
                </div>
                <Link
                  to="/programs#sustainable-trade"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 4 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src="https://readdy.ai/api/search-image?query=community%20resilience%20diverse%20people%20working%20together%20capacity%20building%20strategic%20partnerships%20integrated%20programs%20community%20development%20collaboration%20teamwork%20empowerment%20warm%20professional%20setting%20natural%20lighting&width=800&height=600&seq=pillar4bg&orientation=landscape"
                alt="Community Resilience Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#0A2540] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-team-line text-3xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Community Resilience</h3>
                  <p className="text-white/90 leading-relaxed">
                    Building resilient communities through integrated programs, strategic partnerships, and capacity building initiatives
                  </p>
                </div>
                <Link
                  to="/programs#community-resilience"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Connection Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-['Playfair_Display']">
              Connecting Communities to Care
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Bridging the gap between healthcare professionals and communities in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=mental%20health%20wellbeing%20healthcare%20workers%20support%20counseling%20therapy%20peaceful%20calming%20environment%20professional%20medical%20setting%20compassionate%20care%20warm%20lighting%20high%20quality%20photography&width=600&height=400&seq=connection1bg&orientation=landscape"
                alt="Mental Health Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-mental-health-line text-2xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mental Health & Wellbeing</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Supporting healthcare workers' mental health and wellbeing
                  </p>
                </div>
                <Link
                  to="/programs#mental-health"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold text-sm transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 2 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=job%20opportunities%20career%20pathways%20healthcare%20professionals%20medical%20training%20professional%20development%20hospital%20clinic%20setting%20diverse%20medical%20staff%20bright%20professional%20environment&width=600&height=400&seq=connection2bg&orientation=landscape"
                alt="Job Opportunities Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-briefcase-heart-line text-2xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Job Opportunities & Care for Caregivers</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Career pathways and support for healthcare professionals
                  </p>
                </div>
                <Link
                  to="/programs#job-opportunities"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold text-sm transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 3 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=cultural%20exchange%20programs%20international%20healthcare%20collaboration%20diverse%20medical%20professionals%20learning%20together%20cross%20cultural%20training%20modern%20educational%20setting%20bright%20collaborative%20environment&width=600&height=400&seq=connection3bg&orientation=landscape"
                alt="Cultural Exchange Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-earth-line text-2xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cultural Exchange Programs</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Culturally competent care through exchange and learning
                  </p>
                </div>
                <Link
                  to="/programs#cultural-exchange"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold text-sm transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 4 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=seniors%20wisdom%20elderly%20care%20aged%20care%20services%20quality%20healthcare%20for%20elders%20compassionate%20caregivers%20honoring%20elders%20peaceful%20care%20facility%20warm%20professional%20setting%20natural%20lighting&width=600&height=400&seq=connection4bg&orientation=landscape"
                alt="Seniors Wisdom Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-user-star-line text-2xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Seniors Wisdom & Guidance</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Honoring elders through quality aged care services
                  </p>
                </div>
                <Link
                  to="/programs#seniors-wisdom"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold text-sm transition-colors duration-300"
                >
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Integrated Programs & Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions tailored to address complex challenges and create sustainable impact
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Cultural Resilience & Heritage Promotion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-ancient-pavilion-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Cultural Resilience & Heritage Promotion
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Comprehensive programs preserving cultural identity while creating economic opportunities through heritage tourism, cultural enterprises, and traditional knowledge systems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Heritage Tourism Development</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Cultural Enterprise Support</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Traditional Knowledge Preservation</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Community Cultural Centers</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=cultural%20heritage%20preservation%20traditional%20artifacts%20museum%20display%20diverse%20community%20members%20celebrating%20cultural%20identity%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog1&orientation=landscape"
                    alt="Cultural Resilience & Heritage Promotion"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 2. Health Equity & Community Wellbeing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-hospital-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Health Equity & Community Wellbeing
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Connecting underserved communities with quality healthcare services, mental health support, and wellness programs through strategic partnerships.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Healthcare Access Programs</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Mental Health Support</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Caregiver Recruitment</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Community Health Education</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=healthcare%20professionals%20diverse%20team%20providing%20community%20health%20services%20medical%20consultation%20wellness%20programs%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog2&orientation=landscape"
                    alt="Health Equity & Community Wellbeing"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 3. Sustainable Trade & Livelihood Empowerment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-exchange-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Sustainable Trade & Livelihood Empowerment
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Facilitating market access, trade partnerships, and economic empowerment through capacity building and transnational business connections.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Market Access Support</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Trade Partnership Facilitation</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Business Capacity Building</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Export Development</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=sustainable%20trade%20business%20partnership%20diverse%20entrepreneurs%20market%20access%20economic%20empowerment%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog3&orientation=landscape"
                    alt="Sustainable Trade & Livelihood Empowerment"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 4. Mental Health & Wellbeing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-mental-health-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Mental Health & Wellbeing
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Redefining and addressing mental health challenges within communities through culturally sensitive support, professional services, and community-based wellness programs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Community-based Support Networks</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Early-intervention Workshops</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Holistic Wellness Programmes</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Digital Self-care Platforms</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=mental%20health%20counseling%20support%20group%20diverse%20people%20wellness%20therapy%20session%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog4&orientation=landscape"
                    alt="Mental Health & Wellbeing"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 5. Cultural Exchange Programs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-earth-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Cultural Exchange & Partnerships
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Building bridges through authentic cultural experiences, knowledge sharing, and collaborative partnerships that promote mutual understanding and preserve heritage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Immersive Cultural Immersion Trips</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Reciprocal Learning Partnerships</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Artistic Collaborations and Festivals</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Education Exchange Scholarships</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=cultural%20exchange%20program%20diverse%20people%20traditional%20clothing%20sharing%20knowledge%20international%20partnership%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog5&orientation=landscape"
                    alt="Cultural Exchange & Partnerships"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 6. Community Chaplaincy Rehabilitation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-hand-heart-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Community Chaplaincy Rehabilitation Services
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Supporting reintegration and transformation through compassionate care, mentoring, and holistic rehabilitation services for individuals and families.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Spiritual Counseling and Guidance</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Mentoring Programmes for Reintegration</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Family Reconciliation Support</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Employment and Skills Development</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=community%20chaplaincy%20mentoring%20counseling%20support%20rehabilitation%20services%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog6&orientation=landscape"
                    alt="Community Chaplaincy Rehabilitation Services"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 7. Seniors Wisdom & Guidance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-user-star-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Promoting Belonging Through Seniors' Wisdom
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Honoring elders and harnessing their wisdom for intergenerational connection, cultural preservation, and community strength.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Intergenerational Mentorship Circles</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Story-telling Archives and Digital Heritage</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Active Ageing Community Hubs</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Leadership Roles for Elder Advisors</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=seniors%20elders%20sharing%20wisdom%20with%20youth%20intergenerational%20mentorship%20community%20gathering%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog7&orientation=landscape"
                    alt="Promoting Belonging Through Seniors' Wisdom"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* 8. Turning Vulnerability into Opportunities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-seedling-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Turning Vulnerability into Opportunities
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Transforming challenges into pathways for empowerment, helping individuals and communities convert barriers into catalysts for growth and positive change.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Asset-mapping and Community Co-design</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Micro-grant and Seed-fund Programmes</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Advocacy for Policy Change</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>Impact Measurement and Storytelling</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=community%20empowerment%20transformation%20growth%20diverse%20people%20collaborating%20innovative%20solutions%20professional%20setting%20simple%20clean%20background&width=800&height=600&seq=intprog8&orientation=landscape"
                    alt="Turning Vulnerability into Opportunities"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sister Organization Feature */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=grassroots%20community%20empowerment%20Global%20South%20sustainable%20development%20cultural%20preservation%20beautiful%20landscape%20warm%20natural%20lighting%20professional%20photography%20simple%20clean%20background&width=1920&height=1080&seq=homesisterbg&orientation=landscape"
            alt="Sister Organization Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Sister Organization
              </h2>
              <p className="text-accent text-xl sm:text-2xl font-serif italic mb-6">
                kwetu4communities
              </p>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
                Our sister organization empowering grassroots communities across the Global South through sustainable development initiatives, cultural preservation programs, and community-led solutions. Together, we create lasting impact through integrated approaches to community resilience and empowerment.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                kwetu4communities focuses on direct community engagement, implementing programs that address immediate needs while building long-term capacity. Through this partnership, we ensure that our consultancy work is grounded in real community experiences and needs.
              </p>
              <a
                href="https://kwetu4communities.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Visit kwetu4communities →
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://readdy.ai/api/search-image?query=grassroots%20community%20members%20working%20together%20in%20Global%20South%20village%20setting%20collaborative%20development%20project%20warm%20natural%20lighting%20simple%20clean%20background&width=400&height=500&seq=sister1&orientation=portrait"
                  alt="Community empowerment"
                  className="rounded-2xl shadow-2xl border-4 border-white w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="space-y-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=cultural%20preservation%20traditional%20heritage%20celebration%20diverse%20community%20members%20colorful%20authentic%20setting%20simple%20clean%20background&width=400&height=240&seq=sister2&orientation=landscape"
                    alt="Cultural preservation"
                    className="rounded-2xl shadow-2xl border-4 border-white w-full h-32 sm:h-40 object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=sustainable%20development%20community-led%20solutions%20people%20collaborating%20on%20local%20projects%20empowerment%20simple%20clean%20background&width=400&height=240&seq=sister3&orientation=landscape"
                    alt="Sustainable development"
                    className="rounded-2xl shadow-2xl border-4 border-white w-full h-32 sm:h-40 object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program - CROP 2026 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 relative h-80 sm:h-96 lg:h-auto">
                <img
                  src="https://readdy.ai/api/search-image?query=international%20conference%20diverse%20speakers%20on%20stage%20engaged%20audience%20modern%20professional%20venue%20sophisticated%20lighting%20cultural%20resilience%20theme%20simple%20clean%20background&width=1200&height=800&seq=crop1&orientation=landscape"
                  alt="CROP 2026 Conference"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="lg:col-span-2 bg-accent p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4">
                  Flagship Event 2026
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
                  Cultural Resilience, One Planet Conference
                </h3>
                <p className="text-primary text-lg sm:text-xl mb-6">
                  Sydney, Australia | November 6-8, 2026
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>Global thought leaders and cultural experts</span>
                  </li>
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>Innovative solutions for cultural preservation</span>
                  </li>
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>Networking with international partners</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link
                    to="/crop2026"
                    className="block w-full bg-primary hover:bg-primary-light text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
                  >
                    Register Interest
                  </Link>
                  <Link
                    to="/crop2026"
                    className="block w-full border-2 border-primary hover:bg-primary hover:text-white text-primary text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=global%20network%20connections%20world%20map%20international%20partnerships%20diverse%20communities%20worldwide%20collaboration%20beautiful%20visualization%20professional%20design%20simple%20clean%20background&width=1920&height=1080&seq=homeimpactbg&orientation=landscape"
            alt="Global Impact Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="world-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#world-pattern)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Global Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Transforming communities and building partnerships worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-accent mb-4 transition-transform duration-500 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Playfair_Display']">
              Meet Our Founder
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Founder Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20african%20male%20founder%20director%20portrait%20confident%20warm%20smile%20business%20suit%20leadership%20executive%20simple%20clean%20background&width=600&height=600&seq=founder1&orientation=squarish"
                    alt="Mr Morris Mukasa"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-primary px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold text-sm">Founder & Director</p>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Mr Morris Mukasa
              </h3>
              <p className="text-lg text-accent mb-6 font-semibold">
                Founder & Director, KWETU CONNECT PTY LTD
              </p>

              <div className="text-base text-gray-700 leading-relaxed space-y-4">
                <p>
                  Mr Morris Mukasa is a distinguished advocate, humanitarian, and community leader dedicated to promoting social justice, trauma recovery, utilising cultural & religious values for empowerment of marginalised communities. With a career spanning multiple continents.
                </p>

                <p>
                  Mr Mukasa has supported vulnerable groups such as refugees, asylum seekers, detainees, people with disabilities and marginalised individuals by using music, creative and performing arts, story telling, poems and cultural dialogue as therapeutic tools.
                </p>

                {showFullBio && (
                  <>
                    <p>
                      Mr Mukasa is the Oceania's region King's representative (Kabaka Foundation) since 2020 and holds key roles with the Refugee Communities Advocacy Network as a consultant.
                    </p>

                    <p>
                      Morris has worked extensively in crisis management, conflict resolution, and refugee support. He is also a Board member of Global Talent Pathways an organisation processing pathways for refugee and ensure and contributing to economic, peaceful settlement and reintegration.
                    </p>

                    <p>
                      In Australia, Morris co-founded Kwetu 4 Communities Inc. a non-profit association that promotes cultural understanding and trauma healing. Through this organisation he established a company known as Kwetu Connect PTY LTD, (managing barriers and navigating Partnerships opportunities)
                    </p>

                    <p>
                      Mr Mukasa has facilitated conflict resolution initiatives, served on policy reform committees, also as the business development manager for companies of people with disabilities and contributed to international dialogues on refugee support, including engagements with UN representatives in Australia.
                    </p>

                    <p>
                      Mr. Mukasa's commitment to social justice has earned him several accolades, including the African Australian Community Service Award in 2023 & 2024, Community transformative Award in 2024, then of recent appointed to represent the African Nations Refugees at Sydney Archdiocese SYNOD Committee member.
                    </p>

                    <p className="italic">
                      He is supported by his brimful wife Teddy Nakalembe and their children all involved in most of community projects as a complete Kwetu basset Family.
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                {showFullBio ? 'Show Less' : 'Read More'}
                <i className={`${showFullBio ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Playfair_Display']">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to create lasting impact
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: 'United Nations', url: 'https://www.un.org', logo: 'https://readdy.ai/api/search-image?query=United%20Nations%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner1&orientation=squarish' },
              { name: 'World Health Organization', url: 'https://www.who.int', logo: 'https://readdy.ai/api/search-image?query=World%20Health%20Organization%20WHO%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner2&orientation=squarish' },
              { name: 'Australian Government', url: 'https://www.australia.gov.au', logo: 'https://readdy.ai/api/search-image?query=Australian%20Government%20official%20logo%20coat%20of%20arms%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner3&orientation=squarish' },
              { name: 'NSW Health', url: 'https://www.health.nsw.gov.au', logo: 'https://readdy.ai/api/search-image?query=NSW%20Health%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner4&orientation=squarish' },
              { name: 'University of Sydney', url: 'https://www.sydney.edu.au', logo: 'https://readdy.ai/api/search-image?query=University%20of%20Sydney%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner5&orientation=squarish' },
              { name: 'Red Cross Australia', url: 'https://www.redcross.org.au', logo: 'https://readdy.ai/api/search-image?query=Red%20Cross%20Australia%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner6&orientation=squarish' },
              { name: 'UNICEF Australia', url: 'https://www.unicef.org.au', logo: 'https://readdy.ai/api/search-image?query=UNICEF%20Australia%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner7&orientation=squarish' },
              { name: 'Refugee Council', url: 'https://www.refugeecouncil.org.au', logo: 'https://readdy.ai/api/search-image?query=Refugee%20Council%20of%20Australia%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner8&orientation=squarish' },
              { name: 'Multicultural NSW', url: 'https://www.multiculturalnsw.id.au', logo: 'https://readdy.ai/api/search-image?query=Multicultural%20NSW%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner9&orientation=squarish' },
              { name: 'Settlement Services', url: 'https://www.ssi.org.au', logo: 'https://readdy.ai/api/search-image?query=Settlement%20Services%20International%20SSI%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner10&orientation=squarish' },
              { name: 'African Communities', url: '#', logo: 'https://readdy.ai/api/search-image?query=African%20Communities%20Council%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner11&orientation=squarish' },
              { name: 'Global Health Alliance', url: '#', logo: 'https://readdy.ai/api/search-image?query=Global%20Health%20Alliance%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner12&orientation=squarish' },
              { name: 'Cultural Heritage Foundation', url: '#', logo: 'https://readdy.ai/api/search-image?query=Cultural%20Heritage%20Foundation%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner13&orientation=squarish' },
              { name: 'Sydney Olympic Park', url: 'https://www.sydneyolympicpark.com.au', logo: 'https://readdy.ai/api/search-image?query=Sydney%20Olympic%20Park%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner14&orientation=squarish' },
              { name: 'Community Care Alliance', url: '#', logo: 'https://readdy.ai/api/search-image?query=Community%20Care%20Alliance%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner15&orientation=squarish' },
              { name: 'Indigenous Health Network', url: '#', logo: 'https://readdy.ai/api/search-image?query=Indigenous%20Health%20Network%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner16&orientation=squarish' },
              { name: 'Trade Development Council', url: '#', logo: 'https://readdy.ai/api/search-image?query=Trade%20Development%20Council%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner17&orientation=squarish' },
              { name: 'Mental Health Australia', url: 'https://mhaustralia.org', logo: 'https://readdy.ai/api/search-image?query=Mental%20Health%20Australia%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner18&orientation=squarish' },
              { name: 'Aged Care Quality', url: 'https://www.agedcarequality.gov.au', logo: 'https://readdy.ai/api/search-image?query=Aged%20Care%20Quality%20and%20Safety%20Commission%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner19&orientation=squarish' },
              { name: 'Global Partnerships Forum', url: '#', logo: 'https://readdy.ai/api/search-image?query=Global%20Partnerships%20Forum%20official%20logo%20high%20resolution%20professional%20simple%20clean%20background&width=200&height=200&seq=partner20&orientation=squarish' },
            ].map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-24 object-contain group-hover:scale-110 transition-all duration-300"
                  title={partner.name}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Trusted by Leading Institutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Hear from our partners and collaborators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-accent text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 italic text-base sm:text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=inspiring%20transformation%20opportunity%20growth%20diverse%20people%20collaborating%20success%20partnership%20beautiful%20professional%20setting%20warm%20lighting%20simple%20clean%20background&width=1920&height=1080&seq=homectabg&orientation=landscape"
            alt="CTA Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,.1) 30%, rgba(255,255,255,.1) 70%, transparent 70%)' }}></div>
        </div>
        <div className="container-custom text-center relative px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Barriers into Opportunities?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Partner with Australia's leading consultancy in cultural resilience and sustainable development
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
