import type { Middleware, MiddlewareAPI } from "redux";

import type {
  AppActions,
  TWSStoreActions,
} from "./types";
import { refreshToken } from "../../utils/stellar-burger-api";

export const socketMiddleware = (
  wsActions: TWSStoreActions,
  withTokenRefresh: boolean = false
): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;
    const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
      wsActions;

    let isConnected = false;
    let reconnectTimer = 0;
    let url = "";

    return (next) => (action: AppActions) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        wsActions;
      const url = action.payload;

      if (type === wsInit && !isConnected) {
        socket = new WebSocket(url);
      }

      if (socket) {
        const url = socket.url;

        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);

          if (
            withTokenRefresh &&
            parsedData.message === "Invalid or missing token"
          ) {
            refreshToken()
              .then((refreshData) => {
                const wssUrl = new URL(url);
                wssUrl.searchParams.set(
                  "token",
                  refreshData.accessToken.replace("Bearer ", "")
                );
                dispatch({ type: wsInit, payload: wssUrl });
              })
              .catch((error) => {
                dispatch({ type: onError, payload: error });
              });

            dispatch({ type: onClose, payload: event });

            return;
          }

          const parsedUrl = new URL(url);
          const protocol = parsedUrl.protocol;
          const host = parsedUrl.host;
          const path = parsedUrl.pathname;

          dispatch({ type: onMessage, payload: {...parsedData, url: `${protocol}//${host}${path}`} });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type == onClose) {
          clearTimeout(reconnectTimer);
          isConnected = false;
          reconnectTimer = 0;
          socket.close();
          socket = null;
        }
      }

      next(action);
    };
  };
};
