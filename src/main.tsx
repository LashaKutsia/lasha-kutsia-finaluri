import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from './App';

import './i18n/i18n';
import './scss/main.scss';
import './index.scss';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <ThemeProvider>
              <Router>
                  <App />
              </Router>
          </ThemeProvider>
      </Provider>
  </StrictMode>,
)
