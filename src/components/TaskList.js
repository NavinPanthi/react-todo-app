import { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = () => {
  const todos = useSelector((state)=> state.todo);
  return (
    <ul className="border-slate-200 rounded-md divide-y my-5 py-2">
      {todos.map((todo, index) => (
        <li key={index} className="py-2">
          <Task id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
