import React from "react"
import ReactDOM from "react-dom"
import index from "./index.scss"

class App extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<h1>Hello from React</h1>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("index"))
