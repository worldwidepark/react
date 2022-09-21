export const CountTodo = (props) => {
  const { children, countColor, countNum } = props;
  const contentStyle = {
    background: countColor,
    fontSize: "16px",
    color: "black",
    margin: "5px",
    padding: "3px",
  };

  return (
    <span style={contentStyle}>
      {children}:<span>{countNum}</span>
    </span>
  );
};
