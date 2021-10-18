import { connect } from "react-redux";
import TasksComponent from "../Components/TasksComponent";

const TasksContainer = connect(
  state => ({tasks: state.tasksReducer.tasks, user: state.userReducer.user}),
  _dispatch => ({})
)(TasksComponent)

export default TasksContainer;