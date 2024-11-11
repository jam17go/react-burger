import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import IngredientProperty from "./ingredient-property/ingredient-property";

const IngredientDetails = ({ item }) => {
  return (
    <div>
      <div className={styles.header}>Детали ингредиента</div>
      <img src={item.image_large} alt={item.name} />
      <div className={styles.header}>{item.name}</div>
      <div className={styles.properties}>
        <IngredientProperty name="Калории, ккал" value={item.calories} />
        <IngredientProperty name="Белки, г" value={item.proteins} />
        <IngredientProperty name="Жиры, г" value={item.fat} />
        <IngredientProperty name="Углеводы, г" value={item.carbohydrates} />
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {};

export default IngredientDetails;
