import { useContext } from "react";
import { useState } from "react";
import { TodoListsContext } from "../../providers/TodoListsProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";

export const InputTodo = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const { todoLists, setTodoLists } = useContext(TodoListsContext);

  const inputStyle = {
    width: "65%",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "2px solid #ddd",
  };
  const formStyle = {
    margin: "30px",
  };

  const onClickAdd = () => {
    if (todoText === "") {
      alert("Please Put something.");
    } else {
      const newTodos = [...todoLists, { data: todoText, isEdited: false }];
      setTodoLists(newTodos);
      setTodoText("");
    }
  };

  return (
    <>
      <form style={formStyle}>
        <input
          style={inputStyle}
          id="inputToDo"
          value={todoText}
          onChange={onChangeTodoText}
          type="text"
          maxLength="18"
        />
        <PrimaryButton buttonColor="#4caf50" onClick={onClickAdd}>
          保存
        </PrimaryButton>
      </form>
    </>
  );
};
