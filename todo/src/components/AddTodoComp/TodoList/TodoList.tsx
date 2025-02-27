import React from "react";
import { TodoInterface } from "../../../redux/todoSlice";
import TodoItem from "./TodoItem/TodoItem";

type TodoListProps = {
  todos: TodoInterface[];
  todoFilterValue: string;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) => void;
  editTodo: TodoInterface | null;
};

const TodoList = ({
  todos,
  todoFilterValue,
  editTodo,
  getEditTodo,
  setEditTodo,
}: TodoListProps) => {
  return (
    <div>
      <ul className="todo-list">
        {todos
          .filter((todo) => (todoFilterValue === "all" ? true : todo.completed))
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              getEditTodo={getEditTodo}
              setEditTodo={setEditTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
