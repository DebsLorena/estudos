import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Css = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Basics</li>
                    <li>Selectors</li>
                    <li>Positioning</li>
                    <li>Box Model</li>
                    <li>Display</li>
                    <li>Specificity</li>
                    <li>FlexBox</li>
                    <li>Grid</li>
                    <li>Media Queries</li>
                    <li>Pseudo Elements</li>
                    <li>Pseudo Classes</li>
                    <li>Animations</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Css