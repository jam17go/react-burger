import { reducer, TBurgerConstructorState } from "./reducer";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEANUP_CONSTRUCTOR_STATE,
  TBurgerConstructorActions,
} from "./actions";

import { IIngredient } from "./actions";

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
        {
          ingredients: [],
          bun: null,
          activeIngredientGroup: "Булки",
        },
        {
          type: ADD_INGREDIENT,
          payload: {
            listId: "1",
            name: "bun",
            price: 100,
            image: "image",
            type: "main",
          },
        }
      )
    ).toEqual({
      ingredients: [
        {
          listId: "1",
          name: "bun",
          price: 100,
          image: "image",
          type: "main",
        },
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
            {
              listId: "1",
              name: "bun",
              price: 100,
              image: "image",
              type: "main",
            },
          ],
          bun: null,
          activeIngredientGroup: "Булки",
        },
        {
          type: REMOVE_INGREDIENT,
          payload: {
            listId: "1",
            name: "bun",
            price: 100,
            image: "image",
            type: "main",
          },
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
            {
              listId: "1",
              name: "bun",
              price: 100,
              image: "image",
              type: "main",
            },
            {
              listId: "2",
              name: "bun",
              price: 100,
              image: "image",
              type: "main",
            },
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
        {
          listId: "2",
          name: "bun",
          price: 100,
          image: "image",
          type: "main",
        },
        {
          listId: "1",
          name: "bun",
          price: 100,
          image: "image",
          type: "main",
        },
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
            {
              listId: "1",
              name: "bun",
              price: 100,
              image: "image",
              type: "main",
            },
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
