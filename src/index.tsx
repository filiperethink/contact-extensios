import React from 'react';
import { S } from './theme';
import Form from './components/Form/Form';

export default function App() {
	const handleFormSubmit = (text: string): string => text;

	return (
		<S.Container>
			<Form handleFormSubmit={handleFormSubmit} />
		</S.Container>
	);
}
