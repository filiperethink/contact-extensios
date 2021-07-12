import React from 'react';
import 'jest-styled-components';
import { screen, render, userEvent } from '../../config/test-utils';
import Form, { FormPropsType } from './Form';

describe('Form', () => {
	const defaultProps: FormPropsType = {
		handleFormSubmit: jest.fn().mockImplementation((text: string) => {
			return text;
		}),
	};
	it('should render without error', () => {
		render(<Form {...defaultProps} />);
	});

	it('should render have a Input a Label and Button in Document', () => {
		render(<Form {...defaultProps} />);
		screen.getByRole('button');
	});
	it('should have a Input in Document', () => {
		render(<Form {...defaultProps} />);
		screen.getByRole('textbox');
		screen.getByRole('label');
	});

	it('should handleFormSubmit props been called when user insert a text and press the button', () => {
		render(<Form {...defaultProps} />);
		const button = screen.getByRole('button');
		const input = screen.getByRole('textbox') as HTMLInputElement;
		userEvent.type(input, 'Tarefa 2');
		userEvent.click(button);
		expect(defaultProps.handleFormSubmit).toHaveBeenCalledWith('Tarefa 2');
		expect(defaultProps.handleFormSubmit).toHaveBeenCalledTimes(1);
	});
	it('should handleFormSubmit have to return a error when value is empty', () => {
		render(<Form {...defaultProps} />);
		const button = screen.getByRole('button');
		const input = screen.getByRole('textbox') as HTMLInputElement;
		userEvent.type(input, ' ');
		userEvent.click(button);
		expect(defaultProps.handleFormSubmit).toHaveBeenCalled();
		expect(defaultProps.handleFormSubmit).toHaveBeenCalledWith(
			'Campo é obrigatório (Min 5, Max 20 caracteres).'
		);
	});

	it('should render a ErrorText when isEmpty value submited', () => {
		render(<Form {...defaultProps} />);
		const button = screen.getByRole('button');
		const input = screen.getByRole('textbox') as HTMLInputElement;
		userEvent.type(input, ' ');
		userEvent.click(button);
		expect(
			screen.getByText('Campo é obrigatório (Min 5, Max 20 caracteres).')
		).toBeInTheDocument();
	});

	it('should not render a ErrorText when value is filled', () => {
		render(<Form {...defaultProps} />);
		const button = screen.getByRole('button');
		const input = screen.getByRole('textbox') as HTMLInputElement;
		userEvent.type(input, ' ');
		userEvent.click(button);
		expect(screen.getByTestId('error-label')).toBeInTheDocument();
	});
});
