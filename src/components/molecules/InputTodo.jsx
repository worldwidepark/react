// import { TodoLists } from "./TodoLists";
import { useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const InputTodo = () => {
  // const { todoText, onChange, onClick } = props;
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const [todoLists, setTodoLists] = useState([]);
  const onClickAdd = () => {
    const newTodos = [...todoLists, todoText];
    setTodoLists(newTodos);
    console.log(checkedCount);
  };
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.checked) {
      // console.log(todoLists.length);
      setCheckedCount(checkedCount + 1);
    } else {
      setCheckedCount(checkedCount - 1);
    }
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
            <div>
              <input
                type="checkbox"
                name="todolist"
                onChange={handleChange}
              ></input>
              {todo}
              <PrimaryButton buttonColor="#4caf50" onClick="makeEditInput">
                編集
              </PrimaryButton>
              <PrimaryButton buttonColor="violet" onClick="deleteToDoList">
                削除
              </PrimaryButton>
            </div>
          );
        })}
      </ul>
    </>
  );
};
