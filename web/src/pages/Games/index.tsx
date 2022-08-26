import { NavBar } from "../../components/NavBar";
import styles from './styles.module.scss';

export function Games(){
    return(
        <>
            <NavBar/>

            <div className={styles.title}>
                <h1>Melhores Jogos!</h1>
                <p>Na opinião dessa mera desenvolvedora ;-)</p>
            </div>
        </>
    );
}