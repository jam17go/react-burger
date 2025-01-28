import { login, logout, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_PENDING, LOGOUT_SUCCESS } from './actions';
import { loginRequest } from '../../utils/stellar-burger-api';

jest.mock('../../utils/stellar-burger-api', () => ({
  loginRequest: jest.fn(),
}));

describe('login actions', () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  describe('login action', () => {
    it('dispatches LOGIN_PENDING and LOGIN_SUCCESS on successful login', async () => {
      const mockUser = { email: 'test@example.com', name: 'Test User' };

      loginRequest.mockResolvedValueOnce(mockUser);

      await login('test@example.com', 'password123')(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: LOGIN_PENDING });
      expect(dispatch).toHaveBeenCalledWith({
        type: LOGIN_SUCCESS,
        payload: mockUser,
      });
    });
  });

  describe('logout action', () => {
    it('dispatches LOGOUT_PENDING and LOGOUT_SUCCESS', () => {
      logout()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: LOGOUT_PENDING });
      expect(dispatch).toHaveBeenCalledWith({ type: LOGOUT_SUCCESS });
    });
  });
});
