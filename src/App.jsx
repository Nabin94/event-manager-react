import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Cardlist from './components/cardlist/cardlist'



function App() {


  return (
    <>
    <Cardlist/>
    <h1>My Work</h1>
    <Footer/>

    </>
  )
}

export default App
