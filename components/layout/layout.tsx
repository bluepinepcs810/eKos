import { PropsWithChildren, useMemo } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from '../providers/AuthProvider';
import Web3Provider from '../providers/Web3Provider';

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="page-layout">
      <Web3Provider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </QueryClientProvider>
      </Web3Provider>
    </div>
  );
};
export default PageLayout;
