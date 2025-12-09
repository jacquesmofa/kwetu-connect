import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function Crop2026() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://readdy.ai/api/search-image?query=Sydney%20Opera%20House%20and%20Harbour%20Bridge%20at%20sunset%2C%20iconic%20Australian%20landmarks%2C%20vibrant%20blue%20sky%2C%20golden%20hour%20lighting%2C%20beautiful%20cityscape%2C%20professional%20photography%2C%20high%20quality%2C%20stunning%20view%20of%20Sydney%20harbor%20with%20boats%20and%20modern%20architecture&width=1920&height=1080&seq=crop2026hero1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=The%20Dome%20at%20Sydney%20Olympic%20Park%2C%20modern%20conference%20venue%2C%20architectural%20exterior%20view%2C%20professional%20event%20space%2C%20clear%20blue%20sky%2C%20contemporary%20building%20design%2C%20Sydney%20Olympic%20Park%20facilities%2C%20high%20quality%20architectural%20photography&width=1920&height=1080&seq=crop2026hero2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Indigenous%20cultural%20celebration%2C%20traditional%20dancers%20in%20colorful%20ceremonial%20attire%2C%20vibrant%20cultural%20patterns%2C%20community%20gathering%2C%20rich%20cultural%20heritage%2C%20diverse%20people%20celebrating%20together%2C%20authentic%20cultural%20expression%2C%20warm%20lighting%2C%20professional%20photography&width=1920&height=1080&seq=crop2026hero3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Healthcare%20professionals%20with%20diverse%20cultural%20backgrounds%2C%20medical%20team%20in%20modern%20hospital%2C%20cultural%20sensitivity%20in%20healthcare%2C%20doctors%20and%20nurses%20caring%20for%20patients%2C%20multicultural%20medical%20environment%2C%20compassionate%20care%2C%20professional%20medical%20setting%2C%20warm%20lighting&width=1920&height=1080&seq=crop2026hero4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=International%20conference%20attendees%2C%20diverse%20group%20of%20professionals%20networking%2C%20Indigenous%20leaders%20and%20policymakers%20in%20discussion%2C%20modern%20conference%20setting%2C%20collaborative%20atmosphere%2C%20cultural%20diversity%2C%20professional%20business%20environment%2C%20bright%20natural%20lighting&width=1920&height=1080&seq=crop2026hero5&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Sydney%20skyline%20panorama%2C%20beautiful%20Australian%20landscape%2C%20modern%20city%20with%20natural%20harbor%2C%20blue%20sky%20and%20ocean%20view%2C%20urban%20architecture%20blended%20with%20nature%2C%20vibrant%20cityscape%2C%20professional%20travel%20photography%2C%20stunning%20aerial%20view&width=1920&height=1080&seq=crop2026hero6&orientation=landscape'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-11-06T09:00:00+11:00').getTime(); // November 6, 2026, 9 AM AEDT

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const themes = [
    {
      title: 'Cultural Resilience',
      description: 'Exploring how Indigenous and cultural communities preserve identity, adapt to change, and thrive in the face of global challenges.',
      icon: 'ri-ancient-gate-line',
      speakers: [
        {
          name: 'Dr. Amara Okafor',
          title: 'Indigenous Knowledge Systems Expert',
          image: 'https://readdy.ai/api/search-image?query=professional%20indigenous%20woman%20expert%20cultural%20heritage%20portrait%20confident%20smile%20traditional%20modern%20blend%20simple%20clean%20background&width=100&height=100&seq=speaker1&orientation=squarish',
        },
        {
          name: 'Prof. James Whitehorse',
          title: 'Cultural Anthropologist',
          image: 'https://readdy.ai/api/search-image?query=professional%20indigenous%20male%20professor%20academic%20portrait%20warm%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker2&orientation=squarish',
        },
        {
          name: 'Maria Santos',
          title: 'Heritage Preservation Director',
          image: 'https://readdy.ai/api/search-image?query=professional%20woman%20heritage%20director%20portrait%20confident%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker3&orientation=squarish',
        },
      ],
      sessions: [
        'Indigenous Knowledge Systems and Modern Science Integration',
        'Cultural Heritage Preservation in Digital Age',
        'Language Revitalization Strategies',
        'Traditional Practices in Contemporary Context',
        'Community-Led Cultural Programs',
      ],
    },
    {
      title: 'Planetary Sustainability',
      description: 'Addressing climate change, environmental stewardship, and sustainable development through cultural and community-based approaches.',
      icon: 'ri-earth-line',
      speakers: [
        {
          name: 'Dr. Chen Wei',
          title: 'Climate Action Specialist',
          image: 'https://readdy.ai/api/search-image?query=professional%20asian%20male%20climate%20scientist%20portrait%20confident%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker4&orientation=squarish',
        },
        {
          name: 'Sarah Green',
          title: 'Sustainable Development Advocate',
          image: 'https://readdy.ai/api/search-image?query=professional%20woman%20environmental%20advocate%20portrait%20warm%20smile%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker5&orientation=squarish',
        },
        {
          name: 'Dr. Kofi Mensah',
          title: 'Traditional Ecological Knowledge Researcher',
          image: 'https://readdy.ai/api/search-image?query=professional%20african%20male%20researcher%20portrait%20confident%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker6&orientation=squarish',
        },
      ],
      sessions: [
        'Climate Action and Cultural Resilience Nexus',
        'Traditional Ecological Knowledge Applications',
        'Sustainable Resource Management Models',
        'Community-Based Conservation Initiatives',
        'Green Economy and Cultural Enterprise Development',
      ],
    },
    {
      title: 'Health Equity & Wellbeing',
      description: 'Integrating cultural approaches to health, mental wellbeing, and community care for holistic wellness.',
      icon: 'ri-heart-pulse-line',
      speakers: [
        {
          name: 'Dr. Priya Sharma',
          title: 'Global Health Equity Director',
          image: 'https://readdy.ai/api/search-image?query=professional%20indian%20woman%20doctor%20healthcare%20executive%20portrait%20confident%20smile%20medical%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker7&orientation=squarish',
        },
        {
          name: 'Michael Thompson',
          title: 'Mental Health Innovation Lead',
          image: 'https://readdy.ai/api/search-image?query=professional%20male%20mental%20health%20expert%20portrait%20warm%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker8&orientation=squarish',
        },
        {
          name: 'Dr. Fatima Al-Rashid',
          title: 'Community Health Specialist',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20woman%20healthcare%20specialist%20portrait%20confident%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker9&orientation=squarish',
        },
      ],
      sessions: [
        'Cultural Approaches to Mental Health',
        'Traditional Healing Practices Integration',
        'Community Health Models',
        'Intergenerational Wellbeing Programs',
        'Health Equity and Access Strategies',
      ],
    },
    {
      title: 'Innovation & Partnership',
      description: 'Building transnational partnerships, leveraging technology, and creating innovative solutions for cultural and community challenges.',
      icon: 'ri-lightbulb-flash-line',
      speakers: [
        {
          name: 'Dr. Yuki Tanaka',
          title: 'Technology & Culture Innovation Expert',
          image: 'https://readdy.ai/api/search-image?query=professional%20japanese%20woman%20tech%20expert%20portrait%20confident%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker10&orientation=squarish',
        },
        {
          name: 'Carlos Rodriguez',
          title: 'Social Innovation Director',
          image: 'https://readdy.ai/api/search-image?query=professional%20latino%20male%20innovation%20director%20portrait%20warm%20smile%20business%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker11&orientation=squarish',
        },
        {
          name: 'Dr. Emma Wilson',
          title: 'Partnership Development Lead',
          image: 'https://readdy.ai/api/search-image?query=professional%20woman%20partnership%20director%20portrait%20confident%20professional%20attire%20simple%20clean%20background&width=100&height=100&seq=speaker12&orientation=squarish',
        },
      ],
      sessions: [
        'Technology and Cultural Preservation',
        'Cross-Sector Partnership Models',
        'Social Innovation Frameworks',
        'Youth Leadership and Innovation',
        'Funding and Investment Strategies',
      ],
    },
  ];

  const agenda = [
    {
      day: 'Day 1 - November 6, 2026',
      title: 'Opening & Cultural Foundations',
      sessions: [
        { 
          time: '9:00 AM - 10:00 AM', 
          title: 'Registration & Welcome Coffee', 
          track: 'General',
          location: 'Main Foyer',
          description: 'Welcome reception with refreshments and networking opportunities. Collect your conference materials and connect with fellow delegates.',
        },
        { 
          time: '10:00 AM - 11:00 AM', 
          title: 'Opening Ceremony & Traditional Welcome', 
          track: 'Cultural',
          location: 'Main Auditorium',
          speakers: 'Traditional Custodians & Conference Organizers',
          description: 'Traditional Welcome to Country ceremony followed by official conference opening. Keynote address on the importance of cultural resilience in our shared planetary future.',
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          title: 'Keynote: Cultural Resilience in the 21st Century', 
          track: 'Cultural',
          location: 'Main Auditorium',
          speakers: 'Dr. Amara Okafor',
          description: 'Exploring how Indigenous and cultural communities worldwide are preserving identity while adapting to rapid global change. Case studies from five continents.',
        },
        { 
          time: '12:30 PM - 1:30 PM', 
          title: 'Networking Lunch', 
          track: 'General',
          location: 'Exhibition Hall',
          description: 'Catered lunch with opportunities to explore exhibition booths and connect with partners and sponsors.',
        },
        { 
          time: '1:30 PM - 3:00 PM', 
          title: 'Panel: Indigenous Knowledge & Climate Action', 
          track: 'Resilience',
          location: 'Main Auditorium',
          speakers: 'Dr. Chen Wei, Dr. Kofi Mensah, Sarah Green',
          description: 'How traditional ecological knowledge can inform modern climate action strategies. Interactive panel discussion with Q&A.',
        },
        { 
          time: '3:00 PM - 3:30 PM', 
          title: 'Afternoon Tea', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '3:30 PM - 5:00 PM', 
          title: 'Breakout Sessions: Cultural Heritage Preservation', 
          track: 'Cultural',
          location: 'Multiple Rooms',
          description: 'Choose from 5 concurrent workshops covering language revitalization, digital archiving, traditional arts, cultural tourism, and heritage education.',
        },
        { 
          time: '6:00 PM - 8:00 PM', 
          title: 'Welcome Reception & Cultural Performances', 
          track: 'General',
          location: 'Waterfront Terrace',
          description: 'Evening reception featuring traditional performances, cultural displays, and networking opportunities with stunning harbor views.',
        },
      ],
    },
    {
      day: 'Day 2 - November 7, 2026',
      title: 'Innovation & Partnerships',
      sessions: [
        { 
          time: '9:00 AM - 10:30 AM', 
          title: 'Keynote: Sustainable Development & Cultural Identity', 
          track: 'Trade',
          location: 'Main Auditorium',
          speakers: 'Carlos Rodriguez',
          description: 'Balancing economic development with cultural preservation. Innovative models for sustainable livelihoods that strengthen rather than erode cultural identity.',
        },
        { 
          time: '10:30 AM - 11:00 AM', 
          title: 'Morning Tea', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          title: 'Panel: Health Equity & Community Wellbeing', 
          track: 'Health',
          location: 'Main Auditorium',
          speakers: 'Dr. Priya Sharma, Michael Thompson, Dr. Fatima Al-Rashid',
          description: 'Integrating traditional healing practices with modern healthcare. Addressing mental health stigma and building culturally appropriate support systems.',
        },
        { 
          time: '12:30 PM - 1:30 PM', 
          title: 'Networking Lunch', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '1:30 PM - 3:00 PM', 
          title: 'Workshops: Building Transnational Partnerships', 
          track: 'Resilience',
          location: 'Multiple Rooms',
          description: 'Practical workshops on partnership development, cross-cultural collaboration, funding strategies, and project management for international initiatives.',
        },
        { 
          time: '3:00 PM - 3:30 PM', 
          title: 'Afternoon Tea', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '3:30 PM - 5:00 PM', 
          title: 'Innovation Showcase: Technology & Cultural Preservation', 
          track: 'Cultural',
          location: 'Innovation Hub',
          speakers: 'Dr. Yuki Tanaka & Innovation Teams',
          description: 'Demonstrations of cutting-edge technologies for language preservation, cultural archiving, virtual reality cultural experiences, and digital storytelling.',
        },
        { 
          time: '6:00 PM - 9:00 PM', 
          title: 'Gala Dinner & Awards Ceremony', 
          track: 'General',
          location: 'Grand Ballroom',
          description: 'Formal dinner celebrating excellence in cultural resilience work. Awards presentation, keynote address, and entertainment.',
        },
      ],
    },
    {
      day: 'Day 3 - November 8, 2026',
      title: 'Action & Future Pathways',
      sessions: [
        { 
          time: '9:00 AM - 10:30 AM', 
          title: 'Keynote: Youth Leadership & Cultural Futures', 
          track: 'Resilience',
          location: 'Main Auditorium',
          speakers: 'Youth Panel Leaders',
          description: 'Young cultural leaders share their vision for the future. How the next generation is reimagining cultural resilience for a changing world.',
        },
        { 
          time: '10:30 AM - 11:00 AM', 
          title: 'Morning Tea', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '11:00 AM - 12:30 PM', 
          title: 'Panel: Turning Vulnerability into Opportunity', 
          track: 'Resilience',
          location: 'Main Auditorium',
          speakers: 'Prof. James Whitehorse, Maria Santos, Dr. Emma Wilson',
          description: 'How communities are transforming challenges into catalysts for positive change. Stories of resilience, innovation, and empowerment.',
        },
        { 
          time: '12:30 PM - 1:30 PM', 
          title: 'Networking Lunch', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '1:30 PM - 3:00 PM', 
          title: 'Action Planning Sessions', 
          track: 'Resilience',
          location: 'Multiple Rooms',
          description: 'Collaborative sessions to develop concrete action plans, partnerships, and commitments for post-conference implementation.',
        },
        { 
          time: '3:00 PM - 3:30 PM', 
          title: 'Afternoon Tea', 
          track: 'General',
          location: 'Exhibition Hall',
        },
        { 
          time: '3:30 PM - 5:00 PM', 
          title: 'Closing Ceremony & Call to Action', 
          track: 'General',
          location: 'Main Auditorium',
          description: 'Conference summary, key takeaways, and collective commitment to action. Closing remarks and traditional farewell ceremony.',
        },
      ],
    },
  ];

  const sponsorshipTiers = [
    {
      tier: 'Platinum Partner',
      price: '$50,000+',
      color: 'from-gray-400 to-gray-600',
      highlight: false,
      benefits: [
        'Premier branding on all conference materials',
        'Keynote speaking opportunity',
        '10 complimentary delegate passes',
        'Exhibition booth (premium location)',
        'Logo on conference website & app',
        'Recognition in all media releases',
        'VIP access to all social events',
        'Post-conference delegate list',
      ],
    },
    {
      tier: 'Gold Partner',
      price: '$25,000+',
      color: 'from-accent to-yellow-600',
      highlight: true,
      benefits: [
        'Prominent branding on conference materials',
        'Panel participation opportunity',
        '6 complimentary delegate passes',
        'Exhibition booth (standard location)',
        'Logo on conference website',
        'Recognition at opening ceremony',
        'Access to networking events',
      ],
    },
    {
      tier: 'Silver Partner',
      price: '$10,000+',
      color: 'from-gray-300 to-gray-400',
      highlight: false,
      benefits: [
        'Branding on selected materials',
        '3 complimentary delegate passes',
        'Logo on conference website',
        'Recognition in program',
        'Access to main networking events',
      ],
    },
    {
      tier: 'Bronze Partner',
      price: '$5,000+',
      color: 'from-orange-400 to-orange-600',
      highlight: false,
      benefits: [
        'Logo on conference website',
        '2 complimentary delegate passes',
        'Recognition in program',
        'Access to selected events',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`CROP 2026 Conference ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay - Reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/70 via-[#0A2540]/60 to-[#0A2540]/70"></div>

        {/* Top Official Website Button */}
        <div className="absolute top-28 right-8 z-20">
          <a
            href="https://crop2026.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#0A2540] font-semibold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-external-link-line"></i>
            Official Conference Website
          </a>
        </div>

        {/* Main Content - Reduced spacing */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="text-center text-white space-y-2 mb-6">
              {/* Subtitle */}
              <div className="text-accent text-base sm:text-lg font-serif italic">
                Cultural Resilience, One Planet
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                CROP Conference<br />
                <span className="text-accent">2026</span>
              </h1>

              {/* Date */}
              <div className="text-lg sm:text-xl font-semibold text-white/90">
                November 6th - 8th, 2026
              </div>

              {/* Venue */}
              <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-white/80">
                <i className="ri-map-pin-line text-accent"></i>
                <span>The Dome, 1 Showground Rd, Sydney Olympic Park NSW 2127</span>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="h-px w-16 bg-accent"></div>
                <i className="ri-global-line text-accent text-2xl"></i>
                <div className="h-px w-16 bg-accent"></div>
              </div>

              {/* Conference Question */}
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed text-white/95">
                  "How can cultural resilience shape a sustainable future for our shared planet?"
                </p>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto pt-1">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                  Join <strong className="text-accent">800+ international</strong> Indigenous and cultural leaders, policymakers, academics, private sector innovators, and youth changemakers in shaping the future of cultural resilience, care transformation, and planetary sustainability.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://crop2026.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#D4AF37] text-[#0A2540] font-bold text-lg rounded-full hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-user-add-line text-xl"></i>
                Register Now
              </a>
              <a
                href="https://crop2026.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-hand-heart-line text-xl"></i>
                Partner With Us
              </a>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center">
              <div className="inline-block bg-white/5 backdrop-blur-lg rounded-2xl px-8 sm:px-12 py-5 border border-white/10 shadow-2xl">
                <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 text-accent font-bold text-center">Conference Begins In</p>
                <div className="grid grid-cols-4 gap-4 sm:gap-8">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">{timeLeft.days}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">{timeLeft.hours}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">{timeLeft.minutes}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">{timeLeft.seconds}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <i className="ri-arrow-down-line text-white/60 text-2xl"></i>
          </div>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Conference Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 font-['Playfair_Display']">
              About CROP 2026
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Cultural Resilience, One Planet (CROP) Conference 2026 brings together global leaders 
              to address the intersection of cultural preservation, healthcare transformation, and environmental sustainability.
            </p>
          </div>

          {/* Center Official Website Button */}
          <div className="text-center mb-16">
            <a
              href="https://crop2026.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#D4AF37] text-[#0A2540] font-bold text-lg rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-global-line text-2xl"></i>
              Visit Official Conference Website
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>

          {/* Conference Themes */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Conference Themes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Four interconnected tracks exploring the future of cultural resilience
            </p>
          </div>

          {/* Theme Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4">
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer text-sm sm:text-base ${
                  activeTab === index
                    ? 'bg-accent text-primary shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {theme.title}
              </button>
            ))}
          </div>

          {/* Theme Content */}
          {themes.map((theme, index) => (
            <div
              key={index}
              className={activeTab === index ? 'block' : 'hidden'}
            >
              <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">{theme.title}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">{theme.description}</p>

                {/* Featured Speakers */}
                <div className="mb-8">
                  <h4 className="text-lg sm:text-xl font-bold text-primary mb-6">Featured Speakers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {theme.speakers.map((speaker, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top flex-shrink-0"
                        />
                        <div>
                          <div className="font-bold text-primary text-sm sm:text-base">{speaker.name}</div>
                          <div className="text-xs sm:text-sm text-gray-600">{speaker.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Session Highlights */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-primary mb-4">Session Highlights</h4>
                  <ul className="space-y-2">
                    {theme.sessions.map((session, i) => (
                      <li key={i} className="flex items-start text-gray-700 text-sm sm:text-base">
                        <i className="ri-calendar-line text-accent mr-3 mt-1 flex-shrink-0"></i>
                        <span>{session}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6 font-['Playfair_Display']">
              Conference Agenda
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Three days of inspiring sessions, workshops, and networking
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {agenda.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">{day.day}</h3>
                <div className="space-y-4">
                  {day.sessions.map((session, sessionIndex) => {
                    const globalIndex = dayIndex * 100 + sessionIndex;
                    const trackColors: { [key: string]: string } = {
                      Cultural: 'border-orange-500 bg-orange-50',
                      Health: 'border-teal bg-teal/5',
                      Trade: 'border-green-600 bg-green-50',
                      Resilience: 'border-primary bg-blue-50',
                      General: 'border-gray-400 bg-gray-50',
                    };
                    return (
                      <div
                        key={sessionIndex}
                        className={`border-l-4 ${trackColors[session.track]} p-4 sm:p-6 rounded-r-xl hover:shadow-lg transition-shadow`}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
                              <span className="text-accent font-bold text-base sm:text-lg">{session.time}</span>
                              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-700">
                                {session.track}
                              </span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">{session.title}</h4>
                            {session.speakers && (
                              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                                <i className="ri-user-line mr-2"></i>
                                {session.speakers}
                              </p>
                            )}
                            <p className="text-gray-600 text-sm sm:text-base">
                              <i className="ri-map-pin-line mr-2"></i>
                              {session.location}
                            </p>
                            {session.description && expandedSession === globalIndex && (
                              <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base">
                                {session.description}
                              </p>
                            )}
                          </div>
                          {session.description && (
                            <button
                              onClick={() => setExpandedSession(expandedSession === globalIndex ? null : globalIndex)}
                              className="mt-4 md:mt-0 md:ml-4 text-accent hover:text-accent-dark font-semibold whitespace-nowrap cursor-pointer text-sm sm:text-base"
                            >
                              {expandedSession === globalIndex ? 'Show Less' : 'Learn More'}
                              <i className={`ml-2 ${expandedSession === globalIndex ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`}></i>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 font-['Playfair_Display']">
              Sponsorship Opportunities
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 px-4 max-w-3xl mx-auto">
              Partner with us to amplify your impact and reach global audiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tier.highlight ? 'ring-4 ring-accent transform lg:scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${tier.color} p-6 sm:p-8 text-white`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl sm:text-4xl font-bold">{tier.price}</div>
                </div>
                <div className="p-6 sm:p-8">
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <i className="ri-check-line text-teal text-lg mr-2 mt-0.5 flex-shrink-0"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      tier.highlight
                        ? 'bg-accent hover:bg-accent-dark text-primary'
                        : 'bg-primary hover:bg-primary-light text-white'
                    }`}
                  >
                    Secure This Tier
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Single CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Playfair_Display']">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Join us in Sydney for three transformative days of learning, collaboration, and action 
            towards a culturally resilient and sustainable future.
          </p>
          
          {/* Single CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://crop2026.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A2540] font-bold rounded-lg hover:bg-[#C4A137] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-ticket-line text-xl"></i>
              Register for CROP 2026
            </a>
            <a
              href="https://crop2026.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-information-line text-xl"></i>
              Learn More at crop2026.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}