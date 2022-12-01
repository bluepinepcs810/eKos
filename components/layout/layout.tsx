import { PropsWithChildren } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
