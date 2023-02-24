import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/architecture/image1.png';
import image2 from '../image/architecture/image2.png';
import image3 from '../image/architecture/image3.png';


const Architecture = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }

    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Basics</li>
                    {content && (
                        <div className='Material' >
                            <p>24 de Fevereiro</p>
                            <div className='line'></div>
                            <p>Clean Artchicture</p>
                            <p> Aulas Rodrigo Manguinho Aula 3 </p>
                            <img src={image2} height="200px" alt=''></img>
                            <img src={image1} height="200px" alt=''></img>
                            <img src={image3} height="200px" alt=''></img>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Architecture