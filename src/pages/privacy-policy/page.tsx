import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import copy from '../../content/pages/privacy-policy.json';
// Text, images and links: src/content/pages/privacy-policy.json (editable in the website editors).

export default function PrivacyPolicy() {
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

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.informationWeCollect.heading}</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.informationWeCollect.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.informationWeCollect.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>{copy.informationWeCollect.item}</li>
                <li>{copy.informationWeCollect.item2}</li>
                <li>{copy.informationWeCollect.item3}</li>
                <li>{copy.informationWeCollect.item4}</li>
                <li>{copy.informationWeCollect.item5}</li>
                <li>{copy.informationWeCollect.item6}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.informationWeCollect.text2}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.informationWeCollect.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.informationWeCollect.text3}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{copy.informationWeCollect.item7}</li>
                <li>{copy.informationWeCollect.item8}</li>
                <li>{copy.informationWeCollect.item9}</li>
                <li>{copy.informationWeCollect.item10}</li>
                <li>{copy.informationWeCollect.item11}</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.howWeUseYourInformation.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.howWeUseYourInformation.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{copy.howWeUseYourInformation.item}</li>
                <li>{copy.howWeUseYourInformation.item2}</li>
                <li>{copy.howWeUseYourInformation.item3}</li>
                <li>{copy.howWeUseYourInformation.item4}</li>
                <li>{copy.howWeUseYourInformation.item5}</li>
                <li>{copy.howWeUseYourInformation.item6}</li>
                <li>{copy.howWeUseYourInformation.item7}</li>
                <li>{copy.howWeUseYourInformation.item8}</li>
                <li>{copy.howWeUseYourInformation.item9}</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.informationSharing.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.informationSharing.text}</p>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">{copy.informationSharing.subheading}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.informationSharing.text2}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.informationSharing.subheading2}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.informationSharing.text3}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.informationSharing.subheading3}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{copy.informationSharing.text4}</p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">{copy.informationSharing.subheading4}</h3>
              <p className="text-gray-700 leading-relaxed">{copy.informationSharing.text5}</p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.dataSecurity.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.dataSecurity.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>{copy.dataSecurity.item}</li>
                <li>{copy.dataSecurity.item2}</li>
                <li>{copy.dataSecurity.item3}</li>
                <li>{copy.dataSecurity.item4}</li>
                <li>{copy.dataSecurity.item5}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">{copy.dataSecurity.text2}</p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.yourRights.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.yourRights.text}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>{copy.yourRights.bold}</strong>{copy.yourRights.item}</li>
                <li><strong>{copy.yourRights.bold2}</strong>{copy.yourRights.item2}</li>
                <li><strong>{copy.yourRights.bold3}</strong>{copy.yourRights.item3}</li>
                <li><strong>{copy.yourRights.bold4}</strong>{copy.yourRights.item4}</li>
                <li><strong>{copy.yourRights.bold5}</strong>{copy.yourRights.item5}</li>
                <li><strong>{copy.yourRights.bold6}</strong>{copy.yourRights.item6}</li>
                <li><strong>{copy.yourRights.bold7}</strong>{copy.yourRights.item7}</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">{copy.yourRights.text2}</p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.cookies.heading}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.cookies.text}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{copy.cookies.text2}</p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.thirdPartyLinks.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.thirdPartyLinks.text}</p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.childrenSPrivacy.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.childrenSPrivacy.text}</p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.dataRetention.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.dataRetention.text}</p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.internationalTransfers.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.internationalTransfers.text}</p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">{copy.changesToPolicy.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{copy.changesToPolicy.text}</p>
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

            {/* Consent */}
            <div className="bg-[#0A2540] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">{copy.consent.heading}</h2>
              <p className="leading-relaxed">{copy.consent.text}</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}