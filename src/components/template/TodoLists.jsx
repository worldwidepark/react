import { useContext, useState } from 'react';
import { TodoListsContext } from '../../providers/TodoListsProvider';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { CountsTodo } from '../molecules/CountsTodo';

export const TodoLists = () => {
  const { todoLists, setTodoLists } = useContext(TodoListsContext);

  const onChangeTodoEditText = (event, index) => {
    const todos = [...todoLists];
    todos[index].data = event.target.value;
    setTodoLists(todos);
  };

  const deleteToDoList = (index) => {
    if (window.confirm('Are you sure to delete this list?')) {
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

  const todoListsStyle = {
    width: '300px',
    position: 'absolute',
    top: '60%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    alignItems: 'flex-start',
    borderRadius: '5px',
    fontSize: '15px',
    border: '2px solid #d1d3d4',
  };

  const editInputStyle = {
    position: 'relative',
    left: '10px',
    width: '65%',
    fontSize: '16px',
    border: '2px solid #ddd',
    margin: '10px',
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

      <ul style={todoListsStyle}>
        {todoLists.length === 0 && (
          <div style={{ color: 'red' }}>Nothing to do. Put something.</div>
        )}
        {todoLists.map((todo, index) =>
          todo.isEdited ? (
            <div key={index}>
              <input
                style={editInputStyle}
                type="text"
                defaultValue={todo.data}
                onChange={(e) => onChangeTodoEditText(e, index)}
                maxLength="18"
              />
              <PrimaryButton
                buttonColor="#4caf50"
                onClick={() => makeEdit(index)}
              >
                保存
              </PrimaryButton>
            </div>
          ) : (
            <div key={index}>
              <input
                style={{ margin: '8px' }}
                type="checkbox"
                name="todolist"
                onChange={handleChange}
              />
              <span
                style={{
                  display: 'inline-block',
                  width: '160px',
                  textAlign: 'left',
                }}
              >
                {todo.data}
              </span>

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
          )
        )}
      </ul>
    </>
  );
};
