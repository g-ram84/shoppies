import React from "react"
import SearchItem from "./SearchItem"

const SearchList = ({ movies }) => {
	const renderedList = movies.map((movie) => {
		return <SearchItem movie={movie} />
	})
	return <div className="ui relaxed divided list">{renderedList}</div>
}

export default SearchList
