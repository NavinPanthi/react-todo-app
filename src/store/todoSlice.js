import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.push(newToDo);
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
