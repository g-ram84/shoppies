import axios from "axios"

const KEY = "b129f1e6"

export default axios.create({
	baseURL: `http://www.omdbapi.com/`,
	params: {
		title: "t",
		year: "y",
		apikey: KEY
	}
})
