import { configureStore } from "@reduxjs/toolkit";
import { developerSlice } from "./slices/userSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export function createStore() {
  return configureStore({
    reducer: {
      developer: developerSlice.reducer,
    },
  });
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
