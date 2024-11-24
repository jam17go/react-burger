import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getIngredientGroupsData } from "../../services/burger-ingredients/selectors.js";
import IngredientDetails from "../../components/ingredient-details/ingredient-details.js";
import styles from "./ingredient.module.css";

export function Ingredient() {
  const params = useParams();
  const ingredientGroups = useSelector(getIngredientGroupsData);

  return (
    <div className={styles.container}>
      {ingredientGroups.map((group) => (
        group.ingredients.map((ingredient) => (
          ingredient._id === params.id && <IngredientDetails item={ingredient} />
        ))
      ))}
    </div>
  )
}
