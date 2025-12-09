import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20community%20members%20collaborating%20together%20in%20bright%20modern%20space%20with%20cultural%20artifacts%20and%20symbols%20of%20unity%2C%20warm%20natural%20lighting%2C%20professional%20photography%2C%20vibrant%20atmosphere%20showing%20connection%20and%20empowerment&width=1920&height=1080&seq=programs-hero-bg&orientation=landscape"
            alt="Programs Hero Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Comprehensive Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Explore the six core pillars of Kwetu Connect that drive cultural resilience,
            community wellbeing, and sustainable opportunities.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="container-custom py-12 space-y-16">
        {/* 1. Mental Health & Wellbeing */}
        <div id="mental-health" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Redefining Mental Health & Wellbeing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We provide culturally responsive mental health services that empower communities
            to tackle wellbeing challenges head‑on. Our approach blends community‑led
            counseling, digital mental health tools, and anti‑stigma campaigns to foster
            resilience and hope.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Community‑based support networks</li>
            <li>Early‑intervention workshops</li>
            <li>Holistic wellness programmes</li>
            <li>Digital self‑care platforms</li>
            <li>Training for local mental‑health practitioners</li>
          </ul>
          {/* Image with proper container */}
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20people%20engaging%20in%20mental%20health%20workshop%20with%20counselor%2C%20warm%20natural%20lighting%2C%20supportive%20atmosphere%2C%20simple%20clean%20background%2C%20professional%20photography%20showing%20empathy%20and%20connection&width=1200&height=600&seq=program-mental-health&orientation=landscape"
              alt="Mental Health & Wellbeing"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 2. Cultural Exchange Programs */}
        <div id="cultural-exchange" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Cultural Exchange & Partnerships
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our exchange programmes connect Indigenous knowledge holders with global partners,
            fostering mutual learning, artistic collaborations, and sustainable trade pathways.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Immersive cultural immersion trips</li>
            <li>Reciprocal learning partnerships</li>
            <li>Artistic collaborations and festivals</li>
            <li>Education exchange scholarships</li>
            <li>Sustainable trade facilitation</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=cultural%20exchange%20gathering%20with%20people%20in%20traditional%20clothing%20sharing%20knowledge%2C%20vibrant%20colours%2C%20outdoor%20natural%20setting%2C%20simple%20background%2C%20professional%20photography%20showing%20diversity%20and%20unity&width=1200&height=600&seq=program-cultural-exchange&orientation=landscape"
              alt="Cultural Exchange"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 3. Community Chaplaincy Rehabilitation */}
        <div id="chaplaincy" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Community Chaplaincy Rehabilitation Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We deliver holistic rehabilitation that blends spiritual care, mentorship, and
            practical life‑skill support, assisting individuals transitioning back into
            community life.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Spiritual counseling and guidance</li>
            <li>Mentoring programmes for reintegration</li>
            <li>Family reconciliation support</li>
            <li>Employment and skills development</li>
            <li>Safe housing assistance</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=community%20chaplaincy%20mentoring%20session%20with%20counselor%20and%20individual%20in%20warm%20indoor%20setting%2C%20supportive%20atmosphere%2C%20simple%20clean%20background%2C%20professional%20photography%20showing%20hope%20and%20guidance&width=1200&height=600&seq=program-chaplaincy&orientation=landscape"
              alt="Community Chaplaincy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 4. Job Opportunities & Caregiver Support */}
        <div id="job-opportunities" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Navigating Job Opportunities & Caregiver Support
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Empowering both job seekers and caregivers through tailored career pathways,
            skills recognition, and wellbeing resources.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive career pathway mapping</li>
            <li>Employer partnership programmes</li>
            <li>Certification and skills‑bridging courses</li>
            <li>Financial incentives for caregivers</li>
            <li>Wellbeing and mental‑health resources for caregivers</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20professionals%20discussing%20job%20opportunities%20in%20modern%20office%2C%20supportive%20environment%2C%20simple%20clean%20background%2C%20professional%20photography%20showing%20collaboration%20and%20career%20development&width=1200&height=600&seq=program-job-opportunities&orientation=landscape"
              alt="Job Opportunities & Caregiver Support"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 5. Seniors Wisdom & Guidance */}
        <div id="seniors-wisdom" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Promoting Belonging Through Seniors' Wisdom
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Harnessing the experience of senior community members to mentor youth, preserve
            cultural knowledge, and strengthen inter‑generational bonds.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Intergenerational mentorship circles</li>
            <li>Story‑telling archives and digital heritage</li>
            <li>Active ageing community hubs</li>
            <li>Technology facilitation for seniors</li>
            <li>Leadership roles for elder advisors</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=seniors%20sharing%20stories%20with%20youth%20in%20warm%20indoor%20setting%20with%20cultural%20artifacts%2C%20simple%20clean%20background%2C%20professional%20photography%20showing%20intergenerational%20connection%20and%20wisdom%20transfer&width=1200&height=600&seq=program-seniors-wisdom&orientation=landscape"
              alt="Seniors Wisdom"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* 6. Turning Vulnerability into Opportunities */}
        <div id="vulnerability" className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-primary">
            Turning Vulnerability into Opportunities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A strengths‑based framework that transforms community challenges into innovative
            solutions, fostering resilience and sustainable growth.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Asset‑mapping and community co‑design</li>
            <li>Micro‑grant and seed‑fund programmes</li>
            <li>Advocacy for policy change</li>
            <li>Capacity‑building workshops</li>
            <li>Impact measurement and storytelling</li>
          </ul>
          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=community%20members%20collaborating%20on%20innovative%20project%20in%20bright%20atmosphere%2C%20simple%20clean%20background%2C%20professional%20photography%20showing%20empowerment%20and%20transformation&width=1200&height=600&seq=program-vulnerability&orientation=landscape"
              alt="Turning Vulnerability into Opportunities"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;