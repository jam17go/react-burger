import { reducer, initialState } from './reducer';
import {
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
  LOAD_INGREDIENTS_SUCCESS,
} from './actions';

describe('burger-ingredients reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles INGREDIENTS_LOADING action', () => {
    const action = { type: INGREDIENTS_LOADING };
    const expectedState = {
      ...initialState,
      loading: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles INGREDIENTS_ERROR action', () => {
    const action = { type: INGREDIENTS_ERROR };
    const expectedState = {
      ...initialState,
      error: true,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles LOAD_INGREDIENTS_SUCCESS action', () => {
    const mockPayload = [
      { groupName: 'Булки', ingredients: [{ id: 1, name: 'Bun' }] },
      { groupName: 'Соусы', ingredients: [{ id: 2, name: 'Sauce' }] },
    ];

    const action = { type: LOAD_INGREDIENTS_SUCCESS, payload: mockPayload };
    const expectedState = {
      ...initialState,
      ingredientGroups: mockPayload,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
