import React from 'react';
import 'jest-styled-components';
import { screen, render, cleanup, userEvent } from '../../config/test-utils';
import Input, { InputProps } from './Input';

const defaultProps: InputProps = {
	onChange: jest.fn(),
	value: 'MY-FAKE-VALUE',
	placeholder: 'MY-FAKE-PLACEHOLDER',
};

const withoutSomeProps: InputProps = {
	onChange: jest.fn(),
	value: '',
};
describe('Input', () => {
	afterEach(() => cleanup());

	it('should render without error', () => {
		render(<Input {...defaultProps} />);
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
	});
	it('should render inputWrapper without error', () => {
		render(<Input {...defaultProps} />);
		const inputWrapper = screen.getByRole('label');
		expect(inputWrapper).toBeInTheDocument();
	});
	it('should render a label around input', () => {
		render(<Input {...defaultProps} />);
		screen.getByRole('label');
	});
	it('should render a input with onChange Props', async () => {
		render(<Input {...defaultProps} />);
		const input = screen.getByRole('textbox');
		userEvent.type(input, defaultProps.value);
		expect(defaultProps.onChange).toHaveBeenCalledTimes(
			defaultProps.value.length
		);
	});

	it('should render a value basead on change Props', () => {
		render(<Input {...defaultProps} />);
		const input = screen.getByRole('textbox') as HTMLFormElement;
		userEvent.type(input, defaultProps.value);
		expect(input.value).toEqual(defaultProps.value);
	});

	it('should render a placeholder Equals to placeholder Props', () => {
		render(<Input {...defaultProps} />);
		const input = screen.getByRole('textbox') as HTMLFormElement;
		expect(input.placeholder).toEqual(defaultProps.placeholder);
	});
	it('should render a placeholder default when isnt passed', () => {
		const customProps: InputProps = {
			onChange: jest.fn(),
			value: 'MY-FAKE-VALUE',
		};
		render(<Input {...customProps} />);
		const inputWithouPlaceholder = screen.getByRole(
			'textbox'
		) as HTMLFormElement;

		expect(inputWithouPlaceholder.placeholder).toEqual(
			'Digite aqui sua próxima tarefa.'
		);
	});
	it('should render a placeholder default when isnt passed', () => {
		render(<Input {...withoutSomeProps} />);
		const input = screen.getByRole('textbox') as HTMLFormElement;
		expect(input.value).toEqual(withoutSomeProps.value);
	});
});
