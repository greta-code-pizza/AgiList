import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import { createClient } from '@supabase/supabase-js'

import TaskEntity from './Entities/TaskEntity.ts';

import TasksComponent from './Components/TasksComponent';
import TaskComponent from './Components/TaskComponent';
import LoginComponent from './Components/LoginComponent';

import './style.scss';

const supabaseUrl = 'https://evwdagowsobaurgodqsa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDAyMTg1MCwiZXhwIjoxOTQ5NTk3ODUwfQ.628LX_Ra8ROfIC4UzRriXuPGK83_TceAwiYzHPjHSbs'

const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  const [currentMessage, setMessage] = useState("");
  const [list, addTodo] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => { 
    getTasks();
    checkUser();

    supabase.auth.onAuthStateChange(() => { 
      checkUser();
    });
  }, [])

  const checkUser = () => {
    const user = supabase.auth.user();
    setUser(user);
  }

  const handleMessage = e => {
    setMessage(e.target.value);
  }

  const getTasks = async () => {
    let { data } = await supabase
      .from('Tasks')
      .select('id,content,created_at')

    let tasks = data.map((task) => {
      let todo = new TaskEntity(task.id, task.content, task.created_at);
      return <TaskComponent 
          key={todo.id} 
          message={todo.content} 
          publishedAt={todo.publishedAt()}
          priority={todo.priority}
          level={todo.priorityIndex()}
          remove={() => removeTask(todo.id)}
        />
      })

      addTodo(tasks)
  }

  const removeTask = async id => {
    await supabase
      .from('Tasks')
      .delete()
      .eq('id', id)

    getTasks();
  }

  const insertTask = async id => {
    if (e.key === 'Enter') {
      await supabase
        .from('Tasks')
        .insert([{ content: currentMessage }])

      setMessage("");
      getTasks();
    }
  }

  if(user) {
    return (
      <>
      <TasksComponent 
        handleTodo={insertTask}
        handleMessage={handleMessage} 
        currentMessage={currentMessage}
        list={list}
        supabase={supabase}
      />
      </>
    )
  } 
  
  return <LoginComponent supabase={supabase} />
}

render(
  <App />,
  document.getElementById('wrapper')
)
