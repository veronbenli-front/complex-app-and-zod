import "./App.css";
import Icons from "./components/icons";
import TodoList from "./components/todo-list";
import CounterBox from "./components/counter-box";
import Form from "./components/form";

function App() {


  return (
    <div className="min-h-screen w-screen bg-gray-700 flex flex-col items-center justify-start">
      <Icons />
      <CounterBox />
      <TodoList />
      <Form />
    </div>
  );
}

export default App;
