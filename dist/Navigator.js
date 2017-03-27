'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Navigator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigator(props) {
	function currentRoute() {
		return props.routeStack.slice(-1)[0];
	}

	return props.routes[currentRoute()].screen(props);
}