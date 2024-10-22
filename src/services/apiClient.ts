import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '202517cc716e47ca9e325ee54c952abd'
    }
})