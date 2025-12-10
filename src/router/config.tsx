
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProgramsPage = lazy(() => import('../pages/programs/page'));
const Crop2026Page = lazy(() => import('../pages/crop2026/page'));
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
