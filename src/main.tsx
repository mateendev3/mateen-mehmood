import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/manrope/wght.css';
import './styles/index.css';
import App from './App';
import { ThemeProvider } from './hooks/useTheme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <ThemeProvider>
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            <App />
          </MotionConfig>
        </LazyMotion>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
