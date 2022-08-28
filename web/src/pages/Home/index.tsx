import { NavBar } from "../../components/NavBar";
import imgFundo from '../../img/415518.jpg';
import GodOfWar from '../../img/God-of-War-First-PC-mods.png';
import SpiderMan from '../../img/CjY47LXQ9XrtJolJNVGwc29D.png';

import styles from './styles.module.scss';

export function Home(){
    return(
        <>
            <NavBar />
            <main className={styles.container}>
                <section className={styles.section}>
                    <img src={imgFundo} alt="" />
                </section>

                <section className={styles.description}>
                    <h1>Explorar</h1>

                    <p>
                        Jogo é toda e qualquer atividade em que exista a figura do jogador (como indivíduo praticante) e regras que podem ser para ambiente restrito ou livre. Geralmente os jogos têm poucas regras e estas tendem a ser simples. Sua presença é importante em vários aspectos, entre eles a regra define o início e fim do jogo. Pode envolver dois ou mais jogando entre si como adversários ou cooperativamente com grupos de adversários. É importante que um jogo tenha adversários interagindo e como resultado de interação exista um vencedor e um perdedor.
                        Jogos são atividades estruturadas, praticadas com fins recreativos e em alguns casos fazem parte de instrumentos educacionais, onde são usados jogos para passar uma mensagem aos jogadores (vencedores e perdedores). São distintos do trabalho que visa remuneração e da arte que está associado à expressão de ideias. Esta separação é sempre precisa, porém, há jogos praticados por remuneração e outros associados à expressão de ideias e emoções.
                    </p>
                </section>

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
            </main>
        </>
    );
}