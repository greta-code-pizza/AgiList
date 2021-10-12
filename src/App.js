import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import TaskComponent from './Components/TaskComponent';
import { HeaderLayout, FooterLayout} from './Components/Layouts';
import TaskEntity from './Entities/TaskEntity.ts';

import './style.scss';
import TaskFormComponent from './Components/TaskFormComponent';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://evwdagowsobaurgodqsa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDAyMTg1MCwiZXhwIjoxOTQ5NTk3ODUwfQ.628LX_Ra8ROfIC4UzRriXuPGK83_TceAwiYzHPjHSbs'

const supabase = createClient(supabaseUrl, supabaseKey)

let counter = 0;

function App() {
  const [currentMessage, setMessage] = useState("");
  const [list, addTodo] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => { 
    getAll();

    supabase.auth.onAuthStateChange(() => { 
      checkUser();
    });
  }, [])

  const checkUser = () => {
    const user = supabase.auth.user();
    setUser(user);
  }

  const getAll = async () => {
    let { data } = await supabase
      .from('Tasks')
      .select('id,content,created_at')

    let tasks = data.map((task, i) => {
      let todo = new TaskEntity(task.content, task.created_at);
      return <TaskComponent 
          key={i} 
          message={todo.content} 
          publishedAt={todo.publishedAt()}
          priority={todo.priority}
          level={todo.priorityIndex()}
          remove={handleCrossTodo}
        />
      })

      addTodo(tasks)
  }

  const handleMessage = e => {
    setMessage(e.target.value);
  }

  const handleCrossTodo = e => {
    addTodo(list.splice(e.target.value, 1))
  }

  const handleTodo = e => {
    if (e.key === 'Enter') {
      counter += 1;
      const todo = new TaskEntity(currentMessage);

      addTodo([
        ...list, 
        <TaskComponent 
          key={counter} 
          message={todo.content} 
          publishedAt={todo.publishedAt()}
          priority={todo.priority}
          level={todo.priorityIndex()}
          remove={handleCrossTodo}
        />
      ])

      setMessage("");
    }
  }

  if(user) {
    return (
      <>
        <HeaderLayout />
        <TaskFormComponent   
          handleTodo={handleTodo}
          handleMessage={handleMessage} 
          currentMessage={currentMessage}
        /> 
  
        {list}
      </>
    )
  } else {
    return <button onClick={() => supabase.auth.signIn({ provider: 'github' })}>Me co avec Github</button>
  }

}

render(
  <App />,
  document.getElementById('wrapper')
)
