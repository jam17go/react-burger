import { useState, useRef, useEffect } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientItemGroup from "./ingredient-item-group/ingredient-item-group";
import PropTypes from "prop-types";
import { ingredientItemPropType } from "../../types/prop-types";

const BurgerIngredients = ({ ingredientGroups }) => {
  const [currentTab, setCurrentTab] = useState();
  const tabRef = useRef(null);
  const groupRefs = useRef([]);

  const onScrollHandler = () => {
    const tabsBottom = tabRef.current.getBoundingClientRect().bottom;

    let minDiff = Number.MAX_VALUE;
    let currentTabName = "";

    for (let i = 0; i < groupRefs.current.length; i++) {
      const diff = Math.abs(groupRefs.current[i].getBoundingClientRect().top - tabsBottom);

      if (diff < minDiff) {
        minDiff = diff;
        currentTabName = groupRefs.current[i].getAttribute('data-value');
      }
    }

    setCurrentTab(currentTabName);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>Соберите бургер</div>

      <div className={styles.tabs} ref={tabRef}>
        {ingredientGroups.map((group, index) => (
          <div key={index}>
            <Tab value={group.groupName} active={currentTab === group.groupName}>
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

BurgerIngredients.propTypes = {
  ingredientGroups: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(
        ingredientItemPropType
      ).isRequired,
    })
  ),
};

export default BurgerIngredients;
