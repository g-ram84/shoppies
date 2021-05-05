import React from "react"

const SearchItem = ({ movie }) => {
	return (
		<div className="item">
			<img className="ui tiny image" src={movie.Poster} />
			<div className="content">
				<div className="header">
					{movie.Title}({movie.Year})
				</div>
			</div>
		</div>
	)
}

export default SearchItem
