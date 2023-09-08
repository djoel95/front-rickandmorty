import axios from "axios";
import { API_URL } from "./path";

const URL = API_URL;

const FetchService = async (url, method = "GET", variables = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      headers,
      method,
    }

    if (variables) data.variables = variables

    const response = await axios(`${URL}${url}`, data);

    return response.data;
  } catch (err) {
    return { error: err?.response?.data || 'ha ocurrido un error' };
  }
}

export default FetchService;
