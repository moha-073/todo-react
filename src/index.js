import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoApp from "./Todo.js";
const App = () => {
  return(
    <div className="container">
      
      <TodoApp />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);