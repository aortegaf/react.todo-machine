import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_LIST", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const updatedTodos = [...todos];
    updatedTodos.push({
      text: text,
      completed: false,
    });
    saveTodos(updatedTodos);
  };

  const completeTodo = (text) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.text === text);
    const todo = updatedTodos[index];
    todo.completed = !todo.completed;
    saveTodos(updatedTodos);
  };

  const deleteTodo = (text) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.text === text);
    updatedTodos.splice(index, 1);
    saveTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
