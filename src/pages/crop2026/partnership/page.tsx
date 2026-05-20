import CropConferenceLayout from '../components/CropConferenceLayout';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const categories = [
  {
    icon: 'ri-building-2-line',
    title: 'Corporate Sponsorship',
    desc: 'Support cultural resilience while enhancing your organization\'s visibility and demonstrating commitment to sustainability and social impact.',
    opportunities: [
      'Conference title sponsorship',
      'Session and workshop sponsorship',
      'Networking event sponsorship',
      'Technology and innovation showcase',
    ],
  },
  {
    icon: 'ri-government-line',
    title: 'Government & Institutional Partners',
    desc: 'Collaborate with us to advance policy objectives, support cultural preservation, and demonstrate leadership in sustainability.',
    opportunities: [
      'Thematic pillar partnership',
      'Research and publication support',
      'Youth forum sponsorship',
      'Working group facilitation',
    ],
  },
  {
    icon: 'ri-earth-line',
    title: 'International Organizations',
    desc: 'Partner with us to amplify global reach and connect with diverse communities committed to cultural resilience.',
    opportunities: [
      'Community roundtable support',
      'Scholarship programme for delegates',
      'Documentation and media partnership',
      'Post-conference network support',
    ],
  },
  {
    icon: 'ri-megaphone-line',
    title: 'Media Partnership',
    desc: 'Gain exclusive access to conference content while helping amplify messages of cultural resilience and sustainability globally.',
    opportunities: [
      'Exclusive interview access',
      'Content sharing agreements',
      'Live coverage opportunities',
      'Documentary collaboration',
    ],
  },
];

const tiers = [
  {
    name: 'Platinum Partner',
    price: '$50,000',
    color: 'from-slate-400 to-slate-600',
    highlight: true,
    benefits: [
      'Logo prominently featured on all event promotional emails',
      'Advertisement with hyperlink on our dedicated Sponsors page',
      'Logo inclusion in all event promotional videos',
      '3x banners displayed at the event venue',
      'Logo on all uniforms worn by the event crew',
      'Premium Exhibition Stand at a prime event location',
      'Ability to sell or distribute branded merchandise at the event',
      'Acknowledgement and recognition by the MC throughout the event',
      'Promotion across all social media channels: Facebook, Snapchat, Instagram, TikTok',
      'Inclusion in all event media releases (radio, TV, and newspaper)',
      'Personal introductions to our network to connect you with potential clients and referral partners',
    ],
  },
  {
    name: 'Gold Partner',
    price: '$30,000',
    color: 'from-yellow-500 to-yellow-700',
    highlight: false,
    benefits: [
      'Your logo on emails promoting the event',
      'An advertisement with hyperlink to your website on the sponsors\' page',
      'Logo inclusion in event promotional videos',
      'Acknowledgement by the MC at the event',
      'Personal Introductions to our contacts and circles of influence',
      '2x banners at the event',
      'Ability to sell or give away branded merchandise at the event',
      'Promotion via all social media channels the event is promoted on',
      'Premium location Exhibition stand at the event',
    ],
  },
  {
    name: 'Silver Partner',
    price: '$15,000',
    color: 'from-gray-300 to-gray-500',
    highlight: false,
    benefits: [
      'Your signage/banner on site at the event',
      'Your logo on emails promoting the event',
      'An advertisement with hyperlink to your website on the sponsors\' page',
      'Logo inclusion in event promotional videos',
      'Acknowledgement by the MC at the event',
      'Promotion via all social media channels the event is promoted on',
      'Included Exhibition Stand at the event',
    ],
  },
  {
    name: 'Bronze Partner',
    price: '$10,000',
    color: 'from-orange-400 to-orange-600',
    highlight: false,
    benefits: [
      'Your signage/banner on site at the event',
      'Your logo on emails promoting the event',
      'An advertisement with hyperlink on the sponsor\'s page',
      'Acknowledgement by the MC at the event',
      'Inclusion – Exhibition Stand at the event',
    ],
  },
];

const extras = [
  { name: 'Exhibition Stand Only', price: '$5,000', desc: '3x2 stand at the event venue' },
  { name: 'Basic Exhibition Stand', price: '$1,000', desc: '3x2 stand at the event venue' },
];

const whyPartner = [
  { icon: 'ri-eye-line', title: 'Global Visibility', desc: 'Reach 800+ international delegates and extensive media coverage.' },
  { icon: 'ri-shake-hands-line', title: 'Strategic Networking', desc: 'Connect with global leaders, policymakers, and cultural innovators.' },
  { icon: 'ri-lightbulb-line', title: 'Thought Leadership', desc: 'Position your organization at the forefront of cultural resilience.' },
  { icon: 'ri-heart-3-line', title: 'Social Impact', desc: 'Demonstrate commitment to cultural preservation and sustainability.' },
  { icon: 'ri-book-read-line', title: 'Research Access', desc: 'Early access to conference research and best practices documentation.' },
  { icon: 'ri-links-line', title: 'Long-term Engagement', desc: 'Ongoing involvement through thematic working groups and networks.' },
];

const inKind = [
  { icon: 'ri-computer-line', title: 'Technology & Equipment', desc: 'AV equipment, software licenses, digital platforms' },
  { icon: 'ri-printer-line', title: 'Printing & Materials', desc: 'Conference materials, signage, publications' },
  { icon: 'ri-briefcase-line', title: 'Professional Services', desc: 'Design, translation, documentation services' },
  { icon: 'ri-user-heart-line', title: 'Delegate Support', desc: 'Accommodation, travel, catering contributions' },
];

export default function PartnershipPage() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <CropConferenceLayout>
      <div className="pt-8">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20business%20partnership%20handshake%20collaboration%20diverse%20executives%20corporate%20meeting%20cultural%20sustainability%20theme%20modern%20office%20setting%20simple%20background&width=1920&height=700&seq=croppartnerhero&orientation=landscape"
              alt="Partnership Opportunities"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Collaborate With Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Partnership Opportunities
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join us as a partner in advancing cultural resilience and planetary sustainability. Together, we can create lasting impact.
            </p>
          </div>
        </section>

        {/* Partnership Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Partnership Categories</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Diverse Partnership Opportunities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${cat.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Opportunities Include:</p>
                    <ul className="space-y-1">
                      {cat.opportunities.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Sponsorship Packages</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sponsorship Tiers
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Flexible sponsorship packages designed to maximize your impact and visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, idx) => (
                <div
                  key={tier.name}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    tier.highlight ? 'ring-4 ring-[#D4AF37] lg:scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredTier(idx)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  <div className={`bg-gradient-to-br ${tier.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{tier.name}</h3>
                    <div className="text-2xl font-bold mt-1">{tier.price}</div>
                    {tier.highlight && (
                      <div className="mt-2 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full inline-block">
                        Most Impactful
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2 mb-5">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <i className="ri-check-line text-green-600 mt-0.5 flex-shrink-0"></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm ${
                        tier.highlight
                          ? 'bg-[#D4AF37] hover:bg-[#C4A137] text-[#0A2540]'
                          : 'bg-[#0A2540] hover:bg-[#1a4a7a] text-white'
                      }`}
                    >
                      Proceed to Payment
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Exhibition extras */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {extras.map((extra) => (
                <div key={extra.name} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center">
                  <h4 className="text-lg font-bold text-[#0A2540]">{extra.name}</h4>
                  <div className="text-xl font-bold text-[#D4AF37] my-1">{extra.price}</div>
                  <p className="text-gray-600 text-sm">{extra.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-block mt-3 px-4 py-2 bg-[#0A2540] hover:bg-[#1a4a7a] text-white text-sm font-semibold rounded-lg transition-all"
                  >
                    Select
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-lg text-gray-700 mb-4">Custom partnership packages available. Contact us to discuss tailored opportunities.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] text-white font-semibold rounded-lg hover:bg-[#1a4a7a] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <i className="ri-mail-line text-xl"></i>Contact Us for Custom Packages
              </Link>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">Strategic Benefits</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Partner With Us?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-Kind */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#0A2540] font-semibold text-sm uppercase tracking-wider">In-Kind Contributions</span>
              <div className="h-0.5 w-16 bg-[#D4AF37] mt-2 mx-auto mb-4"></div>
              <h2 className="text-3xl font-bold text-[#0A2540]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Non-Financial Support Welcome
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We welcome in-kind support that enhances the conference experience and extends our impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inKind.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-xl text-[#D4AF37]`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1a4a7a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Create Impact Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our partnership team is ready to discuss how we can collaborate to advance cultural resilience and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg"></i>Email Partnership Team
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-download-line text-lg"></i>Download Sponsorship Pack
              </Link>
            </div>
          </div>
        </section>
      </div>
    </CropConferenceLayout>
  );
}