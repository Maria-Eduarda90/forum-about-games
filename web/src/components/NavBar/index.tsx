import { useState } from "react";
import { Link } from "react-router-dom";
import closeMenu from '../../img/closeMenu.svg';
import menuIcon from '../../img/menu.svg';

import styles from './styles.module.scss';

export function NavBar(){
    const [click, setClick] = useState(false);
    function handleClick (){
        setClick(!click);
    }
    function closeMobileMenu(){
        setClick(false);
    }
    return(
        <header className={styles.header}>
            <nav className={click ? styles.active : ''}>
                <div className={styles.wrapper}>
                    <h1>Geek? 🎮</h1>
                </div>

                <div className={styles.links}>
                    <ul>
                        <li onClick={closeMobileMenu}>
                            <Link to="/home">Home</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <Link to="/Sobre">Sobre</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <Link to="/Fórum">Fórum</Link>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <Link to="/Regras">Regras</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={handleClick} className={styles.mobileMenu}>
                    {
                        click ? (
                            <img src={closeMenu} alt="" />
                        ) : (
                            <img src={menuIcon} alt="" />
                        )
                    }
                </div>
            </nav>
        </header>
    );
}