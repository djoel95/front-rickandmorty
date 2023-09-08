import { FetchService, actionObject } from "../../utils"
import { LOGIN_AUTH, LOGOUT_AUTH } from "./action-types";

export const loginAuth = (data) => {
  return async (dispatch) => {
    const { email, password } = data
    const response = await FetchService(`login?email=${email}&password=${password}`, 'GET');
    if (response?.error) return window.alert(response.error?.message || 'ha ocurrido un error');
    return dispatch(actionObject(LOGIN_AUTH, response));
  }
}

export const logoutAuth = () => actionObject(LOGOUT_AUTH)