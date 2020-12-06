import React from 'react';

class Component_1 extends React.Component {
	handleAction = () => {
		this.props.change_value_1(!this.props.value_1);
	};

	render() {
		return (
			<>
				<div class="col-lg-6 rounded text-center m-4 p-4 shadow">
					<div class={this.props.value_1 ? "torch torch-fire": "torch torch-silent"}></div>
					<input
						type="button"
						onClick={this.handleAction}
						class={this.props.value_1 ? "btn btn-danger" : "btn btn-primary"}
						value={this.props.value_1 ? "Потушить" : "Зажечь"}
					/>
				</div>
			</>
		);
	}
}

export default Component_1;