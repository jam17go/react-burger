import { reducer, initialState } from './reducer';
import { ORDER_LOADING, ORDER_ERROR, LOAD_ORDER_SUCCESS } from './actions';

describe('feed-order reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles ORDER_LOADING action', () => {
    const action = { type: ORDER_LOADING };
    const expectedState = {
      ...initialState,
      loading: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles ORDER_ERROR action', () => {
    const action = { type: ORDER_ERROR };
    const expectedState = {
      ...initialState,
      error: true,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles LOAD_ORDER_SUCCESS action', () => {
    const mockOrder = {
      _id: 'order123',
      ingredients: [
        { _id: 'ingredient1', name: 'Bun', price: 2, image: 'bun.jpg' },
        { _id: 'ingredient2', name: 'Patty', price: 5, image: 'patty.jpg' },
      ],
      status: 'done',
      name: 'Test Order',
      number: 12345,
      createdAt: '2023-01-01T12:00:00Z',
      updatedAt: '2023-01-01T13:00:00Z',
      price: 7,
    };

    const action = { type: LOAD_ORDER_SUCCESS, payload: mockOrder };
    const expectedState = {
      ...initialState,
      order: mockOrder,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
