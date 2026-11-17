import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import FounderProfile from '../../../components/feature/FounderProfile';
import founder from '../../../content/founder.json';

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <header className="bg-primary text-white pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 flex items-center gap-2">
            <Link to="/" className="hover:text-accent">Home</Link>
            <i className="ri-arrow-right-s-line" aria-hidden="true" />
            <Link to="/about" className="hover:text-accent">About</Link>
            <i className="ri-arrow-right-s-line" aria-hidden="true" />
            <span className="text-white" aria-current="page">{founder.shortName}</span>
          </nav>
          <p className="mt-8 text-accent text-sm font-semibold uppercase tracking-[0.2em]">Leadership profile</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] max-w-3xl leading-tight">
            Building bridges between cultures, communities and institutions
          </h1>
          <div className="mt-6 h-1 w-24 bg-accent" />
        </div>
      </header>

      <main className="py-14 sm:py-20">
        <div className="container-custom">
          <FounderProfile />
        </div>
      </main>

      <Footer />
    </div>
  );
}
