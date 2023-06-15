import React from 'react';

const BurgerComponent = () => {

    let a = 0;
    const burger = () => {
        a++;
        const burg = document.getElementById("menu");
        const close = document.getElementById("burger");
        const header = document.querySelector("header");
        if (a === 1) {
            header.classList.add("sticky");
            burg.style.display = "block";
            close.classList.add("is-clicked");
        } else {
            burg.style.display = "none";
            close.classList.remove("is-clicked");
            a = 0;
        }
    }

    return (
        <>
            <a className="menu-toggle" id='burger' onClick={() => burger()}><span/></a>
        </>
    );
}

export default BurgerComponent;