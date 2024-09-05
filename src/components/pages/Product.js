import React from 'react';
import hmi2 from '../../Assets/hmi2.png';
import PLC from '../../Assets/PLC.jpg';
import servo from '../../Assets/servo.png';
import Vbox from '../../Assets/Vbox.png';
import img1 from '../../Assets/img1.jpg';
import { useNavigate } from 'react-router-dom';

const Product = ({products}) => {
  // const navigate = useNavigate();

  // const products = [
  //   {
  //     image: servo,
  //     alt: "Servo",
  //     name: "Servo",
  //     onClick: () => navigate('/proseries1')
  //   },
  //   {
  //     image: hmi2,
  //     alt: "HMI",
  //     name: "HMI",
  //     onClick: () => navigate('/proseries')
  //   },
  //   {
  //     image: PLC,
  //     alt: "PLC",
  //     name: "PLC",
  //     onClick: () => navigate('/proseries2')
  //   },
  //   {
  //     image: Vbox,
  //     alt: "IIOT-Vbox",
  //     name: "IIOT-Vbox",
  //     onClick: () => navigate('/proseries3')
  //   }
  // ];

  return (
   <>
    <div><img className="" src={img1} alt=""/></div>

      <div className="mx-auto max-w-screen-lg">
        <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl font-bold text-[#fdab52]">PRODUCTS</h1>
            <p className="mt-2 text-gray-600">
              We “Al Shams Traders” are the leading Importer, Exporter, and Service Provider of machines in the Industrial sector and sales of HMI, PLC, IIoT V-BOX, SERVO, and INVERTER.
            </p>
          </div>
          <div className="">
            <a
              href="https://wa.me/+923117054781?text=Welcome!%20I%20would%20like%20to%20chat%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex whitespace-nowrap rounded-lg bg-[#fdab52] px-6 py-2 font-bold text-white transition hover:translate-y-1"
            >
              Chat with us
            </a>
            <a href="tel:+92418542681" className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
              +92 41 8542681
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={product.onClick}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${product.size}`}
                >
                  <img
                    src={product.image}
                    loading="lazy"
                    alt={product.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  <span class="relative ml-4 font-semibold mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{product.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
