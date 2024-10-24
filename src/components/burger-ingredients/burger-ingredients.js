import styles from './burger-ingredients.module.css';
import { ingredientsData } from '../../utils/data.js';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItemGroup from './ingredient-item-group/ingredient-item-group';

const BurgerIngredients = () => {
  const buns = ingredientsData.filter(ingredient => ingredient.type === 'bun');
  const sauces = ingredientsData.filter(ingredient => ingredient.type === 'sauce');
  const mains = ingredientsData.filter(ingredient => ingredient.type === 'main');

  const ingredientGroups = [
    {
      groupName: 'Булки',
      ingredients: buns
    },
    {
      groupName: 'Соусы',
      ingredients: sauces
    },
    {
      groupName: 'Начинки',
      ingredients: mains
    }
  ];

  return (
      <section className={styles.section}>
        <h1 className={styles.header}>
            Соберите бургер
        </h1>

        <div className={styles.menu}>
            {ingredientGroups.map((group, nIndex) => 
                <Tab value={group.groupName} key={nIndex}>
                    {group.groupName}
                </Tab>
            )}
        </div>

        <div className={styles.groupsContainer}>
            {ingredientGroups.map((group, nIndex) => 
                <IngredientItemGroup groupName={group.groupName} ingredients={group.ingredients} key={nIndex} />
            )}
        </div>

      </section>
  );
};

export default BurgerIngredients;
