import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      gradient: 'from-orange-600 to-accent',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Health Equity & Wellbeing',
      description: 'Connecting communities with quality health and care services for sustainable community development and improved quality of life',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: 'ri-global-line',
      title: 'Sustainable Trade & Livelihood',
      description: 'Facilitating transnational partnerships for economic empowerment, sustainable livelihoods, and market access',
      gradient: 'from-green-700 to-green-400',
    },
    {
      icon: 'ri-community-line',
      title: 'Community Resilience',
      description: 'Building resilient communities through integrated programs, strategic partnerships, and capacity building initiatives',
      gradient: 'from-primary to-blue-400',
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
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Explore Our Pillars
              </a>
              <Link
                to="/crop2026"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
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
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
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
                Transforming Vulnerabilities into Pathways for Empowerment
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                KWETU CONNECT PTY LTD is a dynamic Australian consultancy firm dedicated to redefining barriers and navigating opportunities across cultural heritage, health equity, sustainable trade, and community resilience. We serve as a bridge between communities, institutions, and markets, transforming challenges into sustainable solutions through strategic partnerships and innovative programs.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                Our approach is rooted in community-centered values, integrity, equity, and innovation. We work with governments, NGOs, private sector partners, and community organizations to create lasting impact and drive transformative change across the Global South and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Community-Centered
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Integrity
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Equity
                </span>
                <span className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pillars Display */}
      <section id="pillars" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Four Core Pillars
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive solutions driving transformative impact across communities, markets, and institutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${pillar.gradient} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6">
                  <i className={`${pillar.icon} text-5xl sm:text-6xl text-white`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-white font-semibold hover:underline cursor-pointer"
                  >
                    Learn More <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center text-accent hover:text-accent-dark text-lg font-semibold transition-colors cursor-pointer"
            >
              View All Programs <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* New Programs Preview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-wider">Our Comprehensive Programs</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
              Six Transformative Programs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Addressing critical community needs through integrated, holistic approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newPrograms.map((program, index) => (
              <Link
                key={index}
                to={program.link}
                className="group bg-white border-2 border-gray-100 hover:border-accent p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                  <i className={`${program.icon} text-4xl text-accent`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 leading-tight">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center text-accent font-semibold group-hover:underline">
                  Explore Program <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-block bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              View All Programs in Detail
            </Link>
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

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                    <i className={`${program.icon} text-4xl text-accent`}></i>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {program.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={`https://readdy.ai/api/search-image?query=${program.title.toLowerCase().replace(/&/g, 'and')}+professional+setting+diverse+community+members+collaboration+modern+environment+simple+clean+background&width=800&height=600&seq=prog${index}&orientation=landscape`}
                    alt={program.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Organization Feature */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
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
                className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Visit kwetu4communities →
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://readdy.ai/api/search-image?query=grassroots%20community%20members%20working%20together%20in%20Global%20South%20village%20setting%20collaborative%20development%20project%20warm%20natural%20lighting%20simple%20clean%20background&width=400&height=500&seq=sister1&orientation=portrait"
                  alt="Community empowerment"
                  className="rounded-2xl shadow-2xl border-4 border-white w-full h-64 sm:h-80 object-cover object-top"
                />
                <div className="space-y-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=cultural%20preservation%20traditional%20heritage%20celebration%20diverse%20community%20members%20colorful%20authentic%20setting%20simple%20clean%20background&width=400&height=240&seq=sister2&orientation=landscape"
                    alt="Cultural preservation"
                    className="rounded-2xl shadow-2xl border-4 border-white w-full h-32 sm:h-40 object-cover object-top"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=sustainable%20development%20community-led%20solutions%20people%20collaborating%20on%20local%20projects%20empowerment%20simple%20clean%20background&width=400&height=240&seq=sister3&orientation=landscape"
                    alt="Sustainable development"
                    className="rounded-2xl shadow-2xl border-4 border-white w-full h-32 sm:h-40 object-cover object-top"
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
                  Sydney, Australia | March 2026
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
                    className="block w-full bg-primary hover:bg-primary-light text-white text-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer"
                  >
                    Register Interest
                  </Link>
                  <Link
                    to="/crop2026"
                    className="block w-full border-2 border-primary hover:bg-primary hover:text-white text-primary text-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer"
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
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-accent mb-4">
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
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
            className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer"
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
