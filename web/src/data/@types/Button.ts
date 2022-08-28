import { ReactNode } from 'react';

export type ButtonTypes = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: string;
}