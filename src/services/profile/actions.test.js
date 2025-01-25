import { updateUser, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR } from './actions';
import { updateUserInfoRequest } from '../../utils/stellar-burger-api';

jest.mock('../../utils/stellar-burger-api', () => ({
  updateUserInfoRequest: jest.fn(),
}));

describe('updateUser action', () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  it('dispatches UPDATE_USER_PENDING and UPDATE_USER_SUCCESS on successful update', async () => {
    const mockUser = {
      name: 'Test User',
      email: 'test@example.com',
    };

    updateUserInfoRequest.mockResolvedValueOnce(mockUser);

    await updateUser('Test User', 'test@example.com', 'password123')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_USER_PENDING });

    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_USER_SUCCESS,
      payload: mockUser,
    });
  });

  it('dispatches UPDATE_USER_PENDING and UPDATE_USER_ERROR on failed update', async () => {
    const mockError = new Error('Failed to update user info');

    updateUserInfoRequest.mockRejectedValueOnce(mockError);

    await updateUser('Test User', 'test@example.com', 'password123')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_USER_PENDING });

    expect(dispatch).toHaveBeenCalledWith({
      type: UPDATE_USER_ERROR,
      payload: mockError,
    });
  });
});
