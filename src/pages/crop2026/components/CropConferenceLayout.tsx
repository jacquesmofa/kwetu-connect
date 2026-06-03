import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import CropFooter from '../../../components/feature/CropFooter';

interface CropConferenceLayoutProps {
  children: React.ReactNode;
}

const CROP_OG_IMAGE = 'https://res.cloudinary.com/dzppzxpad/image/upload/w_1200,q_auto,f_auto/v1780502472/Artboard_3_copy_2_2x_nxsxcz.png';

const CropConferenceLayout = ({ children }: CropConferenceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* CROP 2026 SEO — applied to all CROP sub-pages via this shared layout */}
      <meta property="og:image" content={CROP_OG_IMAGE} />
      <meta property="og:type" content="event" />
      <meta property="twitter:image" content={CROP_OG_IMAGE} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#0A2540" />
      <Navbar />
      <main>{children}</main>
      <CropFooter />
    </div>
  );
};

export default CropConferenceLayout;