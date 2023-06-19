import React from 'react';
import BurgerComponent from "./BurgerComponent";

const Header = () => {
    return (
        <header>
            <div className="row">
                <div className="logo">
                    <a href="/">IT-LIBRARY</a>
                </div>
                <nav id="main-nav-wrap">
                    <ul className="main-navigation" id='menu'>
                        <li><a href="#intro" title="">Հիմնական</a></li>
                        <li><a href="#process" title="">Մեր մասին</a></li>
                        <li><a href="#testimonials" title="">Կապ Մեզ Հետ</a></li>
                        <li><a href="/science" title="">Գիտական աշխարհ</a></li>
                    </ul>
                </nav>
                <BurgerComponent/>
            </div>
        </header>
    );
}

export default Header;