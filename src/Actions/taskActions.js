export const addTaskAction = () => ({
  type: "ADD_TASK"
})

export const changeCurrentTaskAction = currentTask => ({ 
  type: "CHANGE_CURRENT_TASK",
  payload: { currentTask: currentTask } 
})

