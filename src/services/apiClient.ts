import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '498fb6c46c22459e919b50a15b167f42'
    }
})