import React from 'react';
import * as S from './styled';

export type InputProps = {
	onChange: (string: React.SetStateAction<string>) => void;
	value: string;
	placeholder?: string;
};
export default function Input({
	onChange,
	value,
	placeholder = 'Digite um numero de celular aqui:',
}: InputProps) {
	return (
		<S.InputWrapper role='label' htmlFor='input' data-testid='input-wrapper'>
			<S.Input
				maxLength={11}
				min={11}
				placeholder={placeholder}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					onChange(event.target.value)
				}
				value={value}
			/>
		</S.InputWrapper>
	);
}
