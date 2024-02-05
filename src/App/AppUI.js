import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodoContext } from "../TodoContext";
import "./AppUI.css";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <section>
        {loading && <TodosLoading />}
        {error && <p>"ERROR"</p>}

        {!loading && !error && (
          <div className="app-container">
            <div className="list-header">
              <h1>TO DO List</h1>
              <TodoCounter />
              <TodoSearch />
            </div>

            <TodoList>
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  task={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>

            <div className="button-container">
              <AddTodoButton />
            </div>
          </div>
        )}
      </section>

      <footer>Developed by: Andrés Ortega</footer>
    </>
  );
}

export { AppUI };
