import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Testes = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Jest & Testing Library</li>
                    {content && (
                        <div className='Material' >
                            <p>24,25 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24893038#overview'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 19/20/21/22/23/24</p>
                            <p>Aula 33 - Introdução à teste com Jest e Testing Library</p>
                            <p> Testes unitários - testa apenas uma função ou uma classe</p>
                            <p>Aula 34,35,36 - Introdução à teste com Jest e Testing Library  - extensão nomedoarquivo.spec.jsx (testes unitários) ou nomedoarquivo.test.jsx(testes de integração) (para react)</p>
                            <ul>
                                <li>npm test(roda os testes)</li>
                                <li>npm test -- --coverage(informe os testes que não foram feitos)</li>
                                <li>npm test -- --watchAll="false" --coverage</li>
                            </ul>
                            <p>Mock algo "falso" criado apenas para testar o componente</p>
                            <p>Aula 37 - Eslint, prettier, editorconfig e prop-types </p>
                            <p>Eslint</p>
                            <ul>
                                <li>npx eslint --init</li>
                                <li>npm i -D prettier eslint-config-prettier eslint-plugin-prettier</li>
                                <li>npx eslint src/**/*.jsx --fix (verifica os erros após as configurações)</li>
                                <li>npm i prop-types</li>
                            </ul>
                            <div className='line'></div>
                            <p>31 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/25642394?start=15#questions'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 39/40/41/42</p>
                            
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Vitest</li>
                    <li>Cypress</li>
                    <li>Enzyme</li>
                    <li>Jasmine</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Testes