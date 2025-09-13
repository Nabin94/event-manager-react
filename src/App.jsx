import './App.css'
import Footer from './components/footer/footer'

import HeroSection from './components/heroSection/heroSection'
import Art from './components/banner/banner'
import Navbar from './components/footer/component/navbar/navbar'
import CreateEvent from './components/create/createEvent'
import Cardlist from './components/cardlist/cardlist'
import About from "./components/about/about";


function App() {
  return (
    <>

      
      <Navbar/>
      <Art/>
      <Navbar />
      <Cardlist />
      <HeroSection/>
      <CreateEvent />
      <Footer />
      <About />

    </>
  );
}

export default App;
