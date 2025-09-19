import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import CreateEvent from './components/create/createevent'
import About from './components/about/about'
import HomePage from './components/homepage/home'
import SearchEvent from './components/searchEvent/searchEvent'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/searchEvent" element={<SearchEvent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
