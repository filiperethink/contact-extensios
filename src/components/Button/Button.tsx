import React from 'react';
import { ButtonText, ButtonWrapper } from './styled';

export type ButtonPropTypes = {
	text?: string;
	onClick?: () => void;
	fontSize?: number;
	buttonSize?: number;
	isActive?: boolean;
	icon?: React.ReactNode;
};

function Button({
	text,
	onClick,
	isActive,
	fontSize = 1.2,
	buttonSize,
	icon,
}: ButtonPropTypes) {
	return (
		<ButtonWrapper
			isActive={isActive}
			buttonSize={buttonSize}
			onClick={onClick}
			data-testid='button-wrapper'
		>
			<ButtonText size={fontSize} data-testid='button-text'>
				{text && text}
				{icon && icon}
			</ButtonText>
		</ButtonWrapper>
	);
}

export default Button;
