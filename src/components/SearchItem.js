import React from "react"
import "./SearchItem.css"

const SearchItem = ({ movie, onNominate, nominatedMovie }) => {
	const boolCheck = (movie) => {
		if (nominatedMovie.length >= 5) {
			return true
		}

		return nominatedMovie.some((isNominated) => {
			return isNominated.imdbID === movie.imdbID
		})
	}

	return (
		<div className="video-item item">
			<img className="ui tiny image" src={movie.Poster} alt="movie-poster" />
			<div className="content">
				<div className="header">
					{movie.Title} ({movie.Year})
				</div>
			</div>
			<div className="right floated">
				<button
					onClick={() => onNominate(movie)}
					disabled={boolCheck(movie)}
					className="ui primary button"
				>
					Nominate
				</button>
			</div>
		</div>
	)
}

export default SearchItem
