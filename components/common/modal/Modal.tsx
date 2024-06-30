/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';

import modalController from '/business/class/ModalController';

import style from './Modal.module.scss';

const cx = classNames.bind(style);

type PropsOf<T> = T extends FunctionComponent<infer P> ? P : never;

type ModalType = {
  component: FunctionComponent;
  id?: string | number;
  props?: PropsOf<FunctionComponent>;
};

type AddModalType = <T extends FunctionComponent>(modal: {
  component: T;
  id?: string | number;
  props?: PropsOf<T>;
}) => void;

const Modal = () => {
  const pathname = usePathname();

  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const [modalList, setModalList] = useState<ModalType[]>([]);

  const getModalListLength = useCallback(() => modalList.length, [modalList]);

  const addModal: AddModalType = useCallback((modal) => {
    setModalList((current) => {
      if (current.some((currentModal) => currentModal.id === modal.id)) {
        return current;
      }

      if (!modal.id) {
        return [...current, { ...modal, id: Math.random() }];
      }

      return [...current, modal];
    });
  }, []);

  const popModal = useCallback(() => {
    setModalList((current) => {
      const toBe = [...current];
      toBe.pop();
      return toBe;
    });
  }, []);

  const resetModal = useCallback(() => {
    setModalList([]);
  }, []);

  useEffect(() => {
    modalController.initializeMethods({
      addModal,
      resetModal,
      popModal,
      getModalListLength,
    });
  }, [addModal, popModal, resetModal, getModalListLength]);

  useEffect(() => {
    resetModal();
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
              ...(modal.props || {}),
            });
          })}
        </aside>
      ) : null}
    </>
  );
};

export default Modal;
export type { ModalType, AddModalType };
