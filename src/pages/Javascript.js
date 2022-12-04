import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Javascript = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Basic Syntax</li>
                    <li>Dom Manipulation</li>
                    <li>Fetch Api /Ajax</li>
                    <li>Async Await</li>
                    <li>Event Listeners</li>
                    <li>Es6+</li>
                    <li>Promises</li>
                    <li>Classes</li>
                    <li>Array Methods</li>
                    <li>Scoping</li>
                    <li>Hoisting</li>
                    <li>Closures</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Javascript