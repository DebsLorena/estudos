import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Css = () => {

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
                            <p>07 de dezembro de 2022</p>
                            <div className='line'></div>
                            <p>HTML e CSS3, 1,2,3,4 Curso Alura</p>
                            <p> Posicionamento, listas, navegação, formularios, tabela... <br/>
                            Trilha Oracle + Alura, prazo de finalização da primeira etapa 12/12/2022</p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
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