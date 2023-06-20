import React, { useState } from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Codewars = () => {

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
                            <p>20 de Junho de 2023</p>
                            <div className='line'></div>
                            <p>Treino</p>
                            <div>
                            <p>
                              Escreva uma função que receba uma matriz de números e retorne a soma dos números.
                              Os números podem ser negativos ou não inteiros. Se a matriz não contiver nenhum número,
                              você deve retornar 0.
                            </p>
                            <pre>
                              <code>
                                {`function sumNumbers(matrix) {
                            return matrix && matrix.length > 0
                              ? matrix.reduce((sum, num) => typeof num === 'number' ? sum + num : sum, 0)
                              : 0;
                          }`}
                              </code>
                            </pre>
                          </div>
                          <pre><code>{`matrix && matrix.length > 0: Isso verifica se a matriz não é nula (matrix) e se tem um comprimento maior que zero (matrix.length > 0). Essa verificação garante que a matriz não está vazia e que podemos prosseguir com o cálculo da soma.

matrix.reduce((sum, num) => typeof num === 'number' ? sum + num : sum, 0): Se a condição do passo anterior for verdadeira, usamos o método reduce() para calcular a soma dos números. O método reduce() recebe uma função de callback e um valor inicial. A função de callback é aplicada a cada elemento da matriz, acumulando um valor (sum) que é o resultado parcial da soma até o momento e o elemento atual (num). O operador ternário typeof num === 'number' ? sum + num : sum verifica se o elemento atual é um número. Se for, adiciona-o ao resultado parcial (sum + num); caso contrário, mantém o resultado parcial sem modificação (sum). O valor inicial para a soma é 0 no último argumento do reduce().

: 0;: Se a condição do passo 1 for falsa, ou seja, se a matriz for nula ou vazia, retornamos 0 diretamente.
Exemplos:
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const sum = n => n.reduce((a,b) => a+b, 0);
`}</code></pre>
                            </div>
                    )}
                    {!content && (
                        <div></div>
                    )}
                    <li>Avançado</li>
                    
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Codewars