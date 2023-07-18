// TodoList.jsx

import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Yapılacakları girin"
          value={todoText}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleAddTodo}>
          Ekle
        </Button>
      </InputGroup>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            {todo}
            <Trash onClick={() => handleDeleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
