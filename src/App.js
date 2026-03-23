import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return; // prevent empty todos
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Toggle done/undone
  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        {/* Input and Add Button */}
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 border rounded hover:bg-gray-50"
            >
              <span
                onClick={() => toggleDone(index)}
                className={`flex-grow cursor-pointer ${todo.done ? "line-through text-gray-400" : ""
                  }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
