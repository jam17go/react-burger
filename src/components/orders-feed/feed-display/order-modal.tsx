import ModalWindow from "../../modal-window/modal-window";
import { useDispatch } from "../../../services/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Order } from "./order";
import { useParams } from "react-router";

export const OrderModal = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const onCloseHandler = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
      <ModalWindow isOpen={isModalOpen} onClose={onCloseHandler}>
        <Order />
      </ModalWindow>
  );
};
