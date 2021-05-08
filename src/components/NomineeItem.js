import React from "react"
import "./SearchItem.css"

const NomineeItem = ({ movie, onNominate }) => {
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
					// disabled={}
					className="ui primary button"
				>
					Un-nominate
				</button>
			</div>
		</div>
	)
}

export default NomineeItem
