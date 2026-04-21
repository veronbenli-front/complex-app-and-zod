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
      <div  className='my-10 flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 rounded-lg'>
        <h1 className="text-3xl font-bold text-gray-100">Form</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
