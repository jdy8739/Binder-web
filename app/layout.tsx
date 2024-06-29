import './globals.css';

import classNames from 'classnames/bind';

import Modal from '/components/common/modal/Modal';
import NavBar from '/components/common/navbar/NavBar';
import Footer from '../components/common/footer/Footer';

import style from './Main.module.scss';

const cx = classNames.bind(style);

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cx('body')}>
        <NavBar />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
};

export default RootLayout;
