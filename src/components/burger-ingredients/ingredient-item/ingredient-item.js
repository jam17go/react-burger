import styles from './ingredient-item.module.css';
import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientItem = ({item}) => {
  return (
    <>
      <div key={item._id} className={styles.ingredientItem}>

        <Counter count={1} size="default" extraClass="m-1" />
        
        <img src={item.image} alt={item.name} />
        
        <div className={styles.price}>
            <div>{item.price}&nbsp;</div>
            <CurrencyIcon />
        </div>
        
        <div className={styles.itemName}>
              {item.name}
        </div>
    
      </div>
    </>
  );
};

export default IngredientItem;
