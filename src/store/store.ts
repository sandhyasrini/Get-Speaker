import { configureStore } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { developerSlice } from './slices/developerSlice'
import { modalSlice } from './slices/modalSlice'
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector
} from 'react-redux'

export function createStore() {
  return configureStore({
    reducer: {
      developer: developerSlice.reducer,
      modal: modalSlice.reducer
    }
  })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const getModal = (state: { modal: any }) => state.modal
const getDeveloper = (state: { developer: any }) => state.developer
export const createNewDeveloperSelector = createSelector([getDeveloper], (state) => state)
export const createNewModalSelector = createSelector([getModal], (state) => state)
