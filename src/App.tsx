import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppRoutes } from './router';
import CustomCursor from './components/base/CustomCursor';
import SeoSync from './components/feature/SeoSync';
import './i18n';

const KWETU_FAVICON = 'https://res.cloudinary.com/dhjajm7ru/image/upload/v1780004656/Kwetu_connect_Logo_-_best_size_for_favicon_ilrvqn.jpg';
const CROP_FAVICON = 'https://res.cloudinary.com/dzppzxpad/image/upload/q_auto/f_auto/v1780502472/Artboard_3_copy_2_2x_nxsxcz.png';

function FaviconUpdater() {
  const location = useLocation();
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    const isCrop = location.pathname.startsWith('/crop2026');
    const newHref = isCrop ? CROP_FAVICON : KWETU_FAVICON;
    if (link) {
      link.href = newHref;
      link.type = isCrop ? 'image/png' : 'image/jpeg';
    }
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <SeoSync />
      <FaviconUpdater />
      <CustomCursor />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;