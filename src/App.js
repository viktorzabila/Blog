import axios from 'axios';
import Layout from 'layout/layout';
import React, { useEffect, useState } from 'react';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App (props) {
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			return;
		}

		axios
			.get(`http://localhost:4000/verifyToken?token=${token}`)
			.then((response) => {
				setUserSession(response.data.token, response.data.user);
				setAuthLoading(false);
			})
			.catch((error) => {
				removeUserSession();
				setAuthLoading(false);
			});
	}, []);

	if (authLoading && getToken()) {
		return <div className="content">Checking Authentication...</div>;
	}

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;