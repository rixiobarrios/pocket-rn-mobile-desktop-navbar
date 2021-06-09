import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import Logo from '../assets/logo.png';
import './header.css';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                        <a className="logo-link" href="https://pocketrn.com/">  
                        <img className="logo" src={Logo} alt="logo"/>
                    </a>
                </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/">Home</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/patients">Patients</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/caregivers">Caregivers</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/providers">Healthcare Providers</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/about">About</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="https://pocketrn.com/contact">Contact</a>
                    </li>
                    <li
                        className="option mobile-option" onClick={closeMobileMenu}>
                    </li>
                    <li
                        className=" option mobile-option"
                        onClick={closeMobileMenu}
                    >
                        <a href="https://pocketrn.com/app/login" className="sign-up">
                            Sign up / Log in
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li onClick={closeMobileMenu}>
                    <a href="https://pocketrn.com/app/login" className="signup-btn">
                        Sing up / Log in
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Header;
