import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import ProSeries from "./components/ProSeries";
import Footer from "./components/Footer";
import Proseries1 from "./components/Proseries1";
import Proseries2 from "./components/Proseries2";
import Proseries3 from "./components/Proseries3";
import ProDetail from "./components/pages/ProDetail";
import ProDetail1 from "./components/pages/ProDetail1";
import ProDetail2 from "./components/pages/ProDetail2";

function App() {
  return (
    <div className="App">
       <Navbar/>
     
      <Routes>
    
     <Route path="/" element={<Home/>}/>

  
     <Route path="/products" element={<Product/>}/>
     <Route path="/proSeries" element={<ProSeries/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/proseries" element={<ProSeries/>}/>
     <Route path="/proseries1" element={<Proseries1/>}/> 
     <Route path="/proseries2" element={<Proseries2/>}/>
     <Route path="/proseries3" element={<Proseries3/>}/>
     <Route path="/prodetail/:title" element={<ProDetail/>}/>
     <Route path="/prodetail1/:title" element={<ProDetail1/>}/>
     <Route path="/prodetail2/:title" element={<ProDetail2/>}/>
     
     </Routes>
     <Footer/>
    </div>

  );
}

export default App;
