import { CarouselGames } from "../../components/CarouselGames";
import { NavBar } from "../../components/NavBar";
import styles from './styles.module.scss';

export function Games(){
    return(
        <>
            <NavBar/>

            <div className={styles.jogos}>
                <CarouselGames />
            </div>
        </>
    );
}