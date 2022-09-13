import { FC, HTMLAttributes } from 'react';

type FooterProps = HTMLAttributes<HTMLDivElement> & {};

export const Footer: FC<FooterProps> = ({ ...props }) => <footer {...props}>Footer</footer>;
