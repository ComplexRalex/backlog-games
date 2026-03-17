import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Register service worker for PWA support
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    
    // Register SW only in production
    if (process.env.NODE_ENV !== 'production') return;
    
    navigator.serviceWorker
      .register('/backlog-games/sw.js', { scope: '/backlog-games/' })
      .then((sw) => console.debug('Service worker registered successfully:', sw))
      .catch((error) => console.warn('Service worker registration failed!:', error));
  }, []);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp
