import styles from "./ingredient-item-group.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";

export type TIngredientItemPropType = {
  _id: string;
  name: string;
  image: string;
  price: number;
};

export type TIngredientItemGroupProps = {
  groupName: string;
  ingredients: Array<TIngredientItemPropType>;
};

const IngredientItemGroup = ({ groupName, ingredients }: TIngredientItemGroupProps):  JSX.Element=> {
  return (
    <div className={styles.group}>
      <div className={styles.groupName}>{groupName}</div>
      <div className={styles.list}>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <IngredientItem item={ingredient} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientItemGroup;
