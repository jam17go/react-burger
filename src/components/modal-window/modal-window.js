import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal-window.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ModalWindow = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("modalOpen");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("modalOpen");
    }
    return () => {
      document.body.classList.remove("modalOpen");
      document.removeEventListener("keydown", handleKeyDown);
    }
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

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWindow;
