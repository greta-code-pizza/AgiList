import React, { useState, useEffect } from 'react';
import { render } from "react-dom";

import { data } from "./data";

import TaskEntity from './Entities/TaskEntity.ts';

import TasksComponent from './Components/TasksComponent';
import TaskComponent from './Components/TaskComponent';
import LoginComponent from './Components/LoginComponent';

import './style.scss';

let id = 4;

function App() {
  const [currentMessage, setMessage] = useState("");
  const [list, addTask] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => { 
    getTasks();
  }, [])

  const handleMessage = e => {
    setMessage(e.target.value);
  }

  const getTasks = () => {
    let tasks = data.tasks.map(task => {
      let todo = new TaskEntity(task.id, task.content, task.created_at);
      return <TaskComponent 
          key={todo.id} 
          message={todo.content} 
          publishedAt={todo.publishedAt()}
          priority={todo.priority}
          level={todo.priorityIndex()}
        />
      })

      addTask(tasks)
  }

  const insertTask = e => {
    if (e.key === 'Enter') {
      let currentDate = TaskEntity.currentToTimestamp();
      let todo = new TaskEntity(id++, currentMessage, currentDate);

      addTask([...list, <TaskComponent 
        key={todo.id} 
        message={todo.content} 
        publishedAt={todo.publishedAt()}
        priority={todo.priority}
        level={todo.priorityIndex()}
      />])

      setMessage("");
    }
  }

  const handleAddUser = () => { setUser(data.user) }
  const handleSignOut = () => {
    setUser(null);
  }

  if(user) {
    return (
      <>
      <TasksComponent 
        handleTodo={insertTask}
        handleMessage={handleMessage} 
        currentMessage={currentMessage}
        list={list}
        user={data.user}
        handleSignOut={handleSignOut}
      />
      </>
    )
  } 
  
  return <LoginComponent handleAddUser={handleAddUser} />
}

render(
  <App />,
  document.getElementById('wrapper')
)
