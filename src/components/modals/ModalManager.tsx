import { useAppDispatch, useAppSelector } from "@store";
import { closeModal } from "@store/modalSlice";
import { createPortal } from "react-dom";
import ExampleModal from "./ExampleModal";
import ConfirmModal from "./ConfirmModal";
import LoginRegisterModal from "./LoginRegisterModal";
import ConfirmLogoutModal from "./ConfirmLogoutModal";

import styles from "./ModalManager.module.scss";
import { MODAL_TYPES } from "types/modal";
import SetCounterModal from "./SetCounterModal";

const MODAL_COMPONENTS: Record<MODAL_TYPES, React.FC<any>> = {
  example: ExampleModal,
  confirm: ConfirmModal,
  auth: LoginRegisterModal,
  logout: ConfirmLogoutModal,
  setCounter: SetCounterModal,
};

const ModalManager = () => {
  const { isOpen, modalType, modalProps } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();

  if (!isOpen || !modalType) return null;

  const ModalComponent = MODAL_COMPONENTS[modalType];

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (
      !modalProps?.disableBackdropClick &&
      event.target === event.currentTarget
    ) {
      dispatch(closeModal());
    }
  };

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <ModalComponent
          {...modalProps}
          onClose={() => dispatch(closeModal())}
        />
      </div>
    </div>,
    modalRoot
  );
};

export default ModalManager;
