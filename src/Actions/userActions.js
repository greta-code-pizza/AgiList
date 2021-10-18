export const logInAction = user => ({
  type: "LOG_IN",
  payload: { user }
})

export const logOutAction = () => ({ type: "LOG_OUT" })
