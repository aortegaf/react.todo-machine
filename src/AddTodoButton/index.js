function AddTodoButton(props) {
  return (
    <button
      onClick={() => {
        props.setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { AddTodoButton };
