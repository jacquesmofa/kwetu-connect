import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import copy from '../../content/pages/health-recruitment.json';
// Text, images and links: src/content/pages/health-recruitment.json (editable in the website editors).

const HealthRecruitmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = copy.benefits;

  const positions = copy.positions;

  const steps = copy.steps;

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={copy.heroSection.image}
          alt={copy.heroSection.imageAlt}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center px-4">
            <span className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">{copy.heroSection.label}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">{copy.heroSection.title}<br />
              <span className="text-accent">{copy.heroSection.label2}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">{copy.heroSection.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#positions"
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >{copy.heroSection.link}</a>
              <a
                href="#apply"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >{copy.heroSection.link2}</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl"></i>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-wider">{copy.overviewSection.label}</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">{copy.overviewSection.heading}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{copy.overviewSection.text}</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{copy.overviewSection.text2}</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">{copy.overviewSection.label2}</span>
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">{copy.overviewSection.label3}</span>
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">{copy.overviewSection.label4}</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={copy.overviewSection.image}
                alt={copy.overviewSection.imageAlt}
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">{copy.overviewSection.text3}</div>
                <div className="text-primary text-sm font-semibold">{copy.overviewSection.text4}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{copy.videoSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.videoSection.text}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={copy.videoSection.embedUrl}
                title={copy.videoSection.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.benefitsSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.benefitsSection.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-accent p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-xl mb-6">
                  <i className={`${benefit.icon} text-4xl text-accent`}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.openPositionsSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.openPositionsSection.text}</p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{position.title}</h3>
                      <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold whitespace-nowrap">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <i className="ri-map-pin-line mr-2 text-accent"></i>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#apply"
                      className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 py-3 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                    >{copy.openPositionsSection.link}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={copy.backgroundImageWithOverlay.image}
            alt={copy.backgroundImageWithOverlay.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">{copy.backgroundImageWithOverlay.heading}</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">{copy.backgroundImageWithOverlay.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-accent transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-accent">{step.number}</div>
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/20 rounded-xl">
                    <i className={`${step.icon} text-3xl text-accent`}></i>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.connectionToProgramsSection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.connectionToProgramsSection.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/programs#mental-health"
              className="group bg-primary hover:bg-primary/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-mental-health-line text-5xl text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{copy.connectionToProgramsSection.subheading}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{copy.connectionToProgramsSection.text2}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center text-accent font-semibold hover:underline">{copy.connectionToProgramsSection.label}<i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#job-opportunities"
              className="group bg-accent hover:bg-accent/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-nurse-line text-5xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{copy.connectionToProgramsSection.subheading2}</h3>
              <p className="text-primary/90 text-sm leading-relaxed mb-4">{copy.connectionToProgramsSection.text3}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center text-primary font-semibold hover:underline">{copy.connectionToProgramsSection.label2}<i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#cultural-exchange"
              className="group bg-primary hover:bg-primary/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-earth-line text-5xl text-accent"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{copy.connectionToProgramsSection.subheading3}</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{copy.connectionToProgramsSection.text4}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center text-accent font-semibold hover:underline">{copy.connectionToProgramsSection.label3}<i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#seniors-wisdom"
              className="group bg-accent hover:bg-accent/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-5xl text-primary"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{copy.connectionToProgramsSection.subheading4}</h3>
              <p className="text-primary/90 text-sm leading-relaxed mb-4">{copy.connectionToProgramsSection.text5}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center text-primary font-semibold hover:underline">{copy.connectionToProgramsSection.label4}<i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.imageGallerySection.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.imageGallerySection.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image}
                alt={copy.imageGallerySection.imageAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image2}
                alt={copy.imageGallerySection.imageAlt2}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image3}
                alt={copy.imageGallerySection.imageAlt3}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image4}
                alt={copy.imageGallerySection.imageAlt4}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image5}
                alt={copy.imageGallerySection.imageAlt5}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src={copy.imageGallerySection.image6}
                alt={copy.imageGallerySection.imageAlt6}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={copy.backgroundImageWithOverlay.image2}
            alt={copy.backgroundImageWithOverlay.imageAlt2}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,.1) 30%, rgba(255,255,255,.1) 70%, transparent 70%)' }}></div>
        </div>
        <div className="container-custom text-center relative px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">{copy.backgroundImageWithOverlay.heading2}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">{copy.backgroundImageWithOverlay.text2}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >{copy.backgroundImageWithOverlay.text3}</Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >{copy.backgroundImageWithOverlay.text4}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthRecruitmentPage;
