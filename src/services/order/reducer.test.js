import { reducer, initialState } from './reducer';
import {
  PLACE_ORDER_PENDING,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_RESET,
} from './actions';

describe('order reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles PLACE_ORDER_PENDING action', () => {
    const action = { type: PLACE_ORDER_PENDING };
    const expectedState = {
      ...initialState,
      loading: true,
      order: null,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PLACE_ORDER_ERROR action', () => {
    const action = { type: PLACE_ORDER_ERROR };
    const expectedState = {
      ...initialState,
      error: true,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PLACE_ORDER_SUCCESS action', () => {
    const mockOrder = {
      id: 'order123',
      name: 'Test Order',
      price: 100,
    };

    const action = { type: PLACE_ORDER_SUCCESS, payload: mockOrder };
    const expectedState = {
      ...initialState,
      order: mockOrder,
      loading: false,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PLACE_ORDER_RESET action', () => {
    const action = { type: PLACE_ORDER_RESET };
    const expectedState = {
      ...initialState,
      order: null,
      loading: false,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
