import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import "./AppUI.css";

function AppUI(props) {
  return (
    <>
      <section>
        <div className="app-container">
          <div className="list-header">
            <h1>TO DO List</h1>
            <TodoCounter
              completed={props.completedTodos}
              total={props.totalTodos}
            />
            <TodoSearch
              searchValue={props.searchValue}
              setSearchValue={props.setSearchValue}
            />
          </div>

          <TodoList>
            {props.searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                task={todo.text}
                completed={todo.completed}
                onComplete={() => props.completeTodo(todo.text)}
                onDelete={() => props.deleteTodo(todo.text)}
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

export { AppUI };
