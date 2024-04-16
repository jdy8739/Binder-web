import './globals.css';

import classNames from 'classnames/bind';

import NavBar from '/components/common/navbar/NavBar';
import Footer from '../components/common/footer/Footer';

import style from './main.module.scss';

const cx = classNames.bind(style);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cx('body')}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
