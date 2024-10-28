import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientItemGroup from "./ingredient-item-group/ingredient-item-group";
import PropTypes from "prop-types";
import { ingredientItemPropType } from "../../types/prop-types";

const BurgerIngredients = ({ ingredientGroups }) => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>Соберите бургер</div>

      <div className={styles.tabs}>
        {ingredientGroups.map((group, index) => (
          <div key={index}>
            <Tab value={group.groupName}>
              {group.groupName}
            </Tab>
          </div>
        ))}
      </div>

      <div className={styles.groups}>
        {ingredientGroups.map((group, index) => (
          <div key={index}>
            <IngredientItemGroup
              groupName={group.groupName}
              ingredients={group.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingredientGroups: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(
        ingredientItemPropType
      ).isRequired,
    })
  ),
};

export default BurgerIngredients;
