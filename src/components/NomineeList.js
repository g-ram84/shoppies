import React from "react"
import NomineeItem from "./NomineeItem"

const NomineeList = ({ nominatedMovie, onNominate, onUnNominate }) => {
	const renderedList = nominatedMovie.map((movie) => {
		return (
			<NomineeItem
				movie={movie}
				onNominate={onNominate}
				onUnNominate={onUnNominate}
			/>
		)
	})
	return <div className="ui relaxed divided list">{renderedList}</div>
}
export default NomineeList
