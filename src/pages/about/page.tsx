import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const AboutPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const coreValues = [
    {
      icon: 'ri-team-line',
      title: 'Community-Centered',
      description: 'We place communities at the heart of everything we do. Our approach is grounded in understanding local contexts, respecting cultural diversity, and empowering communities to lead their own development. We believe that sustainable change comes from within, and our role is to facilitate, support, and amplify community voices and aspirations.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We operate with unwavering ethical standards and transparency in all our partnerships and programs. Integrity guides our decision-making, from how we engage with communities to how we manage resources and report outcomes. We are accountable to our partners, stakeholders, and most importantly, to the communities we serve.',
    },
    {
      icon: 'ri-scales-line',
      title: 'Equity',
      description: 'We are committed to addressing systemic inequalities and ensuring fair access to opportunities and resources. Our programs are designed to reach marginalized and underserved communities, breaking down barriers that prevent people from achieving their full potential. We advocate for policies and practices that promote social justice and equal opportunities for all.',
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We embrace creative solutions and adaptive approaches to complex challenges. Innovation drives us to explore new methodologies, leverage technology, and develop cutting-edge programs that respond to evolving community needs. We continuously learn, iterate, and improve our practices to deliver maximum impact and sustainable outcomes.',
    },
  ];

  const approachSteps = [
    {
      icon: 'ri-search-eye-line',
      title: 'Understanding Barriers',
      description: 'We conduct comprehensive assessments to identify systemic, cultural, and economic barriers that communities face. Through participatory research and community consultations, we gain deep insights into challenges and root causes.',
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Identifying Opportunities',
      description: 'We transform challenges into opportunities by mapping community assets, cultural capital, and potential partnerships. Our analysis reveals pathways for sustainable development and empowerment.',
    },
    {
      icon: 'ri-handshake-line',
      title: 'Building Partnerships',
      description: 'We connect communities with institutions, markets, and resources through strategic partnerships. Our network spans government agencies, private sector, NGOs, and international organizations.',
    },
    {
      icon: 'ri-rocket-line',
      title: 'Implementing Solutions',
      description: 'We co-design and implement culturally appropriate, evidence-based programs that address identified needs. Our solutions are scalable, sustainable, and community-owned.',
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Measuring Impact',
      description: 'We employ rigorous monitoring and evaluation frameworks to track progress, measure outcomes, and ensure accountability. Our impact assessments inform continuous improvement and demonstrate value to stakeholders.',
    },
  ];

  const teamMembers = [
    {
      name: 'Mr Morris Mukasa',
      role: 'Founder & Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20african%20male%20founder%20director%20portrait%20confident%20warm%20smile%20business%20suit%20leadership%20executive%20simple%20clean%20background&width=400&height=400&seq=team1morris&orientation=squarish',
      bio: 'Distinguished advocate, humanitarian, and community leader dedicated to promoting social justice, trauma recovery, and empowerment of marginalised communities',
    },
    {
      name: 'James Chen',
      role: 'Director of Partnerships',
      image: 'https://readdy.ai/api/search-image?query=professional%20Asian%20man%20director%20executive%20portrait%20confident%20business%20attire%20simple%20clean%20background&width=400&height=400&seq=team2&orientation=squarish',
      bio: 'Specialist in transnational partnerships and sustainable trade development',
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Head of Health Programs',
      image: 'https://readdy.ai/api/search-image?query=professional%20woman%20doctor%20healthcare%20executive%20portrait%20warm%20smile%20medical%20professional%20simple%20clean%20background&width=400&height=400&seq=team3&orientation=squarish',
      bio: 'Public health expert focused on health equity and community wellbeing',
    },
    {
      name: 'Michael Nguyen',
      role: 'Cultural Heritage Advisor',
      image: 'https://readdy.ai/api/search-image?query=professional%20man%20cultural%20advisor%20portrait%20confident%20professional%20attire%20simple%20clean%20background&width=400&height=400&seq=team4&orientation=squarish',
      bio: 'Cultural anthropologist specializing in heritage preservation and community engagement',
    },
  ];

  const stats = [
    { number: '500+', label: 'Communities Served' },
    { number: '50+', label: 'Partnerships' },
    { number: '15', label: 'Countries' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=diverse%20professional%20team%20collaboration%20modern%20office%20setting%20multicultural%20business%20meeting%20strategic%20planning%20warm%20natural%20lighting%20simple%20clean%20background&width=1920&height=1080&seq=abouthero&orientation=landscape"
          alt="About KWETU CONNECT"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 px-4">
              BRIDGING COMMUNITIES,
              <br />
              MARKETS & INSTITUTIONS
            </h1>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Link to="/" className="hover:text-accent transition-colors cursor-pointer">
                Home
              </Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 sm:p-10 lg:p-12 rounded-3xl">
              <div className="w-16 h-16 flex items-center justify-center bg-accent rounded-2xl mb-6">
                <i className="ri-eye-line text-3xl text-primary"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">OUR VISION</h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                A world where cultural diversity is celebrated as a source of strength, where communities are empowered to overcome barriers, and where sustainable partnerships create pathways to prosperity and resilience for all. We envision thriving communities that preserve their heritage while embracing innovation and opportunity.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal/10 to-teal/5 p-8 sm:p-10 lg:p-12 rounded-3xl">
              <div className="w-16 h-16 flex items-center justify-center bg-teal rounded-2xl mb-6">
                <i className="ri-compass-line text-3xl text-white"></i>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">OUR MISSION</h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                To redefine barriers as opportunities by connecting communities with resources, markets, and institutions through innovative programs in cultural resilience, health equity, sustainable trade, and community empowerment. We facilitate transformative partnerships that create lasting positive impact across the Global South and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Accordion */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              The principles that guide our work and partnerships
            </p>
          </div>
          <div className="space-y-4">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={openAccordion === index}
                  aria-controls={`accordion-content-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl flex-shrink-0">
                      <i className={`${value.icon} text-2xl text-accent`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{value.title}</h3>
                  </div>
                  <i
                    className={`ri-arrow-down-s-line text-3xl text-primary transition-transform flex-shrink-0 ${
                      openAccordion === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {openAccordion === index && (
                  <div
                    id={`accordion-content-${index}`}
                    className="px-6 pb-6 border-l-4 border-accent ml-6"
                  >
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pl-4 sm:pl-12">
                      {value.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Approach
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              A systematic process for transforming barriers into opportunities
            </p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent hidden md:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {approachSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    {/* Node */}
                    <div className="hidden md:flex w-16 h-16 flex-shrink-0 items-center justify-center bg-accent rounded-full border-4 border-white shadow-lg z-10">
                      <i className={`${step.icon} text-2xl text-primary`}></i>
                    </div>
                    {/* Content */}
                    <div className="md:ml-12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex-1">
                      <div className="flex items-center mb-4 md:hidden">
                        <div className="w-12 h-12 flex items-center justify-center bg-accent rounded-xl mr-4 flex-shrink-0">
                          <i className={`${step.icon} text-xl text-primary`}></i>
                        </div>
                        <span className="text-accent font-bold text-lg">Step {index + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Experienced professionals driving transformative change
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-accent rounded-full hover:scale-110 transition-transform cursor-pointer"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <i className="ri-linkedin-fill text-xl text-primary"></i>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Organization Feature */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=grassroots%20community%20development%20Global%20South%20village%20collaborative%20sustainable%20development%20projects%20warm%20natural%20lighting%20beautiful%20landscape%20simple%20clean%20background&width=1920&height=1080&seq=sisterbg&orientation=landscape"
            alt="Sister Organization Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Measurable impact across communities and partnerships
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-accent mb-4">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom max-w-4xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Join Us in Creating Lasting Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Partner with KWETU CONNECT to transform barriers into opportunities
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Partner With Us
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto border-2 border-primary hover:bg-primary hover:text-white text-primary px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
