import { setCurrentIngredient, SET_CURRENT_INGREDIENT } from './actions';

describe('setCurrentIngredient action', () => {
  it('returns the correct action object when setting an ingredient', () => {
    const mockIngredient = {
      _id: 'ingredient1',
      name: 'Bun',
      price: 2,
      type: 'bun',
    };

    const expectedAction = {
      type: SET_CURRENT_INGREDIENT,
      payload: mockIngredient,
    };

    const result = setCurrentIngredient(mockIngredient);
    expect(result).toEqual(expectedAction);
  });

  it('returns the correct action object when resetting the ingredient to null', () => {
    const expectedAction = {
      type: SET_CURRENT_INGREDIENT,
      payload: null,
    };

    const result = setCurrentIngredient(null);
    expect(result).toEqual(expectedAction);
  });
});
