import styles from './ingredient-selected.module.css';

const IngredientSelected = ({item}) => {
  return (
    <>
      <li key={item._id} className={styles.ingredientItem}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </li>
    </>
  );
};

export default IngredientSelected;
