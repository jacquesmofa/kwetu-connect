
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import './i18n';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
