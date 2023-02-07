import React, { useState }  from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const TopicosImportantes = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }


    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>PWA</li>
                    <li>Web Sockets</li>
                    <li>Cors</li>
                    <li>Json</li>
                    <li>CI/CD</li>
                    <li onClick={handleClickContent}>Eslint & Prettier</li>
                    {content && (
                        <div className='Material' >
                            <p>31 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/25642394?start=15#questions'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 43/44/45/46/47/48/49/50/51/52/53 </p>
                            <p> Aula 44 Criar projeto com  npx create-react-app ./, clique com botão direito em cima do nome do projeto, em generate .editorconfig, configure de acordo com a aula. 
                                <br/>
                                Crie o arquivo .prettierrc.js, Crie o arquivo .eslintrc.js, insira as configurações, no terminal consulte o Output, Eslint e verifique as informações.
                                Instale npm i -D prettier eslint-config-prettier eslint-plugin-prettier
                                npx eslint src/**/*.js --fix (irá corrigir os arquivos já existente)
                                npm i prop-types
                            </p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Styled Lint</li>
                    
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default TopicosImportantes