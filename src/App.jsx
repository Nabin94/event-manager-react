import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import CreateEvent from './components/create/createEvent'
import About from "./components/about/about";
import HomePage from './components/homepage/home';
import { Routes, Route } from 'react-router-dom'
import HeroSection from './components/heroSection/heroSection';
import SearchEvent from './components/searchEvent/searchEvent';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/search" element={<SearchEvent />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
