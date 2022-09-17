// import { TodoLists } from "./TodoLists";
import { useState } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { CountsTodo } from "./CountsTodo";

export const InputTodo = () => {
  // const { todoText, onChange, onClick } = props;
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const [todoLists, setTodoLists] = useState([]);

  const onClickAdd = () => {
    const newTodos = [...todoLists, todoText];
    setTodoLists(newTodos);
  };
  const [checkedCount, setCheckedCount] = useState(0);

  const HandleChange = (event) => {
    if (event.target.checked) {
      // console.log(todoLists.length);
      setCheckedCount(checkedCount + 1);
    } else {
      setCheckedCount(checkedCount - 1);
    }
  };

  const deleteToDoList = (index) => {
    const newTodos = [...todoLists];
    newTodos.splice(index, 1);
    setTodoLists(newTodos);
  };
  const makeEditInput = (index) => {
    const newTodos = [...todoLists];
    newTodos.splice(index, 1);
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
        {todoLists.map((todo, index) => {
          return (
            <div>
              <input
                type="checkbox"
                name="todolist"
                onChange={HandleChange}
              ></input>
              {todo}
              <PrimaryButton buttonColor="#4caf50" onClick={makeEditInput}>
                編集
              </PrimaryButton>
              <PrimaryButton
                buttonColor="violet"
                onClick={() => deleteToDoList(index)}
              >
                削除
              </PrimaryButton>
            </div>
          );
        })}
      </ul>
      <CountsTodo
        wholeCounts={todoLists.length}
        doneCounts={checkedCount}
        doneYetCounts={todoLists.length - checkedCount}
      />
    </>
  );
};
