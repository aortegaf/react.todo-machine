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

function App() {
  return (
    <>
      <section>
        <div className="app-container">
          <div className="list-header">
            <h1>TO DO List</h1>
            <TodoCounter completed={1} total={3} />
            <TodoSearch />
          </div>

          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                task={todo.text}
                completed={todo.completed}
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
