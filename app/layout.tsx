import './globals.css';

import NavBar from '/components/common/navbar/NavBar';
import Footer from '../components/common/footer/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
