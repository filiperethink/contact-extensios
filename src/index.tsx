import React from 'react';
import { S } from './theme';
import Form from './components/Form/Form';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
	const handleFormSubmit = (phone: string) => {
		// href="https://api.whatsapp.com/send?phone=55333333333333&text=333" target="_blank"
		// <Link to={link} />;
		// eslint-disable-next-line no-console
		console.log({ phone });
	};

	return (
		<S.Container>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Form handleFormSubmit={handleFormSubmit} />
					</Route>
				</Switch>
			</Router>
		</S.Container>
	);
}
