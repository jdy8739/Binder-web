import { AddModalType, ModalType } from '/components/common/modal/Modal';

class ModalController {
  public addModal: AddModalType;

  public resetModal: () => void;

  public popModal: () => void;

  public getModalListLength: () => number;

  public initializeMethods({
    addModal,
    resetModal,
    popModal,
    getModalListLength,
  }: {
    addModal: (modal: ModalType) => void;
    resetModal: () => void;
    popModal: () => void;
    getModalListLength: () => number;
  }) {
    this.addModal = addModal;
    this.resetModal = resetModal;
    this.popModal = popModal;
    this.getModalListLength = getModalListLength;
  }
}

const modalController = new ModalController();

export default modalController;
