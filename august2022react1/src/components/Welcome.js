const Welcome = (props) => {
  return (
    <button
      className='btn btn-primary m-2'
    >
      {`Hello, ${props.name}`}
    </button>
  );
};
export default Welcome;
