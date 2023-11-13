import {Routes, Route} from "react-router-dom"
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import News from "./pages/News"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
