import { FetchService } from "../../utils"

export const loginAuth = (data) => {
  return async (dispatch) => {
    const response = await FetchService('login', 'GET');
    if (response?.error) return window.alert(response.error || 'ha ocurrido un error');
    return dispatch(actionObject(LOGIN_AUTH, response));
  }
}