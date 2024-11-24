import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ModalWindow from "../../modal-window/modal-window";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { ingredientItemPropType } from "../../../types/prop-types";
import { useSelector } from "react-redux";
import { getItemCount } from "../../../services/burger-constructor/selectors";
import { useDrag } from "react-dnd";
import { setCurrentIngredient } from "../../../services/ingredient-details/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const IngredientItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemCount = useSelector((state) => getItemCount(state, item));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: item,
  });

  const onClickHandler = () => {
    setIsModalOpen(true);

    dispatch(setCurrentIngredient(item));
  };

  const onCloseHandler = () => {
    setIsModalOpen(false);
    dispatch(setCurrentIngredient(null));
    navigate(-1);
  };

  return (
    <div ref={dragRef}>
      <NavLink
        to={`/ingredients/${item._id}`}
        state={{ backgroundLocation: location }}
        onClick={onClickHandler}
        className={styles.ingredientItem}
      >
        {itemCount > 0 && <Counter count={itemCount} />}

        <img src={item.image} alt={item.name} />

        <div className={styles.price}>
          <div>{item.price}&nbsp;</div>
          <CurrencyIcon />
        </div>

        <div className={styles.name}>{item.name}</div>
      </NavLink>

      <ModalWindow isOpen={isModalOpen} onClose={onCloseHandler}>
        <IngredientDetails item={item} />
      </ModalWindow>
    </div>
  );
};

IngredientItem.propTypes = {
  item: ingredientItemPropType,
};

export default IngredientItem;
