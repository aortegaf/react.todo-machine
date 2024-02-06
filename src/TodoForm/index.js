import React from "react";
import "./TodoForm.css";

function TodoForm(props) {
  return (
    <form>
      <label>New TO DO:</label>
      <textarea />
      <div className="form-options">
        <button
          className="cancel-todo-button"
          onClick={() => {
            props.setOpenModal(false);
          }}
        >
          Cancel
        </button>
        <button>Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
