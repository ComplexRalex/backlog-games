import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );

}

export default MyApp
