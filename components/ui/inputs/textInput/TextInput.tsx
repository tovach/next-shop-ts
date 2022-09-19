import { FC } from 'react';

type TextInputProps = {
  value: string;
};

export const TextInput: FC<TextInputProps> = ({ value }) => <input value={value} />;
