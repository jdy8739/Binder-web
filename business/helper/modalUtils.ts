import { ModalType } from '/components/common/modal/Modal';

import modalController from '../class/ModalController';

import { freezeWindowScroll } from './domUtils';

const addModal = (modal: ModalType) => {
  modalController.addModal(modal);
  freezeWindowScroll();
};

const resetModal = () => {
  modalController.resetModal();
};

const popModal = () => {
  modalController.popModal();
};

export { addModal, resetModal, popModal };
