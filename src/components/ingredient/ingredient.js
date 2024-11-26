import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getIngredientGroupsData } from "../../services/burger-ingredients/selectors.js";
import IngredientDetails from "../../components/ingredient-details/ingredient-details.js";
import styles from "./ingredient.module.css";

export function Ingredient() {
  const { id } = useParams();
  const ingredientGroups = useSelector(getIngredientGroupsData);

  const selectedIngredient = ingredientGroups
    .flatMap((group) => group.ingredients)
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
