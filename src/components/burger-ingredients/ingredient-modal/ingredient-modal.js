import ModalWindow from "../../modal-window/modal-window";
import { ingredientItemPropType } from "../../../types/prop-types";
import { setCurrentIngredient } from "../../../services/ingredient-details/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Ingredient } from "../../ingredient/ingredient";

export const IngredientModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCloseHandler = () => {
    setIsModalOpen(false);
    dispatch(setCurrentIngredient(null));
    navigate(-1);
  };

  return (
      <ModalWindow isOpen={isModalOpen} onClose={onCloseHandler}>
        <Ingredient />
      </ModalWindow>
  );
};

IngredientModal.propTypes = {
  item: ingredientItemPropType,
};
