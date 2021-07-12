import styled from 'styled-components';
import { S, COLORS, METRICS } from '../../theme';

type ButtonWrapperTypes = {
	size?: number;
	buttonSize?: number;
	isActive?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
};

export const ButtonText = styled.p<ButtonWrapperTypes>`
	font-size: ${({ size = 0.7 }: ButtonWrapperTypes) =>
		S.getMetricValueInrem(size)};
	color: ${COLORS.base};
`;

export const ButtonWrapper = styled.button<ButtonWrapperTypes>`
	width: ${(props: ButtonWrapperTypes) =>
		props.buttonSize ? `${props.buttonSize}rem` : '100%'};
	background-color: ${(props: ButtonWrapperTypes) => {
		return props.isActive ? COLORS.dark : COLORS.base;
	}};
	flex: 2;
	border: 1px solid
		${(props: ButtonWrapperTypes) =>
			props.isActive ? COLORS.base : COLORS.highlight};
	padding: ${S.getMetricValueInrem(METRICS.padding.big)};
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:focus {
		background-color: ${COLORS.base};
		-webkit-box-shadow: 0px 5px 15px -2px rgba(0, 0, 0, 0.86);
		box-shadow: 0px 5px 15px -2px rgba(0, 0, 0, 0.86);
		> p {
			color: ${COLORS.dark};
		}
	}

	&:hover {
		background-color: ${COLORS.base};
		cursor: pointer;
		> p {
			color: ${(props: ButtonWrapperTypes) =>
				props.isActive ? COLORS.dark : COLORS.base};
		}
	}
`;
