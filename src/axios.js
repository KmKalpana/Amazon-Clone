import axios from "axios";

const instance = axios.create({
    baseURL: '...' //The API(CLOUD FUNCTION) URL
});
export default instance;