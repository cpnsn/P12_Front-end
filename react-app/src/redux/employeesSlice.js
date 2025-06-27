import { createSlice } from "@reduxjs/toolkit";

const stored = JSON.parse(localStorage.getItem("employees")) || [];

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: stored,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state.list));
    },
  },
});


export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
