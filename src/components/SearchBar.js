import React, { useState } from "react"
import "./SearchItem.css"

export default function SearchBar(props) {
	const [searchTerm, setSearchTerm] = useState("")

	const onInputChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const onFormSubmit = (event) => {
		event.preventDefault()
		props.onTermSubmit(searchTerm)
	}

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Movie Search</label>
					<input type="text" value={searchTerm} onChange={onInputChange} />
				</div>
			</form>
		</div>
	)
}
