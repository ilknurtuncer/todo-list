import React, { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4">
        <TodoInput addTodo={handleAddTodo} />
        <ul className="list-disc pl-8">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
