import {
    login,
    logout,
    checkUserAuth,
    setAuthChecked,
    setUser,
    SET_AUTH_CHECKED,
    SET_USER,
    SET_LOGIN_ERROR,
  } from './actions';
  import {
    loginRequest,
    logoutRequest,
    getUserRequest,
  } from '../../utils/stellar-burger-api';
  
  jest.mock('../../utils/stellar-burger-api', () => ({
    loginRequest: jest.fn(),
    logoutRequest: jest.fn(),
    getUserRequest: jest.fn(),
  }));
  
  describe('user actions', () => {
    let dispatch;
  
    beforeEach(() => {
      jest.clearAllMocks();
      dispatch = jest.fn();
    });
  
    describe('setAuthChecked action', () => {
      it('returns the correct action object', () => {
        const action = setAuthChecked(true);
        expect(action).toEqual({ type: SET_AUTH_CHECKED, payload: true });
      });
    });
  
    describe('setUser action', () => {
      it('returns the correct action object', () => {
        const mockUser = { email: 'test@example.com', name: 'Test User' };
        const action = setUser(mockUser);
        expect(action).toEqual({ type: SET_USER, payload: mockUser });
      });
    });
  
    describe('login action', () => {
      it('dispatches SET_USER, SET_AUTH_CHECKED, and clears login error on successful login', async () => {
        const mockUser = { email: 'test@example.com', name: 'Test User' };
        loginRequest.mockResolvedValueOnce({ user: mockUser });
  
        await login('test@example.com', 'password123')(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith(setUser(mockUser));
        expect(dispatch).toHaveBeenCalledWith(setAuthChecked(true));
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_LOGIN_ERROR,
          payload: null,
        });
      });
  
      it('dispatches SET_LOGIN_ERROR and SET_AUTH_CHECKED on failed login', async () => {
        loginRequest.mockRejectedValueOnce(new Error('Invalid credentials'));
  
        await login('test@example.com', 'wrongpassword')(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_LOGIN_ERROR,
          payload: 'Invalid credentials',
        });
        expect(dispatch).toHaveBeenCalledWith(setAuthChecked(true));
      });
    });

    describe('logout action', () => {
      it('dispatches SET_USER with null on successful logout', async () => {
        logoutRequest.mockResolvedValueOnce();
  
        await logout()(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith(setUser(null));
      });
    });
  });
  