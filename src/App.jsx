import "./App.css";
import { CountsTodo } from "./components/molecules/CountsTodo";
import { InputTodo } from "./components/molecules/InputTodo";
import { TodoListsProvider } from "./providers/TodoListsProvider";

function App() {
  return (
    <TodoListsProvider>
      <div className="App">
        <header className="App-header">
          <InputTodo />
        </header>
      </div>
    </TodoListsProvider>
  );
}

export default App;
