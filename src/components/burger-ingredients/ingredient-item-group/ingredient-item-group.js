import styles from './ingredient-item-group.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';

const IngredientItemGroup = ({groupName, ingredients}) => {
  return (
    <>
      <div className={styles.itemGroup}>
        <h3>{groupName}</h3>
        <ul className={styles.ingredientsList}>
          {ingredients.map((ingredient) => (
              <IngredientItem item={ingredient} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default IngredientItemGroup;
