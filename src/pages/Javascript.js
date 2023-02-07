import React, {useState} from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Javascript = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }


    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Basic Syntax</li>
                    {content && (
                        <div className='Material' >
                            <p>05 e 06 de dezembro de 2022</p>
                            <div className='line'></div>
                            <p>Javascript e HTML: desenvolva um jogo e pratique lógica de programação - Curso Alura</p>
                            <p> For, While, if e else, breack, function, Math.round, Math.random, parseInt, parseFloat, Alert, Prompt, Input, querySelector, array, push... </p>
                            <div className='line'></div>
                            <p>Javascript e HTML: pratique lógica com desenhos, animações e um jogo <br/>
                            Canvas - fillStyle, fillReact, getContext, beginPath, moveTo, lineTo, fill, arc, strokeStyle, beginPath, clearRect, setInterval
                            
                            
                            </p>
                            <p>Trilha Oracle + Alura, prazo de finalização da primeira etapa 12/12/2022</p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
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