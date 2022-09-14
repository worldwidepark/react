import "./App.css";
import { CountsTodo } from "./components/molecules/CountsTodo";
import { InputTodo } from "./components/molecules/InputTodo";
import { TodoLists } from "./components/molecules/TodoLists";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <InputTodo />
        <CountsTodo />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
