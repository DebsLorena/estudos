import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/html/image1.png';
import image2 from '../image/html/image2.png';
import image3 from '../image/html/image3.png';


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
                    <li onClick={handleClickContent}>Emment</li>
                    {content && (
                        <div className='Material' >
                            <p>23 de Fevereiro de 2023</p>
                            <div className='line'></div>
                            <h2>Emment</h2>
                            <a href='https://code.visualstudio.com/docs/editor/emmet'>Documentação</a>
                            <a href='https://desenvolvimentoparaweb.com/html/emmet/'>Alguns exemplos veja aqui</a>
                            <p> Exemplos no link acima </p>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>Forms</li>
                    {content && (
                        <div className='Material' >
                            <p>23 de Fevereiro de 2023</p>
                            <div className='line'></div>
                            <h2>Formulários - Origamid</h2>
                            <a href='https://www.origamid.com/curso/html-e-css-para-iniciantes/0901-formularios-1'>Link da aula</a>
                            <p> Tags para os formulários </p>
                            <ul><li>Form: <ul><li>action</li><li>method: get ou post</li><li>autocomplete</li></ul></li></ul>
                            <p>Para mais tags verificar a documentação, <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/form'>Clique aqui</a></p>
                            
                            <h4>Estrutura de um form: tag form, label, input. Dentro da label use o for="" que deverá estar relacionado ao id="" dentro do input. Se no form eu inserir action="com alguma ação" ao colocar um botão dentro do form, ele irá automaticamente fazer a ação descrição.</h4>
                            <img src={image1} height="200px" alt=''></img>
                            <p> Se eu utilizar o mesmo name ele irá aceitar apenas uma escolha selecionada, exemplo na entrega abaixo</p>
                            <img src={image2} height="200px" alt=''></img>

                            <h5>Select e textarea</h5>
                            <img src={image3} height="200px" alt=''></img>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>Semantic HTML</li>
                    {content && (
                        <div className='Material' >
                            <p>23 de FEvereiro de 2023</p>
                            <div className='line'></div>
                            <h2>Semântica e Acessibilidade - Origamid</h2>
                            <a href='https://www.origamid.com/curso/html-e-css-para-iniciantes/0401-semantica-e-acessibilidade/'>Link da aula</a>
                            <p> Sites para referencia WebAim, tink.uk Leonie Watson</p>
                            <p> A forma como o curso apresenta a leitura de um site me deu outra forma de ver</p>
                            <p> Atenção especial aos hs, h1, h2, h3....</p>
                            <ul>
                                <li>main: marca o conteudo principal</li>
                                <li>nav: envolve a navegação</li>
                                <li>section; não faz sentido sozinha, a section nao cria areas de referencia, com o aria-label ele cria uma area de referencia </li>
                                <li>article: encapsula uma região do site, exemplos uma postagem, uma lista de produtos, algo que faça sentido sozinho</li>
                                <li>aside: conteudos extras, normalmente lateral, nao cria uma região, normalmente utilizado em blog</li>
                                <li>footer</li>
                                <li>header: normalmente envolve a nav, marca o cabeçalho</li>
                            </ul>
                            <ul>
                                <li>aria-label="primária" usar com cuidado, titulo da região lido pelo leitor de tela</li>
                                <li> aria-labelledby="id" utiliza-se para ler um titulo ou texto do artigo, insira um id na tag e repita o id entre as "", assim ele não ira repetir o texto escolhido</li>
                            </ul>
                            <p> Em inspecionar, elementos, acessibilidade, mostra detalhes semanticos, a arvore do site</p>
                            <a href='https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure'>Documentação, clique aqui</a>


                            <h2>Tipos de listas</h2>
                            <ul>
                                <li>ul: não ordenada</li>
                                <li>ol: ordenada</li>
                                <li>dl: engloba termos e descrição, utiliza-se a tag dt para termo e dd para descrição, exemplo em perguntas frequentes dt faz a pergunta e dd responde a descrição. </li>
                            </ul>

                            <h3>Outras tags</h3>
                            <ul>
                                <li>Blockquote :Uma tag que marca um paragrafo que estamos citando de alguem, pode inserir dentro da tag um cite="link" que especifica de onde vem a descrição ou texto.</li>
                                <li>q : cita uma frase de alguém, envolve em "aspas o conteudo"</li>
                                <li>cite: descreva o nome de um livro ou filme, algo que tenha direito autorar que não seja seu</li>
                                <li>em: dá enfase a um texto</li>
                                <li>strong: dá um enfase ao texto, similar em</li>
                            </ul>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>SEO Basics</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Html