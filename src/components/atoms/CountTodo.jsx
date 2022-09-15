export const CountTodo = (props) => {
  const { children, countColor, countNum } = props;
  const contentStyle = {
    background: countColor,
  };

  return (
    <div style={contentStyle} id="wholeTasks">
      {children}:<span id="wholeCounts">{countNum}</span>
    </div>
  );
};
