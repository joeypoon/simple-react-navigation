import React from 'react';

export default function Navigator(props) {
	function currentRoute() {
		return props.routeStack.slice(-1)[0];
	}

	return props.routes[currentRoute()].screen(props);
}

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