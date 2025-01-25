import { reducer, initialState } from './reducer';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_PENDING,
} from './actions';

describe('registration reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles REGISTER_PENDING action', () => {
    const action = { type: REGISTER_PENDING };
    const expectedState = {
      ...initialState,
      success: false,
      error: false,
      pending: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles REGISTER_SUCCESS action', () => {
    const action = { type: REGISTER_SUCCESS };
    const expectedState = {
      ...initialState,
      success: true,
      error: false,
      pending: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles REGISTER_ERROR action', () => {
    const action = { type: REGISTER_ERROR };
    const expectedState = {
      ...initialState,
      success: false,
      error: true,
      pending: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
