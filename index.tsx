import ReactDOM from 'react-dom';
import React from 'react';
import App from './src';
import { GlobalStyle } from './src/theme';

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);
