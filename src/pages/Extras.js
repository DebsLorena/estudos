import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Extras = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Webpack</li>
                    <li>Parcel</li>
                    <li>SnowPack</li>
                    <li>Rollup.js</li>
                    <li>Gulp</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Extras