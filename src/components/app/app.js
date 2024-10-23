import React from 'react';
import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import { ingredientsData } from '../../utils/data.js';
import styles from './app.module.css';

class App extends React.Component {
  render() {
    return (
        <div className={styles.wrapper}>
            <AppHeader />
                <main className={styles.main}>
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
        </div>
    );
  }
}

export default App;