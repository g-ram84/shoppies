import React from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap"

export default function SearchBar(props) {
	return (
		<InputGroup className="mb-3">
			<FormControl
				placeholder="Search Database"
				aria-label="Search Database"
				aria-describedby="basic-addon2"
			/>
			<InputGroup.Append>
				<Button variant="outline-secondary">Search</Button>
			</InputGroup.Append>
		</InputGroup>
	)
}
