import { useSelector } from "react-redux";

const CompletedItems = () => {
  const totalItems = useSelector((state) => state.todo.todos);
  const completedCount = totalItems.filter((todo) => todo.completed).length;
  return (
    <div>
      <h1 className="text-semibold text-md font-light text-slate-500">
        Completed Items:{" "}
        <span className="font-semibold text-black">{completedCount}</span>
      </h1>
      <br />
    </div>
  );
};
export default CompletedItems;
