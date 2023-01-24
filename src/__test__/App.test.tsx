import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders tline title', () => {
	render(<App />);
	const linkElement = screen.getByText(/TLINE/i);
	expect(linkElement).toBeInTheDocument();
});
