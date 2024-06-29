import { ModalType } from '/components/common/modal/Modal';

class ModalController {
  public addModal: (modal: ModalType) => void;

  public resetModal: () => void;

  public popModal: () => void;

  public initializeMethods({
    addModal,
    resetModal,
    popModal,
  }: {
    addModal: (modal: ModalType) => void;
    resetModal: () => void;
    popModal: () => void;
  }) {
    this.addModal = addModal;
    this.resetModal = resetModal;
    this.popModal = popModal;
  }
}

const modalController = new ModalController();

export default modalController;
