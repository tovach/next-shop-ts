import { ComponentPropsWithoutRef, FC } from 'react';

type PrimaryButtonProps = ComponentPropsWithoutRef<'button'>;

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded border-2 border-gray px-2 py-1 hover:border-blue  ${className}`}
    {...props}
  >
    {children}
  </button>
);
