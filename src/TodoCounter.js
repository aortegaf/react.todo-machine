function TodoCounter(props) {
  if (props.completed == props.total && props.total !== 0) {
    return <h2>All done</h2>;
  } else {
    return (
      <h2>
        {props.completed} of {props.total} completed
      </h2>
    );
  }
}

export { TodoCounter };
