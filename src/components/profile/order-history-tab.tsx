import FeedDisplay from "../orders-feed/feed-display/feed-display";

import { useEffect } from "react";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/middleware/actions";
import { useDispatch } from "../../services/hooks";
import { useSelector } from "../../services/hooks";
import { Loader } from "../loader/loader";
import { updateOrdersPending } from "../../services/orders-feed/actions";
import { getAllIngredients, getLoadingStatus } from "../../services/burger-ingredients/selectors";
import { calculateOrders, setOrders, flushState } from "../../services/orders-feed/actions";
import { calculationComplete } from "../../services/orders-feed/selectors";

export function OrderHistoryTab(): JSX.Element {
  const dispatch = useDispatch();
  const allIngredients = useSelector(getAllIngredients);
  const ingredientsLoading = useSelector(getLoadingStatus);
  const ordersApiResponse = useSelector((store) => store.ordersFeed.ordersApiResponse);
  const isReady = useSelector(calculationComplete);
  const mode = useSelector((store) => store.ordersFeed.mode);
  const connectedUrl = useSelector((store) => store.ordersFeed.url);

  useEffect(() => {
    // dispatch(updateOrdersPending());
    // dispatch(setOrders({ orders: [], total: 0, totalToday: 0, readyOrders: [], inProgressOrders: [] }));
    dispatch({ type: WS_CONNECTION_START, payload: "wss://norma.nomoreparties.space/orders" });

    return () => {
      // dispatch(updateOrdersPending());
      // dispatch(setOrders({ orders: [], total: 0, totalToday: 0, readyOrders: [], inProgressOrders: [] }));
      // dispatch(updateOrdersPending());
      dispatch(flushState());
    }
  }, []);

  useEffect(() => {
    if (!ordersApiResponse) {
      return;
    }
    dispatch(calculateOrders(allIngredients, ordersApiResponse, "history"));
  }, [ingredientsLoading, ordersApiResponse, connectedUrl]);

  if ( connectedUrl !== "wss://norma.nomoreparties.space/orders" ) {
    return (
      <Loader />
    );
  }

  return (
    <FeedDisplay />
  );
}
