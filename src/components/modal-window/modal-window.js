import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal-window.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ModalWindow = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modalOpen");
    } else {
      document.body.classList.remove("modalOpen");
    }
    return () => document.body.classList.remove("modalOpen");
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div onClick={onClose} className={styles.closeButton}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalWindow;
