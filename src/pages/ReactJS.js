import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/reactjs/image1.PNG';
import image2 from '../image/reactjs/image2.PNG';
import image3 from '../image/reactjs/image3.PNG';


const ReactJS = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }


    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript</li>
                    {content && (
                        <div className='Material' >
                            <p>23 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24893038#overview'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 19/20/21/22/23/24</p>
                            <p>Aula 20</p>
                            <img src={image1} height="200px" alt=""></img>
                            <img src={image2} height="200px" alt=""></img>
                            <p>Aula 21 - separar componentes e limpar códigos desnecessários</p>
                            <p>Aula 22 - criar pages e mover pastas e components, slice() com botão de ver mais e desativar o botão quando não há mais o que ver.</p>
                            <p>Aula 23 - Input e search, condição ternaria</p>
                            <p>Aula 24 - Fluxo de dados, componentes e state vs props</p>
                            <div className='line'></div>
                            <p>24 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24917524#overview'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 25/26/27/28/29/30</p>
                            <p>Aula 25 -React Developer Tools</p>
                            <p>Aula 26 -Eventos sintéticos do react</p>
                            <p>Aula 27 -Configurando o Git e SSH Keys no Windows
                                # Criar chaves ssh
                                ssh-keygen -t rsa -f "/c/Users/seu-usuario/.ssh/nome-chave" -C 'seu-email@email.com'

                                # Quando fechar o terminal preciso executar isso
                                eval "$(ssh-agent -s)"
                                ssh-add /c/Users/seu-usuario/.ssh/nome-chave

                                # Iniciando o git
                                git init
                                git config --global user.name "SEU NOME"
                                git config --global user.email "seu-email@email.com"
                                git remote add origin git@github.com:CAMINHO-COPIADO-DO-GITHUB-SSH

                                # Editei
                                git add .
                                git commit -m 'MENSAGEM'
                                git push origin master
                            </p>
                            <p>Aula 28 -Configurando o Git e SSH Keys no Ubuntu</p>
                            <p>Aula 29 -Deploy Netlify</p>
                            <p>Aula 30 -React Hooks apenas msg</p>
                            <p>Aula 31 -Alteração de componente de classe para componente funcional</p>
                            <p>Aula 32 -Contador erros virtual Dom</p>
                            <img src={image3} height="200px" alt=""></img>
                            <p>As próximas aulas estão nos devidos tópicos</p>
                            <div className='line'></div>
                            <p>01 de Fevereiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24955548#questions/17009820'>Video Aulas Udemy Luiz Otavio</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aula 49</p>
                            <a href='https://pt-br.reactjs.org/docs/hooks-rules.html'>Regras dos Hooks - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Components</li>
                    <li>JSX</li>
                    <li>Props</li>
                    <li>State</li>
                    <li>Events</li>
                    <li>Conditional Rendering</li>
                    <li onClick={handleClickContent}>Context Api</li>
                    {content && (
                        <div className='Material' >
                            <p>12 de dezembro de 2022</p>
                            <div className='line'></div>
                            <a href='https://www.youtube.com/watch?v=hYNjpbXe7V0&list=PLgM_vQNu_4CBV5D1uLH1gzvZ3lNYWujC3'>Video Youtube João Bibiano</a>
                            <p>Live ReactJS - Context API e Hooks definitivo #002</p>
                            <p> Link Github <a href='https://github.com/DebsLorena/Context-api'>Repositório</a>
                            </p>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useState</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <p>31 de Janeiro de 2023</p>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 46/47 </p>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24952700#questions/17009820'>Aula 46 - clique aqui</a><br/>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#usestate'>Documentação - clique aqui</a>
                            
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useEffect</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <p>31 de Janeiro de 2023</p>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aulas 48 </p>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24955272#questions/17009820'>Aula 48 e 49 - clique aqui</a><br/>                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useRef</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#useref'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useContext</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useReducer</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useMemo</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#usememo'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>useCallback</li>
                    {content && (
                        <div className='Material' >
                            <p>01 de Fevereiro de 2023</p>
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback'>Documentação - clique aqui</a><br/>
                            <a href='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24957558#questions/17009820'>Video Aulas Udemy Luiz Otavio Aula 50 - clique aqui</a>
                            <p>ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript Aula 50</p>




                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>Hooks</li>
                    {content && (
                        <div className='Material' >
                            <div className='line'></div>
                            <a href='https://pt-br.reactjs.org/docs/hooks-reference.html#library-hooks'>Documentação - clique aqui</a>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Fields</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ReactJS