import styled from 'styled-components';
import { METRICS, COLORS, S } from '../../theme';

export const FormContainer = styled.div`
	display: flex;
	height: 40px;
`;
export const FormErrorText = styled.label`
	font-size: 0.7rem;
	color: ${COLORS.errorText};

	margin-top: ${S.getMetricValueInrem(METRICS.margin.small)};
`;
