import React from 'react';

import { useState }  from 'react';
import './Todo-main.css';


const TodoApp = () => {
  const {tasks, setTasks} = useState("");
  ;
  const addTask = () => {
    tasks.target.value === "" ? alert("Please enter a task") : <p>
      {tasks.target.value}
      </p>
  }
  return(
    <>
    <h1>
      <img src="images/to-do-list.png" className="todo-image" />
      Todo List App</h1>
          <div>
            <input 
            type="text"
            placeholder="Add a new task anytime..."
            onChange = {addTask}
            />
            <button className="add-btn"
            onClick={(e) => {
              setTasks(e.target.value);
            }}
            >Add a new task</button>
          </div>
    </>
  )
}

export default TodoApp;