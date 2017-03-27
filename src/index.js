import React from 'react';
import { connect } from 'react-redux';

function Navigator(props) {
	function currentRoute() {
		return props.routeStack.slice(-1)[0];
	}

	return props.routes[currentRoute()].screen(props);
}

function mapStateToProps(state) {
	return {
		routeStack: state.routeStack
	};
}

export default connect(mapStateToProps)(Navigator);

export function createReducer(options) {
	const { defaultRoute } = options;
	const NAVIGATE = 'NAVIGATE';

	function reducer(state = [ defaultRoute ], action) {
		switch (action.type) {
			case NAVIGATE: return state.concat(action.route);
			default: return state;
		}
	}

	return reducer;
}