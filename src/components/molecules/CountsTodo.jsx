import { CountTodo } from "../atoms/CountTodo";

export const CountsTodo = (props) => {
  const { wholeCounts, doneCounts, doneYetCounts } = props;
  const contentStyle = {
    margin: "10px",
  };
  const eachTodoCount = [
    { label: "全てのタスク", color: "gold", count: wholeCounts },
    { label: "完了済", color: "aqua", count: doneCounts },
    { label: "未完了", color: "salmon", count: doneYetCounts },
  ];

  return (
    <div style={contentStyle}>
      {eachTodoCount.map((todoCount) => (
        <CountTodo countColor={todoCount.color} countNum={todoCount.count}>
          {todoCount.label}
        </CountTodo>
      ))}
    </div>
  );
};
