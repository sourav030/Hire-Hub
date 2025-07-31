import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Context/Context.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider> {/* ✅ Wrap here */}
        <App />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
