import { reducer, initialState } from './reducer';
import { SET_CURRENT_INGREDIENT } from './actions';

describe('ingredient-details reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles SET_CURRENT_INGREDIENT action', () => {
    const mockIngredient = {
      _id: 'ingredient1',
      name: 'Bun',
      price: 2,
      image: 'bun.jpg',
    };

    const action = {
      type: SET_CURRENT_INGREDIENT,
      payload: mockIngredient,
    };

    const expectedState = {
      ...initialState,
      currentIngredient: mockIngredient,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles SET_CURRENT_INGREDIENT action with null payload', () => {
    const action = {
      type: SET_CURRENT_INGREDIENT,
      payload: null,
    };

    const expectedState = {
      ...initialState,
      currentIngredient: null,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
