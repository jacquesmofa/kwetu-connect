
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProgramsPage = lazy(() => import('../pages/programs/page'));
const Crop2026Page = lazy(() => import('../pages/crop2026/page'));
const Crop2026VisionPage = lazy(() => import('../pages/crop2026/vision/page'));
const Crop2026PillarsPage = lazy(() => import('../pages/crop2026/pillars/page'));
const Crop2026ProgrammePage = lazy(() => import('../pages/crop2026/programme/page'));
const Crop2026OutcomesPage = lazy(() => import('../pages/crop2026/outcomes/page'));
const Crop2026VenuePage = lazy(() => import('../pages/crop2026/venue/page'));
const Crop2026PartnershipPage = lazy(() => import('../pages/crop2026/partnership/page'));
const Crop2026RegisterPage = lazy(() => import('../pages/crop2026/register/page'));
const Crop2026KwetuConnectPage = lazy(() => import('../pages/crop2026/kwetu-connect/page'));
const Crop2026LdiiPage = lazy(() => import('../pages/crop2026/ldii/page'));
const Crop2026ThriveToursPage = lazy(() => import('../pages/crop2026/thrive-tours/page'));
const HealthRecruitmentPage = lazy(() => import('../pages/health-recruitment/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const PrivacyPolicyPage = lazy(() => import('../pages/privacy-policy/page'));
const TermsOfServicePage = lazy(() => import('../pages/terms-of-service/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/crop2026',
    element: <Crop2026Page />,
  },
  {
    path: '/crop2026/vision',
    element: <Crop2026VisionPage />,
  },
  {
    path: '/crop2026/pillars',
    element: <Crop2026PillarsPage />,
  },
  {
    path: '/crop2026/programme',
    element: <Crop2026ProgrammePage />,
  },
  {
    path: '/crop2026/outcomes',
    element: <Crop2026OutcomesPage />,
  },
  {
    path: '/crop2026/venue',
    element: <Crop2026VenuePage />,
  },
  {
    path: '/crop2026/partnership',
    element: <Crop2026PartnershipPage />,
  },
  {
    path: '/crop2026/register',
    element: <Crop2026RegisterPage />,
  },
  {
    path: '/crop2026/kwetu-connect',
    element: <Crop2026KwetuConnectPage />,
  },
  {
    path: '/crop2026/ldii',
    element: <Crop2026LdiiPage />,
  },
  {
    path: '/crop2026/thrive-tours',
    element: <Crop2026ThriveToursPage />,
  },
  {
    path: '/health-recruitment',
    element: <HealthRecruitmentPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
