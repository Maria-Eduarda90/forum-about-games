import styles from './styles.module.scss';

import GodOfWar from '../../img/God-of-War-First-PC-mods.png';
import SpiderMan from '../../img/spider-man.png';

export function Cards(){
    return(
        <section className={styles.content}>
            <div className={styles.cardGfw}>
                <main>
                    <h1>God-of-War</h1>
                    <p>
                        Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que há muito tempo o define enquanto viaja por um mundo ameaçador com o seu filho.
                        Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos.
                    </p>
                </main>

                <img src={GodOfWar} alt="" />
            </div>

            <div className={styles.card}>
                <img src={SpiderMan} alt="" />
                <main>
                    <h1>Spider-Man: Miles Morales</h1>
                    <p>
                        Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5
                    </p>
                </main>
            </div>
        </section>
    );
}