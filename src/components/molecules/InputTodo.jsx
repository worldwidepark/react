// import { TodoLists } from "./TodoLists";
import { useState } from "react";

export const InputTodo = () => {
  // const { todoText, onChange, onClick } = props;
  const [todoText, setTodoText] = useState("aaa", "aaaa");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const [todoLists, setTodoLists] = useState([]);
  const onClickAdd = () => {
    const newTodos = [...todoLists, todoText];
    setTodoLists(newTodos);
  };
  return (
    <>
      <form id="inputToDoForm">
        <input
          id="inputToDo"
          value={todoText}
          onChange={onChangeTodoText}
          type="text"
          maxlength="20"
        />
        <button id="inputButton" type="button" onClick={onClickAdd}>
          保存
        </button>
      </form>
      <ul>
        {todoLists.map((todo) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
