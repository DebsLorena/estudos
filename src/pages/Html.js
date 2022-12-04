import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Html = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Basics</li>
                    <li>Emment</li>
                    <li>Forms</li>
                    <li>Semantic HTML</li>
                    <li>SEO Basics</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Html