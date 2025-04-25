import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/Service"
import About from "./components/About"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Kilimani from "./components/Projects/Kilimani";
import Eldoret from "./components/Projects/Eldoret";
import Karen from "./components/Projects/Karen";
import Kileleshwa from "./components/Projects/Kileleshwa";
import Lavington from "./components/Projects/Lavington";
import SouthB from "./components/Projects/SouthB";
import TatuCity from "./components/Projects/Tatu_City";

function App() {

  return (
    <div className="relative">
      <Navbar />
      <Routes className='flex justify-center'>
        <Route exact path="/" element={<Home />} />
        <Route path="/our-services" element={<Service />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-terms" element={<Privacy />}/>
        <Route path="/kilimani" element={<Kilimani />}/>
        <Route path="/eldoret" element={<Eldoret />}/>
        <Route path="/karen" element={<Karen />}/>
        <Route path="/kileleshwa" element={<Kileleshwa />}/>
        <Route path="/lavington" element={<Lavington />}/>
        <Route path="/southB" element={<SouthB />}/>
        <Route path="/tatu_city" element={<TatuCity />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
