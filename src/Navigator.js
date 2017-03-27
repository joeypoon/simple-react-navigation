import React from 'react';

export default function Navigator(props) {
	function currentRoute() {
		return props.routeStack.slice(-1)[0];
	}

	return props.routes[currentRoute()].screen(props);
}