'use client';

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';

import modalController from '/business/class/ModalController';

type ModalType = {
  component: FunctionComponent;
  id?: string | number;
  // props:
};

const Modal = () => {
  const pathname = usePathname();

  const [modalList, setModalList] = useState<ModalType[]>([]);

  const addModal = useCallback((modal: ModalType) => {
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
      const tobe = [...current];
      tobe.pop();
      return tobe;
    });
  }, []);

  const resetModal = useCallback(() => {
    setModalList([]);
  }, []);

  useEffect(() => {
    modalController.initializeMethods({ addModal, resetModal, popModal });
  }, [addModal, popModal, resetModal]);

  useEffect(() => {
    resetModal();
  }, [pathname, resetModal]);

  return (
    <>
      {modalList.map((modal) => {
        return React.createElement(modal.component, { key: modal.id });
      })}
    </>
  );
};

export default Modal;
export type { ModalType };
