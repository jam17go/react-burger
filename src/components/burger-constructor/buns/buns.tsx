import styles from "./buns.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { getSelectedBun } from "../../../services/burger-constructor/selectors.js";

type TBunsProps = {
  children: React.ReactNode;
};

export const Buns = ({ children }: TBunsProps): JSX.Element => {
  const bun = useSelector(getSelectedBun);

  return (
    <>
      {!bun && (
        <div className={styles.emptyBun}>
          <div>Булки</div>
        </div>
      )}

      {bun && (
        <div className={styles.bunElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}

      {children}

      {!bun && (
        <div className={styles.emptyBun}>
          <div>Булки</div>
        </div>
      )}

      {bun && (
        <div className={styles.bunElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      )}
    </>
  );
};