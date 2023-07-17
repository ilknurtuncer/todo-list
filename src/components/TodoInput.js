import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo..."
        className="border border-gray-300 rounded-l px-4 py-2 w-64"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
