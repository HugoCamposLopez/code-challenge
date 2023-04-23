import axios from "axios"
import { REACT_API_URL } from "../../env.de"

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}
//Here, we're going to create a base cliente
const APIClient = axios.create({
  baseURL: `${REACT_API_URL}`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default APIClient;
