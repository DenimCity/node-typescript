import React, { useState } from 'react';

import './App.css';
import TextField from './components/Text';

const App: React.FC = () => {
	const [ person, setPerson ] = useState({
		firstName: 'Jean',
		lastName: 'Altidor',
	});

	const tree = (string: string) => {
		console.log(string.split('.').join().replace(/,/g, ' ').toUpperCase());
	};
	return (
		<div className='App'>
			<TextField date='2018' text='Jean was here' convertName={tree} person={person} />
		</div>
	);
};

export default App;
