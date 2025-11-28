/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { useState }  from 'react';
import './Todo-main.css';


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTasks([...tasks, task]);
      setTask("");
    }
  }
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }
  return(
    <>
    <h1><img src="/images/to-do-list.png" className="todo-image" />TodoApp</h1>
            <input 
            type="text"
            placeholder="Add a new task anytime..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-btn"
            onClick={addTask}
            >Add a new task</button>
            <div className="task-list">
            <ul>
              {tasks.map((t, index) => (
                  <li 
                  key={index}
                  onClick={() => toggleTask(index)}
                  >
  
                    {t.completed ? (<img  src="/images/checked.png" className="checked-png" />) : (<img src="/images/remove.png" className="remove-png" />) }
                    <p>{t.text}</p>
                  </li>
                ))}
              
                
                
                
                
            </ul>
            </div>
    
    </>
  )
}
export default TodoApp;
