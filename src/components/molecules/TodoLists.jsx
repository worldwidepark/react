export const TodoLists = (props) => {
  const { todoLists } = props;
  return (
    <ul>
      {todoLists.map((todo) => {
        return <li>{todo}</li>;
      })}
    </ul>
  );
};
