export const CountTodo = (props) => {
  const { children, countColor, countNum } = props;
  const contentStyle = {
    background: countColor,
    fontSize: "20px",
    color: "black",
    margin: "10px",
    padding: "3px",
  };

  return (
    <span style={contentStyle}>
      {children}:<span>{countNum}</span>
    </span>
  );
};
