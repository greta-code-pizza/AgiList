import React from 'react';

export default function TaskFormComponent({
  currentTask, 
  handleCurrentTask, 
  handleAddCurrentTask
}) {
  const handleAddTask = (e) => {
    if (e.key === 'Enter') { handleAddCurrentTask(currentTask) }
  }

  return (
    <>
      <textarea 
        onKeyPress={(e) => handleAddTask(e)}
        onChange={(e) => handleCurrentTask(e.target.value)} 
        value={currentTask}
      /> 
    </>
  )
};