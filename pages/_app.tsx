import '../styles/globals.css';
import '../styles/common.scss';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/layout';
import store from '../store';
import 'toastr/build/toastr.min.css';
import { StoreProvider } from 'easy-peasy';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </StoreProvider>
  );
}
