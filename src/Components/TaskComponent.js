import React from 'react';
import TaskEntity from "../Entities/TaskEntity";
import { useLevel } from "../hooks";

export default function TaskComponent(props) {
  const [currentLevel, changeLevel] = useLevel(props.level);

  return (
    <div key={props.id} className="panel panel-todo" >
      <span className="cross" onClick={props.remove}>x</span>
      <span>Task published on {props.publishedAt}</span>
      <p>{props.message}</p>
      <div>
        <span onClick={changeLevel} className={`badge badge-${TaskEntity.levels[currentLevel]}`}>Priority : {TaskEntity.levels[currentLevel]}</span>
      </div>
    </div>
  )
};