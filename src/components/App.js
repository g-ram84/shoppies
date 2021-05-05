import React, { useState } from "react"
import SearchBar from "./SearchBar"
import SearchList from "./SearchList"
import omdb from "../apis/omdb"

export default function App() {
	const [movies, setMovies] = useState([])

	const onTermSubmit = async (term) => {
		const response = await omdb.get("/search", {
			params: {
				s: term
			}
		})
		setMovies(response.data.Search)
	}
	console.log(movies)

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
			<SearchList movies={movies} />
		</div>
	)
}
