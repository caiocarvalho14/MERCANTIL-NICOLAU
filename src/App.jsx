import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


// components
import NavBar from './assets/components/Nav'
import Hero from './assets/components/Hero'
import Servicos from './assets/components/Servicos'
import ComoFunciona from './assets/components/ComoFunciona';
import Contato from './assets/components/Contato';
import Footer from './assets/components/Footer';
import WButton from './assets/components/WButton';

function App() {
  return (
    <>
      <NavBar />
      
      <Hero />

      <hr />

      <Servicos/>

      <hr />

      <ComoFunciona/>

      <hr />

      <Contato/>
      
      <Footer/>

      <WButton/>

    </>
  )
}

export default App
