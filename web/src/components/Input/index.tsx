import styles from './styles.module.scss';
import { InputTypeProps } from '../../data/@types/Input';

export function Input(props: InputTypeProps){
    return(
        <input {...props} className={styles.input}/>
    );
}