import type { AppProps } from 'next/app'
import { GameCollectionProvider } from '../src/app/gameCollection/controller/gameCollectionController'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameCollectionProvider>
      <Component {...pageProps} />
    </GameCollectionProvider>
  );

}

export default MyApp
