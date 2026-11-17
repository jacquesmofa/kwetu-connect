import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import CropFooter from '../../../components/feature/CropFooter';

interface CropConferenceLayoutProps {
  children: React.ReactNode;
}

// Page titles, descriptions and share pictures for every CROP page live in src/content/seo.json.

const CropConferenceLayout = ({ children }: CropConferenceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <CropFooter />
    </div>
  );
};

export default CropConferenceLayout;