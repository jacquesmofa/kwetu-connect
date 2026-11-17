import { useState } from 'react';
import { sendForm } from '../../lib/forms';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import pageText from '../../content/pages/contact.json';
// Text, images and links: src/content/pages/contact.json (editable in the website editors).

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
  const [submitted, setSubmitted] = useState(false);

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
    const form = e.target as HTMLFormElement;
    const formDataToSend = new URLSearchParams();
    // Add all form fields to the submission
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('organization', formData.organization);
    formDataToSend.append('orgType', formData.orgType);
    formDataToSend.append('website', formData.website);
    formDataToSend.append('interests', formData.interests.join(', '));
    formDataToSend.append('projectScope', formData.projectScope);
    formDataToSend.append('contactMethod', formData.contactMethod);

    sendForm('[CONTACT] Partnership inquiry', formDataToSend)
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again or email us directly at info@kwetuconnect.org.'));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata */}

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={pageText.heroSection.image}
          alt={pageText.heroSection.imageAlt}
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
            >{pageText.heroSection.text}<br />{pageText.heroSection.text2}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200"
            >{pageText.heroSection.text3}</motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pageText.methods.map((method, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{pageText.partnershipInquiryForm.heading}</h2>
            <p className="text-xl text-gray-600">{pageText.partnershipInquiryForm.text}</p>
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
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-10 text-center border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-checkbox-circle-fill text-3xl text-green-600"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-2">{pageText.form.heading}</h2>
                  <p className="text-gray-600 mb-4">{pageText.form.text}</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', organization: '', orgType: '', website: '', interests: [], projectScope: '', contactMethod: 'email' }); }}
                    className="px-6 py-3 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1a4a7a] transition-all cursor-pointer"
                  >{pageText.form.button}</button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                {/*
                  ============================================================
                  PARTNERSHIP INQUIRY FORM — EDITING INSTRUCTIONS
                  ============================================================
                  - Each field below has a "name" attribute used for submission.
                  - To add a new field: copy an existing <div> block and change
                    the name, label, and placeholder.
                  - To remove a field: delete the entire <div> block.
                  - The form submits to Readdy's form handler automatically.
                  - After submission, the success message above is shown.
                  ============================================================
                */}
                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{pageText.personalInformation.subheading}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.personalInformation.fieldLabel}<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder={pageText.personalInformation.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.personalInformation.fieldLabel2}<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder={pageText.personalInformation.placeholder2}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.personalInformation.fieldLabel3}<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder={pageText.personalInformation.placeholder3}
                      />
                    </div>
                  </div>
                </div>

                {/* Organization Details */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{pageText.organizationDetails.subheading}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.organizationDetails.fieldLabel}<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder={pageText.organizationDetails.placeholder}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.organizationDetails.fieldLabel2}<span className="text-red-500">*</span>
                      </label>
                      <select
                        name="orgType"
                        value={formData.orgType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                      >
                        <option value="">{pageText.organizationDetails.option}</option>
                        <option value="government">{pageText.organizationDetails.option2}</option>
                        <option value="ngo">{pageText.organizationDetails.option3}</option>
                        <option value="corporate">{pageText.organizationDetails.option4}</option>
                        <option value="academic">{pageText.organizationDetails.option5}</option>
                        <option value="healthcare">{pageText.organizationDetails.option6}</option>
                        <option value="cultural">{pageText.organizationDetails.option7}</option>
                        <option value="other">{pageText.organizationDetails.option8}</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">{pageText.organizationDetails.fieldLabel3}</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none"
                        placeholder={pageText.organizationDetails.placeholder2}
                      />
                    </div>
                  </div>
                </div>

                {/* Partnership Interest */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{pageText.partnershipInterest.subheading}</h3>
                  <label className="block text-gray-700 font-semibold mb-4">{pageText.partnershipInterest.fieldLabel}<span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pageText.interests.map((interest) => (
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
                  <label className="block text-gray-700 font-semibold mb-2">{pageText.projectScope.fieldLabel}<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none resize-none"
                    placeholder={pageText.projectScope.placeholder}
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-2">
                    {formData.projectScope.length}{pageText.projectScope.text}</div>
                </div>

                {/* Preferred Contact Method */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-4">{pageText.preferredContactMethod.fieldLabel}<span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {pageText.methods2.map((method) => (
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
                >{pageText.submitButton.button}</button>
              </form>
              )}
            </motion.div>

            {/* Why Partner With Us */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl p-8 lg:p-12">
              <img
                src={pageText.whyPartnerWithUs.image}
                alt={pageText.whyPartnerWithUs.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 to-[#1a3a5a]/85"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">{pageText.whyPartnerWithUs.heading}</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{pageText.whyPartnerWithUs.label}</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{pageText.whyPartnerWithUs.label2}</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{pageText.whyPartnerWithUs.label3}</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{pageText.whyPartnerWithUs.label4}</span>
                  </li>
                  <li className="flex items-start text-white">
                    <i className="ri-check-line text-[#D4AF37] text-2xl mr-3 mt-1 flex-shrink-0"></i>
                    <span className="text-lg">{pageText.whyPartnerWithUs.label5}</span>
                  </li>
                </ul>

                <div className="glass-effect-gold border border-[#D4AF37]/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <i className="ri-time-line text-[#D4AF37] mr-2"></i>{pageText.whyPartnerWithUs.subheading}</h3>
                  <p className="text-white/90 mb-4">{pageText.whyPartnerWithUs.text}</p>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <i className="ri-shield-check-line text-[#D4AF37] mr-2"></i>{pageText.whyPartnerWithUs.subheading2}</h3>
                  <p className="text-white/90">{pageText.whyPartnerWithUs.text2}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{pageText.officeLocationMap.heading}</h2>
            <p className="text-xl text-gray-600">{pageText.officeLocationMap.text}</p>
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
                  src={pageText.officeLocationMap.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={pageText.officeLocationMap.title}
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{pageText.officeLocationMap.subheading}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">{pageText.officeLocationMap.text2}</div>
                    <div className="text-gray-700">{pageText.officeLocationMap.text3}<br />{pageText.officeLocationMap.text4}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-phone-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">{pageText.officeLocationMap.text5}</div>
                    <a href={pageText.officeLocationMap.phoneLink} className="text-gray-700 hover:text-accent transition-colors cursor-pointer">{pageText.officeLocationMap.link}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-mail-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">{pageText.officeLocationMap.text6}</div>
                    <a
                      href={pageText.officeLocationMap.emailLink}
                      className="text-gray-700 hover:text-accent transition-colors cursor-pointer"
                    >{pageText.officeLocationMap.link2}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-time-line text-accent text-2xl mr-4 mt-1"></i>
                  <div>
                    <div className="font-semibold text-primary mb-1">{pageText.officeLocationMap.text7}</div>
                    <div className="text-gray-700">{pageText.officeLocationMap.text8}<br />{pageText.officeLocationMap.text9}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-primary mb-4">{pageText.officeLocationMap.subheading2}</h4>
                <div className="flex space-x-4">
                  {pageText.socials.map((social, index) => (
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
            src={pageText.backgroundImageWithOverlay.image}
            alt={pageText.backgroundImageWithOverlay.imageAlt}
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{pageText.backgroundImageWithOverlay.heading}</h2>
            <p className="text-xl text-primary/80 mb-10">{pageText.backgroundImageWithOverlay.text}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).querySelector<HTMLInputElement>('input[name="email"]')?.value;
                if (!email) return;
                const formData = new URLSearchParams();
                formData.append('email', email);
                sendForm('[NEWSLETTER] New subscriber', formData)
                  .then(() => alert('Thank you for subscribing!'))
                  .catch(() => alert('Something went wrong. Please try again.'));
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
             
            >
              <input
                type="email"
                name="email"
                placeholder={pageText.backgroundImageWithOverlay.placeholder}
                required
                className="w-full sm:flex-1 px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none text-lg"
              />
              <button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer">{pageText.backgroundImageWithOverlay.button}</button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;