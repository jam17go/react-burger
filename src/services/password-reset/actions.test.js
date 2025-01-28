import {
    passwordReset,
    passwordResetReset,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_ERROR,
    PASSWORD_RESET_PENDING,
    PASSWORD_RESET_FLAG,
    PASSWORD_RESET_RESET_SUCCESS,
    PASSWORD_RESET_RESET_ERROR,
    PASSWORD_RESET_RESET_PENDING,
  } from './actions';
  import {
    passwordResetRequest,
    passwordResetResetRequest,
  } from '../../utils/stellar-burger-api';
  
  jest.mock('../../utils/stellar-burger-api', () => ({
    passwordResetRequest: jest.fn(),
    passwordResetResetRequest: jest.fn(),
  }));
  
  describe('password-reset actions', () => {
    let dispatch;
  
    beforeEach(() => {
      jest.clearAllMocks();
      dispatch = jest.fn();
    });
  
    describe('passwordReset action', () => {
      it('dispatches PASSWORD_RESET_PENDING, PASSWORD_RESET_FLAG, and PASSWORD_RESET_SUCCESS on success', async () => {
        passwordResetRequest.mockResolvedValueOnce();
  
        await passwordReset('test@example.com')(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith({ type: PASSWORD_RESET_PENDING });
        expect(dispatch).toHaveBeenCalledWith({ type: PASSWORD_RESET_FLAG });
        expect(dispatch).toHaveBeenCalledWith({ type: PASSWORD_RESET_SUCCESS });
      });
    });
  
    describe('passwordResetReset action', () => {
      it('dispatches PASSWORD_RESET_RESET_PENDING and PASSWORD_RESET_RESET_SUCCESS on success', async () => {
        passwordResetResetRequest.mockResolvedValueOnce();
  
        await passwordResetReset('newpassword123', 'testtoken123')(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith({
          type: PASSWORD_RESET_RESET_PENDING,
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: PASSWORD_RESET_RESET_SUCCESS,
        });
      });
    });
  });
  