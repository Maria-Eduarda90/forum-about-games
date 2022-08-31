import { useComment } from "../../hooks/useComments";
import imgAvatar from '../../img/Avatar.svg';
import styles from './styles.module.scss';

export function Comments(){
    const { comment } = useComment();

    return(
        <>
            {comment.map(index => {
                return(
                    <div className={styles.container} key={index.id}>
                        <div className={styles.image}>
                            <img src={index.user.avatar ? index.user.avatar : imgAvatar} alt="foto do usuario" />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.name}>{index.user.name}</span>
                            <span className={styles.email}>{index.user.email}</span>

                            <p>{index.comment}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}