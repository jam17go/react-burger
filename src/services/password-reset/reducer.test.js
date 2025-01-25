import { reducer, initialState } from './reducer';
import {
  PASSWORD_RESET_PENDING,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_FLAG,
  PASSWORD_RESET_RESET_PENDING,
  PASSWORD_RESET_RESET_SUCCESS,
  PASSWORD_RESET_RESET_ERROR,
} from './actions';

describe('password-reset reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles PASSWORD_RESET_PENDING action', () => {
    const action = { type: PASSWORD_RESET_PENDING };
    const expectedState = {
      ...initialState,
      loading: true,
      success: false,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_SUCCESS action', () => {
    const action = { type: PASSWORD_RESET_SUCCESS };
    const expectedState = {
      ...initialState,
      loading: false,
      success: true,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_ERROR action', () => {
    const action = { type: PASSWORD_RESET_ERROR };
    const expectedState = {
      ...initialState,
      loading: false,
      success: false,
      error: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_FLAG action', () => {
    const action = { type: PASSWORD_RESET_FLAG };
    const expectedState = {
      ...initialState,
      passwordResetFlag: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_RESET_PENDING action', () => {
    const action = { type: PASSWORD_RESET_RESET_PENDING };
    const expectedState = {
      ...initialState,
      loading: true,
      success: false,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_RESET_SUCCESS action', () => {
    const action = { type: PASSWORD_RESET_RESET_SUCCESS };
    const expectedState = {
      ...initialState,
      loading: false,
      success: true,
      error: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles PASSWORD_RESET_RESET_ERROR action', () => {
    const action = { type: PASSWORD_RESET_RESET_ERROR };
    const expectedState = {
      ...initialState,
      loading: false,
      success: false,
      error: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
