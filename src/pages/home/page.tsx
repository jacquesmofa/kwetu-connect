import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FounderProfile from '../../components/feature/FounderProfile';
import copy from '../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = copy.heroImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const pillars = copy.pillars;

  const stats = copy.stats;

  const newPrograms = copy.newPrograms;

  const programs = copy.programs;

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide px-4">{copy.heroContent.title}<br />{copy.heroContent.title2}</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-4xl mx-auto px-4">{copy.heroContent.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <a
                href="#pillars"
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >{copy.heroContent.link}</a>
              <Link
                to="/crop2026"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >{copy.heroContent.text2}</Link>
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
          <div className="absolute top-20 left-20 text-gray-300 text-[200px] font-bold hidden lg:block">{new Date().getFullYear()}</div>
        </div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-wider">{copy.executiveSummarySection.label}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">{copy.executiveSummarySection.heading}</h2>
            </div>
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.executiveSummarySection.text}</p>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">{copy.executiveSummarySection.text2}</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">{copy.executiveSummarySection.label2}</span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">{copy.executiveSummarySection.label3}</span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">{copy.executiveSummarySection.label4}</span>
                <span className="px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary/10">{copy.executiveSummarySection.label5}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Pillars */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-['Playfair_Display']">{copy.fourCorePillars.heading}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{copy.fourCorePillars.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src={copy.pillar1Navy.image}
                alt={copy.pillar1Navy.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-ancient-gate-line text-3xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{copy.pillar1Navy.subheading}</h3>
                  <p className="text-white/90 leading-relaxed">{copy.pillar1Navy.text}</p>
                </div>
                <Link
                  to="/programs#cultural-heritage"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold transition-colors duration-300"
                >{copy.pillar1Navy.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 2 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src={copy.pillar2Gold.image}
                alt={copy.pillar2Gold.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#0A2540] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-heart-pulse-line text-3xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{copy.pillar2Gold.subheading}</h3>
                  <p className="text-white/90 leading-relaxed">{copy.pillar2Gold.text}</p>
                </div>
                <Link
                  to="/programs#health-equity"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold transition-colors duration-300"
                >{copy.pillar2Gold.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 3 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src={copy.pillar3Navy.image}
                alt={copy.pillar3Navy.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-global-line text-3xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{copy.pillar3Navy.subheading}</h3>
                  <p className="text-white/90 leading-relaxed">{copy.pillar3Navy.text}</p>
                </div>
                <Link
                  to="/programs#sustainable-trade"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold transition-colors duration-300"
                >{copy.pillar3Navy.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Pillar 4 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-96">
              <img
                src={copy.pillar4Gold.image}
                alt={copy.pillar4Gold.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="w-16 h-16 bg-[#0A2540] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-team-line text-3xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{copy.pillar4Gold.subheading}</h3>
                  <p className="text-white/90 leading-relaxed">{copy.pillar4Gold.text}</p>
                </div>
                <Link
                  to="/programs#community-resilience"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold transition-colors duration-300"
                >{copy.pillar4Gold.text2}<i className="ri-arrow-right-line ml-2"></i>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-['Playfair_Display']">{copy.programConnectionCards.heading}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">{copy.programConnectionCards.text}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src={copy.card1Navy.image}
                alt={copy.card1Navy.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-mental-health-line text-2xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{copy.card1Navy.subheading}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{copy.card1Navy.text}</p>
                </div>
                <Link
                  to="/programs#mental-health"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold text-sm transition-colors duration-300"
                >{copy.card1Navy.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 2 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src={copy.card2Gold.image}
                alt={copy.card2Gold.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-briefcase-line text-2xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{copy.card2Gold.subheading}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{copy.card2Gold.text}</p>
                </div>
                <Link
                  to="/programs#job-opportunities"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold text-sm transition-colors duration-300"
                >{copy.card2Gold.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 3 - Navy */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src={copy.card3Navy.image}
                alt={copy.card3Navy.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-earth-line text-2xl text-[#0A2540]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{copy.card3Navy.subheading}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{copy.card3Navy.text}</p>
                </div>
                <Link
                  to="/programs#cultural-exchange"
                  className="inline-flex items-center text-[#D4AF37] hover:text-[#E5C047] font-semibold text-sm transition-colors duration-300"
                >{copy.card3Navy.text2}<i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 4 - Gold */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <img
                src={copy.card4Gold.image}
                alt={copy.card4Gold.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/85 to-[#C4A137]/85"></div>
              <div className="relative p-8 text-white h-80 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#0A2540] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-user-star-line text-2xl text-[#D4AF37]"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{copy.card4Gold.subheading}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{copy.card4Gold.text}</p>
                </div>
                <Link
                  to="/programs#seniors-wisdom"
                  className="inline-flex items-center text-[#0A2540] hover:text-[#1a3a5a] font-semibold text-sm transition-colors duration-300"
                >{copy.card4Gold.text2}<i className="ri-arrow-right-line ml-2"></i>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.detailedProgramsOverview.heading}</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">{copy.detailedProgramsOverview.text}</p>
          </div>

          <div className="space-y-12">
            {/* 1. Cultural Resilience & Heritage Promotion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <i className="ri-ancient-pavilion-line text-4xl text-accent"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s1CulturalResilienceAndHeritage.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s1CulturalResilienceAndHeritage.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s1CulturalResilienceAndHeritage.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s1CulturalResilienceAndHeritage.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s1CulturalResilienceAndHeritage.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s1CulturalResilienceAndHeritage.label4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s1CulturalResilienceAndHeritage.image}
                    alt={copy.s1CulturalResilienceAndHeritage.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s2HealthEquityAndCommunity.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s2HealthEquityAndCommunity.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s2HealthEquityAndCommunity.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s2HealthEquityAndCommunity.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s2HealthEquityAndCommunity.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s2HealthEquityAndCommunity.label4}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s2HealthEquityAndCommunity.image}
                    alt={copy.s2HealthEquityAndCommunity.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s3SustainableTradeAndLivelihood.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s3SustainableTradeAndLivelihood.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s3SustainableTradeAndLivelihood.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s3SustainableTradeAndLivelihood.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s3SustainableTradeAndLivelihood.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s3SustainableTradeAndLivelihood.label4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s3SustainableTradeAndLivelihood.image}
                    alt={copy.s3SustainableTradeAndLivelihood.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s4MentalHealthAndWellbeing.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s4MentalHealthAndWellbeing.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s4MentalHealthAndWellbeing.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s4MentalHealthAndWellbeing.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s4MentalHealthAndWellbeing.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s4MentalHealthAndWellbeing.label4}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s4MentalHealthAndWellbeing.image}
                    alt={copy.s4MentalHealthAndWellbeing.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s5CulturalExchangePrograms.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s5CulturalExchangePrograms.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s5CulturalExchangePrograms.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s5CulturalExchangePrograms.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s5CulturalExchangePrograms.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s5CulturalExchangePrograms.label4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s5CulturalExchangePrograms.image}
                    alt={copy.s5CulturalExchangePrograms.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s6CommunityChaplaincyRehabilitation.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s6CommunityChaplaincyRehabilitation.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s6CommunityChaplaincyRehabilitation.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s6CommunityChaplaincyRehabilitation.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s6CommunityChaplaincyRehabilitation.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s6CommunityChaplaincyRehabilitation.label4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s6CommunityChaplaincyRehabilitation.image}
                    alt={copy.s6CommunityChaplaincyRehabilitation.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s7SeniorsWisdomAndGuidance.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s7SeniorsWisdomAndGuidance.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s7SeniorsWisdomAndGuidance.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s7SeniorsWisdomAndGuidance.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s7SeniorsWisdomAndGuidance.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s7SeniorsWisdomAndGuidance.label4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s7SeniorsWisdomAndGuidance.image}
                    alt={copy.s7SeniorsWisdomAndGuidance.imageAlt}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{copy.s8TurningVulnerabilityIntoOpportunities.subheading}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{copy.s8TurningVulnerabilityIntoOpportunities.text}</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s8TurningVulnerabilityIntoOpportunities.label}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s8TurningVulnerabilityIntoOpportunities.label2}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s8TurningVulnerabilityIntoOpportunities.label3}</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <i className="ri-checkbox-circle-fill text-accent mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.s8TurningVulnerabilityIntoOpportunities.label4}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1">
                <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={copy.s8TurningVulnerabilityIntoOpportunities.image}
                    alt={copy.s8TurningVulnerabilityIntoOpportunities.imageAlt}
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
            src={copy.backgroundImageWithOverlay.image}
            alt={copy.backgroundImageWithOverlay.imageAlt}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{copy.backgroundImageWithOverlay.heading}</h2>
              <p className="text-accent text-xl sm:text-2xl font-serif italic mb-6">{copy.backgroundImageWithOverlay.text}</p>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">{copy.backgroundImageWithOverlay.text2}</p>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">{copy.backgroundImageWithOverlay.text3}</p>
              <a
                href={copy.backgroundImageWithOverlay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
              >{copy.backgroundImageWithOverlay.link}</a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={copy.backgroundImageWithOverlay.image2}
                  alt={copy.backgroundImageWithOverlay.imageAlt2}
                  className="rounded-2xl shadow-2xl border-4 border-white w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="space-y-4">
                  <img
                    src={copy.backgroundImageWithOverlay.image3}
                    alt={copy.backgroundImageWithOverlay.imageAlt3}
                    className="rounded-2xl shadow-2xl border-4 border-white w-full h-32 sm:h-40 object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <img
                    src={copy.backgroundImageWithOverlay.image4}
                    alt={copy.backgroundImageWithOverlay.imageAlt4}
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
                  src={copy.featuredProgramCrop2026.image}
                  alt={copy.featuredProgramCrop2026.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="lg:col-span-2 bg-accent p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4">{copy.featuredProgramCrop2026.label}</span>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">{copy.featuredProgramCrop2026.subheading}</h3>
                <p className="text-primary text-lg sm:text-xl mb-6">{copy.featuredProgramCrop2026.text}</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.featuredProgramCrop2026.label2}</span>
                  </li>
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.featuredProgramCrop2026.label3}</span>
                  </li>
                  <li className="flex items-start text-primary">
                    <i className="ri-checkbox-circle-fill text-primary-light mr-3 mt-1 flex-shrink-0"></i>
                    <span>{copy.featuredProgramCrop2026.label4}</span>
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link
                    to="/crop2026"
                    className="block w-full bg-primary hover:bg-primary-light text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
                  >{copy.featuredProgramCrop2026.text2}</Link>
                  <Link
                    to="/crop2026"
                    className="block w-full border-2 border-primary hover:bg-primary hover:text-white text-primary text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
                  >{copy.featuredProgramCrop2026.text3}</Link>
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
            src={copy.backgroundImageWithOverlay.image5}
            alt={copy.backgroundImageWithOverlay.imageAlt5}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{copy.backgroundImageWithOverlay.heading2}</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">{copy.backgroundImageWithOverlay.text4}</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Playfair_Display']">{copy.founderSection.heading}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <FounderProfile preview />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 font-['Playfair_Display']">{copy.partnersSection.heading}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{copy.partnersSection.text}</p>
          </div>

          {/*
            ============================================================
            PARTNER LOGOS — HOW TO UPDATE (EASY INSTRUCTIONS)
            ============================================================
            Step 1: Upload the partner logo to Cloudinary (drag & drop).
            Step 2: Copy the Cloudinary URL.
            Step 3: Replace the entry below with:
              {
                name: 'Partner Name',
                url: 'https://www.partner-website.com',
                logo: 'https://res.cloudinary.com/.../partner-logo.png',
                seq: 'partner-unique-id'
              }
            Step 4: In the rendering grid below, change the <img> src to:
                src={partner.logo}
            Make sure each partner object has a 'logo' property.
            ============================================================
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {copy.partners.map((partner, index) => (
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

      {/* Pre-Footer CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={copy.backgroundImageWithOverlay.image6}
            alt={copy.backgroundImageWithOverlay.imageAlt6}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,.1) 30%, rgba(255,255,255,.1) 70%, transparent 70%)' }}></div>
        </div>
        <div className="container-custom text-center relative px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{copy.backgroundImageWithOverlay.heading3}</h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">{copy.backgroundImageWithOverlay.text5}</p>
          <Link
            to="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer"
          >{copy.backgroundImageWithOverlay.text6}</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
