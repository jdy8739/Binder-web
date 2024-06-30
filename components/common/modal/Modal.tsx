'use client';

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

import modalController from '/business/class/ModalController';

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

  return (
    <>
      {modalList.map((modal) => {
        return React.createElement(modal.component, {
          key: modal.id,
          ...(modal.props || {}),
        });
      })}
    </>
  );
};

export default Modal;
export type { ModalType, AddModalType };
