import { FetchService } from "../../utils"

export const loginAuth = (data) => {
  return async (dispatch) => {
    const { email, password } = data
    const response = await FetchService(`login?email=${email}&password=${password}`, 'GET');
    if (response?.error) return window.alert(response.error?.message || 'ha ocurrido un error');
    return dispatch(actionObject(LOGIN_AUTH, response));
  }
}