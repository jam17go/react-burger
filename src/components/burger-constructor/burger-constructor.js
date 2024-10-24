import styles from './burger-constructor.module.css';
import { ingredientsSelected, bunSelected } from '../../utils/data';
import {
    ConstructorElement, 
    Button,
    CurrencyIcon,
    DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {
    return (
        <div className={styles.section}>
            <div className={styles.selectedList}>
                <div className={styles.bunElement}>
                    <ConstructorElement 
                        type='top'
                        isLocked={true}
                        text={bunSelected.name}
                        price={bunSelected.price}
                        thumbnail={bunSelected.image}
                    />
                </div>

                <div className={styles.listScrollable}>
                    {ingredientsSelected.map((ingredient, index) => (
                        <div className={styles.selectedItem} key={index}>
                            <DragIcon/>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.bunElement}>
                    <ConstructorElement 
                        type='bottom'
                        isLocked={true}
                        text={bunSelected.name}
                        price={bunSelected.price}
                        thumbnail={bunSelected.image}
                    />
                </div>

                <div>
                    <div className={styles.buttonBox}>
                        <div className={styles.currency}>
                            610
                            <CurrencyIcon type="primary" />
                        </div>
                        <Button>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerConstructor;
