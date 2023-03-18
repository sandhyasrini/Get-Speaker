import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface developer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status?: string;
  team: string;
}

interface developerState {
  developers: developer[];
  developer: developer | {};
}

const initialState: developerState = {
  developers: [
    {
      id: 123,
      first_name: "Sandhya",
      last_name: "Srinivasan",
      email: "sandhya_srinivasan@outlook.com",
      role: "Fullstack",
      status: "Full time",
      team: "Team A",
    },
    {
      id: 456,
      first_name: "Swetha",
      last_name: "Srinivasan",
      email: "swethasrini02@gmail.com",
      role: "Frontend",
      status: "Contractor",
      team: "Team B",
    },
    {
      id: 754,
      first_name: "Max",
      last_name: "Carl",
      email: "max.carl@beyondplay.com",
      role: "Fullstack",
      team: "Team A",
    },
    {
      id: 549,
      first_name: "Nitish",
      last_name: "Ram",
      email: "nitish.ram@outlook.com",
      role: "Backend",
      status: "Full time",
      team: "Team C",
    },
    {
      id: 123,
      first_name: "Sandhya",
      last_name: "Srinivasan",
      email: "sandhya_srinivasan@outlook.com",
      role: "Fullstack",
      status: "Full time",
      team: "Team A",
    },
    {
      id: 456,
      first_name: "Swetha",
      last_name: "Srinivasan",
      email: "swethasrini02@gmail.com",
      role: "Frontend",
      status: "Contractor",
      team: "Team B",
    },
    {
      id: 754,
      first_name: "Max",
      last_name: "Carl",
      email: "max.carl@beyondplay.com",
      role: "Fullstack",
      team: "Team A",
    },
    {
      id: 549,
      first_name: "Nitish",
      last_name: "Ram",
      email: "nitish.ram@outlook.com",
      role: "Backend",
      status: "Full time",
      team: "Team C",
    },
    {
      id: 123,
      first_name: "Sandhya",
      last_name: "Srinivasan",
      email: "sandhya_srinivasan@outlook.com",
      role: "Fullstack",
      status: "Full time",
      team: "Team A",
    },
    {
      id: 456,
      first_name: "Swetha",
      last_name: "Srinivasan",
      email: "swethasrini02@gmail.com",
      role: "Frontend",
      status: "Contractor",
      team: "Team B",
    },
    {
      id: 754,
      first_name: "Max",
      last_name: "Carl",
      email: "max.carl@beyondplay.com",
      role: "Fullstack",
      team: "Team A",
    },
    {
      id: 549,
      first_name: "Nitish",
      last_name: "Ram",
      email: "nitish.ram@outlook.com",
      role: "Backend",
      status: "Full time",
      team: "Team C",
    },
  ],
  developer: {},
};

export const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    addDeveloper: (state, action: PayloadAction<developer>) => {
      state.developers.push(action.payload);
    },
    getDeveloper: (state, action: PayloadAction<developer>) => {
      state.developer = action.payload;
    },
  },
  //   extraReducers: (builder) => {},
});

export default developerSlice.reducer;
export const { addDeveloper } = developerSlice.actions;
