import "./App.css";
import AddToDo from "./components/AddToDo";
import TaskList from "./components/TaskList";
import CompletedItems from "./components/CompletedItems";
function App() {
  return (

    <div className=" container mt-3">
      <h1 className="font-semibold text-5xl">To do App</h1>
      <AddToDo />
      <TaskList />
      <CompletedItems />
    </div>
  );
}

export default App;
