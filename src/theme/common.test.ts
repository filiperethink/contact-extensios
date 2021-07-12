import { getMetricValueInrem } from './common';

describe('getMetricValueInrem', () => {
	it('should return value in rem', () => {
		const defaultValue = 10;
		const val = getMetricValueInrem(defaultValue);
		expect(val).toEqual(`${defaultValue}rem`);
	});
});
