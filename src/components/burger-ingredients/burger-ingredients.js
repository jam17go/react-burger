import React from 'react';
import styles from './burger-ingredients.module.css';
import { ingredientsData } from '../../utils/data.js';
import {
    Counter, 
    Tab,
    CurrencyIcon
   } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientItem from '../ingredient-item/ingredient-item.js';
import IngredientItemGroup from '../ingredient-item-group/ingredient-item-group';

const BurgerIngredients = ({ onAdd }) => {
    console.log(ingredientsData);

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
        <h1 className="pt-10 pb-5 text text_type_main-large">
            Соберите бургер
        </h1>

        <menu className={styles.menu}>
            {ingredientGroups.map((group, nIndex) => 
                <Tab value={group.groupName} key={nIndex}>
                    {group.groupName}
                </Tab>
            )}
        </menu>

        <div className={`${styles.groupsContainer} mt-8`}>
            {ingredientGroups.map((group, nIndex) => 
                <IngredientItemGroup groupName={group.groupName} ingredients={group.ingredients} key={nIndex} />
            )}
        </div>
        
      </section>
  );
};

export default BurgerIngredients;
