import { CountTodo } from "../atoms/CountTodo";

export const CountsTodo = (props) => {
  const { wholeCounts, doneCounts, doneYetCounts } = props;
  return (
    <>
      <CountTodo countColor={"gold"} countNum={wholeCounts}>
        全てのタスク
      </CountTodo>
      <CountTodo countColor={"aqua"} countNum={doneCounts}>
        完了済
      </CountTodo>
      <CountTodo countColor={"salmon"} countNum={doneYetCounts}>
        未完了
      </CountTodo>
    </>
  );
};
