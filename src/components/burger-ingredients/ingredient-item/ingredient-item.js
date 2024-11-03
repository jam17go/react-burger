import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ModalWindow from "../../modal-window/modal-window";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { ingredientItemPropType } from "../../../types/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../../../services/burger-constructor/actions";
import { getItemCount } from "../../../services/burger-constructor/selectors";

const IngredientItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemCount = useSelector((state) => getItemCount(state, item));
  const dispatch = useDispatch();

  const handleAddIngredient = () => {
    dispatch(addIngredient(item));
  };

  return (
    <div>
      <button onClick={handleAddIngredient}>Add</button>

      <div
        className={styles.ingredientItem}
        onClick={() => setIsModalOpen(true)}
      >
        {itemCount > 0 && <Counter count={itemCount} />}

        <img src={item.image} alt={item.name} />

        <div className={styles.price}>
          <div>{item.price}&nbsp;</div>
          <CurrencyIcon />
        </div>

        <div className={styles.name}>{item.name}</div>
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <IngredientDetails item={item} />
      </ModalWindow>
    </div>
  );
};

IngredientItem.propTypes = {
  item: ingredientItemPropType,
};

export default IngredientItem;
