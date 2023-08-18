import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { useState } from "react";

const Task = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(todoActions.editToDo({ title: e.target.value, id }));
  };
  const handleDelete = (e) => {
    dispatch(todoActions.deleteToDo(id));
  };

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          onChange={handleChange}
          required="required"
          type="text"
          id="newtodo"
          value={title}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 mx-2 shadow-sm focus:outline-none focus:border-sky-500 500 focus:ring-dark-500 focus:ring-1 text-sm"
          placeholder="Enter the new to do title."
        />
        <button
          className="bg-green-600 text-sm w-1/6 mr-2 py-1 text-white rounded-md hover:bg-green-700 ring-indigo-900 text-semibold focus:ring-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <p className="flex-1 mx-2">{title}</p>{" "}
        <button
          className="bg-slate-600 text-sm w-1/6 mr-2 py-1 text-white rounded-md hover:bg-slate-700 ring-indigo-900 text-semibold focus:ring-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div className="flex flex-row">
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {todoContent}
      <button
        className="bg-rose-600 text-sm w-1/6  py-1 text-white rounded-md hover:bg-rose-700 ring-indigo-900 text-semibold focus:ring-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
