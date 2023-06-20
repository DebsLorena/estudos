import React from 'react';
import './topic.css';
import { Link } from "react-router-dom";

const Topic = () => {

    
    return (
        <div className="container__topic">
            <div className="container-line">
                <div className="top-section">
                    <h3> Mapa de Estudos </h3>
                    <p> Guia pessoal, desenvolvido para organizar os meus estudos.
                    </p>
                    <p>
                        HTML5 | CSS3 | Javascript | React | Typescript | Next
                    </p>
                </div>
                <div className="itens">
                    <ul>
                        <Link to="/html"><li> HTML </li></Link>
                        <Link to="/css"><li>CSS</li></Link>
                        <Link to="/javascript"><li>Javascript</li></Link>
                        <Link to="/controledeversao"><li>Controle de versão</li></Link>
                        <Link to="/webservicos"><li>Web - serviços </li></Link>
                        <Link to="/frameworkcss"><li>Framework - CSS</li></Link>
                        <Link to="/preprocessadorCss"><li>Pré-processador - CSS</li></Link>
                        <Link to="/gerenciadoresdepacote"><li>Gerenciadores de pacote</li></Link>
                        <Link to="/reactjs"><li>ReactJs</li></Link>
                        <Link to="/apis"><li>APIs</li></Link>
                        <Link to="/acessibilidade"><li>Acessibilidade</li></Link>
                        <Link to="/frameworkreacjs"><li>Framework - ReactJs</li></Link>
                        <Link to="/bibliotecasreactjs"><li>Bibliotecas - ReactJs</li></Link>
                        <Link to="/ferramentasdegerenciamentoreact"><li>Ferramentas - ReactJs</li></Link>
                        <Link to="/nextjs"><li>Next JS</li></Link>
                        <Link to="/typescript"><li>TypeScript</li></Link>
                        <Link to="/seguranca"><li>Segurança</li></Link>
                        <Link to="/topicosImportantes"><li>Tópicos Importantes</li></Link>
                        <Link to="/extras"><li>Extras</li></Link>
                        <Link to="/teste"><li>Testes</li></Link>
                        <li>Meta Modelo</li>
                        <li>Metodologias Ágeis</li>
                        <Link to="/uxui"><li>Ux e UI</li></Link>
                        <li>Figma</li>
                        <Link to="/architecture"><li>Architecture</li></Link>
                        <Link to="/systemdesign"><li>System Design</li></Link>
                        <Link to="/codewars"><li>Codewars</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topic