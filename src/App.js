import React from "react";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";

const defaultTodos = [
  { text: "1st Task", completed: true },
  {
    text: "2nd Task",
    completed: false,
  },
  { text: "3rd Task", completed: false },
  { text: "4th Task", completed: false },
  // {
  //   text: "TaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTaskTask",
  //   completed: false,
  // },
];

localStorage.setItem("TODO_LIST", JSON.stringify(defaultTodos));

function App() {
  const storagedStringTodos = localStorage.getItem("TODO_LIST");
  let storagedParsedTodos;

  if (!storagedStringTodos) {
    localStorage.setItem("TODO_LIST", JSON.stringify([]));
    storagedParsedTodos = [];
  } else {
    storagedParsedTodos = JSON.parse(storagedStringTodos);
  }

  const [todos, setTodos] = React.useState(storagedParsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODO_LIST", JSON.stringify(newTodos));
    setTodos(newTodos);
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
    <>
      <section>
        <div className="app-container">
          <div className="list-header">
            <h1>TO DO List</h1>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
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
      </section>

      <footer>Developed by: Andrés Ortega</footer>
    </>
  );
}

export default App;
