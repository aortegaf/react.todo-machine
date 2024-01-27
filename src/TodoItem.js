function TodoItem(props) {
  return (
    <li>
      <span className="marker">•</span>
      <p className={`${props.completed && "completed"}`}>{props.task}</p>
      <div className="item-options">
        <i id="checkItem" onClick={props.onComplete}>
          V
        </i>
        <i id="deleteItem" onClick={props.onDelete}>
          X
        </i>
      </div>
    </li>
  );
}

export { TodoItem };
