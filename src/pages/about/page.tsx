import { useState } from 'react';
import { Link } from 'react-router-dom';
import founder from '../../content/founder.json';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import copy from '../../content/pages/about.json';
// Text, images and links: src/content/pages/about.json (editable in the website editors).

const AboutPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const coreValues = copy.coreValues;

  const approachSteps = copy.approachSteps;

  const stats = copy.stats;

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata */}

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={copy.heroSection.image}
          alt={copy.heroSection.imageAlt}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 px-4">{copy.heroSection.title}<br />{copy.heroSection.title2}</h1>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Link to="/" className="hover:text-accent transition-colors cursor-pointer">{copy.heroSection.text}</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white font-semibold">{copy.heroSection.label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 sm:p-10 lg:p-12 rounded-3xl">
              <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-2xl mb-6">
                <i className="ri-eye-line text-3xl text-primary"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">{copy.visionAndMission.heading}</h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{copy.visionAndMission.text}</p>
            </div>
            <div className="bg-gradient-to-br from-teal/10 to-teal/5 p-8 sm:p-10 lg:p-12 rounded-3xl">
              <div className="w-16 h-16 flex items-center justify-center bg-teal rounded-2xl mb-6">
                <i className="ri-compass-line text-3xl text-white"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">{copy.visionAndMission.heading2}</h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{copy.visionAndMission.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Accordion */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.coreValuesAccordion.heading}</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">{copy.coreValuesAccordion.text}</p>
          </div>
          <div className="space-y-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={openAccordion === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl flex-shrink-0">
                      <i className={`${value.icon} text-2xl text-accent`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{value.title}</h3>
                  </div>
                  <i
                    className={`ri-arrow-down-s-line text-3xl text-primary transition-transform flex-shrink-0 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {openAccordion === index && (
                  <div
                    id={`accordion-content-${index}`}
                    className="px-6 pb-6 border-l-4 border-accent ml-6"
                  >
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pl-4 sm:pl-12">
                      {value.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">{copy.ourApproachTimeline.heading}</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">{copy.ourApproachTimeline.text}</p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent hidden md:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {approachSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    {/* Node */}
                    <div className="hidden md:flex w-16 h-16 flex-shrink-0 items-center justify-center bg-accent rounded-full border-4 border-white shadow-lg z-10">
                      <i className={`${step.icon} text-2xl text-primary`}></i>
                    </div>
                    {/* Content */}
                    <div className="md:ml-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex-1">
                      <div className="flex items-center mb-4 md:hidden">
                        <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-xl mr-4 flex-shrink-0">
                          <i className={`${step.icon} text-xl text-primary`}></i>
                        </div>
                        <span className="text-accent font-bold text-lg">{copy.content.label}{index + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-5 border-t-4 border-accent">
            <div className="md:col-span-2 bg-navy-50">
              <img src={founder.photo} alt={founder.photoAlt} className="w-full h-72 md:h-full object-cover object-top" />
            </div>
            <div className="md:col-span-3 p-8 sm:p-10">
              <p className="text-[#8a6d10] text-sm font-semibold uppercase tracking-[0.18em]">{copy.teamSection.text}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary font-['Playfair_Display']">{founder.name}</h2>
              <p className="mt-2 text-gray-700 font-semibold">{founder.role}</p>
              <p className="mt-5 text-gray-700 leading-relaxed">{founder.chapters[0].blocks[0].text}</p>
              <Link to={founder.path} className="group mt-7 inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-sm font-semibold transition-colors">{copy.teamSection.text2}<i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" aria-hidden="true"></i>
              </Link>
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
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{copy.backgroundImageWithOverlay.heading}</h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">{copy.backgroundImageWithOverlay.text}</p>
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom max-w-4xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">{copy.ctaSection.heading}</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">{copy.ctaSection.text}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >{copy.ctaSection.text2}</Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto border-2 border-primary hover:bg-primary hover:text-white text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >{copy.ctaSection.text3}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
