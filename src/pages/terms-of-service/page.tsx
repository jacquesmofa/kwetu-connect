import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import copy from '../../content/pages/terms-of-service.json';
// Text, images and links: src/content/pages/terms-of-service.json (editable in the website editors).

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">{copy.heroSection.title}</h1>
            <p className="text-xl text-white/90">{copy.heroSection.text}{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.introduction.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.introduction.text}</p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.definitions.heading}</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>{copy.definitions.bold}</strong>{copy.definitions.item}</li>
                <li><strong>{copy.definitions.bold2}</strong>{copy.definitions.item2}</li>
                <li><strong>{copy.definitions.bold3}</strong>{copy.definitions.item3}</li>
                <li><strong>{copy.definitions.bold4}</strong>{copy.definitions.item4}</li>
                <li><strong>{copy.definitions.bold5}</strong>{copy.definitions.item5}</li>
              </ul>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.useOfServices.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.useOfServices.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.useOfServices.text}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.useOfServices.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.useOfServices.text2}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>{copy.useOfServices.item}</li>
                <li>{copy.useOfServices.item2}</li>
                <li>{copy.useOfServices.item3}</li>
                <li>{copy.useOfServices.item4}</li>
                <li>{copy.useOfServices.item5}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.useOfServices.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.useOfServices.text3}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{copy.useOfServices.item6}</li>
                <li>{copy.useOfServices.item7}</li>
                <li>{copy.useOfServices.item8}</li>
                <li>{copy.useOfServices.item9}</li>
                <li>{copy.useOfServices.item10}</li>
                <li>{copy.useOfServices.item11}</li>
                <li>{copy.useOfServices.item12}</li>
                <li>{copy.useOfServices.item13}</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.intellectualProperty.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.intellectualProperty.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.intellectualProperty.text}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.intellectualProperty.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.intellectualProperty.text2}</p>
              <p className="text-gray-700 leading-relaxed">{copy.intellectualProperty.text3}</p>
            </div>

            {/* Programs and Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.programsAndServices.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.programsAndServices.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.programsAndServices.text}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.programsAndServices.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.programsAndServices.text2}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.programsAndServices.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.programsAndServices.text3}</p>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.privacyAndDataProtection.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.privacyAndDataProtection.text}</p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.disclaimers.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.disclaimers.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.disclaimers.text}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.disclaimers.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.disclaimers.text2}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.disclaimers.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.disclaimers.text3}</p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.indemnification.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.indemnification.text}</p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.thirdPartyLinks.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.thirdPartyLinks.text}</p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.termination.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.termination.text}</p>
              <p className="text-gray-700 leading-relaxed">{copy.termination.text2}</p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.governingLaw.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.governingLaw.text}</p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.disputeResolution.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.disputeResolution.text}</p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.changesToTerms.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.changesToTerms.text}</p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.severability.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.severability.text}</p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.entireAgreement.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.entireAgreement.text}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.contactInformation.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.contactInformation.text}</p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>{copy.contactInformation.bold}</strong></p>
                <p className="text-gray-700 mb-2">{copy.contactInformation.text2}<a href={copy.contactInformation.emailLink} className="text-[#2C7A7B] hover:text-[#D4AF37]">{copy.contactInformation.link}</a></p>
                <p className="text-gray-700 mb-2">{copy.contactInformation.text3}<a href={copy.contactInformation.phoneLink} className="text-[#2C7A7B] hover:text-[#D4AF37]">{copy.contactInformation.link2}</a></p>
                <p className="text-gray-700">{copy.contactInformation.text4}<a href={copy.contactInformation.url} className="text-[#2C7A7B] hover:text-[#D4AF37]">{copy.contactInformation.link3}</a></p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-[#0A2540] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">{copy.acknowledgment.heading}</h2>
              <p className="leading-relaxed">{copy.acknowledgment.text}</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}