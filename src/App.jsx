
import React from 'react'
import { useState } from 'react';
import './App.css'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const AddTodo = () => {
    if (todo !== ""){
    setTodos([...todos, todo]);
    setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>React Todo List App</h1>
      <TodoInput todo={todo} setTodo={setTodo} AddTodo={AddTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;