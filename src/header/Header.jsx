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
                        <a className="logo-link" href="/">  
                        <img className="logo" src={Logo} />
                    </a>
                </div>
                <ul className={click ? 'nav-options active' : 'nav-options'}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Home</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Patients</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Caregivers</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Healthcare Providers</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">About</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Contact</a>
                    </li>
                    <li
                        className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="#"></a>
                    </li>
                    <li
                        className=" option mobile-option"
                        onClick={closeMobileMenu}
                    >
                        <a href="#" className="sign-up">
                            Sign up / Log in
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li onClick={closeMobileMenu}>
                    <a href="#" className="signup-btn">
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
