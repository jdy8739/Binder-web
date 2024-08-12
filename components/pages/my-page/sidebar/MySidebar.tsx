import { ReactNode } from 'react';
import { SideBarMenuType } from '/app/(auth)/auth/[username]/page';

import classNames from 'classnames/bind';

import styles from './MySidebar.module.scss';

const cx = classNames.bind(styles);

const SideBarItem = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: ReactNode;
  onClick: () => void;
}) => (
  <button type="button" onClick={onClick} className={className}>
    <li>{children}</li>
  </button>
);

type Props = {
  sideBarMenu: SideBarMenuType;
  setMenu: (menu: SideBarMenuType) => void;
};

const MySidebar = ({ sideBarMenu, setMenu }: Props) => {
  return (
    <aside className={cx('sidebar')}>
      <ul>
        <SideBarItem
          className={cx({ selected: sideBarMenu === 'home' })}
          onClick={() => setMenu('home')}
        >
          MY 홈
        </SideBarItem>
        <SideBarItem
          className={cx({ selected: sideBarMenu === 'contents' })}
          onClick={() => setMenu('contents')}
        >
          나의 콘텐츠
        </SideBarItem>
        <SideBarItem
          className={cx({ selected: sideBarMenu === 'scrap-likes' })}
          onClick={() => setMenu('scrap-likes')}
        >
          스크랩/좋아요
        </SideBarItem>
        <SideBarItem
          className={cx({ selected: sideBarMenu === 'profile-edit' })}
          onClick={() => setMenu('profile-edit')}
        >
          개인정보 수정
        </SideBarItem>
        <SideBarItem
          className={cx({ selected: sideBarMenu === 'notifications' })}
          onClick={() => setMenu('notifications')}
        >
          나의 알림
        </SideBarItem>
      </ul>
    </aside>
  );
};

export default MySidebar;
