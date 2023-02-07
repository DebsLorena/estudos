import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Html = () => {

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
                            <p>05 e 06 de dezembro de 2022</p>
                            <div className='line'></div>
                            <p>Javascript e HTML: desenvolva um jogo e pratique lógica de programação - Curso Alura</p>
                            <p> For, While, if e else, break, function, Math.round, Math.random, parseInt, parseFloat, Alert, Prompt, Input, querySelector, array, push... <br/>
                            Trilha Oracle + Alura, prazo de finalização da primeira etapa 12/12/2022</p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Emment</li>
                    <li>Forms</li>
                    <li>Semantic HTML</li>
                    <li>SEO Basics</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Html