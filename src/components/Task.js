import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

const Task = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleChange = () => {};
  const handleDelete = (e) => {
    dispatch(todoActions.deleteToDo(id));
  };
  return (
    <div className="flex flex-row">
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <p className="flex-1 ml-2">{title}</p>
      <button
        className="bg-rose-600 text-sm w-1/5 py-1 text-white rounded-md hover:bg-rose-700 ring-indigo-900 text-semibold focus:ring-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
