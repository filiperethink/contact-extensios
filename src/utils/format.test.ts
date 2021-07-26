import { formatPhoneNumber, isValidPhone } from './format';

describe('formatPhoneNumber', () => {
	it('should return a formated number', () => {
		const result = formatPhoneNumber('31997815503');
		expect(result).toEqual({ error: false, phone: '5531997815503' });
	});
	it('should return error if params is invalid', () => {
		const result = formatPhoneNumber('031997815503');
		expect(result).toEqual({ error: true, phone: '' });
	});

	it('should return error if params is invalid', () => {
		const result = formatPhoneNumber('031');
		expect(result?.error).toBeTruthy();
	});
	it('should return error if params is invalid', () => {
		const result = formatPhoneNumber('31997815503');
		expect(result?.error).toBeFalsy();
	});
	it('should return error object if string doesnt match', () => {
		const result = formatPhoneNumber('ABC');
		expect(result).toEqual({ error: true, phone: '' });
	});
	it('should return error object if string doesnt match', () => {
		const result = isValidPhone('ABC');
		expect(result).toEqual({ error: true, phone: '' });
	});
});
