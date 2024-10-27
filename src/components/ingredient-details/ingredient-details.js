import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";

const IngredientProperty = ({ name, value }) => {
  return (
    <div>
      <div className={styles.propertyName}>{name}</div>
      <div className={styles.propertyValue}>{value}</div>
    </div>
  );
};

IngredientProperty.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const IngredientDetails = ({ item }) => {
  return (
    <div>
      <div className={styles.header}>Детали ингредиента</div>
      <img src={item.image_large} />
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

IngredientDetails.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientDetails;
