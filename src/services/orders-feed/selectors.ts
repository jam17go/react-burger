import { RootState } from "../store";
import { IOrderCalculated } from "./actions"

export const getReadyOrders = (state: RootState) => {
  return state.ordersFeed.readyOrders;
};

export const getInProgressOrders = (state: RootState) => {
  return state.ordersFeed.inProgressOrders;
};

export const getTotalOrders = (state: RootState) => {
  return state.ordersFeed.totalOrders;
};

export const getTotalTodayOrders = (state: RootState) => {
  return state.ordersFeed.totalTodayOrders;
};

export const getOrders = (state: RootState) => {
  return state.ordersFeed.orders;
};

export const calculationComplete = (state: RootState) => {
  return state.ordersFeed.updateComplete;
}