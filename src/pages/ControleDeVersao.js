import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/git/image1.PNG';
import image2 from '../image/git/image2.PNG';
import image3 from '../image/git/image3.PNG';
import image4 from '../image/git/image4.PNG';
import image5 from '../image/git/image5.PNG';
import image6 from '../image/git/image6.PNG';

const ControleDeVersao = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }



    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}>Git</li>
                    {content && (
                        <div className='Material' >
                            <p>06 de dezembro de 2022</p>
                            <div className='line'></div>
                            <p><a href='https://cursos.alura.com.br/course/git-github-controle-de-versao/task/57007'>Git e Github: controle e compartilhe seu código - Curso Alura</a></p>
                            <p> Comandos básicos: </p>
                            <ul className='list' >
                                <li>git init</li>
                                <li>git add .</li>
                                <li>git status</li>
                                <li>git commit -m</li>
                                <li>git rm</li>
                                <li>git clone</li>
                                <li>git log</li>
                                <li>git log -p</li>
                                <li>git push origin </li>
                                <li>git pull</li>
                                <li>git checkout</li>
                                <li>git restore</li>
                                <li>git commit && git push</li>
                                <li>git reset</li>
                                <li>git revet</li>
                                <li>git stash</li>
                                <li>git stash pop</li>
                                <li>git diff</li>
                                <li>git tag -a</li>
                            </ul>
                            <div className='line'></div>
                            <p> 1 - git checkout 2 - git reset 3 - git revert
                                <br />Com o git checkout nós desfazemos uma alteração que ainda não foi adicionada ao index ou stage, ou seja, antes do git add. Depois de adicionar com git add, para desfazer uma alteração, precisamos tirá-la deste estado, com git reset. Agora, se já realizamos o commit, o comando git revert pode nos salvar.</p>
                            <div className='line'></div>

                            <p>O merge junta os trabalhos e gera um merge commit. O rebase aplica os commits de outra branch na branch atual.
                                <a href='https://medium.datadriveninvestor.com/git-rebase-vs-merge-cc5199edd77c'>Clique Aqui</a>
                            </p>


                            <a href='https://gitflix-br.vercel.app/' rel="noreferrer" target="_blank">Clique aqui - Resumo de códigos</a>
                            <br />
                            <a href='https://git-scm.com/doc' rel="noreferrer" target="_blank">Clique aqui - Documentação</a>


                            <br />
                            <p>Trilha Oracle + Alura, prazo de finalização da primeira etapa 12/12/2022</p>
                            <br /><br />
                            <div className='line'></div>
                            <p>19 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <p><strong>Curso Rodrigo Manguinho - reactJs, Hooks, Recoil, TDD, Clean Architecture, SOLID</strong></p>
                            <p> Aula 1 - Git  </p>
                            <p>Comandos: </p>
                            <ul className='list'>
                                <li>git config --global --edit (opções:--local --global or --system)</li>
                                <li>git config --global core.editor code - editar, configurar os comendos através do visual studio code </li>
                                <li>git config --global --edit - repetir o comando e ele irá abrir o vsc</li></ul>
                            <br />
                            <ul className='list'>
                                <h5>No vsc - criar atalhos</h5>
                                <li>editor = code --wait</li>
                                <li>c = !git add --all && git commit -m  (all pega todo o Repositório independente do nível, o atalho c adiciona e commita) <p>exemplo para comitar: git c "first commit"</p> </li>
                                <li>s = !git status -s (apresenta uma forma reduzida do status)</li>
                                <li> git log --oneline (apresenta de forma mais clara e reduzida, facilita a vizualização quando há muitos commits, mas não apresenta o autor do commit nem a data)</li>
                                <li>!git log --pretty=format:'%C(blue)h%C(red)d %C(white)s - %C(cyan)cn, %C(green)cr'</li>
                                <ol>
                                    <li>git log --pretty=format:'%H' (mostra o numero do commit completo)</li>
                                    <li>git log --pretty=format:'%h' (mostra o numero do commit reduzida)</li>
                                    <li>git log --pretty=format:'%s' (mostra o texto do commit)</li>
                                    <li>git log --pretty=format:'%cn' (mostra o autor do commit)</li>
                                    <li>git log --pretty=format:'%h%d %s - %cn, %cr' (mostra numero reduzido, branch, autor, data)</li>
                                    <li>l = !git log --pretty=format:'%C(blue)h%C(red)d %C(white)s - %C(cyan)cn, %C(green)cr' (apresenta cores)</li>
                                </ol>
                                <ul>
                                    <li> amend = !git add --all && git commit --amend --no-edit (ele vai acrescentar no commit anterior)</li>
                                    <li> count = !git shortlog -s --grep (para consultar estatisticas do projeto)
                                        <ul className='list'>
                                            <li>git count test</li>
                                            <li>git count feat</li>
                                            <li>git count fix</li>
                                            <li>git count chore</li>
                                            <li>git count docs</li>
                                        </ul>
                                    </li>
                                    <li><p>Exemplo: git tag "1.0" (tradicional - não envie tag tradicional ao seu servidor)  ou git tag -a"1.0.1" -m "1.0.1" (anotada - recomendada)</p></li>
                                </ul>
                                <img src={image1} height="200px" alt=''></img>
                            </ul>
                            <div className='line'></div>
                            <p>19 de Janeiro de 2023</p>
                            <div className='line'></div>
                            <p><strong>Curso Rodrigo Manguinho - reactJs, Hooks, Recoil, TDD, Clean Architecture, SOLID</strong></p>
                            <p> Aula 2 - Git configurar depedências </p>
                            <ul className='list'>
                                <li>git init -y (cria um arquivo json) </li>
                                <li>git c 'chore: add npm'(instala no npm)</li>
                                <li>giti -D git-commit-msg-linter (esta biblioteca proibi commites fora do padrão)</li>
                                <li>git c 'chore: add commit linter' (chore: quando se adiciona ou edita tasks)</li>
                                <li>npm i -D typescript @types/node (image a baixo)</li>
                            </ul>
                            <p>Configuração arquivo tsconfig.json</p>
                            <img src={image2} height="300px" alt=''></img>
                            <ul className='list'>
                                <li>npm i -D eslint eslint-config-standard-with-typescript@11 eslint-plugin-import eslint-plugin-promise eslint0-lugin-standard eslint-plugin-node @typescript-eslint/eslint-plugin</li>
                            </ul>
                            <p>Criar arquivo .eslintrc.json</p>
                            <img src={image3} height="200px" alt=''></img>

                            <p>npm i -D lint-staged husky (impedi commits defeituosos)</p>
                            <p> Criar arquivo .lintstagedrc.json (Esta biblioteca pega todos os arquivos que estão na staged e manipula de acordo com as instruções)</p>
                            <img src={image4} height="200px" alt=''></img>
                            <p> Criar arquivo .hyskyrc.json </p>
                            <img src={image5} height="200px" alt=''></img>
                            <p> npm i -D jest @types/jest ts-jest</p>
                            <p> Criar arquivo .hyskyrc.json </p>
                            <img src={image6} height="200px" alt=''></img>
                            
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}>GitHub</li>
                    {content && (
                        <div className='Material' >
                            <p>06 de dezembro de 2022</p>
                            <div className='line'></div>
                            <p>Git e Github: controle e compartilhe seu código - Curso Alura</p>


                            <p>O merge junta os trabalhos e gera um merge commit. O rebase aplica os commits de outra branch na branch atual.
                                <a href='https://medium.datadriveninvestor.com/git-rebase-vs-merge-cc5199edd77c'>Clique aqui — Rebase vs Merge</a>
                            </p>


                            <a href='https://cursos.alura.com.br/course/git-github-controle-de-versao/task/57018' rel="noreferrer" target="_blank">Clique aqui - Aulas merge e rebase</a>

                            <p>Trilha Oracle + Alura, prazo de finalização da primeira etapa 12/12/2022</p>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>GitFlow</li>
                    <li>GitLab</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ControleDeVersao