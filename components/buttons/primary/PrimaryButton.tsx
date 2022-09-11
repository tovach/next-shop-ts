import { ComponentPropsWithoutRef, FC } from 'react';

import { Wrapper } from './PrimaryButton.styles';

type PrimaryButtonProps = ComponentPropsWithoutRef<'button'>;

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
