import { Route, Router, Routes } from "react-router-dom";
 import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

import ProSeries from "./components/ProSeries";
import Footer from "./components/Footer";
import Proseries1 from "./components/Proseries1";
import Proseries2 from "./components/Proseries2";
import Proseries3 from "./components/Proseries3";
import ProDetail from "./components/pages/ProDetail";
import ProDetail1 from "./components/pages/ProDetail1";
import ProDetail2 from "./components/pages/ProDetail2";
import hmi2 from './Assets/hmi2.png';
import PLC from './Assets/PLC.jpg';
import servo from './Assets/servo.png';
import Vbox from './Assets/Vbox.png';
import { useNavigate } from 'react-router-dom';




function App() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      image: servo,
      alt: "Servo",
      label: "Servo",
      onClick: () => navigate("/proseries1"),
      size: "md:h-80", // TailwindCSS classes for different size variations
    },
    {
      id: 2,
      image: hmi2,
      alt: "HMI",
      label: "HMI",
      onClick: () => navigate("/proseries"),
      size: "md:col-span-2 md:h-80",
    },
    {
      id: 3,
      image: PLC,
      alt: "PLC",
      label: "PLC",
      onClick: () => navigate("/proseries2"),
      size: "md:col-span-2 md:h-80",
    },
    {
      id: 4,
      image: Vbox,
      alt: "IIOT-Vbox",
      label: "IIOT-Vbox",
      onClick: () => navigate("/proseries3"),
      size: "md:h-80",
    },
  ];

  return (
    <div className="App">
     <Navbar products={products} />
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/products" element={<Product products={products} />}/>
     <Route path="/proSeries" element={<ProSeries/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/about" element={<About/>}/>
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
