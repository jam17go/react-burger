import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../../services/hooks";
import { getItemCount } from "../../../services/burger-constructor/selectors";
import { useDrag } from "react-dnd";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../services/store";

type ingredientItemProp = {
  _id: string;
  name: string;
  image: string;
  price: number;
};

type TIngredientItemProp = {
  item: ingredientItemProp;
};

const IngredientItem = ({ item }: TIngredientItemProp): JSX.Element => {
  const itemCount = useSelector((state: RootState) => getItemCount(state, item));
  const location = useLocation();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: item,
  });

  return (
    <div ref={dragRef}>
      <NavLink
        data-testid='ingredient-item'
        to={`/ingredients/${item._id}`}
        state={{ backgroundLocation: location }}
        className={styles.ingredientItem}
      >
        {itemCount > 0 && <Counter count={itemCount} />}

        <img src={item.image} alt={item.name} />

        <div className={styles.price}>
          <div>{item.price}&nbsp;</div>
          <CurrencyIcon type="primary"/>
        </div>

        <div className={styles.name}>{item.name}</div>
      </NavLink>
    </div>
  );
};

export default IngredientItem;
