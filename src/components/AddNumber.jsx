import React, { Component } from "react";
// import store from "../store";

export default class AddNumber extends Component {
	state = {
		size: 1,
	};

	onChangeSize = (e) => {
		this.setState({
			size: Number(e.target.value),
		});
	};

	onChangeNumber = () => {
		this.props.onClick(this.state.size);
		// store.dispatch({ type: "INCREAMENT", size: this.state.size });
	};

	render() {
		return (
			<div>
				<h1>Add Number</h1>
				<input type="button" value="+" onClick={this.onChangeNumber} />
				<input
					type="text"
					value={this.state.size}
					onChange={this.onChangeSize}
				/>
			</div>
		);
	}
}
