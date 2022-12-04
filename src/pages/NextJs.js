import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const NextJs = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Static Site Generation</li> 
                    <li>Server Side Rendering</li> 
                    <li>Incremental Static Regeneration</li> 
                    <li>Dynamic Pages</li> 
                    <li>Css / Sass Modules</li> 
                    <li>Lazy loading Modules</li> 
                    <li>Api Routes</li> 
                    <li>Jest</li> 
                    <li>Testing Library</li> 
                    <li>Cypress</li> 
                    <li>Enzyme</li>
                    <li>Jasmine</li> 
                    <li>Mocha</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default NextJs