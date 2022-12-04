import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const PreProcessadorCss = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>SASS/SCSS</li>
                    <li>Postcss</li>
                    <li>Less</li>
                    <li>Stylus</li>
                    <li>Stylecow</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default PreProcessadorCss