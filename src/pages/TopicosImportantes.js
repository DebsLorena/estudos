import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const TopicosImportantes = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>PWA</li>
                    <li>Web Sockets</li>
                    <li>Cors</li>
                    <li>Json</li>
                    <li>CI/CD</li>
                    <li>Eslint</li>
                    <li>Styled Lint</li>
                    <li>Prettier</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default TopicosImportantes