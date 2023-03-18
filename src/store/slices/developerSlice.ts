import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface developer {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status?: string;
  team: string;
}

interface developerState {
  developers: developer[];
}

const initialState: developerState = {
  developers: [
    {
      first_name: "Sandhya",
      last_name: "Srinivasan",
      email: "sandhya_srinivasan@outlook.com",
      role: "Fullstack",
      status: "Full time",
      team: "Team A",
    },
    {
      first_name: "Swetha",
      last_name: "Srinivasan",
      email: "swethasrini02@gmail.com",
      role: "Frontend",
      status: "Contractor",
      team: "Team B",
    },
    {
      first_name: "Max",
      last_name: "Carl",
      email: "max.carl@beyondplay.com",
      role: "Fullstack",
      team: "Team A",
    },
    {
      first_name: "Nitish",
      last_name: "Ram",
      email: "nitish.ram@outlook.com",
      role: "Backend",
      status: "Full time",
      team: "Team C",
    },
  ],
};

export const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    addDeveloper: (state, action: PayloadAction<developer>) => {
      state.developers.push(action.payload);
    },
  },
  //   extraReducers: (builder) => {},
});

export default developerSlice.reducer;
export const { addDeveloper } = developerSlice.actions;
