import { LOGIN_AUTH, LOGOUT_AUTH } from "./action-types"

const initialState = {
  user: null,
  isAuth: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_AUTH:
      return { ...state, user: payload, isAuth: true }
    case LOGOUT_AUTH:
      return { ...initialState }
    default:
      return state
  }
}

export default reducer