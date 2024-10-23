import styles from './ingredient-item.module.css';
import {
  ConstructorElement, 
  Button,
  CurrencyIcon,
  DragIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientItem = ({item}) => {
  return (
    <>
      <div key={item._id} className={styles.ingredientItem}>
        <Counter count={1} size="default" extraClass="m-1" />  
        <img src={item.image} alt={item.name} />
        <p className={`${styles.items__component__price} text text_type_digits-default`}>
            <span className={styles.items__component__price_digits}>{item.price}&nbsp;</span>
            <CurrencyIcon />
        </p>
        <p className={`${styles.items__component__name} mt-1 text text_type_main_small`}>
              {item.name}
        </p>
      </div>
    </>
  );
};

export default IngredientItem;
