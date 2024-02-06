import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodosLoading } from "../TodosLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";
import "./AppUI.css";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

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
              <AddTodoButton setOpenModal={setOpenModal} />
            </div>

            {openModal && (
              <Modal>
                <TodoForm setOpenModal={setOpenModal} />
              </Modal>
            )}
          </div>
        )}
      </section>
      <footer>Developed by: Andrés Ortega</footer>
    </>
  );
}

export { AppUI };
