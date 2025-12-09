import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const HealthRecruitmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with comprehensive benefits and performance incentives',
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Professional Development',
      description: 'Continuous training, certification support, and career advancement opportunities',
    },
    {
      icon: 'ri-team-line',
      title: 'Supportive Community',
      description: 'Join a diverse, inclusive team with mentorship programs and peer support networks',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Flexible Scheduling',
      description: 'Work-life balance with flexible shifts, part-time and full-time options available',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Comprehensive Insurance',
      description: 'Health, dental, vision coverage plus professional liability insurance',
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Wellbeing Support',
      description: 'Mental health resources, wellness programs, and caregiver support services',
    },
  ];

  const positions = [
    {
      title: 'Registered Nurses (RN)',
      type: 'Full-time / Part-time',
      location: 'Sydney & Regional NSW',
      description: 'Provide compassionate care in aged care facilities, hospitals, and community health settings',
      requirements: ['Current AHPRA registration', '2+ years clinical experience', 'Cultural competency'],
    },
    {
      title: 'Enrolled Nurses (EN)',
      type: 'Full-time / Part-time',
      location: 'Multiple Locations',
      description: 'Support registered nurses in delivering quality patient care across diverse healthcare settings',
      requirements: ['Current AHPRA registration', 'Diploma of Nursing', 'Medication administration certification'],
    },
    {
      title: 'Personal Care Assistants',
      type: 'Casual / Part-time / Full-time',
      location: 'Sydney Metro & Regional',
      description: 'Assist clients with daily living activities, personal care, and companionship',
      requirements: ['Certificate III in Individual Support', 'First Aid & CPR', 'NDIS Worker Screening'],
    },
    {
      title: 'Disability Support Workers',
      type: 'Full-time / Part-time',
      location: 'Sydney & Surrounding Areas',
      description: 'Empower individuals with disabilities to live independently and achieve their goals',
      requirements: ['Certificate IV in Disability', 'NDIS registration', 'Valid driver\'s license'],
    },
    {
      title: 'Allied Health Professionals',
      type: 'Contract / Permanent',
      location: 'Various Locations',
      description: 'Physiotherapists, occupational therapists, speech pathologists, and social workers needed',
      requirements: ['Relevant tertiary qualification', 'AHPRA registration (where applicable)', 'Experience in community health'],
    },
    {
      title: 'Mental Health Support Workers',
      type: 'Full-time / Part-time',
      location: 'Sydney & Regional NSW',
      description: 'Provide culturally sensitive mental health support and crisis intervention services',
      requirements: ['Mental health qualification', 'Trauma-informed care training', 'Cultural awareness'],
    },
  ];

  const testimonials = [
    {
      quote: 'KWETU CONNECT helped me transition from overseas nursing to working in Australia. The support and guidance were exceptional.',
      author: 'Grace Mwangi',
      role: 'Registered Nurse',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20African%20female%20nurse%20in%20medical%20scrubs%20smiling%20confidently%20healthcare%20setting%20simple%20clean%20background&width=100&height=100&seq=nurse1&orientation=squarish',
    },
    {
      quote: 'I found my dream job through KWETU CONNECT. They matched me with an organization that values cultural diversity and professional growth.',
      author: 'Ahmed Hassan',
      role: 'Disability Support Worker',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20disability%20support%20worker%20portrait%20warm%20smile%20casual%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=worker1&orientation=squarish',
    },
    {
      quote: 'The ongoing support and professional development opportunities have been incredible. I feel valued and empowered in my role.',
      author: 'Maria Santos',
      role: 'Personal Care Assistant',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20care%20assistant%20portrait%20friendly%20smile%20healthcare%20uniform%20simple%20clean%20background&width=100&height=100&seq=care1&orientation=squarish',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Complete our online application form with your qualifications and experience',
      icon: 'ri-file-text-line',
    },
    {
      number: '02',
      title: 'Initial Screening',
      description: 'Our team reviews your application and conducts a preliminary phone interview',
      icon: 'ri-phone-line',
    },
    {
      number: '03',
      title: 'Skills Assessment',
      description: 'Participate in competency evaluation and cultural fit assessment',
      icon: 'ri-checkbox-multiple-line',
    },
    {
      number: '04',
      title: 'Placement Matching',
      description: 'We match you with suitable positions based on your skills and preferences',
      icon: 'ri-user-search-line',
    },
    {
      number: '05',
      title: 'Onboarding & Training',
      description: 'Comprehensive orientation, compliance training, and ongoing support',
      icon: 'ri-graduation-cap-line',
    },
    {
      number: '06',
      title: 'Start Your Career',
      description: 'Begin your rewarding healthcare career with continuous professional support',
      icon: 'ri-rocket-line',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=diverse%20healthcare%20professionals%20team%20doctors%20nurses%20caregivers%20standing%20together%20in%20modern%20hospital%20setting%20professional%20medical%20environment%20warm%20welcoming%20atmosphere%20representing%20health%20equity%20and%20community%20care%20simple%20clean%20background&width=1920&height=1080&seq=healthhero1&orientation=landscape"
          alt="Healthcare Professionals"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center px-4">
            <span className="inline-block bg-accent text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Join Our Healthcare Network
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Your Healthcare Career
              <br />
              <span className="text-accent">With Purpose & Impact</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Connecting passionate healthcare professionals with meaningful opportunities across Australia
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#positions"
                className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                View Open Positions
              </a>
              <a
                href="#apply"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-3xl"></i>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-wider">Health Equity & Wellbeing</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Connecting Communities with Quality Healthcare
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                KWETU CONNECT's Health Recruitment program bridges the gap between skilled healthcare professionals and communities in need. We specialize in recruiting culturally competent caregivers, nurses, and allied health professionals who understand the unique needs of diverse communities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our comprehensive approach ensures that both healthcare workers and care recipients benefit from meaningful, sustainable partnerships that promote health equity and community wellbeing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Cultural Competency
                </span>
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Professional Excellence
                </span>
                <span className="px-5 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium whitespace-nowrap">
                  Community Care
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=compassionate%20nurse%20caring%20for%20elderly%20patient%20in%20home%20care%20setting%20warm%20natural%20lighting%20professional%20healthcare%20environment%20representing%20quality%20community%20health%20services%20simple%20clean%20background&width=800&height=600&seq=healthcare2&orientation=landscape"
                alt="Healthcare Professional"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-primary text-sm font-semibold">Healthcare Professionals Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              See Our Impact in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how KWETU CONNECT is transforming healthcare delivery through culturally responsive recruitment
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="KWETU CONNECT Health Recruitment"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Why Choose KWETU CONNECT?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a pathway to a fulfilling healthcare career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-accent p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-accent/10 rounded-xl mb-6">
                  <i className={`${benefit.icon} text-4xl text-accent`}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find your perfect healthcare role
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{position.title}</h3>
                      <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold whitespace-nowrap">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <i className="ri-map-pin-line mr-2 text-accent"></i>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#apply"
                      className="inline-block bg-accent hover:bg-accent-dark text-primary px-8 py-3 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Journey to Healthcare Excellence
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our streamlined recruitment process ensures you're supported every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/20 hover:border-accent transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-accent">{step.number}</div>
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/20 rounded-xl">
                    <i className={`${step.icon} text-3xl text-accent`}></i>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Success Stories from Our Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who've built rewarding careers through KWETU CONNECT
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-accent text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Part of Our Comprehensive Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Health Recruitment connects seamlessly with our other programs and pillars
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/programs#mental-health"
              className="group bg-gradient-to-br from-teal to-teal-light p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-mental-health-line text-5xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mental Health & Wellbeing</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Supporting healthcare workers' mental health and wellbeing
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center text-white font-semibold hover:underline">
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#job-opportunities"
              className="group bg-gradient-to-br from-orange-600 to-accent p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-briefcase-heart-line text-5xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Job Opportunities & Care for Caregivers</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Career pathways and support for healthcare professionals
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center text-white font-semibold hover:underline">
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#cultural-exchange"
              className="group bg-gradient-to-br from-green-700 to-green-400 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-earth-line text-5xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cultural Exchange Programs</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Culturally competent care through exchange and learning
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center text-white font-semibold hover:underline">
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>

            <Link
              to="/programs#seniors-wisdom"
              className="group bg-gradient-to-br from-primary to-blue-400 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-5xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Seniors Wisdom & Guidance</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Honoring elders through quality aged care services
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center text-white font-semibold hover:underline">
                  Learn More <i className="ri-arrow-right-line ml-2"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Healthcare Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the diverse, passionate professionals making a difference every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20nurses%20and%20doctors%20collaborating%20in%20modern%20hospital%20setting%20professional%20healthcare%20environment%20teamwork%20simple%20clean%20background&width=600&height=800&seq=gallery1&orientation=portrait"
                alt="Healthcare Team"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=personal%20care%20assistant%20helping%20elderly%20person%20with%20daily%20activities%20warm%20home%20care%20setting%20compassionate%20care%20simple%20clean%20background&width=600&height=800&seq=gallery2&orientation=portrait"
                alt="Personal Care"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=disability%20support%20worker%20engaging%20with%20client%20in%20community%20setting%20inclusive%20environment%20empowerment%20simple%20clean%20background&width=600&height=800&seq=gallery3&orientation=portrait"
                alt="Disability Support"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=allied%20health%20professional%20physiotherapist%20working%20with%20patient%20in%20clinic%20modern%20healthcare%20facility%20professional%20setting%20simple%20clean%20background&width=600&height=800&seq=gallery4&orientation=portrait"
                alt="Allied Health"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=mental%20health%20counselor%20in%20supportive%20therapy%20session%20warm%20welcoming%20environment%20professional%20care%20simple%20clean%20background&width=600&height=800&seq=gallery5&orientation=portrait"
                alt="Mental Health Support"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <img
                src="https://readdy.ai/api/search-image?query=healthcare%20professionals%20celebrating%20success%20diverse%20team%20multicultural%20environment%20positive%20workplace%20culture%20simple%20clean%20background&width=600&height=800&seq=gallery6&orientation=portrait"
                alt="Team Success"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,.1) 30%, rgba(255,255,255,.1) 70%, transparent 70%)' }}></div>
        </div>
        <div className="container-custom text-center relative px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join hundreds of healthcare professionals who've found meaningful careers through KWETU CONNECT
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthRecruitmentPage;
