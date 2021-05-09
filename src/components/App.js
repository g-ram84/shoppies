import React, { useState } from "react"
import SearchBar from "./SearchBar"
import Banner from "./Banner"
import SearchList from "./SearchList"
import NomineeList from "./NomineeList"
import omdb from "../apis/omdb"
import "./SearchItem.css"

export default function App() {
	const [movies, setMovies] = useState([])
	const [nominatedMovie, setNominatedMovie] = useState([])
	const [entry, setEntry] = useState(false)

	const onTermSubmit = async (term) => {
		const response = await omdb
			.get("/search", {
				params: {
					s: term
				}
			})
			.catch((e) => {
				console.log(e)
			})
		setMovies(response.data.Search)
	}

	const onNominate = (clickedMovie) => {
		setNominatedMovie([...nominatedMovie, clickedMovie])
	}

	const onUnNominate = (clickedMovie) => {
		setNominatedMovie(
			nominatedMovie.filter((list) => list.imdbID !== clickedMovie.imdbID)
		)
	}

	return (
		<div className="ui container backdrop">
			<h1 className="text multiply">The Shoppies!</h1>
			{nominatedMovie.length >= 5 && <Banner />}
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
						onUnNominate={onUnNominate}
					/>
				</div>
			</div>
		</div>
	)
}
