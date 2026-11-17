import CropConferenceLayout from '../components/CropConferenceLayout';
import { sendForm } from '../../../lib/forms';
import { useState } from 'react';
import pageText from '../../../content/pages/crop2026-register.json';
// Text, images and links: src/content/pages/crop2026-register.json (editable in the website editors).

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    country: '',
    registrationType: '',
    abstractSubmission: '',
    dietaryRequirements: '',
    accessibilityNeeds: '',
    updatesConsent: false,
  });

  const [thematicInterests, setThematicInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'updatesConsent') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setThematicInterests(prev =>
          checked ? [...prev, value] : prev.filter(item => item !== value)
        );
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new URLSearchParams();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('organization', formData.organization);
    formDataToSend.append('country', formData.country);
    formDataToSend.append('registrationType', formData.registrationType);
    formDataToSend.append('abstractSubmission', formData.abstractSubmission);
    formDataToSend.append('thematicInterests', thematicInterests.join(', '));
    formDataToSend.append('dietaryRequirements', formData.dietaryRequirements);
    formDataToSend.append('accessibilityNeeds', formData.accessibilityNeeds);
    formDataToSend.append('updatesConsent', String(formData.updatesConsent));

    sendForm('[CROP] Conference registration', formDataToSend)
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again or contact us at info@kwetuconnect.org.'));
  };

  const themes = pageText.themes;

  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={pageText.hero.image}
              alt={pageText.hero.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">{pageText.hero.label}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{pageText.hero.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{pageText.hero.text}</p>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="bg-green-50 rounded-2xl p-10 text-center border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-checkbox-circle-fill text-3xl text-green-600"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-2">{pageText.form.heading}</h2>
                <p className="text-gray-600 mb-6">{pageText.form.text}</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', organization: '', country: '', registrationType: '', abstractSubmission: '', dietaryRequirements: '', accessibilityNeeds: '', updatesConsent: false }); setThematicInterests([]); }}
                  className="px-6 py-3 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1a4a7a] transition-all"
                >{pageText.form.button}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                {/*
                  ============================================================
                  CROP CONFERENCE 2026 — REGISTRATION FORM
                  ============================================================
                  - Each field has a "name" attribute for submission.
                  - To add/remove fields: copy/delete <div> blocks.
                  - To change thematic interest options: edit the "themes" array.
                  - Form submits to Readdy's form handler automatically.
                  ============================================================
                */}
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{pageText.form.heading2}</h2>

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-user-line text-[#D4AF37]"></i>{pageText.personalInformation.subheading}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.personalInformation.fieldLabel}</label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.personalInformation.fieldLabel2}</label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.personalInformation.fieldLabel3}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.personalInformation.fieldLabel4}</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-briefcase-line text-[#D4AF37]"></i>{pageText.professionalInformation.subheading}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.professionalInformation.fieldLabel}</label>
                      <input type="text" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.professionalInformation.fieldLabel2}</label>
                      <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.professionalInformation.fieldLabel3}</label>
                      <select name="registrationType" required value={formData.registrationType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white">
                        <option value="">{pageText.professionalInformation.option}</option>
                        <option value="delegate">{pageText.professionalInformation.option2}</option>
                        <option value="speaker">{pageText.professionalInformation.option3}</option>
                        <option value="researcher">{pageText.professionalInformation.option4}</option>
                        <option value="student">{pageText.professionalInformation.option5}</option>
                        <option value="media">{pageText.professionalInformation.option6}</option>
                        <option value="partner">{pageText.professionalInformation.option7}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Thematic Interests */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-focus-3-line text-[#D4AF37]"></i>{pageText.thematicInterests.subheading}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pageText.thematicInterests.text}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {themes.map((theme) => (
                      <label key={theme} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-[#D4AF37] transition-all">
                        <input
                          type="checkbox"
                          name="thematicInterest"
                          value={theme}
                          checked={thematicInterests.includes(theme)}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
                        />
                        <span className="text-sm text-gray-700">{theme}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Abstract Submission */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-file-text-line text-[#D4AF37]"></i>{pageText.abstractSubmission.subheading}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pageText.abstractSubmission.text}</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="abstractSubmission" value="yes" checked={formData.abstractSubmission === 'yes'} onChange={handleChange} className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm text-gray-700">{pageText.abstractSubmission.label}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="abstractSubmission" value="no" checked={formData.abstractSubmission === 'no'} onChange={handleChange} className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm text-gray-700">{pageText.abstractSubmission.label2}</span>
                    </label>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-user-settings-line text-[#D4AF37]"></i>{pageText.specialRequirements.subheading}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.specialRequirements.fieldLabel}</label>
                      <input type="text" name="dietaryRequirements" value={formData.dietaryRequirements} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" placeholder={pageText.specialRequirements.placeholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{pageText.specialRequirements.fieldLabel2}</label>
                      <input type="text" name="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" placeholder={pageText.specialRequirements.placeholder2} />
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="updatesConsent"
                      checked={formData.updatesConsent}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37] mt-0.5"
                    />
                    <span className="text-sm text-gray-600">{pageText.consent.label}</span>
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                  >
                    <i className="ri-send-plane-line text-lg"></i>{pageText.submit.button}</button>
                  <p className="text-sm text-gray-500">{pageText.submit.text}<a href="/privacy-policy" className="text-[#D4AF37] hover:underline">{pageText.submit.link}</a>{pageText.submit.text2}<a href="/terms-of-service" className="text-[#D4AF37] hover:underline">{pageText.submit.link2}</a>.
                  </p>
                </div>
              </form>
            )}

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-time-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">{pageText.infoCards.subheading}</h4>
                <p className="text-gray-600 text-xs">{pageText.infoCards.text}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-group-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">{pageText.infoCards.subheading2}</h4>
                <p className="text-gray-600 text-xs">{pageText.infoCards.text2}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-question-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">{pageText.infoCards.subheading3}</h4>
                <p className="text-gray-600 text-xs">{pageText.infoCards.text3}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}