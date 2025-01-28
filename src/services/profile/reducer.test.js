import { reducer, initialState } from './reducer';
import {
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './actions';

describe('profile reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles UPDATE_USER_PENDING action', () => {
    const action = { type: UPDATE_USER_PENDING };
    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles UPDATE_USER_SUCCESS action', () => {
    const mockUser = {
      name: 'Test User',
      email: 'test@example.com',
    };

    const action = { type: UPDATE_USER_SUCCESS, payload: mockUser };
    const expectedState = {
      ...initialState,
      user: mockUser,
      loading: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles UPDATE_USER_ERROR action', () => {
    const mockError = {
      message: 'Failed to update user',
    };

    const action = { type: UPDATE_USER_ERROR, payload: mockError };
    const expectedState = {
      ...initialState,
      loading: false,
      error: mockError,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
