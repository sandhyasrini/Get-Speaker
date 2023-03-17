import { configureStore } from "@reduxjs/toolkit";

export function createStore() {
    return configureStore({
        reducer: {}
    })
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch