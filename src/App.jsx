import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import NavBar from './Components/NavBar';
import Contact from './Contact/Contact';
import Footer from './Components/Footer';
import About from './About/About';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
