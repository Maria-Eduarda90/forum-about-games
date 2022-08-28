import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { GiConsoleController } from 'react-icons/gi';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.information}>
                    <h1 className={styles.game}>
                        <GiConsoleController />
                    </h1>
                    <p>Desenvolvido by Maria 💙</p>
                    <span>@2022</span>
                </div>

                <div className={styles.icons}>
                    <a href="https://facebook.com" target="_blank"><FiFacebook className="icon" /></a>
                    <a href="https://instagram.com" target="_balnk"><AiOutlineInstagram className="icon" /></a>
                    <a href="https://instagram.com" target="_balnk"><AiOutlineWhatsApp className="icon" /></a>
                </div>
            </div>
        </footer>
    );
}