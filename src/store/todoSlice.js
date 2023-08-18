import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [], id: 0 },
  reducers: {
    incNextId: (state) => {
      state.id++;
    },
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newToDo);
    },
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editToDo: (state, action) => {
      const { title, id } = action.payload;
      const editingToDo = state.todos.find((todo) => todo.id === id);
      if (editingToDo) {
        editingToDo.title = title;
      }
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
