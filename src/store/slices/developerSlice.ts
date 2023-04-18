import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { defaultReduxState } from '../../config/constants'
import {
  addDeveloperToDatabase,
  editDeveloper,
  getDeveloperList
} from '../actions/developerAction'

export interface developer {
  id: number
  name: string
  email: string
  role: string
  status: string
  team: string
}

export interface dropdown {
  id: number
  value: string
}

export interface developerState {
  developers: developer[]
  selectedDeveloper: developer | {}
  roles: dropdown[]
  status: dropdown[]
  team: dropdown[]
  isLoading: boolean
  isError: boolean
}

const initialState: developerState = {
  developers: [],
  selectedDeveloper: {},
  roles: defaultReduxState.roles,
  team: defaultReduxState.team,
  status: defaultReduxState.status,
  isLoading: false,
  isError: false
}

export const developerSlice = createSlice({
  name: 'developer',
  initialState,
  reducers: {
    currentDeveloper: (state, action: PayloadAction<developer>) => {
      state.selectedDeveloper = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDeveloperList.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getDeveloperList.fulfilled, (state, action) => {
      state.developers = [...action.payload.developers]
      state.isLoading = false
    })
    builder.addCase(getDeveloperList.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
    })
    builder.addCase(addDeveloperToDatabase.fulfilled, (state, action) => {
      state.developers = [...state.developers, action.payload.addNewDeveloper]
    })
    builder.addCase(editDeveloper.fulfilled, (state, action) => {
      state.developers.forEach((element, index): void => {
        if (element.id === action.payload.editedDeveloper.id) { state.developers[index] = action.payload.editedDeveloper }
      })
    })
    builder.addCase(editDeveloper.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export default developerSlice.reducer
export const { currentDeveloper } = developerSlice.actions
