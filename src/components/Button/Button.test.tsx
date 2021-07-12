import React from 'react';
import 'jest-styled-components';
import { screen, render, userEvent } from '../../config/test-utils';
import Button, { ButtonPropTypes } from './Button';
import { COLORS } from '../../theme/constants';

describe('Button', () => {
	const ButtonProps: ButtonPropTypes = {
		text: 'Send',
		onClick: jest.fn(),
		fontSize: 1.4,
		buttonSize: 12,
		isActive: false,
	};
	it('should render without throw', async () => {
		render(<Button {...ButtonProps} />);
		expect(screen.getByTestId('button-wrapper')).toBeInTheDocument();
	});

	it('should render right text basead on ButtonProps', () => {
		render(<Button {...ButtonProps} />);
		expect(screen.getByTestId('button-text').textContent).toEqual(
			ButtonProps.text
		);
	});

	it('should render a Button with text Equals Send', async () => {
		render(<Button {...ButtonProps} />);
		const wrapper = screen.getByTestId('button-wrapper');
		expect(wrapper.textContent).toEqual(ButtonProps.text);
	});

	it('should call fn on clicked', () => {
		render(<Button {...ButtonProps} />);
		const wrapper = screen.getByTestId('button-wrapper');
		userEvent.click(wrapper);
		expect(ButtonProps.onClick).toHaveBeenCalledTimes(1);
	});
	it('should change border color when is isActive', () => {
		render(
			<Button
				text={ButtonProps.text}
				buttonSize={ButtonProps.buttonSize}
				onClick={ButtonProps.onClick}
				isActive={true}
				data-testid='button-wrapper'
			/>
		);
		const wrapper = screen.getByTestId('button-wrapper');
		expect(wrapper).toHaveStyle(`border: 1px solid ${COLORS.base}`);
	});
	it('should change border color when is not isActive', () => {
		render(
			<Button
				text={ButtonProps.text}
				buttonSize={ButtonProps.buttonSize}
				onClick={ButtonProps.onClick}
				isActive={false}
				data-testid='button-wrapper'
			/>
		);
		const wrapper = screen.getByTestId('button-wrapper');
		expect(wrapper).toHaveStyle(`border: 1px solid ${COLORS.highlight}`);
		expect(wrapper).toHaveStyle(`width: ${ButtonProps.buttonSize}rem`);
	});
});
