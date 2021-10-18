export const userReducer = (state={user: null}, action) => {
  switch (action.type) {
    case "LOG_IN":
      localStorage.setItem('user', action.payload.user.full_name)
      return { ...action.payload }
    case "LOG_OUT":
      localStorage.removeItem('user')
      return {user: null}
    default:
      return state
  } 
}
