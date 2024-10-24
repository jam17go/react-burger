import React from 'react';
import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import styles from './app.module.css';

class App extends React.Component {
  render() {
    return (
        <div className={styles.wrapper}>
            <AppHeader />
            <div className={styles.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
        </div>
    );
  }
}

export default App;