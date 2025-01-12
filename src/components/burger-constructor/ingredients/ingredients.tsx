import styles from "./ingredients.module.css";
import { useSelector } from '../../../services/hooks';
import { getSelectedIngredients } from "../../../services/burger-constructor/selectors";
import { DraggableIngredient } from "../draggable-ingredient/draggable-ingredient";

export const Ingredients = (): JSX.Element => {
  const ingredients = useSelector(getSelectedIngredients);

  return (
    <>
      {!ingredients.length && (
        <div className={styles.emptyList}>
          <div>Ингредиенты</div>
        </div>
      )}

      {ingredients.length > 0 && (
        <div className={styles.list}>
          {ingredients.map(
            // @ts-ignore
            (ingredient, index) => (
              <DraggableIngredient
                ingredient={ingredient}
                index={index}
                key={ingredient.listId}
              />
            )
          )}
        </div>
      )}
    </>
  );
};
