import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { apiCall } from './services/api';

function App() {
	const [apiResponse, setApiResponse] = useState(null);

	const handleApiCall = async () => {
		setApiResponse(await apiCall());
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Click the button to trigger the API call!</p>
				<button onClick={handleApiCall}>API Call</button>
				<p>{apiResponse}</p>
			</header>
		</div>
	);
}

export default App;
