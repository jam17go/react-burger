import { RootState } from "../store";

export const getOrder = (state: RootState) => state.order.order;
export const getOrderErrorStatus = (state: RootState) => state.order.error;
export const getOrderLoadingStatus = (state: RootState) => state.order.loading;
