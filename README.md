## simple-react-navigation

Easy to setup stack navigation for react and react-native apps using Redux.

### Installation

npm install simple-react-navigation

### Setup

		// App.js
		import React from 'react';
		import { Provider } from 'react-redux';

		import store from './store';
		import Main from './components';

		export default function App() {
			return (
				<Provider store={ store }>
					<Main />
				</Provider>
			);
		}


		// Main.js
		import React from 'react';
		import { connect } from 'react-redux';
		import Navigator from 'simple-react-navigation';

		import { routes } from '../routes';

		function Main(props) {
			return <Navigator routeStack={ props.routeStack } routes={ routes } />
		}

		function mapStateToProps(state) {
			return {
				routeStack: state.routeStack
			};
		}

		export default connect(mapStateToProps)(Main);


		// routeStack.reducer.js
		import { createReducer } from 'simple-react-navigation';

		const options = {
			defaultRoute: 'Home'
		}
		export default createReducer(options);


		// routes.js
		import Home from './components/Home';
		import Foo from './components/Foo';

		export const routes = {
			Home: { screen: Home },
			Foo: { screen: Foo }
		};

		// routeStack.actions.js
		const NAVIGATE = 'NAVIGATE';
		const NAVIGATE_BACK = 'NAVIGATE_BACK';

		export function navigate(route) {
			return {
				type: NAVIGATE,
				route
			};
		}

		export function navigateBack() {
			return {
				type: NAVIGATE_BACK
			}
		}

### Usage

		// Home.component.js
		import React from 'react';
		import { connect } from 'react-redux';

		import { navigate } from '../../actions/routeStack.actions';

		export function Home(props) {
		  const { navigate } = props;
		  return (
		    <div>
		      <Button onClick={ navigate.bind(this, 'Foo')>
		      	Navigate to 'Foo'
		      </Button>
		    </div>
		  );
		}

		const actions = { navigate };
		export default connect(null, actions)(Home);


		// Foo.component.js
		import React from 'react';
		import { connect } from 'react-redux';

		import { navigateBack } from '../actions/routeStack.actions';

		function Foo(props) {
			const { navigateBack } = props;
		  return (
		  	<div>
			  	<Button onClick={ navigateBack }>
			  		Navigate back to last active route
			  	</Button>
				</div>
			);
		}

		const actions = { navigateBack };
		export default connect(null, actions)(Foo);