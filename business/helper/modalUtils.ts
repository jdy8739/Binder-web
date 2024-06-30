import { AddModalType } from '/components/common/modal/Modal';

import modalController from '../class/ModalController';

import { freezeWindowScroll, releaseWindowScroll } from './domUtils';

const addModal: AddModalType = (modal) => {
  modalController.addModal(modal);

  freezeWindowScroll();
};

const resetModal = () => {
  modalController.resetModal();

  releaseWindowScroll();
};

const popModal = () => {
  modalController.popModal();

  const modalLength = modalController.getModalListLength();

  if (modalLength <= 1) {
    releaseWindowScroll();
  }
};

export { addModal, resetModal, popModal };
