import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodo, setNewTodo] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>New TO DO:</label>
      <textarea
        required
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <div className="form-options">
        <button
          className="cancel-todo-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
