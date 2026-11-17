import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import copy from '../../content/pages/programs.json';
// Text, images and links: src/content/pages/programs.json (editable in the website editors).

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata */}

      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={copy.backgroundImage.image}
            alt={copy.backgroundImage.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{copy.heroContent.title}</h1>
          <p className="text-lg md:text-xl text-white/90">{copy.heroContent.text}</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="container-custom py-12 space-y-16">
        {/* 1. Mental Health & Wellbeing */}
        <div id="mental-health" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s1MentalHealthAndWellbeing.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s1MentalHealthAndWellbeing.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s1MentalHealthAndWellbeing.item}</li>
            <li>{copy.s1MentalHealthAndWellbeing.item2}</li>
            <li>{copy.s1MentalHealthAndWellbeing.item3}</li>
            <li>{copy.s1MentalHealthAndWellbeing.item4}</li>
            <li>{copy.s1MentalHealthAndWellbeing.item5}</li>
          </ul>
          {/* Image with proper container */}
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.imageWithProperContainer.image}
              alt={copy.imageWithProperContainer.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 2. Cultural Exchange Programs */}
        <div id="cultural-exchange" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s2CulturalExchangePrograms.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s2CulturalExchangePrograms.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s2CulturalExchangePrograms.item}</li>
            <li>{copy.s2CulturalExchangePrograms.item2}</li>
            <li>{copy.s2CulturalExchangePrograms.item3}</li>
            <li>{copy.s2CulturalExchangePrograms.item4}</li>
            <li>{copy.s2CulturalExchangePrograms.item5}</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.s2CulturalExchangePrograms.image}
              alt={copy.s2CulturalExchangePrograms.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 3. Community Chaplaincy Rehabilitation */}
        <div id="chaplaincy" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s3CommunityChaplaincyRehabilitation.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s3CommunityChaplaincyRehabilitation.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s3CommunityChaplaincyRehabilitation.item}</li>
            <li>{copy.s3CommunityChaplaincyRehabilitation.item2}</li>
            <li>{copy.s3CommunityChaplaincyRehabilitation.item3}</li>
            <li>{copy.s3CommunityChaplaincyRehabilitation.item4}</li>
            <li>{copy.s3CommunityChaplaincyRehabilitation.item5}</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.s3CommunityChaplaincyRehabilitation.image}
              alt={copy.s3CommunityChaplaincyRehabilitation.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 4. Job Opportunities & Caregiver Support */}
        <div id="job-opportunities" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s4JobOpportunitiesAndCaregiver.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s4JobOpportunitiesAndCaregiver.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s4JobOpportunitiesAndCaregiver.item}</li>
            <li>{copy.s4JobOpportunitiesAndCaregiver.item2}</li>
            <li>{copy.s4JobOpportunitiesAndCaregiver.item3}</li>
            <li>{copy.s4JobOpportunitiesAndCaregiver.item4}</li>
            <li>{copy.s4JobOpportunitiesAndCaregiver.item5}</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.s4JobOpportunitiesAndCaregiver.image}
              alt={copy.s4JobOpportunitiesAndCaregiver.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 5. Seniors Wisdom & Guidance */}
        <div id="seniors-wisdom" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s5SeniorsWisdomAndGuidance.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s5SeniorsWisdomAndGuidance.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s5SeniorsWisdomAndGuidance.item}</li>
            <li>{copy.s5SeniorsWisdomAndGuidance.item2}</li>
            <li>{copy.s5SeniorsWisdomAndGuidance.item3}</li>
            <li>{copy.s5SeniorsWisdomAndGuidance.item4}</li>
            <li>{copy.s5SeniorsWisdomAndGuidance.item5}</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.s5SeniorsWisdomAndGuidance.image}
              alt={copy.s5SeniorsWisdomAndGuidance.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 6. Turning Vulnerability into Opportunities */}
        <div id="vulnerability" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">{copy.s6TurningVulnerabilityIntoOpportunities.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{copy.s6TurningVulnerabilityIntoOpportunities.text}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{copy.s6TurningVulnerabilityIntoOpportunities.item}</li>
            <li>{copy.s6TurningVulnerabilityIntoOpportunities.item2}</li>
            <li>{copy.s6TurningVulnerabilityIntoOpportunities.item3}</li>
            <li>{copy.s6TurningVulnerabilityIntoOpportunities.item4}</li>
            <li>{copy.s6TurningVulnerabilityIntoOpportunities.item5}</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src={copy.s6TurningVulnerabilityIntoOpportunities.image}
              alt={copy.s6TurningVulnerabilityIntoOpportunities.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;