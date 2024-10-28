import styles from "./ingredient-property.module.css";
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

export default IngredientProperty;
