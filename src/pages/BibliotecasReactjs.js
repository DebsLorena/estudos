import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const BibliotecasReactjs = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>React Router</li>
                    <li>React Query</li>
                    <li>Axios</li>
                    <li>React Hook Form</li>
                    <li>Styled Components</li>
                    <li>Storybook</li>
                    <li>Framer Motion</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default BibliotecasReactjs