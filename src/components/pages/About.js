// git add .
// git commit -m "djsljdsl"
// git push origin main 
// git pull origin main
import React from "react";
import backgroundImage from '../../Assets/bg.jpg';
const About =() =>{
 
  
  const backgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    height: 'auto',
    width: '100%',
    backgroundSize: 'cover',
   
  };
  
  
    return(
      

<div>
 
<section style={backgroundStyle}  className="mt-12 md:mt-0 " >
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>
        <span >About</span> <span style={{ color: '#fdab52' }}>Our Company</span>
      </h2>
                {/* <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Our Company</h2> */}
                <p class="mt-4 text-gray-600 text-lg"><span> Founded in 2004,</span> <span style={{ color: '#fdab52' }}>  Al Shams Traders</span> has established itself as a leading importer, exporter, and service provider in the industrial machinery sector. Our expertise spans a diverse range of machines used in industrial printing, marking, filling, labeling, processing, and packaging.</p>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Specializations</h2>
      
      <section>
        <h3 className="text-2xl font-bold mt-6">We specialize in:</h3>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Date Coding Machines</li>
          <li>Expiry Date Printers</li>
          <li>Filling Machines</li>
          <li>Packing Machines</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mt-6">In addition to these core products, we also offer comprehensive solutions for spare parts and automation:</h3>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Human Machine Interface (HMI)</li>
          <li>Programmable Logic Controllers (PLC)</li>
          <li>Servo Controllers</li>
          <li>IIoT Solutions (V-NET and V-BOX)</li>
          <li>Inverters</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mt-6">Our extensive inventory also covers a wide array of packing machines:</h3>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Grocery Packing Machines</li>
          <li>Industrial Packing Machines</li>
          <li>Snacks Packing Machines</li>
          <li>Automatic Packaging Machines</li>
          <li>Pulses Packing Machines</li>
          <li>All kinds of Filling Machine Spare Parts</li>
        </ul>
      </section>

      <section>
        <p className="mt-6 font-bold">
          At <span style={{ color: '#fdab52' }}>Al Shams Traders</span>, our primary focus is to exceed customer expectations by delivering superior quality products and services. We are committed to ethical business practices and transparency in all our transactions, fostering long-lasting and positive relationships with our clients.
        </p>
      </section>
                {/* <div class="mt-8">
                    <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span class="ml-2">&#8594;</span></a>
                </div> */}
            </div>
            {/* <div className="mt-12 md:mt-0">
      <img 
        src={aboutpic} 
        alt="About Us Image" 
        className="custom-image rounded-lg shadow-md" 
      />
    </div> */}
    
        </div>
    </div>
</section>
</div>

    )
}
export default About