import { useState } from "react";
import { VscSignOut } from 'react-icons/vsc';
import { NavLink } from "react-router-dom";
import closeMenu from '../../img/closeMenu.svg';
import menuIcon from '../../img/menu.svg';

import styles from './styles.module.scss';

export function NavBar(){
    const [colorChange, setColorChange] = useState(false);
    const [click, setClick] = useState(false);

    function changeNavbarColor(){
        if(window.scrollY >= 60){
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor);

    function handleClick (){
        setClick(!click);
    }

    function closeMobileMenu(){
        setClick(false);
    }

    return(
        <header className={`${styles.header} ${colorChange ? `${styles.navbar}` : ''}`}>
            <nav className={click ? styles.active : ''}>
                <div className={styles.wrapper}>
                    <button>
                        <VscSignOut size="25" color="#908d8d"/>
                        <span>Sair</span>
                    </button>
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
                            <NavLink to="/Forum" style={({ isActive }) => ({
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