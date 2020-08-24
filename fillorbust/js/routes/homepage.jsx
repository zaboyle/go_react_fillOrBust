import React, { Component } from "react";

class Homepage extends Component {
	constructor(props) {
		super(props)
		this.state = { newSessionUrl: "http://localhost:8080/api/newgame" }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() { }

	handleSubmit(event) {
		event.preventDefault();

		console.log("creating new game session...");

		// get new session and redirect there

		fetch(this.state.newSessionUrl,
			{
				method: "get",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
			},
		)
			.then((response) => {
				console.log(response);
				if (!response.ok) throw Error(response.statusText);
				return response.json();
			})
			.then((session) => {
				// create game lobby url and redirect there
				let lobbyUrl = `/${session}`;
				// see https://medium.com/@anneeb/redirecting-in-react-4de5e517354a
				this.props.history.push(lobbyUrl);
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div className="scorecard ui centered grid container">
				<div className="one column row"></div>
				<div className="eight wide column center aligned">
					<form className="ui form" onSubmit={this.handleSubmit}>
						<button className="ui button" type="submit">New Game</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Homepage;