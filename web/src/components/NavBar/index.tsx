import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
                            <NavLink to="/home" style={({ isActive }) => ({
                                color: isActive ? '#ffffff' : '#a9a4a4',
                            })}>Home</NavLink>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <NavLink to="/Jogos" style={({ isActive }) => ({
                                color: isActive ? '#ffffff' : '#a9a4a4',
                            })}>Jogos</NavLink>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <NavLink to="/Fórum" style={({ isActive }) => ({
                                color: isActive ? '#ffffff' : '#a9a4a4',
                            })}>Fórum</NavLink>
                        </li>
                        <li onClick={closeMobileMenu}>
                            <NavLink to="/Regras" style={({ isActive }) => ({
                                color: isActive ? '#ffffff' : '#a9a4a4',
                            })}>Regras</NavLink>
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