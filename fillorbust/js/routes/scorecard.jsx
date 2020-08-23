import React, { Component} from "react";

class Scorecard extends Component {

    // state = {
    //     scores: {"lisa": 5, "zach": 20}
    // }
    constructor(props) {
        super(props)
        this.state = {scores: {"lisa": 5, "zach": 20}}
    }

    componentDidMount () {
        // const { session } = this.props.match.params

        // fetch(`localhost:8080/api/game?session=${session}`)
        //     .then((scores) => {
        //         this.setState(() => ({ scores }))
        //     })
    }

	render() {
        const playerScores = Object.entries(this.state.scores).map(([key,value]) =>
        (
            <tr>
                <td key='${key}name'>{key}</td>
                <td key='${key}score'>{value}</td>
            </tr>
        ));

        const playerNames = Object.entries(this.state.scores).map(([key]) =>
        (
            <option value='${key}'>{key}</option>
        ));

		return (
            <div>
    			<h1 class="scorecard">Scorecard</h1>
                <form action='localhost:8080/api/add?session=${this.props.session}' method="post">
                    <select name="playerlist" id="playerlist">
                        {playerNames}
                    </select>

                    <input type="number" name="points" placeholder="Point Adjustment"/>
                    <input type="submit" name="submit" value="Submit"/>
                </form>

                <table border="1">
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                    {playerScores}
                </table>
            </div>
		);
	}
}

export default Scorecard;