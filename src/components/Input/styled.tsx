/* istanbul ignore file */
import styled from 'styled-components';
import { COLORS, METRICS, S } from '../../theme';

export const InputWrapper = styled.label`
	display: flex;
	width: 100%;
`;

export const Input = styled.input`
	padding-left: ${S.getMetricValueInrem(METRICS.padding.small)};
	color: ${COLORS.dark};
	background-color: ${COLORS.base};
	border: 1px solid ${COLORS.dark};
	display: flex;
	width: 100%;
	flex: 1;
	height: 100%;
	border-radius: 10px;
	margin-right: 5px;
	outline: 1px solid ${COLORS.dark};
	font-size: 0.7rem;
	&::placeholder {
		font-size: 0.7rem;
	}
`;
