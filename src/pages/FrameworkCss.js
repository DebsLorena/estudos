import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const FrameworkCss = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Bootstrap</li>
                    {content && (
                        <div className='Material' >
                            <p>04 de Outubro de 2022</p>
                            <div className='line'></div>
                            <p><a href=''>Link do estudo </a></p>
                            <p> Resumo do que foi aprendido</p>
                            <p><a href=''>Link do repositorio </a></p>
                            <p><a href=''>Link da github pages ou vercel </a></p>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Tailwind</li>
                    <li>Materialize</li>
                    <li>Bulma</li>
                    <li>Semantic Ui</li>
                    <li>Foundation</li>
                </ul>


            </div>
            <Footer />
        </div>
    )
}

export default FrameworkCss