import React, { useState } from "react";
import { Itodo } from "../../types";
import "./Addtodo.css";

const INITIAL_Todo = {
  id: "",
  todo: "",
  urgent: false,
  completed: false,
};

interface IProps {
  className?: string;
  onSubmit: (todo: Itodo) => void;
}

const Addtodo = (props: IProps) => {
  const [todo, setTodo] = useState<Itodo>(INITIAL_Todo);

  const handleChange = (field: string, value: any) => {
    setTodo({ ...todo, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.todo.trim() === "") {
      alert("Please enter a valid task.");
      return;
    }
    const newTodo: Itodo = { ...todo, id: Date.now().toString() };
    props.onSubmit(newTodo);
    setTodo(INITIAL_Todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo" className="todo">
        Todo App
      </label>
      <input
        type="text"
        id="todo"
        placeholder="Enter your task"
        value={todo.todo}
        onChange={(e) => handleChange("todo", e.target.value)}
      />

      <div className="urgent-checkbox">
        <input
          type="checkbox"
          id="urgent"
          checked={todo.urgent}
          onChange={(e) => handleChange("urgent", e.target.checked)}
        />
        <label htmlFor="urgent">Mark as urgent</label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default Addtodo;
