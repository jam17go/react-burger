import { useState, useRef } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientItemGroup from "./ingredient-item-group/ingredient-item-group";
import { useSelector } from "../../services/hooks";
import { getIngredientGroupsData } from "../../services/burger-ingredients/selectors";

type Ingredient = {
  _id: string;
  name: string;
  type: string;
  price: number;
  image: string;
};

type IngredientGroup = {
  groupName: string;
  ingredients: Ingredient[];
};

const BurgerIngredients = (): JSX.Element => {
  const ingredientGroups = useSelector(getIngredientGroupsData) as IngredientGroup[];
  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const tabRef = useRef<HTMLDivElement | null>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScrollHandler = () => {
    if (!tabRef.current) return;
    const tabsBottom = tabRef.current.getBoundingClientRect().bottom;

    let minDiff = Number.MAX_VALUE;
    let currentTabName = "";

    groupRefs.current.forEach((groupRef, index) => {
      if (groupRef) {
        const diff = Math.abs(groupRef.getBoundingClientRect().top - tabsBottom);
        if (diff < minDiff) {
          minDiff = diff;
          currentTabName = groupRef.getAttribute("data-value") || "";
        }
      }
    });

    setCurrentTab(currentTabName);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>Соберите бургер</div>

      <div className={styles.tabs} ref={tabRef}>
        {ingredientGroups.map((group, index) => (
          <div key={index}>
            <Tab
              value={group.groupName}
              active={currentTab === group.groupName}
              onClick={() => setCurrentTab(group.groupName)}
            >
              {group.groupName}
            </Tab>
          </div>
        ))}
      </div>

      <div className={styles.groups} onScroll={onScrollHandler}>
        {ingredientGroups.map((group, index) => (
          <div
            key={index}
            ref={(el) => (groupRefs.current[index] = el)}
            data-value={group.groupName}
          >
            <IngredientItemGroup
              groupName={group.groupName}
              ingredients={group.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerIngredients;
