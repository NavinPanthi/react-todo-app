import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    todo:[],
    id: 0
  ],
  reducers: {
    incNextId: ()
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.push(newToDo);
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
