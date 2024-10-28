import styles from "./ingredient-item-group.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import { ingredientItemPropType } from "../../../types/prop-types";

const IngredientItemGroup = ({ groupName, ingredients }) => {
  return (
    <div className={styles.group}>
      <div className={styles.groupName}>{groupName}</div>
      <div className={styles.list}>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <IngredientItem item={ingredient} />
          </div>
        ))}
      </div>
    </div>
  );
};

IngredientItemGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientItemPropType).isRequired,
};

export default IngredientItemGroup;
