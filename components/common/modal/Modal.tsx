/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';
import { AddModalType, ModalType } from '../modal';

import { closeModal, initializeMethods } from '/business/helper/modalUtils';
import { releaseWindowScroll } from '/business/helper/domUtils';

import style from './Modal.module.scss';

const cx = classNames.bind(style);

const Modal = () => {
  const pathname = usePathname();

  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const [modalList, setModalList] = useState<ModalType[]>([]);

  const getModalListLength = useCallback(() => modalList.length, [modalList]);

  const popModal = useCallback(() => {
    setModalList((current) => {
      const toBe = [...current];
      toBe.pop();
      return toBe;
    });
  }, []);

  const addModal: AddModalType = useCallback((modal) => {
    return new Promise((resolve) => {
      setModalList((current) => {
        if (current.some((currentModal) => currentModal.id === modal.id)) {
          return current;
        }

        const modalTerminators = {
          resolveModal: (result: unknown) => {
            resolve(result);
            closeModal();
          },

          closeModal: () => {
            closeModal();
          },
        };

        if (!modal.id) {
          return [
            ...current,
            { ...modal, id: Math.random(), ...modalTerminators },
          ];
        }

        return [...current, { ...modal, ...modalTerminators }];
      });
    });
  }, []);

  const resetModal = useCallback(() => {
    setModalList([]);
  }, []);

  useEffect(() => {
    initializeMethods({
      addModal,
      resetModal,
      popModal,
      getModalListLength,
    });
  }, [addModal, popModal, resetModal, getModalListLength]);

  useEffect(() => {
    resetModal();

    releaseWindowScroll();
  }, [pathname, resetModal]);

  useLayoutEffect(() => {
    if (modalList.length === 1 && modalWrapperRef.current) {
      modalWrapperRef.current.style.marginTop = `${document.documentElement.scrollTop}px`;
    }
  }, [modalList]);

  return (
    <>
      {modalList.length ? (
        <aside ref={modalWrapperRef} className={cx('modal-wrapper')}>
          {modalList.map((modal) => {
            return React.createElement(modal.component, {
              key: modal.id,
              ...modal,
            });
          })}
        </aside>
      ) : null}
    </>
  );
};

export default Modal;
