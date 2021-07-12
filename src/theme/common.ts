import styled from 'styled-components';
import { COLORS, METRICS } from './constants';

export const getMetricValueInrem = (val: number) => {
	return `${val}rem`;
};

export const Container = styled.div`
	background-color: ${COLORS.dark};
	display: flex;
	flex: 1;
	flex-direction: column;
	height: 100%;
	padding: ${getMetricValueInrem(METRICS.padding.medium)};
`;

export const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

export const ErrorText = styled.p``;
