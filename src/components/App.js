import React from "react"
import SearchBar from "./SearchBar"

export default function App() {
	const onTermSubmit = (term) => {
		console.log(term)
	}

	return (
		<div className="ui container">
			<SearchBar onTermSubmit={onTermSubmit} />
		</div>
	)
}
