export type CommentTypeProps = {
    id: number;
    comment: string;
    user: {
        name: string;
        email: string;
        avatar?: string;
    }
}