import "./App.css";
import { InputTodo } from "./components/molecules/InputTodo";
import { TodoLists } from "./components/template/TodoLists";
import { TodoListsProvider } from "./providers/TodoListsProvider";

function App() {
  return (
    <TodoListsProvider>
      <div className="App">
        <div className="Title">To do list</div>
        <InputTodo className="Input" />
        <TodoLists />
      </div>
    </TodoListsProvider>
  );
}

export default App;
