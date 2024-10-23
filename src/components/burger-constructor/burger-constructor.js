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
        <div className={`${styles.section} ml-10`}>
            <div className={`${styles.selectedList} mt-25 ml-4 mr-4`}>
                <div className='ml-4'>
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

                <div className='ml-4'>
                    <ConstructorElement 
                        type='bottom'
                        isLocked={true}
                        text={bunSelected.name}
                        price={bunSelected.price}
                        thumbnail={bunSelected.image}
                    />
                </div>

                <div>
                    <div className='mt-10' style={{ display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                        <div className='text text_type_digits-medium mr-10'>
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
