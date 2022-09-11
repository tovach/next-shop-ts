import { ComponentPropsWithoutRef, FC } from 'react';

type PrimaryButtonProps = ComponentPropsWithoutRef<'button'>;

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children }) => <button>{children}</button>;
