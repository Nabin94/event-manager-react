import './App.css'
import Footer from './components/footer/footer'
import Art from './components/banner/banner'
import Cardlist from './components/cardlist/cardlist'
import CreateEvent from './components/create/createEvent'


function App() {
  return (
    <>
      <Art/>
      <Cardlist />
      <CreateEvent />
      <Footer />

    </>
  )
}

export default App
