import {createRoot} from 'react-dom/client';
import App from './17-10-23.2.js';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <Router>
    <App />
  </Router>
);
