import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import * as S from './styled';
import { Button, Input } from '../';

export type FormPropsType = {
	handleFormSubmit: (text: string) => string;
};

function Form({ handleFormSubmit }: FormPropsType) {
	const [text, setText] = useState('');
	const [hasErros, setHasErrors] = useState(false);
	const [InputIsTouched, setInputIsTouched] = useState(false);

	const handleTextChange = (string: React.SetStateAction<string>) => {
		setText(string);
		setInputIsTouched(true);
		if (text.length >= 4) {
			setHasErrors(false);
		}
	};

	const onSubmitForm = () => {
		if (text.length >= 5 && text.length <= 20) {
			setHasErrors(false);
			return handleFormSubmit(text);
		} else {
			const errorMessage = 'Campo é obrigatório (Min 5, Max 20 caracteres).';
			setHasErrors(true);
			handleFormSubmit(errorMessage);
			setInputIsTouched(false);
		}
	};

	return (
		<>
			<S.FormContainer>
				<Input onChange={handleTextChange} value={text} />
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
