import { wsReducer } from './reducer';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
} from './actions';

describe('wsReducer', () => {
  const initialState = {
    wsConnected: false,
  };

  it('returns the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const state = wsReducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('handles WS_CONNECTION_SUCCESS action', () => {
    const action = { type: WS_CONNECTION_SUCCESS };
    const expectedState = {
      ...initialState,
      error: undefined,
      wsConnected: true,
    };

    const state = wsReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles WS_CONNECTION_ERROR action', () => {
    const mockError = new Event('error');
    const action = { type: WS_CONNECTION_ERROR, payload: mockError };
    const expectedState = {
      ...initialState,
      error: mockError,
      wsConnected: false,
    };

    const state = wsReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('handles WS_CONNECTION_CLOSED action', () => {
    const action = { type: WS_CONNECTION_CLOSED };
    const expectedState = {
      ...initialState,
      error: undefined,
      wsConnected: false,
    };

    const state = wsReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
