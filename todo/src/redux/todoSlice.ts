// Slice and Reducer for Todo

import { createSlice } from "@reduxjs/toolkit";

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

// Shape of Todos array

interface TodosListInterface {
  todos: TodoInterface[];
}

// initial Todos state

const initialState: TodosListInterface = {
  todos: [],
};

// todo slice with initial state and reducers to mutate state. They perform CRUD and also toggle todo. Redux-Toolkit uses Immutable.js which allows us to mutate state but on the background everything works as immutable state.

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload: { id, task, completed } }) => {
      state.todos.push({ id, task, completed });
    },

    deleteTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },

    editTodo: (state, { payload: { editedTodo } }) => {
      console.log(editedTodo);
      state.todos = state.todos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
    },

    toggleTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === todoId.id ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

// actions for telling reducer what to do with state, they can also include payload for changing state
export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions;

// reducer to change the state
export default todoSlice.reducer;
