import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import CropFooter from '../../../components/feature/CropFooter';

interface CropConferenceLayoutProps {
  children: React.ReactNode;
}

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