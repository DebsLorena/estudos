import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const GerenciadoresDePacote = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>NPM</li>
                    <li>Yarn</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default GerenciadoresDePacote