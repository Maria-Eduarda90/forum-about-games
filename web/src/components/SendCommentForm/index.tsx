import { useState } from 'react';
import { useComment } from '../../hooks/useComments';
import styles from './styles.module.scss';

const MAX_COMMENT_CHAR = 200;

export function SendCommentForm(){
    const { sendComment, setSendComment, handleSendComment } = useComment();

    return(
        <div className={styles.container}>
            <form onSubmit={handleSendComment}>
                <textarea
                 name="text" 
                 placeholder="Comente algo sobre o mundo dos jogos  ¯\_(ツ)_/¯"
                 value={sendComment}
                 onChange={e => setSendComment(e.target.value)}
                />

                <div>
                    <span>
                        <span>{sendComment.length}</span> / <span className={styles.count}>{MAX_COMMENT_CHAR}</span>
                    </span>
                    <button disabled={sendComment.length > MAX_COMMENT_CHAR}>Comentar</button>
                </div>
            </form>
        </div>
    );
}