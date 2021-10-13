import React from 'react';

import TaskFormComponent from './TaskFormComponent';
import { HeaderLayout } from './Layouts';

export default function TasksComponent(props) {
  return (
    <>
      <HeaderLayout />
      <TaskFormComponent   
        handleTodo={props.handleTodo}
        handleMessage={props.handleMessage} 
        currentMessage={props.currentMessage}
      /> 

      {props.list}

      <button onClick={() => props.supabase.auth.signOut()}>Se déconnecter</button>
    </>
  )
};