import "./AddTodoButton.css";

function AddTodoButton(props) {
  return (
    <button
      className="open-modal-button"
      onClick={() => {
        props.setOpenModal(true);
      }}
    >
      +
    </button>
  );
}

export { AddTodoButton };
