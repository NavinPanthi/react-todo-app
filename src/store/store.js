import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }, // TODO add reducers here.
});
export default store;