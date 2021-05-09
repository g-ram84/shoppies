import axios from "axios"

const KEY = "b129f1e6"

export default axios.create({
	baseURL: `https://www.omdbapi.com/?apikey=${KEY}&`
})
