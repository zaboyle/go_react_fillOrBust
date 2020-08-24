import React, { Component } from "react";

class Scorecard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			session: "",
			scores: { "lisa": 5, "zach": 20 }
		}
		this.addPlayer = this.addPlayer.bind(this);
		this.addPoints = this.addPoints.bind(this);
	}

	componentDidMount() {
		const { session } = this.props.match.params

		// fetch("localhost:8080/api/game?session=${session}")
		//     .then((scores) => {
		//         this.setState(() => ({ scores }))
		//     })
	}

	addPlayer(event) {
		event.preventDefault();

		console.log("adding player...");
	}

	addPoints(event) {
		event.preventDefault();

		console.log("adding points...");

		// TODO: update data by posting to API and update value to display

		// fetch(this.props.url,
		// 	{
		// 		method: "post",
		// 		headers: {
		// 			Accept: "application/json",
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({ text: this.state.value }),
		// 	},
		// )
		// .then((response) => {
		// 	console.log(response);
		// 	if (!response.ok) throw Error(response.statusText);
		// 	return response.json();
		// })
		// .then((data) => {
		// 	this.setState({
		// 		comments: this.state.comments.concat(data),
		// 		value: "",
		// 	});
		// })
		// .catch(error => console.log(error));
	}

	render() {
		const playerScores = Object.entries(this.state.scores).map(([key, value]) =>
			(
				<tr key={`${key} row`}>
					<td>{key}</td>
					<td>{value}</td>
				</tr>
			));

		const playerNames = Object.entries(this.state.scores).map(([key]) =>
			(
				<option key={`${key} option`} value={key}>{key}</option>
			));

		return (
			<div className="scorecard ui centered grid container">

				<div className="one column row">
					<div className="column center aligned">
						<h1>Scorecard</h1>
					</div>
				</div>

				<div className="one column row">
					<div className="ten wide column center aligned">
						<form className="ui form" onSubmit={this.addPoints}>
							<select className="ui selection dropdown four wide field" name="playerlist" id="playerlist">
								<option hidden defaultValue="">Player</option>
								{playerNames}
							</select>

							<div className="ui input field">
								<input type="number" name="points" placeholder="Point Adjustment" />
							</div>
							<div className="ui input field">
								<input type="submit" name="submit" value="Add Points" />
							</div>
						</form>
					</div>
				</div>

				<div className="one column row">
					<div className="eight wide column center aligned">
						<table className="ui table center aligned">
							<thead>
								<tr>
									<th className="four wide">Player</th>
									<th className="four wide">Score</th>
								</tr>
							</thead>
							<tbody>
								{playerScores}
							</tbody>
						</table>
					</div>
				</div>

				<div className="one column row">
					<div className="eight wide column center aligned">
						<form className="ui form" onSubmit={this.addPlayer}>
							<div className="ui input field">
								<input type="text" name="newplayer" placeholder="player1" />
							</div>
							<button type="submit" className="ui icon button">
								<i className="plus icon"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Scorecard;