export const CountTodo = (props) => {
  const { countColor, countNum } = props;
  const contentStyle = {
    background: countColor,
  };

  return (
    <div style={contentStyle} id="wholeTasks">
      Children:<span id="wholeCounts">{countNum}</span>
    </div>
  );
};
