import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Playfair_Display']">
              Terms of Service
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
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to KWETU CONNECT. These Terms of Service ("Terms") govern your access to and use of our website, services, 
                and programs. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these 
                Terms, please do not use our services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>"We," "Us," "Our"</strong> refers to KWETU CONNECT and its affiliated organizations</li>
                <li><strong>"You," "Your"</strong> refers to the user or viewer of our website and services</li>
                <li><strong>"Services"</strong> refers to all programs, resources, and offerings provided by KWETU CONNECT</li>
                <li><strong>"Website"</strong> refers to kwetuconnect.org and all associated web properties</li>
                <li><strong>"Content"</strong> refers to all text, images, videos, and materials on our website</li>
              </ul>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Use of Our Services</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You must be at least 18 years old to use our services independently. If you are under 18, you may use our services 
                only with the involvement and consent of a parent or legal guardian.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Account Registration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some services may require you to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Acceptable Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Collect or harvest information about other users</li>
                <li>Use our services to spam or send unsolicited communications</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Intellectual Property Rights</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content on our website, including text, graphics, logos, images, videos, and software, is the property of 
                KWETU CONNECT or its content suppliers and is protected by international copyright, trademark, and other intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Your Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit content to our website (such as testimonials, feedback, or forum posts), you grant us a non-exclusive, 
                worldwide, royalty-free license to use, reproduce, modify, and display that content in connection with our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You represent and warrant that you own or have the necessary rights to submit such content and that it does not 
                violate any third-party rights.
              </p>
            </div>

            {/* Programs and Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Programs and Services</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Program Participation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Participation in our programs may be subject to additional terms and conditions, eligibility requirements, and 
                application processes. We reserve the right to accept or reject applications at our discretion.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Service Modifications</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. 
                We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Fees and Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Some services may require payment of fees. All fees are non-refundable unless otherwise stated. We reserve the right 
                to change our fees at any time with reasonable notice.
              </p>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information. By using our services, you consent to the collection 
                and use of your information as described in our Privacy Policy.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Disclaimers and Limitations</h2>
              
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3 mt-6">Service "As Is"</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. 
                We do not warrant that our services will be uninterrupted, secure, or error-free.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Professional Advice</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Information provided through our services is for general informational purposes only and should not be considered 
                professional medical, legal, or financial advice. Always seek the advice of qualified professionals for specific concerns.
              </p>

              <h3 className="text-2xl font-semibold text-[#0A2540] mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, KWETU CONNECT shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless KWETU CONNECT, its officers, directors, employees, and agents 
                from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, 
                arising out of or in any way connected with your access to or use of our services, your violation of these Terms, 
                or your violation of any rights of another.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Third-Party Links and Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by KWETU CONNECT. 
                We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party 
                websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss 
                caused by your use of any third-party content, goods, or services.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any 
                reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your account at any time by contacting us. All provisions of these Terms that by their nature 
                should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its 
                conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to 
                the exclusive jurisdiction of the courts located in Sydney, New South Wales, Australia.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of any dispute arising from these Terms or your use of our services, you agree to first attempt to 
                resolve the dispute informally by contacting us. If the dispute cannot be resolved informally, both parties agree 
                to participate in mediation before pursuing any legal action.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice 
                of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued 
                use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the 
                remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices published by us on our website, constitute 
                the entire agreement between you and KWETU CONNECT concerning your use of our services.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4 font-['Playfair_Display']">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>KWETU CONNECT</strong></p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@kwetuconnect.org" className="text-[#2C7A7B] hover:text-[#D4AF37]">info@kwetuconnect.org</a></p>
                <p className="text-gray-700 mb-2">Phone: <a href="tel:+61234567890" className="text-[#2C7A7B] hover:text-[#D4AF37]">+61 2 3456 7890</a></p>
                <p className="text-gray-700">Website: <a href="https://kwetuconnect.org" className="text-[#2C7A7B] hover:text-[#D4AF37]">www.kwetuconnect.org</a></p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-[#0A2540] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display']">Acknowledgment</h2>
              <p className="leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                If you do not agree to these Terms, you must not access or use our services.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}