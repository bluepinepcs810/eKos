import { PropsWithChildren } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from '../providers/AuthProvider';
import Web3Provider from '../providers/Web3Provider';
import CoingeckoProvider from '../providers/CoingeckoProvider';
import BottomTap from '../common/BottomTap';

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="page-layout pb-[75px] lg:pb-0">
      <Web3Provider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CoingeckoProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <BottomTap />
            </CoingeckoProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Web3Provider>
    </div>
  );
};
export default PageLayout;
