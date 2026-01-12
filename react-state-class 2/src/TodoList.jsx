import { useState } from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    setNewTodo("");
  }
  let updateTask = (e) => {
    setNewTodo(e.target.value);
  }
  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
  }
  let deleteAllTask = () => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.task === "sample task"));
  }
  let upperCaseAllTask = () => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        }
      })
    ));
  };
  let upperCaseTask = (id) => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.id === id ? todo.task.toUpperCase() : todo.task,
        }
      })
    ));
  };
  return (
    <div>
      <input placeholder="New todo" 
      value={newTodo} 
      onChange={updateTask}/>
      <br />
      <br />
      <button onClick={addTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h3>Tasks: </h3>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp;
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              &nbsp; &nbsp;
              <button onClick={() => upperCaseTask(todo.id)}>UpperCase</button>
            </li>
          ))
        }
      </ul>
      <br />
      <button onClick={upperCaseAllTask}>Uppercase All Tasks</button>
      &nbsp; &nbsp;
      <button onClick={deleteAllTask}>Delete All Tasks</button>
    </div>
  )
}