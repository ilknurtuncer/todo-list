// App.js

import React, { useState } from "react";
import Header from "../src/components/Header";
import TodoList from "../src/components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <Header />
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
