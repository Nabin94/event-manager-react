import './App.css'
import Footer from './components/footer/footer'
import Art from './components/banner/banner'
import Cardlist from './components/cardlist/cardlist'


function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Cardlist />
      <CreateEvent />
      <Footer />

    </>
  )
}

export default App
