import React from "react"
import "./SearchItem.css"

const NomineeItem = ({ movie, onUnNominate }) => {
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
					onClick={() => onUnNominate(movie)}
					className="ui primary button"
				>
					Remove
				</button>
			</div>
		</div>
	)
}

export default NomineeItem
