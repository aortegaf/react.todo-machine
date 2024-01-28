import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

function TodoItem(props) {
  return (
    <li>
      <span className="marker">•</span>
      <p className={`${props.completed && "completed"}`}>{props.task}</p>
      <div className="item-options">
        <i id="checkItem" onClick={props.onComplete}>
          <CiCircleCheck />
        </i>
        <i id="deleteItem" onClick={props.onDelete}>
          <CiTrash />
        </i>
      </div>
    </li>
  );
}

export { TodoItem };
