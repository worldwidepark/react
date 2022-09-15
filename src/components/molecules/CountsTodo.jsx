import { CountTodo } from "../atoms/CountTodo";

export const CountsTodo = () => {
  return (
    <>
      <CountTodo countColor={"gold"} countNum={1}>
        全てのタスク
      </CountTodo>
      <CountTodo countColor={"aqua"} countNum={2}>
        完了済
      </CountTodo>
      <CountTodo countColor={"salmon"} countNum={3}>
        未完了
      </CountTodo>
    </>
  );
};
