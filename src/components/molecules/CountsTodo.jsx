import { CountTodo } from "../atoms/CountTodo";

export const CountsTodo = () => {
  return (
    <>
      <CountTodo countColor={"gold"} countNum={1} />
      <CountTodo countColor={"aqua"} countNum={2} />
      <CountTodo countColor={"salmon"} countNum={3} />
    </>
  );
};
