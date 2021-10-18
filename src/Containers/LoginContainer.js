import { connect } from "react-redux";
import LoginComponent from "../Components/LoginComponent";

import { logInAction, logOutAction } from "../Actions/userActions";

const LoginContainer = connect(
  state => ({user: state.userReducer.user}),
  dispatch => ({
    handleLogIn: user => dispatch(logInAction(user)),
    handleLogOut: user => dispatch(logOutAction(user))
  })
)(LoginComponent)

export default LoginContainer;