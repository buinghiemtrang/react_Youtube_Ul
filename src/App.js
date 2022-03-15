import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'

import Routes from './routes/Routes'

function App() {
	return (

		<BrowserRouter>
			<Route render={props => (
				<div>
					<Header {...props} />
					<div className="main">
						<Routes />
					</div>
				</div>
			)}/>
		</BrowserRouter>
	);
}

export default App;
