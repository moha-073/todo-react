/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { useState, useEffect }  from 'react';
import './Todo-main.css';


const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  }
  const toggleTask = (id) => {
    const newTasks = tasks.map((t) => 
      t.id === id ? {...t, completed: !t.completed} : t
    )
    setTasks(newTasks);

    alert(
      `Task "${tasks.find(t => t.id === id).text}" marked as ${tasks.find(t => t.id === id).completed ? "incomplete" : "completed"}!`
    );

  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  }
  return(
    <div className='sub-container'>
    <h1>
      <img src="/images/to-do-list.png" className="todo-image" />
      TodoApp
      </h1>
            <input 
            type="text"
            placeholder="Add a new task anytime..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-btn"
            onClick={addTask}
            >Add a task</button>
            <div className="task-list">
            <ul>
              {tasks.map((t, index) => (
                  <li 
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  style={{ textDecoration: t.completed ? "line-through" : "none" }}
                  >
                    {t.completed ? (<><img src="/images/check.png" className="checked-png" /> {t.text} <img src="/images/ink-pen.png" className="ink-pen" /> </>) : (<><img src="/images/remove.png" className="remove-png" /> {t.text} <img src="/images/ink-pen.png" className="ink-pen" /> </>) }
                    
                      <img src="/images/interface.png" className="delete" 
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(t.id);
                      }} />
                    
                    
                    
                    
                  </li>
                ))}
              
                
                
                
                
            </ul>
            </div>
    
    </div>
  )
}
export default TodoApp;
