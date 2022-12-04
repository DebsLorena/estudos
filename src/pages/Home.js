import React from 'react';
import Footer from '../componentes/footer/Footer';
import Navbar from '../componentes/navbar/Navbar';
import Topic from '../componentes/topic/Topic';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Topic />
      <Footer />
    </div>
  )
}

export default Home