import React from 'react';
import Header from "./components/Header";
import Greet from "./components/Greet";
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Greet name ="Muniraju"/>
      <Greet name="Aishwarya"/>
      <Footer/>
    </div>
  )
}

export default App

