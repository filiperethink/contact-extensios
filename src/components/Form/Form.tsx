import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import * as S from './styled';
import { Button, Input } from '../';
import { formatPhoneNumber } from '../../utils/format';

export type FormPropsType = {
	handleFormSubmit: (phone: string) => void;
};

function Form({ handleFormSubmit }: FormPropsType) {
	const [phoneNumber, setText] = useState('');
	const [hasErros, setHasErrors] = useState(false);
	const [InputIsTouched, setInputIsTouched] = useState(false);

	const handleTextChange = (phone: React.SetStateAction<string>) => {
		setText(phone);
		setInputIsTouched(true);
		if (phoneNumber.length !== 11) {
			setHasErrors(false);
		}
	};

	const onSubmitForm = () => {
		const result = formatPhoneNumber(phoneNumber);
		if (!result.error) {
			setHasErrors(false);
			handleFormSubmit(result?.phone);
			const linkPath = `https://api.whatsapp.com/send?phone=${result?.phone}&text=\"Olá Yandra, gostaria de falar a respeito daquele assunto:\"`;
			window.open(linkPath, '_blank');
		} else {
			const errorMessage = 'Campo é obrigatório e deve conter 12 caracteres.';
			setHasErrors(true);
			handleFormSubmit(errorMessage);
			setInputIsTouched(false);
		}
	};

	return (
		<>
			<S.FormContainer>
				<Input onChange={handleTextChange} value={phoneNumber} />
				<Button
					onClick={onSubmitForm}
					fontSize={0.7}
					icon={<FiPlus size={16} />}
					isActive={true}
				/>
			</S.FormContainer>
			{hasErros && !InputIsTouched && (
				<S.FormErrorText data-testid='error-label'>
					Campo é obrigatório (Min 5, Max 20 caracteres).
				</S.FormErrorText>
			)}
		</>
	);
}

export default Form;
