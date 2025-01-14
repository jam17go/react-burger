import { useParams } from "react-router";
import { useSelector } from "../../services/hooks";
import { getIngredientGroupsData } from "../../services/burger-ingredients/selectors";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from "./ingredient.module.css";

export function Ingredient(): JSX.Element {
  const { id } = useParams();
  const ingredientGroups = useSelector(getIngredientGroupsData);
  const selectedIngredient = ingredientGroups
    // @ts-ignore
    .flatMap((group) => group.ingredients)
    // @ts-ignore
    .find((ingredient) => ingredient._id === id);

  return (
    <div className={styles.container}>
      {selectedIngredient ? (
        <IngredientDetails item={selectedIngredient} />
      ) : (
        <p>Ingredient not found.</p>
      )}
    </div>
  );
}
