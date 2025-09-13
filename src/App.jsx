import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/footer/component/navbar/navbar'
import Create from './create/createevent'

function App() {


  return (
    <>
     <Navbar/>
    <h1>My Work</h1>
    <Create/>
    <Footer/>

    </>
  )
}

export default App
