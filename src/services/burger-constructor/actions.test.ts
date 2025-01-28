import {
  addIngredient,
  removeIngredient,
  cleanupConstructorState,
  moveIngredient,
} from "./actions";

describe("burger-constructor actions", () => {
  it("should create an action to add an ingredient", () => {
    const ingredient = {
      listId: "1",
      name: "bun",
      price: 100,
      image: "image",
      type: "main",
    };

    const expectedAction = {
      type: "ADD_INGREDIENT",
      payload: ingredient,
    };

    expect(addIngredient(ingredient)).toEqual(expectedAction);
  });

  it("should create an action to remove an ingredient", () => {
    const ingredient = {
      listId: "1",
      name: "bun",
      price: 100,
      image: "image",
      type: "main",
    };

    const expectedAction = {
      type: "REMOVE_INGREDIENT",
      payload: ingredient,
    };

    expect(removeIngredient(ingredient)).toEqual(expectedAction);
  });

  it("should create an action to cleanup the constructor state", () => {
    const expectedAction = {
      type: "CLEANUP_CONSTRUCTOR_STATE",
    };

    expect(cleanupConstructorState()).toEqual(expectedAction);
  });

  it("should create an action to move an ingredient", () => {
    const dragIndex = 0;
    const hoverIndex = 1;

    const expectedAction = {
      type: "MOVE_INGREDIENT",
      payload: { dragIndex, hoverIndex },
    };

    expect(moveIngredient(dragIndex, hoverIndex)).toEqual(expectedAction);
  });
});
