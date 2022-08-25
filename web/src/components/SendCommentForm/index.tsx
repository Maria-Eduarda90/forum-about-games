import { useState } from 'react';
import styles from './styles.module.scss';

const MAX_COMMENT_CHAR = 200;

export function SendCommentForm(){
    const [text, setText] = useState('');

    return(
        <div className={styles.container}>
            <form action="">
                <textarea
                 name="text" 
                 placeholder="Comente algo sobre o mundo dos jogos  ¯\_(ツ)_/¯"
                 value={text}
                 onChange={e => setText(e.target.value)}
                />

                <div>
                    <span>
                        <span>{text.length}</span> / <span className={styles.count}>{MAX_COMMENT_CHAR}</span>
                    </span>
                    <button disabled={text.length > MAX_COMMENT_CHAR}>Comentar</button>
                </div>
            </form>
        </div>
    );
}