import styles from "./ingredient-property.module.css";

type TIngredientProperty = {
  name: string;
  value: number;
};

const IngredientProperty = ({ name, value }: TIngredientProperty): JSX.Element => {
  return (
    <div>
      <div className={styles.propertyName}>{name}</div>
      <div className={styles.propertyValue}>{value}</div>
    </div>
  );
};

export default IngredientProperty;
