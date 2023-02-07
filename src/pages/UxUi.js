import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const UxUi = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }

    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Ux</li>
                    {content && (
                        <div className='Material' >
                            <p>22 de Janeiro </p>
                            <div className='line'></div>
                            <p></p>
                            <p> Ux para quem (ainda) não é de Ux<br/>
                            Curso Udemy - Will Sertório</p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Ui</li>
                    
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default UxUi