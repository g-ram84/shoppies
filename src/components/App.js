import React, { useState } from "react"
import SearchBar from "./SearchBar"
import SearchList from "./SearchList"
import omdb from "../apis/omdb"
import NomineeList from "./NomineeList"
import "./SearchItem.css"

export default function App() {
	const [movies, setMovies] = useState([])
	const [nominatedMovie, setNominatedMovie] = useState([])

	const onTermSubmit = async (term) => {
		const response = await omdb.get("/search", {
			params: {
				s: term
			}
		})
		setMovies(response.data.Search)
	}

	const onNominate = (clickedMovie) => {
		setNominatedMovie([...nominatedMovie, clickedMovie])
	}

	return (
		<div className="ui container">
			<h1>The Shoppies!</h1>
			<SearchBar onTermSubmit={onTermSubmit} movies={movies} />
			<div className="ui two column double stackable grid container">
				<div className="column">
					<SearchList
						onNominate={onNominate}
						movies={movies}
						nominatedMovie={nominatedMovie}
					/>
				</div>
				<div className="column">
					<NomineeList
						nominatedMovie={nominatedMovie}
						onNominate={onNominate}
					/>
				</div>
			</div>
		</div>
	)
}
