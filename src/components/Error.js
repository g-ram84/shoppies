import React from "react"

export default function Error() {
	return (
		<div className="ui negative message">
			<div className="header">
				We couldn't find any movies based on your search.
			</div>
			<p>Please try again!</p>
		</div>
	)
}
