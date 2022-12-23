import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/layout';
import store from '../store';
import 'toastr/build/toastr.min.css';
import { StoreProvider } from 'easy-peasy';

import 'react-tagsinput/react-tagsinput.css';
import '../styles/globals.css';
import '../styles/common.scss';
import { ConnectionProvider } from '@solana/wallet-adapter-react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_RPC_URL!}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ConnectionProvider>
    </StoreProvider>
  );
}
