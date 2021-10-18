import React from 'react';
import TaskEntity from "../Entities/TaskEntity";
import { useLevel } from "../hooks";

export default function TaskComponent({task}) {
  const [currentLevel, changeLevel] = useLevel(task.level);

  return (
    <div key={task.key} className="panel panel-todo" >
      <span>Task published on {task.publishedAt}</span>
      <br/>
      <p>{task.content}</p>
      <div>
        <span onClick={changeLevel} className={`badge badge-${TaskEntity.levels[currentLevel]}`}>Priority : {TaskEntity.levels[currentLevel]}</span>
      </div>
    </div>
    )

};