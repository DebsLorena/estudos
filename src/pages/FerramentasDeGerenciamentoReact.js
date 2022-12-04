import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const FerramentasDeGerenciamentoReact = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Redux</li>
                    <li>Mobx</li>
                    <li>Hookstate</li>
                    <li>Recoil</li>
                    <li>Akita</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default FerramentasDeGerenciamentoReact