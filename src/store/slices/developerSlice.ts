import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: developerState = {
  developers: [
    {
      id: 1,
      name: "Sandhya",
      email: "sandhya_srinivasan@outlook.com",
      role: "Fullstack",
      status: "Full time",
      team: "Team A",
    },
    {
      id: 2,
      name: "Swetha",
      email: "swethasrini02@gmail.com",
      role: "Frontend",
      status: "Contractor",
      team: "Team B",
    },
    {
      id: 3,
      name: "Max",
      email: "max.carl@beyondplay.com",
      role: "Fullstack",
      status: "Not available",
      team: "Team A",
    },
    {
      id: 4,
      name: "Nitish",
      email: "nitish.ram@outlook.com",
      role: "Backend",
      status: "Full time",
      team: "Team C",
    },
    // {
    //   id: 5,
    //   name: "new user",
    //   email: "nitish@outlook.com",
    //   role: "Backend",
    //   status: "Full time",
    //   team: "Team C",
    // },
    // {
    //   id: 6,
    //   name: "Voldemort",
    //   email: "voldemort@outlook.com",
    //   role: "Backend",
    //   status: "Full time",
    //   team: "Team C",
    // },
  ],
  selectedDeveloper: {},
};

export const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    addDeveloper: (state, action: PayloadAction<developer>) => {
      state.developers.push(action.payload);
    },
    getDeveloper: (state, action: PayloadAction<developer>) => {
      state.selectedDeveloper = action.payload;
    },
    editDeveloper: (state, action: PayloadAction<developer>) => {
      state.developers.map((element, index): void => {
        if (element.id === action.payload.id)
          state.developers[index] = action.payload;
      });
    },
  },
  //   extraReducers: (builder) => {},
});

export default developerSlice.reducer;
export const { addDeveloper, getDeveloper, editDeveloper } =
  developerSlice.actions;
