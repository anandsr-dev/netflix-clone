import axios from "axios";

const config = {
    baseURL: 'https://api.themoviedb.org/3'
}

const instance = axios.create(config)

export default instance