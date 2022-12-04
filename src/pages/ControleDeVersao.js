import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const ControleDeVersao = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitFlow</li>
                    <li>GitLab</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ControleDeVersao