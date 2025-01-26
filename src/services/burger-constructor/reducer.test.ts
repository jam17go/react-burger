import { reducer, initialState } from "./reducer";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEANUP_CONSTRUCTOR_STATE,
  TBurgerConstructorActions,
} from "./actions";

const testIngredient = {
  listId: "1",
  name: "bun",
  price: 100,
  image: "image",
  type: "main",
}

describe("burger-constructor reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as TBurgerConstructorActions)).toEqual({
      ingredients: [],
      bun: null,
      activeIngredientGroup: "Булки",
    });
  });

  it("should handle ADD_INGREDIENT", () => {
    expect(
      reducer(
        initialState,
        {
          type: ADD_INGREDIENT,
          payload: testIngredient,
        }
      )
    ).toEqual({
      ingredients: [
        testIngredient
      ],
      bun: null,
      activeIngredientGroup: "Булки",
    });
  });

  it("should handle REMOVE_INGREDIENT", () => {
    expect(
      reducer(
        {
          ingredients: [
            testIngredient,
          ],
          bun: null,
          activeIngredientGroup: "Булки",
        },
        {
          type: REMOVE_INGREDIENT,
          payload: testIngredient,
        }
      )
    ).toEqual({
      ingredients: [],
      bun: null,
      activeIngredientGroup: "Булки",
    });
  });

  it("should handle MOVE_INGREDIENT", () => {
    expect(
      reducer(
        {
          ingredients: [
            {...testIngredient, listId: "1"},
            {...testIngredient, listId: "2"},
          ],
          bun: null,
          activeIngredientGroup: "Булки",
        },
        {
          type: MOVE_INGREDIENT,
          payload: { dragIndex: 0, hoverIndex: 1 },
        }
      )
    ).toEqual({
      ingredients: [
        {...testIngredient, listId: "2"},
        {...testIngredient, listId: "1"},
      ],
      bun: null,
      activeIngredientGroup: "Булки",
    });
  });

  it("should handle CLEANUP_CONSTRUCTOR_STATE", () => {
    expect(
      reducer(
        {
          ingredients: [
            testIngredient,
          ],
          bun: null,
          activeIngredientGroup: "Булки",
        },
        {
          type: CLEANUP_CONSTRUCTOR_STATE,
        }
      )
    ).toEqual({
      ingredients: [],
      bun: null,
      activeIngredientGroup: "Булки",
    });
  });
});
