import { ReactNode } from 'react';

export type CommentTypeProps = {
    name: string;
    email: string;
    avatar?: string | undefined;
    children: ReactNode;
}