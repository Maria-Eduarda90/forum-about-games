import { FormEvent, useEffect, useState } from "react";
import api from "../api/api";
import { CommentTypeProps } from "../data/@types/Comment";

export function useComment(){
    const [comment, setComment] = useState<CommentTypeProps[]>([]);
    const [sendComment, setSendComment] = useState('');

    useEffect(() => {
      api.get("/api/comment").then((response) => {
        setComment(response.data);
      });
    }, [comment]);

    const handleSendComment = async (e: FormEvent) => {
        e.preventDefault();

        if(!sendComment.trim()){
            return;
        }

        const data = {
            comment: sendComment,
        };

        await api.post('/api/comment', data);
        setSendComment('');
    }

    return {
      comment,
      sendComment,
      setSendComment,
      handleSendComment,
    };
}