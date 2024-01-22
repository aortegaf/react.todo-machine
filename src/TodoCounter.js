function TodoCounter(props) {
  return (
    <h1>
      {props.completed} of {props.total} completed
    </h1>
  );
}

export { TodoCounter };
