function TodoCounter(props) {
  return (
    <h2>
      {props.completed} of {props.total} completed
    </h2>
  );
}

export { TodoCounter };
