import React from "react";
import TaskEntity from "../Entities/TaskEntity"
import TaskContainer from "../Containers/TaskContainer";

export const tasksReducer = (state={tasks: [], currentTask: ""}, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const currentDate = TaskEntity.currentToTimestamp();
      const task = new TaskEntity(state.currentTask, currentDate).serialize()
      const taskComponent = <TaskContainer
                key={state.tasks.length} 
                task={task}
              />

      return { currentTask: "", tasks: [...state.tasks, taskComponent] }
      case "CHANGE_CURRENT_TASK":
      return {currentTask: action.payload.currentTask, tasks: [...state.tasks]}
    case "REMOVE_TASK":
      const filteredTasks = tasks.filter(t => t.id !== action.payload.id)
      return {currentTask: state.currentTask, tasks: filteredTasks}
    default:
      return state
  } 
}
