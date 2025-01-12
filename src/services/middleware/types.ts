import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { store } from '../store';
import { TApplicationActions } from '../store';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_SEND_MESSAGE,
} from './actions';

import { UPDATE_ORDERS } from '../orders-feed/actions';
import { updateOrders } from '../orders-feed/actions';

export type AppActions = TApplicationActions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>;

export type TWSStoreActions = {
  wsInit: typeof  WS_CONNECTION_START,
  wsSendMessage: typeof  WS_SEND_MESSAGE,
  onOpen: typeof  WS_CONNECTION_SUCCESS,
  onClose: typeof WS_CONNECTION_CLOSED,
  onError: typeof  WS_CONNECTION_ERROR,
  onMessage: typeof  updateOrders,
};
