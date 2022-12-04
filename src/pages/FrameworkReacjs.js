import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const FrameworkReacjs = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Material UI</li>
                    <li>Ant Desing</li>
                    <li>Chakra UI</li>
                    <li>React Bootstrap</li>
                    <li>Rebass</li>
                    <li>Blueprint</li>
                    <li>Semantic UI React</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default FrameworkReacjs