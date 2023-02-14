import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/git/image1.PNG';
import image2 from '../image/git/image2.PNG';
import image3 from '../image/git/image3.PNG';
import image4 from '../image/git/image4.PNG';
import image5 from '../image/git/image5.PNG';
import image6 from '../image/git/image6.PNG';
import image7 from '../image/git/image7.PNG';

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

                            <h2> Conventional Commits </h2>
                            <a href='https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657' rel="noreferrer" target="_blank">Clique aqui </a>
                            <a href='https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/#especifica%C3%A7%C3%A3o' rel="noreferrer" target="_blank">Clique aqui </a>
                            <p>O que é ?
                                O Conventional Commits é uma convenção simples de mensagens de commit, que segue um conjunto de regras e que ajuda os projetos a terem um histórico de commit explícito e bem estruturado.</p>
                            <p>Como utilizar
                                As regras são muito simples, como demonstrado abaixo temos um tipo de commit (type), o escopo/contexto do commit (scope) e o assunto/mensagem do commit (subject), mas adiante irei detalhar cada um. </p>
                            <img src={image7} height="200px" alt=''></img>

                            <ul>
                                Type: Quais são os tipos de commit
                                O type é responsável por nos dizer qual o tipo de alteração ou iteração está sendo feita, das regras da convenção, temos os seguintes tipos:

                                <li>test: indica qualquer tipo de criação ou alteração de códigos de teste. Exemplo: Criação de testes unitários.</li>
                                <li>feat: indica o desenvolvimento de uma nova feature ao projeto. Exemplo: Acréscimo de um serviço, funcionalidade, endpoint, etc.</li>
                                <li>refactor: usado quando houver uma refatoração de código que não tenha qualquer tipo de impacto na lógica/regras de negócio do sistema. Exemplo: Mudanças de código após um code review</li>
                                <li>style: empregado quando há mudanças de formatação e estilo do código que não alteram o sistema de nenhuma forma.</li>
                                Exemplo: Mudar o style-guide, mudar de convenção lint, arrumar indentações, remover espaços em brancos, remover comentários, etc..
                                <li>fix: utilizado quando há correção de erros que estão gerando bugs no sistema.</li>
                                Exemplo: Aplicar tratativa para uma função que não está tendo o comportamento esperado e retornando erro.
                                <li>chore: indica mudanças no projeto que não afetem o sistema ou arquivos de testes. São mudanças de desenvolvimento.</li>
                                Exemplo: Mudar regras do eslint, adicionar prettier, adicionar mais extensões de arquivos ao .gitignore
                                <li>docs: usado quando há mudanças na documentação do projeto.</li>
                                Exemplo: adicionar informações na documentação da API, mudar o README, etc.
                                <li>build: utilizada para indicar mudanças que afetam o processo de build do projeto ou dependências externas.
                                Exemplo: Gulp, adicionar/remover dependências do npm, etc.</li>
                                <li>perf: indica uma alteração que melhorou a performance do sistema.
                                Exemplo: alterar ForEach por while, melhorar a query ao banco, etc.</li>
                                <li>ci: utilizada para mudanças nos arquivos de configuração de CI.
                                Exemplo: Circle, Travis, BrowserStack, etc.
                                revert: indica a reverão de um commit anterior.</li>
                            </ul>
                            <img src={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*izVKF4AT1iDtv4fJO8oWWA.png"} height="200px" alt=''></img>
                            <ul>
                                <li>Só pode ser utilizado um type por commit;</li>
                                <li>O type é obrigatório;</li>
                                <li>Caso esteja indeciso sobre qual type usar, provavelmente trata-se de uma grande mudança e é possível separar esse commit em dois ou mais commits;</li>
                                <li>A diferença entre build e chore pode ser um tanto quanto sutil e pode gerar confusão, por isso devemos ficar atentos quanto ao tipo correto. No caso do Node.js por exemplo, podemos pensar que quando há uma adição/alteração de certa dependência de desenvolvimento presente em devDependencies, utilizamos o chore. Já para alterações/adições de dependências comuns aos projeto, e que haja impacto direto e real sobre o sistema, utilizamos o build.</li>
                            </ul>
                            <img src={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*IZPTYtwxI-UgULgOjf8GKQ.png"} height="200px" alt=''></img>
                            <p>Lembrando que o scope deve ser inserido no commit entre parênteses, Os escopos devem ser separados com / , \ ou </p>
                            <p> duvida: definir o escopo do commit, de acordo com a sprint que trabalhamos 
                            <img src={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*CFO9815DI0h53U3-1n1RVw.png"} height="200px" alt=''></img></p>
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
                    <li onClick={handleClickContent}>GitFlow</li>
                    {content && (
                        <div className='Material' >
                            <p>14 de Fevereiro de 2023</p>
                            <div className='line'></div>
                            <p>Gitflow</p>
                                <a href='https://www.alura.com.br/artigos/git-flow-o-que-e-como-quando-utilizar'>Clique aqui </a>
                            <p><strong>O que é Git Flow? </strong> O Git Flow é um modelo, uma estratégia ou, ainda, um fluxo de trabalho muito utilizado por equipes de desenvolvimento de software. Ele se destaca por auxiliar na organização do versionamento de códigos.</p>
                            <img src={"https://www.alura.com.br/artigos/assets/git-flow-o-que-e-como-quando-utilizar/imagem3.png"} height="200px" alt=''></img>
                            <p>O Git Flow trabalha com duas branches principais, a Develop e a Master, que duram para sempre; e três branches de suporte, Feature, Release e Hotfix, que são temporários e duram até realizar o merge com as branches principais.</p>
                            <ul>
                                <li>git checkout develop</li>
                                <li>git checkout -b name-feature</li>
                                <li>git flow feature start name-feature</li>
                                <li>git merge name-feature</li>
                                <li>git flow feature finish name-feature</li>
                                <li></li>
                            </ul>


                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>GitLab</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ControleDeVersao