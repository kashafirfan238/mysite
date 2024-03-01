import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import ProSeries from "./components/ProSeries";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
     
      <Routes>
    
     <Route path="/" element={<Home/>}/>

  
     <Route path="/products" element={<Product/>}/>
     <Route path="/proSeries" element={<ProSeries/>}/>

     <Route path="/contact" element={<Contact/>}/>
     


    
     </Routes>
     <Footer/>
    </div>

  );
}

export default App;
