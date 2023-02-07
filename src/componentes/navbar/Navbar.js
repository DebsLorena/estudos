import React from 'react';
import './navbar.css';


// transformar em função em react
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

const Navbar = () => {
    return (

        <div className="navigation" id="top" data-header>
            <ul>
                <li className="list">
                    <a href="/">
                        <span className="icon">
                        <ion-icon name="code-slash-outline"></ion-icon>
                        </span>
                        <span className="text">Home</span>
                    </a>
                </li>
                <li className="list active">
                    <a href="https://debslorena.github.io/developer-frontend/" rel="noreferrer" target="_blank">
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="text">Sobre</span>
                    </a>
                </li>
                <li className="list">
                    <a href="https://github.com/DebsLorena" rel="noreferrer" target="_blank">
                        <span className="icon">
                            <ion-icon name="logo-github"></ion-icon>
                        </span>
                        <span className="text">GitHub</span>
                    </a>
                </li>
                <li className="list">
                    <a href="https://www.linkedin.com/in/loredebs/" rel="noreferrer" target="_blank">
                        <span className="icon">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </span>
                        <span className="text">Linkedin</span>
                    </a>
                </li>
                <li className="list">
                    <a href="https://api.whatsapp.com/send?phone=5161983434026" rel="noreferrer" target="_blank">
                        <span className="icon">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </span>
                        <span className="text">Whatsapp</span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default Navbar