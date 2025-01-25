import { register, REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING } from './actions';
import { registerRequest } from '../../utils/stellar-burger-api';

jest.mock('../../utils/stellar-burger-api', () => ({
  registerRequest: jest.fn(),
}));

describe('register action', () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  it('dispatches REGISTER_PENDING and REGISTER_SUCCESS on successful registration', async () => {
    registerRequest.mockResolvedValueOnce();

    await register('test@example.com', 'password123', 'Test User')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: REGISTER_PENDING });

    expect(dispatch).toHaveBeenCalledWith({
      type: REGISTER_SUCCESS,
    });
  });
});
