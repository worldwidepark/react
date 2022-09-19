// import { TodoLists } from "./TodoLists";
import { useContext } from "react";
import { useState } from "react";
import { TodoListsContext } from "../../providers/TodoListsProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { CountsTodo } from "./CountsTodo";
import { TodoLists } from "./TodoLists";

export const InputTodo = () => {
  // const { todoText, onChange, onClick } = props;
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // const onChangeTodoEditText = (event, index) => {
  //   const todos = [...todoLists];
  //   todos[index].data = event.target.value;
  //   setTodoLists(todos);
  // };

  const { todoLists, setTodoLists } = useContext(TodoListsContext);
  // const [todoLists, setTodoLists] = useState([]);

  const onClickAdd = () => {
    const newTodos = [...todoLists, { data: todoText, isEdited: false }];
    setTodoLists(newTodos);
    setTodoText("");
  };

  // const [checkedCount, setCheckedCount] = useState(0);

  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     // console.log(todoLists.length);
  //     setCheckedCount(checkedCount + 1);
  //   } else {
  //     setCheckedCount(checkedCount - 1);
  //   }
  // };

  // const deleteToDoList = (index) => {
  //   if (window.confirm("Are you sure to delete this list?")) {
  //     const todos = [...todoLists];
  //     todos.splice(index, 1);
  //     setTodoLists(todos);
  //   }
  // };

  // const makeEdit = (index) => {
  //   const todos = [...todoLists];
  //   todos[index].isEdited = !todos[index].isEdited;
  //   setTodoLists(todos);
  // };
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
        <PrimaryButton buttonColor="#4caf50" onClick={onClickAdd}>
          保存
        </PrimaryButton>
      </form>
      <div>
        {/* <CountsTodo
          wholeCounts={todoLists.length}
          doneCounts={checkedCount}
          doneYetCounts={todoLists.length - checkedCount}
        /> */}
      </div>
      <TodoLists />
      {/* <ul>
        {todoLists.map((todo, index) => {
          {
            if (todo.isEdited) {
              return (
                <div>
                  <input
                    type="text"
                    defaultValue={todo.data}
                    onChange={(e) => onChangeTodoEditText(e, index)}
                  />
                  <PrimaryButton
                    buttonColor="#4caf50"
                    onClick={() => makeEdit(index)}
                  >
                    保存
                  </PrimaryButton>
                </div>
              );
            } else {
              return (
                <div>
                  <input
                    type="checkbox"
                    name="todolist"
                    onChange={handleChange}
                  ></input>
                  {todo.data}
                  {console.log(todo.data)}
                  <PrimaryButton
                    buttonColor="#4caf50"
                    onClick={() => makeEdit(index)}
                  >
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
            }
          }
        })}
      </ul> */}
    </>
  );
};
