'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Notifications.module.scss';
import CheckBox from '/components/atoms/check-box/CheckBox';
import { notifications } from './mock-data';
import { Read, Unread } from '/assets/svg';

const cx = classNames.bind(styles);

const Notifications = () => {
  const [viewType, setViewType] = useState('all');

  const handleCheckboxChange = (type: string) => (checked: boolean) => {
    if (checked) {
      setViewType(type);
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (viewType === 'all') return true;
    if (viewType === 'read') return notification.status === 'read';
    if (viewType === 'unread') return notification.status === 'unread';
    return false;
  });

  const unreadCount = notifications.filter(n => n.status === 'unread').length;

  return (
    <section className={cx('container')}>
      <div>읽지 않은 알림 <span className={cx('unread-count')}>{unreadCount}</span> 개</div>
      <div className={cx('mail-check-box')}>
        <div>
          <CheckBox 
            checked={viewType === 'all'} 
            handleOnClick={handleCheckboxChange('all')} 
          />
          <span>전체</span>
        </div>
        <div>
          <CheckBox 
            checked={viewType === 'read'} 
            handleOnClick={handleCheckboxChange('read')} 
          />
          <span>읽음</span>
        </div>
        <div>
          <CheckBox 
            checked={viewType === 'unread'} 
            handleOnClick={handleCheckboxChange('unread')} 
          />
          <span>읽지 않음</span>
        </div>
      </div>
      <div className={cx('notification-container')}>
        {filteredNotifications.map((notification) => (
          <div key={notification.id} className={cx('notification', {
            read: notification.status === 'read',
            unread: notification.status === 'unread'
          })}>
            <span>
              {notification.status === 'read' ? <Read /> : <Unread />}
              {notification.message}
            </span>
            <span>{notification.timestamp}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notifications;
