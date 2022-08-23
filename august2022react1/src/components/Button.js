const Button = (props) => {
  const color = `btn btn-${props.color || 'primary'}`
  return (
    <button
      className={props.className || color}
      {...props}
    >
      {props.children || "click me"}
    </button>
  );
};
export default Button;
