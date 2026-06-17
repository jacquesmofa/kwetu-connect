import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import CropFooter from '../../../components/feature/CropFooter';

interface CropConferenceLayoutProps {
  children: React.ReactNode;
}

const CROP_OG_IMAGE = 'https://res.cloudinary.com/dhjajm7ru/image/upload/v1781706372/Crop_rounded_big_zgkob2.png';
const CROP_OG_TITLE = 'CROP CONFERENCE 2026 — Cultural Resilience, One Planet | Sydney, Australia | November 6-8, 2026';
const CROP_OG_DESC = 'CROP CONFERENCE 2026 — Join 800+ global Indigenous & cultural leaders, policymakers, academics, and youth changemakers at The Dome, Sydney Showground. Three transformative days on cultural resilience, care transformation, and planetary sustainability. Co-organized by KWETU CONNECT, Thrive Tours & LDII.';
const CROP_CANONICAL = 'https://kwetuconnect.org/crop2026';

const CropConferenceLayout = ({ children }: CropConferenceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/*
        ============================================================
        CROP CONFERENCE 2026 — SHARED SEO FOR ALL CROP SUB-PAGES
        ============================================================
        These Open Graph / Twitter meta tags ensure that when ANY
        CROP 2026 page link is shared on social media (Facebook,
        Twitter/X, LinkedIn, WhatsApp, etc.), it displays beautifully
        with the CROP Conference logo and a compelling description.

        TO UPDATE THE SHARING PREVIEW:
        - Change the image: update CROP_OG_IMAGE URL above
        - Change the title: update CROP_OG_TITLE
        - Change the description: update CROP_OG_DESC
        - Change the canonical URL: update CROP_CANONICAL
        ============================================================
      */}
      <meta property="og:title" content={CROP_OG_TITLE} />
      <meta property="og:description" content={CROP_OG_DESC} />
      <meta property="og:image" content={CROP_OG_IMAGE} />
      <meta property="og:url" content={CROP_CANONICAL} />
      <meta property="og:type" content="event" />
      <meta property="og:site_name" content="CROP CONFERENCE 2026" />
      <meta property="og:locale" content="en_AU" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={CROP_OG_TITLE} />
      <meta property="twitter:description" content={CROP_OG_DESC} />
      <meta property="twitter:image" content={CROP_OG_IMAGE} />
      <meta name="theme-color" content="#0A2540" />
      <meta name="description" content={CROP_OG_DESC} />
      <meta name="keywords" content="CROP CONFERENCE, CROP 2026, Cultural Resilience One Planet, Sydney conference 2026, Sydney Showground, Indigenous conference Australia, KWETU CONNECT, Thrive Tours, LDII, cultural resilience conference" />
      <link rel="canonical" href={CROP_CANONICAL} />
      <Navbar />
      <main>{children}</main>
      <CropFooter />
    </div>
  );
};

export default CropConferenceLayout;