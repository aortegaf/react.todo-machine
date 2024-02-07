import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  if (totalTodos == 0) {
    return <h3>Start by adding your first to-do with the "+" button </h3>;
  } else if (completedTodos === totalTodos) {
    return <h2>All done</h2>;
  } else {
    return (
      <h2>
        {completedTodos} of {totalTodos} completed
      </h2>
    );
  }
}

export { TodoCounter };
