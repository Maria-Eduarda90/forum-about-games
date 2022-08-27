import imgRules from '../../img/icon-rules.png';
import { NavBar } from "../../components/NavBar";

import styles from './styles.module.scss';

export function Rules(){
    return(
        <>
            <NavBar/>

            <main className={styles.container}>
                <div className={styles.title}>
                    <h1>Regras</h1>
                    <img src={imgRules} alt="" />
                </div>
                <div className={styles.rules}>
                    <section>
                        <span>Regra I</span>
                        <p>° Sem discurso de ódio, preconceito ou racismo, todos são bem vindos!</p>
                    </section>
                    <section>
                        <span>Regra II</span>
                        <p>° Links desnecessário, contendo cóteudo maliciosos, será banido! </p>
                    </section>
                    <section>
                        <span>Regra III</span>
                        <p>° Proibido jogadores de lol -_-</p>
                    </section>
                </div>
            </main>
        </>
    )
}