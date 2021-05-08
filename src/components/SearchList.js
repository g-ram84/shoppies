import React from "react"
import SearchItem from "./SearchItem"
import Error from "./Error"

const SearchList = ({ movies, onNominate, nominatedMovie }) => {
	if (movies === undefined) {
		return <Error />
	}
	const renderedList = movies.map((movie) => {
		return (
			<SearchItem
				key={movie.imdbID}
				onNominate={onNominate}
				movie={movie}
				nominatedMovie={nominatedMovie}
			/>
		)
	})
	return <div className="ui relaxed divided list">{renderedList}</div>
}

export default SearchList
