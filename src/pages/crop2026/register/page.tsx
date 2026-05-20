import CropConferenceLayout from '../components/CropConferenceLayout';
import { useState } from 'react';

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
    setSubmitted(true);
  };

  const themes = [
    'Climate Justice',
    'Culture-Based Trade',
    'Migration & Displacement',
    'Urbanization',
    'Youth & Technology',
    'Indigenous Knowledge',
    'Health & Wellbeing',
    'Education',
    'Conflict Resolution',
  ];

  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20conference%20attendees%20registration%20welcome%20desk%20professional%20event%20check-in%20modern%20venue%20cultural%20sustainability%20theme%20simple%20background&width=1920&height=700&seq=cropregisterhero&orientation=landscape"
              alt="Register Your Interest"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Join Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Register Your Interest
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Be part of the global movement for cultural resilience and planetary sustainability. Register now for CROP Conference 2026.
            </p>
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
                <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Thank You for Registering!</h2>
                <p className="text-gray-600 mb-6">We have received your interest and will be in touch with next steps soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', organization: '', country: '', registrationType: '', abstractSubmission: '', dietaryRequirements: '', accessibilityNeeds: '', updatesConsent: false }); setThematicInterests([]); }}
                  className="px-6 py-3 bg-[#0A2540] text-white rounded-lg font-semibold hover:bg-[#1a4a7a] transition-all"
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Registration Form
                </h2>

                {/* Personal Information */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-user-line text-[#D4AF37]"></i>Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-briefcase-line text-[#D4AF37]"></i>Professional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization *</label>
                      <input type="text" name="organization" required value={formData.organization} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                      <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Registration Type *</label>
                      <select name="registrationType" required value={formData.registrationType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white">
                        <option value="">Select registration type</option>
                        <option value="delegate">Conference Delegate</option>
                        <option value="speaker">Speaker / Presenter</option>
                        <option value="researcher">Researcher</option>
                        <option value="student">Student</option>
                        <option value="media">Media</option>
                        <option value="partner">Partner Organization</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Thematic Interests */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-focus-3-line text-[#D4AF37]"></i>Thematic Interests
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Select the thematic pillars you're most interested in:</p>
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
                    <i className="ri-file-text-line text-[#D4AF37]"></i>Abstract Submission
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Would you like to submit an abstract for presentation?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="abstractSubmission" value="yes" checked={formData.abstractSubmission === 'yes'} onChange={handleChange} className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="abstractSubmission" value="no" checked={formData.abstractSubmission === 'no'} onChange={handleChange} className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <i className="ri-user-settings-line text-[#D4AF37]"></i>Special Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements</label>
                      <input type="text" name="dietaryRequirements" value={formData.dietaryRequirements} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" placeholder="e.g. Vegetarian, Halal, Gluten-free" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Accessibility Needs</label>
                      <input type="text" name="accessibilityNeeds" value={formData.accessibilityNeeds} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white" placeholder="Any special requirements" />
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
                    <span className="text-sm text-gray-600">
                      I would like to receive updates about CROP Conference 2026 and related events.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                  >
                    <i className="ri-send-plane-line text-lg"></i>Submit Registration
                  </button>
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-[#D4AF37] hover:underline">privacy policy</a> and <a href="/terms-of-service" className="text-[#D4AF37] hover:underline">terms of use</a>.
                  </p>
                </div>
              </form>
            )}

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-time-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">Early Bird Rates</h4>
                <p className="text-gray-600 text-xs">Register early for discounted rates</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-group-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">Group Discounts</h4>
                <p className="text-gray-600 text-xs">Special rates for group registrations</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <i className="ri-question-line text-[#D4AF37] text-2xl mb-2"></i>
                <h4 className="font-semibold text-[#0A2540] text-sm">Need Help?</h4>
                <p className="text-gray-600 text-xs">Contact our registration team</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}