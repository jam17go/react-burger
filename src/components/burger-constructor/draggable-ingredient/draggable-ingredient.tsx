import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrop, useDrag, DragSourceMonitor, DropTargetMonitor } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  removeIngredient,
  moveIngredient,
} from "../../../services/burger-constructor/actions";
import styles from "./draggable-ingredient.module.css";

type TIngredientItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  index: number;
};

type TDragItem = {
  index: number;
  ingredient: TIngredientItem;
  type: string;
};

type TDraggableIngredientProps = {
  ingredient: TIngredientItem;
  index: number;
};

export const DraggableIngredient = ({
  ingredient,
  index,
}: TDraggableIngredientProps): JSX.Element => {
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement | null>(null);

  const handleRemoveIngredient = (ingredient: TIngredientItem) => () => {
    dispatch(removeIngredient(ingredient));
  };

  const [{ isDragging }, dragRef] = useDrag<TDragItem, unknown, { isDragging: boolean }>({
    type: "selectedIngredient",
    item: () => {
      return { ingredient, index, type: "selectedIngredient" };
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<TDragItem>({
    accept: "selectedIngredient",
    hover: (item: TDragItem, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) {
        return;
      }
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
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleRemoveIngredient(ingredient)}
      />
    </div>
  );
};
