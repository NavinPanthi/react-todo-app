import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";
const AddToDo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || title === "") return; //if the input is empty do nothing and don't add to list of todos
    dispatch(todoActions.addToDo(title));
  };
  return (
    <div className="my-3">
      <h3 className="font-semibold text-xl pt-5">Add To Do</h3>
      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-column gap-2 md:flex-row"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          required="required"
          type="text"
          id="newtodo"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-dark-500 focus:ring-1 text-sm"
          placeholder="Enter the new to do title."
        />
        <button className="bg-green-600 text-white w-1/2 rounded-md hover:bg-green-700 ring-indigo-900 text-semibold focus:ring-2">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddToDo;
