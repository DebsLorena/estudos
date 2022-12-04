import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const WebServiços = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Netlify</li>
                    <li>Vercel</li>
                    <li>Firebase</li>
                    <li>Github Pages</li>
                    <li>Heroku</li>
                    <li>Render</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default WebServiços