import styles from "./ingredient-selected.module.css";
import PropTypes from "prop-types";

const IngredientSelected = ({ item }) => {
  return (
    <div className={styles.item}>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
};

IngredientSelected.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default IngredientSelected;
