import styles from './styles.module.scss';

export function SendCommentForm(){
    return(
        <div className={styles.container}>
            <form action="">
                <textarea name="text" placeholder="Comente algo sobre o mundo dos jogos  ¯\_(ツ)_/¯"/>

                <div>
                    <span>
                        <span>0</span> / <span className={styles.count}>140</span>
                    </span>
                    <button>Comentar</button>
                </div>
            </form>
        </div>
    );
}