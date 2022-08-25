import { CommentTypeProps } from "../../data/@types/Comment";
import imgAvatar from '../../img/Avatar.svg';
import styles from './styles.module.scss';

export function Comments({ name, email, avatar, children }: CommentTypeProps){
    return(
        <div className={styles.container}>
           <div className={styles.image}>
                <img src={avatar ?? imgAvatar} alt="foto do usuario" />
           </div>
           <div className={styles.content}>
                <span className={styles.name}>{name}</span>
                <span className={styles.email}>{email}</span>

                <p>{children}</p>
           </div>
        </div>
    );
}