import React from "react"
import NomineeItem from "./NomineeItem"

const NomineeList = ({ nominatedMovie, onNominate }) => {
	console.log(nominatedMovie)
	// if (!nominatedMovie.nominate) {
	// 	return <div>Please nominate up to 5 films!</div>
	// }
	// const filteredList = nominatedMovie.filter((movie) => {
	// 	return movie.nominate === true
	// })
	const renderedList = nominatedMovie.map((movie) => {
		return <NomineeItem movie={movie} onNominate={onNominate} />
	})
	return <div className="ui relaxed divided list">{renderedList}</div>
}
export default NomineeList
