import { connect } from "react-redux";
import { changeCurrentTaskAction, addTaskAction } from "../Actions/taskActions";
import TaskFormComponent from "../Components/TaskFormComponent";

const TaskFormContainer = connect(
  state => ({currentTask: state.tasksReducer.currentTask}),
  dispatch => ({
    handleCurrentTask: currentTask => dispatch(changeCurrentTaskAction(currentTask)),
    handleAddCurrentTask: currentTask => dispatch(addTaskAction(currentTask))
  })
)(TaskFormComponent)

export default TaskFormContainer;