import { createContext, useState } from "react";

export const TodoListsContext = createContext({});

export const TodoListsProvider = (props) => {
  const [todoLists, setTodoLists] = useState([]);
  const { children } = props;
  return (
    <TodoListsContext.Provider value={{ todoLists, setTodoLists }}>
      {children}
    </TodoListsContext.Provider>
  );
};
