import { AddModalType } from '/components/common/modal';

class ModalController {
  public addModal: AddModalType;

  public resetModal: () => void;

  public popModal: () => void;

  public getModalListLength: () => number;

  private closeFunctionList: Array<() => void> = [];

  public pushCloseFunction = (callback: () => void) => {
    this.closeFunctionList.push(callback);
  };

  public closeModal = () => {
    const closeFunction = this.closeFunctionList.pop();

    closeFunction?.();
  };

  public initializeMethods({
    addModal,
    resetModal,
    popModal,
    getModalListLength,
  }: {
    addModal: AddModalType;
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
