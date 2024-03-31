import './globals.css';

import Footer from '../components/common/footer/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
