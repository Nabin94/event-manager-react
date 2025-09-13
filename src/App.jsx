import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/footer/component/navbar/navbar'
import CreateEvent from './components/create/createEvent'
import Cardlist from './components/cardlist/cardlist'


function App() {


  return (
    <>
      <Navbar />
      <Cardlist />
      <CreateEvent />
      <Footer />

    </>
  )
}

export default App
