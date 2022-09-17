import "./App.css";
import { CountsTodo } from "./components/molecules/CountsTodo";
import { InputTodo } from "./components/molecules/InputTodo";
import { TodoLists } from "./components/molecules/TodoLists";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputTodo />
      </header>
    </div>
  );
}

export default App;
