import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { Dispatch } from "redux";
import { TApplicationActions, RootState } from "./store";

export type AppDispatch = Dispatch<TApplicationActions>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
export const useDispatch = () => dispatchHook<TApplicationActions>();
