import { reducer, initialState } from './reducer';
import { SET_AUTH_CHECKED, SET_USER, SET_LOGIN_ERROR } from './actions';

describe('user reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles SET_AUTH_CHECKED action', () => {
    const action = { type: SET_AUTH_CHECKED, payload: true };
    const expectedState = {
      ...initialState,
      isAuthChecked: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles SET_USER action', () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    const action = { type: SET_USER, payload: mockUser };
    const expectedState = {
      ...initialState,
      user: mockUser,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles SET_LOGIN_ERROR action', () => {
    const mockError = 'Invalid credentials';

    const action = { type: SET_LOGIN_ERROR, payload: mockError };
    const expectedState = {
      ...initialState,
      loginError: mockError,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
