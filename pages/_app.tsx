import '../styles/globals.css';
import '../styles/common.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/layout';
import { Provider } from 'react-redux';
import store from '../store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </Provider>
  );
}
