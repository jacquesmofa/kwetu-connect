import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                KWETU CONNECT ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy 
                policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Register for our programs or services</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our website</li>
                <li>Participate in surveys or feedback forms</li>
                <li>Register for events or conferences</li>
                <li>Apply for employment or volunteer opportunities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This information may include: name, email address, phone number, mailing address, date of birth, 
                employment information, cultural background (if voluntarily provided), and any other information you choose to provide.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data and usage patterns</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, operate, and maintain our services and programs</li>
                <li>Process your registrations and applications</li>
                <li>Communicate with you about our programs, events, and services</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">With Your Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share your information with third parties when you have given us explicit consent to do so.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share your information with trusted third-party service providers who assist us in operating our website, 
                conducting our business, or servicing you, provided they agree to keep this information confidential.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Partner Organizations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share information with our partner organizations, including KWETU 4 COMMUNITIES, for the purpose of 
                delivering integrated services and programs.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities, 
                such as a court or government agency.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
                <li>Secure data storage and backup systems</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use 
                commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another organization</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where we rely on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Third-Party Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, 
                you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit. 
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party 
                sites or services.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal 
                information, please contact us. If we become aware that we have collected personal information from children without 
                verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will 
                securely delete or anonymize it.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, 
                or other governmental jurisdiction where data protection laws may differ. We will take all steps reasonably necessary 
                to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>KWETU CONNECT</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@kwetuconnect.org" className="text-[#2C7A7B] hover:text-[#D4AF37]">info@kwetuconnect.org</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+61234567890" className="text-[#2C7A7B] hover:text-[#D4AF37]">+61 2 3456 7890</a></p>
                <p className="text-gray-700">Website: <a href="https://kwetuconnect.org" className="text-[#2C7A7B] hover:text-[#D4AF37]">www.kwetuconnect.org</a></p>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-[#0A2540] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Your Consent</h2>
              <p className="leading-relaxed">
                By using our website and services, you consent to our Privacy Policy and agree to its terms. If you do not agree 
                with this policy, please do not use our website or services.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}