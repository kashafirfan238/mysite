import React from 'react';
import hmi2 from '../../Assets/hmi2.png';
import PLC from '../../Assets/PLC.jpg';
import servo from '../../Assets/servo.png';
import Vbox from '../../Assets/Vbox.png';
import img1 from '../../Assets/img1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import ProSeries from '../ProSeries';


const Product = () => {
  // const imgs = [
  //   ,{img:PLC,title:'HMI',description:'HMI has been widely recognized by the market for economical and practical fast...'},
  //   {img:servo,title:'PLC',description:'Servo Drives has the feature of high response,easy debugging,strong protection'},
  //   {img:Vbox,title:'Servo',description:'lorem iosum rgebch heg'},
  //   {img:Vbox,title:'Vbox',description:'lorem iosum rgebch heg'},
  //   ];
  const divStyle = {
    backgroundImage: `url(${img1})`,
  };
  const navigate=useNavigate()
const clickFunc=()=>{
navigate('/proseries')


}
const clickFunc1=()=>{
  navigate('/proseries1')
  
  
  }
  const clickFunc2=()=>{
    navigate('/proseries2')
    
    
    }
    const clickFunc3=()=>{
      navigate('/proseries3')
      
      
      }
  return (
    <>
    <div><img className="   " src={img1} alt=""/></div>

      <div className="mx-auto max-w-screen-lg">
        <div
          // className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          // style={divStyle}
        >
          
          {/* <div className=" pt-8 pb-10  w-full">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
              <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img className="rounded-full    " src={hmi2} alt=""/>
            </div>
          </div> */}
        </div>
        <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold text-[#fdab52]">PRODUCTS</h1>
            <p className="mt-2 text-gray-600">
            We “Al Shams Traders ” are the leading, Importer, Exporter, And Service Provider of an extensive array of Machine in the Industrial and sale HMI & PLC & IIoT V-BOX & SERVO & INVERTER.
            </p>
          </div>
          <div className="">
            <button className="flex whitespace-nowrap rounded-lg bg-[#fdab52] px-6 py-2 font-bold text-white transition hover:translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with us
            </button>
            <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +92 41 8542681
            </p>
          </div>
        </div>
        
          <main className="grid grid-cols-2   flex-row gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-4  lg:grid-cols-4 lg:gap-x-4 lg:px-0">
            
          </main>
          <div class="bg-white dark:bg-gray-800 h-full  py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    

        <div class="grid grid-cols-2  gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        
            <a onClick={clickFunc1} href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={servo} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Servo</span>
            </a>
        

       
            <a onClick={clickFunc}  href="#"
                class="group relative flex  h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={hmi2} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 ml-24 h-72 w-96 object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                     
                </div>
                <span class=" relative ml-4 mb-3  text-sm text-white md:ml-5 md:text-lg">HMI</span><br/>
                

            </a>
           

            
            <a   onClick={clickFunc2} href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={PLC} loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">PLC</span>
            </a>
          

            <a  onClick={clickFunc3} href="#"
                class="group relative flex  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={Vbox} loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0  h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">IIOT-Vbox</span>
            </a>
           
        </div>
    </div>
</div>
     
      </div>

    </>
  );
};

export default Product;
