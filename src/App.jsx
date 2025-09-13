import './App.css'
import Footer from './components/footer/footer'
import Art from './components/banner/banner'
import Navbar from './components/footer/component/navbar/navbar'
import CreateEvent from './components/create/createEvent'
import Cardlist from './components/cardlist/cardlist'
import CreateEvent from './components/create/createEvent'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage}
      </Routes>
      <Navbar/>
      <Art/>
      <Navbar />
      
      <CreateEvent />
      <Footer />

    </>
  )
}

export default App
