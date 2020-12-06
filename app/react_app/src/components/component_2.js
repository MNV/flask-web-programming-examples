import React from 'react';

class Component_1 extends React.Component {
	handleAction = () => {
		this.props.change_value_2(!this.props.value_2);
	};

	render() {
		return (
			<>
				<div class="col-lg-6 rounded text-center m-4 p-4 shadow">
					<div class={this.props.value_2 ? "lamp lamp-light": "lamp lamp-static"}></div>
					<input
						type="button"
						onClick={this.handleAction}
						class={this.props.value_2 ? "btn btn-secondary" : "btn btn-success"}
						value={this.props.value_2 ? "Выключить" : "Включить"}
					/>
				</div>
			</>
		);
	}
}

export default Component_1;