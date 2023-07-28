// Instantiating axios for our http requests with our API base url taken from the env
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

export default axios
