import { reducer, initialState } from './reducer';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_PENDING,
} from './actions';

describe('login reducer', () => {
  describe('LOGIN actions', () => {
    it('handles LOGIN_PENDING action', () => {
      const action = { type: LOGIN_PENDING };
      const expectedState = {
        success: false,
        error: false,
        pending: true,
        user: null,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });

    it('handles LOGIN_SUCCESS action', () => {
      const mockUser = { email: 'test@example.com', name: 'Test User' };
      const action = { type: LOGIN_SUCCESS, payload: mockUser };

      const expectedState = {
        success: true,
        error: false,
        pending: false,
        user: mockUser,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });

    it('handles LOGIN_ERROR action', () => {
      const action = { type: LOGIN_ERROR };
      const expectedState = {
        success: false,
        error: true,
        pending: false,
        user: null,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });

  describe('LOGOUT actions', () => {
    it('handles LOGOUT_PENDING action', () => {
      const action = { type: LOGOUT_PENDING };
      const expectedState = {
        success: false,
        error: false,
        pending: true,
        user: null,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });

    it('handles LOGOUT_SUCCESS action', () => {
      const action = { type: LOGOUT_SUCCESS };
      const expectedState = {
        success: false,
        error: false,
        pending: false,
        user: null,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });

    it('handles LOGOUT_ERROR action', () => {
      const action = { type: LOGOUT_ERROR };
      const expectedState = {
        success: false,
        error: true,
        pending: false,
        user: null,
      };

      const state = reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
