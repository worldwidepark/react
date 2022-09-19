import { useContext, useState } from "react";
import { TodoListsContext } from "../../providers/TodoListsProvider";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { CountsTodo } from "./CountsTodo";

export const TodoLists = () => {
  const { todoLists, setTodoLists } = useContext(TodoListsContext);
  const onChangeTodoEditText = (event, index) => {
    const todos = [...todoLists];
    todos[index].data = event.target.value;
    setTodoLists(todos);
  };

  const deleteToDoList = (index) => {
    if (window.confirm("Are you sure to delete this list?")) {
      const todos = [...todoLists];
      todos.splice(index, 1);
      setTodoLists(todos);
    }
  };

  const makeEdit = (index) => {
    const todos = [...todoLists];
    todos[index].isEdited = !todos[index].isEdited;
    setTodoLists(todos);
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
      <div>
        <CountsTodo
          wholeCounts={todoLists.length}
          doneCounts={checkedCount}
          doneYetCounts={todoLists.length - checkedCount}
        />
      </div>

      <ul>
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
      </ul>
    </>
  );
};
