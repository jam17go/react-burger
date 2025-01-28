import {
    flushState,
    updateOrdersPending,
    updateOrdersSuccess,
    calculateOrders,
    setOrders,
    setMode,
    FLUSH_STATE,
    UPDATE_ORDERS_PENDING,
    UPDATE_ORDERS_SUCCESS,
    SET_ORDERS,
    SET_MODE,
  } from './actions';
  
  describe('orders-feed actions', () => {
    let dispatch;
  
    beforeEach(() => {
      jest.clearAllMocks();
      dispatch = jest.fn();
    });
  
    describe('flushState action', () => {
      it('returns the correct action object', () => {
        const action = flushState();
        expect(action).toEqual({ type: FLUSH_STATE });
      });
    });
  
    describe('updateOrdersPending action', () => {
      it('returns the correct action object', () => {
        const action = updateOrdersPending();
        expect(action).toEqual({ type: UPDATE_ORDERS_PENDING });
      });
    });
  
    describe('updateOrdersSuccess action', () => {
      it('returns the correct action object', () => {
        const action = updateOrdersSuccess();
        expect(action).toEqual({ type: UPDATE_ORDERS_SUCCESS });
      });
    });
  
    describe('setOrders action', () => {
      it('returns the correct action object', () => {
        const mockOrders = {
          readyOrders: ['12345'],
          inProgressOrders: ['67890'],
          orders: [],
          total: 100,
          totalToday: 10,
        };
  
        const action = setOrders(mockOrders);
        expect(action).toEqual({
          type: SET_ORDERS,
          payload: mockOrders,
        });
      });
    });
  
    describe('setMode action', () => {
      it('returns the correct action object', () => {
        const mockMode = 'dark';
        const action = setMode(mockMode);
        expect(action).toEqual({
          type: SET_MODE,
          payload: mockMode,
        });
      });
    });
  
    describe('calculateOrders action', () => {
      it('dispatches the correct actions and calculates orders correctly', () => {
        const mockAllIngredients = [
          { _id: 'ingredient1', name: 'Bun', image: 'bun.jpg', price: 2 },
          { _id: 'ingredient2', name: 'Patty', image: 'patty.jpg', price: 5 },
        ];
  
        const mockOrdersApiResponse = {
          orders: [
            {
              _id: 'order1',
              number: '12345',
              name: 'Order 1',
              status: 'done',
              createdAt: '2023-01-01T12:00:00Z',
              ingredients: ['ingredient1', 'ingredient2'],
            },
          ],
          total: 1,
          totalToday: 1,
        };
  
        calculateOrders(mockAllIngredients, mockOrdersApiResponse)(dispatch);
  
        expect(dispatch).toHaveBeenCalledWith(updateOrdersPending());
  
        expect(dispatch).toHaveBeenCalledWith(
          setOrders({
            readyOrders: ['12345'],
            inProgressOrders: [],
            orders: [
              {
                _id: 'order1',
                number: '12345',
                name: 'Order 1',
                status: 'done',
                createdAt: '2023-01-01T12:00:00Z',
                ingredients: [
                  { _id: 'ingredient1', name: 'Bun', image: 'bun.jpg', price: 2 },
                  { _id: 'ingredient2', name: 'Patty', image: 'patty.jpg', price: 5 },
                ],
                price: 7,
              },
            ],
            total: 1,
            totalToday: 1,
          })
        );
      });
    });
  });
  