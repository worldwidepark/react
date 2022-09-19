export const PrimaryButton = (props) => {
  const { children, buttonColor, onClick } = props;
  const contentStyle = {
    background: buttonColor,
  };

  return (
    <button style={contentStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};
