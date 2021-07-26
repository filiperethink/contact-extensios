function formatPhoneNumber(phone: string) {
	if (phone.length === 11) {
		const cleaned = ('' + phone).replace(/\D/g, '');

		return isValidPhone(cleaned);
	}
	return { error: true, phone: '' };
}

function isValidPhone(phone: string) {
	const match = phone.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
	if (match) {
		return {
			error: false,
			phone: `55${match[1]}${match[2]}${match[3]}${match[4]}`,
		};
	} else {
		return { error: true, phone: '' };
	}
}

export { formatPhoneNumber, isValidPhone };
