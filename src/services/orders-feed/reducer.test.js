import { reducer, initialState } from './reducer';

describe('orders-feed reducer', () => {
  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('handles SET_ORDERS action', () => {
    const mockPayload = {
      readyOrders: ['order1', 'order2'],
      inProgressOrders: ['order3'],
      orders: [
        {
          _id: 'order1',
          number: 12345,
          name: 'Test Order',
          status: 'done',
          createdAt: '2023-01-01T12:00:00Z',
          ingredients: ['ingredient1', 'ingredient2'],
        },
      ],
      total: 100,
      totalToday: 10,
    };

    const action = { type: 'SET_ORDERS', payload: mockPayload };
    const expectedState = {
      ...initialState,
      readyOrders: mockPayload.readyOrders,
      inProgressOrders: mockPayload.inProgressOrders,
      orders: mockPayload.orders,
      totalOrders: mockPayload.total,
      totalTodayOrders: mockPayload.totalToday,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles UPDATE_ORDERS action', () => {
    const mockPayload = {
      url: 'ws://example.com',
      orders: [],
    };

    const action = { type: 'UPDATE_ORDERS', payload: mockPayload };
    const expectedState = {
      ...initialState,
      ordersApiResponse: mockPayload,
      url: mockPayload.url,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles UPDATE_ORDERS_PENDING action', () => {
    const action = { type: 'UPDATE_ORDERS_PENDING' };
    const expectedState = {
      ...initialState,
      updateComplete: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles UPDATE_ORDERS_SUCCESS action', () => {
    const action = { type: 'UPDATE_ORDERS_SUCCESS' };
    const expectedState = {
      ...initialState,
      updateComplete: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles FLUSH_STATE action', () => {
    const action = { type: 'FLUSH_STATE' };
    const modifiedState = {
      readyOrders: ['order1'],
      inProgressOrders: ['order2'],
      totalOrders: 100,
      totalTodayOrders: 10,
      orders: [{ _id: 'order1', number: 12345 }],
      updateComplete: true,
      calculationComplete: true,
      mode: 'dark',
      url: 'ws://example.com',
    };

    const state = reducer(modifiedState, action);

    expect(state).toEqual(initialState);
  });
});
