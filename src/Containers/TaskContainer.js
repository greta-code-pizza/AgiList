import { connect } from "react-redux";
import TaskComponent from "../Components/TaskComponent";

import { removeTaskAction } from "../Actions/taskActions";

const TaskContainer = connect(
  _state => ({}),
  dispatch => ({
    handleRemoveTask: task => dispatch(removeTaskAction(task))
  })
)(TaskComponent)

export default TaskContainer;