import { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import image1 from '../image/systemdesign/image1.PNG';
import image2 from '../image/systemdesign/image2.PNG';
import image3 from '../image/systemdesign/image3.PNG';
import image4 from '../image/systemdesign/image4.PNG';
import image5 from '../image/systemdesign/image5.PNG';
import image6 from '../image/systemdesign/image6.PNG';


const SystemDesign = () => {

    const [content, setContent] = useState();

    function handleClickContent() {
        setContent(!content);
    }
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li onClick={handleClickContent}> What happens when you type a URL into your browser?</li>
                    {content && (
                        <div className='Material' >
                            <p>21 de janeiro de 2023</p>
                            <div className='line'></div>
                            <p>System Desing fundamentals</p>
                            <p> What happens when you type a URL into your browser? <br />
                                <a href="https://www.youtube.com/watch?v=AlkDbnbv7dk&t=73s">Video - Youtube - Clique aqui</a></p>
                            <img src={image1} height="200px" alt=''></img>
                            <ul className='list' >
                                <li><strong> http: (Scheme) </strong>Conecta ao servidor com HTTP ou HTTPS</li>
                                <li><strong> example.com (Domain/url) </strong>Nome</li>
                                <li><strong> product/eletric </strong>Caminho</li>
                                <li><strong> phone </strong>Recurso</li>
                            </ul>
                            <img src={image2} height="200px" alt=''></img>
                            <ol>
                                <li>O Url acessa o servidor com uma chamada DNS, o que significa sistema de nome de dominio, o DNS traduz endereço em ip para que o navegador possa aoresentar os recursos.</li>
                                <li> Para que o processo de pesquisa seja rápido as informações são armazenadas em cache. O própio sistema possui um chache para ele e mantém a resposta por um curto período<p> 2-a - Caso o sistema não tenha o chache, ele faz uma consulta na internet, isso inicia uma cadeia de sopcitações até que oendereço IP seja resolvido, esse processo envolve muitos servidores na infraestrutura de Dns e a resposta é armazenada em cache a cada etapa.</p></li>
                                <li>O navegador estabelece uma conexao TCP com o servidor usando o endereço de IP, para manter o processo de carregamento rápido usa se conexão Keep-live, para reutilizar a conexão TCP o máximo possível </li>
                                <li>Os navegadores envia uma solicitação HTTP pela conexão TCP estabelecida.</li>
                                <li>O servidor processa e envia uma resposta</li>
                                <li>O navegador recebe a resposta e renderiz o conteúdo</li>
                                <p> Obs: quando o protocolo for HTTPS ao estabelecer uma nova conexão requer um processo chamado SSL/TLS handshake. Como handshake é muito caro os navegadores usam retomada de sessão SSL para diminuir o custo    </p>
                            </ol>

                        </div>

                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}> Why is Kafka fast?</li>
                    {content && (
                        <div className='Material' >
                            <p>21 de janeiro de 2023</p>
                            <div className='line'></div>
                            <p>System Desing fundamentals</p>
                            <p> Why is Kafka fast?<br />
                                <a href="https://www.youtube.com/watch?v=UNUz1-msbOM">Video - Youtube - Clique aqui</a></p>
                            <p>Kafka é projetado para mover um grande número de registros em um curto período de tempo, mas quais as decisões de design contruibuem para o melhor desempenho do kafka?
                                <ol>
                                    <li>kafka em E/S sequencial, existem dois tipos de padrões de acesso ao disco: aleatório e sequencial. Para discos rígidos, leva um tempo  mover fisicamento para locais diferentes nos discos magnéticos. Isso o torna mais lento, já no acesso sequencial o registro não precisa pular muito, é mais rápido ler e gravas blocos de dados. No sequencial okafka usa apenas um log anexando com sua estrutura de dados princial, somente um registro anexado adiciona novos dados ao final do arquivo.
                                        <br />
                                        O uso de discos rígidos tem suas vantagens, são mais baratos e tem cerca de três vezes mais capacidade.
                                    </li>
                                    <li>Eliminar o excesso de cópias ao mover páginas e páginas de dados entre o disco e a rede. Os sistemas Unix são otimizados para transferir dados do disco para a rede sem copiar dados excessivos.
                                        Opção ineficiente: Inicialmente, os dados são carregados do disco para o cache do sistema operacional, depois para o aplicativo kafka, para o buffer, para a placa de interface de rede. Por fim são enviados ao consumidor.
                                        Opção eficiente: A página de dados é carregada do disco para o cache do sistema operacional, com zero cópia o kafka usa uma chamada sendfile() para instruir o sistema operacional a copiar diretamente os dados do cache para o byffer da placa de interface de rede. Essa cópia é feita com DMA. significa acesso direto á memória, a CPU não está envolvida, tornando mais eficente.
                                    </li>
                                </ol>
                            </p>

                        </div>

                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}> System Design: How to store passwords in the database?</li>
                    {content && (
                        <div className='Material' >
                            <p>21 de janeiro de 2023</p>
                            <div className='line'></div>
                            <p>System Desing fundamentals</p>
                            <p>System Design: How to store passwords in the database?<br />
                                <a href="https://www.youtube.com/watch?v=zt8Cocdy15c">Video - Youtube - Clique aqui</a></p>
                            <p>Não armazene senhas em texto simples, De acordo com OwASP algumas diretrizes sobre como armazenar senhas</p>
                            <ol>
                                <li>Use um algoritmo de hash moderno, ele é uma função unidirecional, e é impossível descriptografar para obter o valor original. Ás vezes algumas são carecterizadas como funções "lentas", usam mais recursos para calcular, como a bcrypt. As MD5 e SHA-1 são funções de hash herdadas comuns, são rápidas, mas bem menos seguras e não devem ser usadas.</li>
                                <li>Salt é uma string gerada aleatoriamente que é adicionada a cada senha como parte do processo de hash, ela garante que o hash seja exclusivo para cada senha.
                                </li>
                            </ol>
                            <img src={image3} height="200px" alt=''></img>
                        </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li onClick={handleClickContent}> Big Misconceptions about Bare Metal, Virtual Machines, and Containers</li>
                    {content && (
                        <div className='Material' >
                            <p>23 de janeiro de 2023</p>
                            <div className='line'></div>
                            <p>System Desing fundamentals</p>
                            <p>Big Misconceptions about Bare Metal, Virtual Machines, and Containers<br />
                                <a href="https://www.youtube.com/watch?v=Jz8Gs4UHTO8">Video - Youtube - Clique aqui</a></p>
                            <p>Qual a diferença entre Bare Metal, Virtual Machines e Containers?</p>
                            <img src={image4} height="200px" alt='' ></img>
                            <p> Um servidor <strong>bare metal</strong> também conhecido como servidor dedicado é um computador geralmente de maior porte e mais sofisticado que computador doméstico que é utilizado como servidor de arquivos e aplicações sem utilização de camada de software entre o hardware e o sistema operacional, ou seja, não utiliza virtualização.
                                <ul>
                                <li>Ele nos da controle total sobre os recursos de hardware e software a ser executado.</li>
                                <li>Para aplicativos de software que exigem alto desempenho do hardware, o bare metal pode ser um bom caminho.</li>
                                <li>Normalmente são fisicamente isolados, isto tem dois beneficios: não é afetado pelo problema do vizinho barulhento, esse problema ocorre quando o desempenho de um locatário é afetado devido as atividades de outro locatário que compartilha o mesmo hardware, o segundo beneficio é fornecer o isolamento de alto nível de segurança, normalmente não são afetado por atques de canal lateral. Esses ataques aproveitam as falhas de design dos microprocessadores modernos para permitir que um inquilino mal intencionado roube os seus segredos. Essa forte garantia de seguranda é um bom motivo para usar bare metal</li>
                                </ul>
                                <img src={image5} height="200px" alt=''></img>
                                <p>Quando um aplicativo precisa atender aos mais rigorosos requisitos de segurança, ás vezes o bare metal pode ser o único caminho a seguir.
                                    Mas quais as suas desvantagens??
                                </p>
                                <ul  className='list' >
                                <li>Caro</li>
                                <li>Difícil de gerenciar</li>
                                <li>Difícil de dimensionar</li>
                                <li>A aquisição de um hardware leva tempo e exige uma equipe competente</li> 
                                </ul>
                            </p>
                            <p> Uma <strong>máquina virtual</strong> é a emulação de um computador físico. Isso se chama virtualização, muitas máquinas virtuais podem ser executadas em uma única peça de hardware bare metal. No topo do bare metal está o Host Operating System, sistema operacional host, em execução no sistema operacional do host há um software chama hypervisor conhecido como monitor de máquina virtual, ele gerencia as máquinas virtuais e cria uma camada de abstração sobre o hardware para que vários sistemas operacionais possam ser executados. Cada máquina virtual tem seu próprio sistema operacional</p>
                            <p>Obs: existe um conceito chamado bare metal hipervisor , que não deve ser confundido com bare metal hardware.</p>
                            <img src={image6} height="200px" alt=''></img>
                            <p>O hypervisor batre metal controla o hardware diretamente sem depender do distema operacional do host, isso lhe dá total controle sobre o hardware e fornece maior desempenho. No entantoi o hardwareque </p>


                        </div>

                    )}
                    {!content && (
                        <div></div>
                    )}


                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default SystemDesign