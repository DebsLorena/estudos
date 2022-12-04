import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';


const ReactJS = () => {
    return (
        <div>
            <Navbar />
            <div className='Container__page'>
                <ul>
                    <li>Components</li>
                    <li>JSX</li>
                    <li>Props</li>
                    <li>State</li>
                    <li>Events</li>
                    <li>Conditional Rendering</li>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useRef</li>
                    <li>useContext</li>
                    <li>useReducer</li>
                    <li>useMemo</li>
                    <li>useCallback</li>
                    <li>Hooks</li>
                    <li>Fields</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default ReactJS