import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  removeIngredient,
  moveIngredient,
} from "../../../services/burger-constructor/actions";
import styles from "./draggable-ingredient.module.css";

export const DraggableIngredient = ({ ingredient, index }) => {
  const dispatch = useDispatch();

  const ref = useRef(null);

  const handleRemoveIngredient = (ingredient) => () => {
    dispatch(removeIngredient(ingredient));
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "selectedIngredient",
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "selectedIngredient",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredient(dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;

  dragRef(dropRef(ref));

  return (
    <div ref={ref} className={styles.item} style={{ opacity }}>
      <DragIcon />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleRemoveIngredient(ingredient)}
      />
    </div>
  );
};
