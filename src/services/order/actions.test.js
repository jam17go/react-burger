import { placeOrder, resetOrder, PLACE_ORDER_SUCCESS, PLACE_ORDER_ERROR, PLACE_ORDER_PENDING, PLACE_ORDER_RESET } from './actions';
import { postOrder } from '../../utils/stellar-burger-api';

jest.mock('../../utils/stellar-burger-api', () => ({
  postOrder: jest.fn(),
}));

describe('order actions', () => {
  let dispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    dispatch = jest.fn();
  });

  describe('placeOrder action', () => {
    it('dispatches PLACE_ORDER_PENDING and PLACE_ORDER_SUCCESS on successful order placement', async () => {
      const mockOrder = { id: 'order123', name: 'Test Order' };
      const mockIngredients = [
        { _id: 'ingredient1', name: 'Bun', price: 2 },
        { _id: 'ingredient2', name: 'Patty', price: 5 },
      ];

      postOrder.mockResolvedValueOnce(mockOrder);

      await placeOrder(mockIngredients)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: PLACE_ORDER_PENDING });
      expect(dispatch).toHaveBeenCalledWith({
        type: PLACE_ORDER_SUCCESS,
        payload: mockOrder,
      });
    });
  });

  describe('resetOrder action', () => {
    it('dispatches PLACE_ORDER_RESET', () => {
      const action = resetOrder();
      expect(action).toEqual({ type: PLACE_ORDER_RESET });
    });
  });
});
