import React from "react";
import {
  deleteTodo,
  TodoInterface,
  toggleTodo,
} from "../../../../redux/todoSlice";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

type TodoItemProps = {
  todo: TodoInterface;
  editTodo: TodoInterface | null;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) => void;
};

// We put props in the function
const TodoItem = ({
  todo,
  editTodo,
  getEditTodo,
  setEditTodo,
}: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggleTodoChange = () =>
    dispatch(toggleTodo({ todoId: todo.id }));
  const handleGetEditTodoClick = () => getEditTodo(todo);
  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo({ todoId: todo.id }));
    if (todo.id === editTodo?.id) {
      setEditTodo({ id: "", task: "", completed: false });
    }
  };

  return (
    <li>
      <label
        htmlFor={todo.id}
        style={
          todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        <input
          onChange={handleToggleTodoChange}
          checked={todo.completed ? true : false}
          type="checkbox"
          id={todo.id}
          className="todo-list__checkbox"
        />
        {todo.task}
      </label>

      <div className="todo-list__btns-box">
        <button
          title="task-edit"
          onClick={handleGetEditTodoClick}
          className="todo-list__btn todo-list__edit-btn"
        >
          <MdModeEdit />
        </button>
        <button
          title="task-delete"
          onClick={handleDeleteTodoClick}
          className="todo-list__btn todo-list__delete-btn"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
