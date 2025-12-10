import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    orgType: '',
    website: '',
    interests: [] as string[],
    projectScope: '',
    contactMethod: 'email',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: newInterests });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24-48 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20handshake%20partnership%20collaboration%20modern%20professional%20design%20connecting%20hands%20diverse%20business%20people%20simple%20background&width=1920&height=1080&seq=contacthero&orientation=landscape"
          alt="Contact & Partnership"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              LET'S BUILD SOMETHING
              <br />
              TRANSFORMATIVE TOGETHER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Reach out to explore partnership opportunities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'ri-phone-line',
                title: 'Phone',
                content: '02 4627 9742',
                action: 'Call Us',
                link: 'tel:0246279742',
                color: 'bg-teal',
              },
              {
                icon: 'ri-mail-line',
                title: 'Email',
                content: 'info@kwetuconnect.com.au',
                action: 'Send Email',
                link: 'mailto:info@kwetuconnect.com.au',
                color: 'bg-accent',
              },
              {
                icon: 'ri-map-pin-line',
                title: 'Office',
                content: 'Sydney, NSW, Australia',
                action: 'Get Directions',
                link: '#map',
                color: 'bg-primary',
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 flex items-center justify-center ${method.color} rounded-2xl mx-auto mb-6`}>
                  <i className={`${method.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                <p className="text-gray-700 mb-6">{method.content}</p>
                <a
                  href={method.link}
                  className="inline-block bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-lg font-semibold transition-all border border-gray-200 whitespace-nowrap cursor-pointer"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Partnership Inquiry Form
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your organization and how we can collaborate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="+61 2 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Organization Details */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Organization Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Organization Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="orgType"
                        value={formData.orgType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                      >
                        <option value="">Select Type</option>
                        <option value="government">Government Agency</option>
                        <option value="ngo">NGO/Non-Profit</option>
                        <option value="corporate">Corporation</option>
                        <option value="academic">Academic Institution</option>
                        <option value="healthcare">Healthcare Facility</option>
                        <option value="cultural">Cultural Organization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Partnership Interest */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Partnership Interest</h3>
                  <label className="block text-gray-700 font-semibold mb-4">
                    Select all that apply <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'CROP 2026 Sponsorship',
                      'Program Collaboration',
                      'Service Inquiry',
                      'Event Partnership',
                      'Research Partnership',
                      'Funding Opportunity',
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-5 h-5 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer"
                        />
                        <span className="text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Scope */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Scope / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none resize-none"
                    placeholder="Tell us about your partnership goals, project scope, or inquiry..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-2">
                    {formData.projectScope.length}/500 characters
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-4">
                    Preferred Contact Method <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['email', 'phone', 'video-call'].map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-accent focus:ring-accent cursor-pointer"
                        />
                        <span className="text-gray-700 capitalize">{method.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            {/* Why Partner With Us */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl p-8 lg:p-12">
              <img
                src="https://readdy.ai/api/search-image?query=successful%20business%20partnership%20collaboration%20diverse%20professionals%20working%20together%20strategic%20alliance%20proven%20track%20record%20modern%20office%20setting%20professional%20environment%20bright%20natural%20lighting%20high%20quality%20photography&width=1200&height=800&seq=whypartnerbg&orientation=landscape"
                alt="Why Partner Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Why Partner With Us</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">Proven track record of successful partnerships</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">Access to diverse communities and networks</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">Innovative and evidence-based approaches</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">Comprehensive support and collaboration</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">Measurable impact and transparent reporting</span>
                  </li>
                </ul>

                <div className="glass-effect-gold border border-[#D4AF37]/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <i className="ri-time-line text-[#D4AF37] mr-2"></i>
                    Response Time
                  </h3>
                  <p className="text-white/90 mb-4">
                    We aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <i className="ri-shield-check-line text-[#D4AF37] mr-2"></i>
                    Privacy Policy
                  </h3>
                  <p className="text-white/90">
                    Your information is secure and will only be used to respond to your inquiry. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section id="map" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Visit us in Sydney, Australia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6858!2d151.2073!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzA3LjciUyAxNTHCsDEyJzI2LjMiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">KWETU CONNECT PTY LTD</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">Address</div>
                    <div className="text-gray-700">
                      58 Illyria Street, Rosemeadow
                      <br />
                      Sydney 2560 NSW, Australia
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">Phone</div>
                    <a href="tel:0246279742" className="text-gray-700 hover:text-accent transition-colors cursor-pointer">
                      02 4627 9742
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">Email</div>
                    <a
                      href="mailto:info@kwetuconnect.com.au"
                      className="text-gray-700 hover:text-accent transition-colors cursor-pointer"
                    >
                      info@kwetuconnect.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">Business Hours</div>
                    <div className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM AEST
                      <br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-primary mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: 'ri-linkedin-fill', link: '#' },
                    { icon: 'ri-twitter-x-fill', link: '#' },
                    { icon: 'ri-facebook-fill', link: '#' },
                    { icon: 'ri-instagram-fill', link: '#' },
                    { icon: 'ri-youtube-fill', link: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-accent rounded-full text-primary hover:text-white transition-all cursor-pointer"
                    >
                      <i className={`${social.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-accent relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=newsletter%20subscription%20modern%20professional%20design%20people%20connecting%20digital%20communication%20email%20marketing%20beautiful%20workspace%20simple%20clean%20background&width=1920&height=1080&seq=newsletterbg&orientation=landscape"
            alt="Newsletter Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-accent/80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary/80 mb-10">
              Subscribe to our newsletter for the latest news, events, and opportunities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none text-lg"
              />
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;