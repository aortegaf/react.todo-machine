import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { AddTodoButton } from "./AddTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "1st Task", completed: false },
  { text: "2nd Task", completed: false },
  { text: "3rd Task", completed: false },
  { text: "4th Task", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={3} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem task={todo.text} />
        ))}
      </TodoList>

      <AddTodoButton />
    </>
  );
}

export default App;
