import React from 'react';
import { HeaderLayout } from './Layouts';
import TaskFormContainer from '../Containers/TaskFormContainer';



export default function TasksComponent({tasks, user}) {  
  if(user) {
    return (
      <>
      {/* <HeaderLayout user={props.user}/>
        <TaskFormComponent   
          handleTodo={props.handleTodo}
          handleMessage={props.handleMessage} 
          currentMessage={props.currentMessage}
        />  */}
        <HeaderLayout user={user}/>
        <TaskFormContainer />
        {tasks}
      </>
    )
  } else {
    return <></>
  }

};