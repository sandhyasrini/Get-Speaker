import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface developer {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  team: string;
}

export interface developerState {
  developers: developer[];
  selectedDeveloper: developer | {};
}

export const getDeveloperList = createAsyncThunk(
  "developers/getDeveloperList",
  async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/`);
      console.log("inside async thunk");
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addDeveloperToDatabase = createAsyncThunk(
  "developer/addDeveloper",
  async (value: developer) => {
    try {
      const { data } = await axios.post("http://localhost:3001/addDeveloper", {
        value,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const editDeveloper = createAsyncThunk(
  "developer/editDeveloper",
  async (value: developer) => {
    try {
      const { data } = await axios.put("http://localhost:3001/editDeveloper", {
        value,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);

const initialState: developerState = {
  developers: [],
  selectedDeveloper: {},
};

export const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    // addDeveloper: (state, action: PayloadAction<developer>) => {
    //   state.developers.push(action.payload);
    // },
    getDeveloper: (state, action: PayloadAction<developer>) => {
      state.selectedDeveloper = action.payload;
    },
    // editDeveloper: (state, action: PayloadAction<developer>) => {
    //   state.developers.map((element, index): void => {
    //     if (element.id === action.payload.id)
    //       state.developers[index] = action.payload;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeveloperList.fulfilled, (state, action) => {
        state.developers = [...action.payload].sort();
      })
      .addCase(addDeveloperToDatabase.fulfilled, (state, action) => {
        console.log(action.payload);
        state.developers = [...state.developers, action.payload].sort();
      })
      .addCase(editDeveloper.fulfilled, (state, action) => {
        state.developers.map((element, index): void => {
          if (element.id === action.payload.id)
            state.developers[index] = action.payload;
        });
      });
  },
});

export default developerSlice.reducer;
export const { getDeveloper } = developerSlice.actions;
