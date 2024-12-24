import { useState } from "react";
import "./App.css";
import Todoitem from "./componant/Todoitem/Todoitem";
import Addtodo from "./componant/Addtodo/Addtodo";
import Counter from "./componant/Counter/Counter";
import { Itodo } from "./types";
const INITIAL_LIST: Array<Itodo> = [];
function App() {
  const [todoList, setTodoList] = useState<Itodo[]>(INITIAL_LIST);
  const [completedCount, setCompletedCount] = useState(0);
  const [urgentCount, setUrgentCount] = useState(0);

 
 
 
  const hadelAddTodo = (newTodo: Itodo) => {
    setTodoList([newTodo, ...todoList]);
    if(newTodo.urgent)
      setUrgentCount(urgentCount+1)
  };
  const handleDeleteTodo = (id: string) => {
    const taskToDelete = todoList.find((todo) => todo.id === id);
    if (taskToDelete) {
      if (taskToDelete.urgent) {
        setUrgentCount(urgentCount - 1);
      }
      if (taskToDelete.completed) {
        setCompletedCount(Math.max(completedCount - 1, 0)); 
      }
    }
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: string, isCompleted: boolean) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: isCompleted } : todo
      )
    );
    if (isCompleted) {
      setCompletedCount(completedCount + 1);
    } else {
      setCompletedCount(Math.max(completedCount - 1, 0));
    }
  };

  
  return (
    <>
    <Addtodo onSubmit={hadelAddTodo} />
    <Counter
      totalTasks={todoList.length}
      urgentTasks={urgentCount}
      completedTasks={completedCount}
    />
    {todoList.map((todo) => (
      <Todoitem
        key={todo.id}
        todo={todo.todo}
        id={todo.id}
        urgent={todo.urgent}
        onDelete={handleDeleteTodo}
        completed={todo.completed || false}
        onToggleComplete={handleToggleComplete}
      />
    ))}
  </>
);
  }

export default App;
