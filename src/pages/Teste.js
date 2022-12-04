import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const Testes = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Jest</li>
                    <li>Vitest</li>
                    <li>React Testing</li>
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