import styles from './styles.module.scss';
import { ButtonTypes } from '../../data/@types/Button';

export function Button(props:ButtonTypes){
    return(
        <button {...props} className={styles.button}/>
    );
}