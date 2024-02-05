import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  if (completedTodos === totalTodos && totalTodos !== 0) {
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
