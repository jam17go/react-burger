import styles from './ingredient-selected.module.css';

const IngredientSelected = ({item}) => {
  return (
    <>
      <div key={item._id} className={styles.ingredientItem}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </>
  );
};

export default IngredientSelected;
