import React, { useState } from 'react';
import data from "./data.json";

// components 
import Header from './Header';
import './App.css';
import ToDoList from "./ToDoList"; 

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  /* function handleToggle: 
  when user clicks on task, change state complete to true if false or vice versa
  */ 
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : {...task}; 
    });
    setToDoList(mapped); 
  }; 

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}; 

export default App;
