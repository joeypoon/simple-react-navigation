import React, { createElement } from 'react';

export default class Navigator extends React.Component {
	currentRoute() {
		return this.props.routeStack.slice(-1)[0];
	}

	render() {
		const element = this.props.routes[this.currentRoute()].screen
		return createElement(element, this.props);
	}
}

export function createReducer(options) {
	const { defaultRoute } = options;
	const NAVIGATE = 'NAVIGATE';
	const NAVIGATE_BACK = 'NAVIGATE_BACK';

	function reducer(state = [ defaultRoute ], action) {
		switch (action.type) {
			case NAVIGATE: return state.concat(action.route);
			case NAVIGATE_BACK: return state.slice(0, -1);
			default: return state;
		}
	}

	return reducer;
}