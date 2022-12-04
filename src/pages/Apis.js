import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Apis = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>RestFul</li>
                    <li>Rest</li>
                    <li>GraphQL</li>
                    <li>Json-server</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Apis