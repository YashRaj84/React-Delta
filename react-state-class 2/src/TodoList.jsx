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
  return (
    <div>
      <input placeholder="New todo" 
      value={newTodo} 
      onChange={updateTask}></input>
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
            <li key={todo.id}>{todo.task}</li>
          ))
        }
      </ul>

    </div>
  )
}