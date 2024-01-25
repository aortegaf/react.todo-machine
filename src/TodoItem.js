function TodoItem(props) {
  return (
    <li>
      <span className="marker">•</span>
      <p>{props.task}</p>
      <div className="item-options">
        <i id="checkItem">V</i>
        <i id="deleteItem">X</i>
      </div>
    </li>
  );
}

export { TodoItem };
