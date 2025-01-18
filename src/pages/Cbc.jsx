import CbcImage from '../assets/CbcImage.png'
import Laravel from '../assets/Laravel.png'
import Mysql from '../assets/Mysql.png'
import Tailwind from '../assets/Tailwind.png'
import Vscode from '../assets/Vscode.png'
import { useState, useEffect } from 'react';

function Cbc() {
 const [showContent, setShowContent] = useState(false);
 
   useEffect(() => {
     const timer = setTimeout(() => {
       setShowContent(true);
     }, 600); 
 
     return () => clearTimeout(timer); 
   }, []);
 
   return (
     <div className="relative bg-picture text-gray-300 min-h-screen font-sans bg-fixed bg-cover bg-center flex flex-col items-center justify-center">
       {/* Background overlay */}
       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
 
       {/* Main content */}
       <div
         className={`flex flex-col items-center z-20 max-w-6xl px-5 py-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
       >
        {/* Image and Project Overview */}
        <div className="flex flex-col lg:flex-row items-center w-full mb-6 lg:mb-10 gap-6 lg:gap-10">
          <img
            src={CbcImage}
            alt="Card Image"
            className="w-full lg:w-1/2 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="w-full lg:w-1/2">
            <p className="text-yellow-500 font-bold text-center lg:text-left bg-black bg-opacity-15 text-xl sm:text-2xl lg:text-3xl mb-4">
              Project Overview
            </p>
            <p className="text-white font-semibold text-start bg-black bg-opacity-15 text-sm sm:text-base lg:text-lg leading-relaxed">
              CBC - RAIS: Cedula Barangay Certificate - Request and Issue System
              is a full-stack MVC web application designed to streamline the
              request and issuance of barangay certificates, improving
              efficiency for both applicants and authorities.
              <br />
              <br /> I primarily managed the backend code to ensure data
              consistency and performance. Additionally, I contributed to
              developing frontend features, creating an intuitive interface for
              users to easily request and receive documents.
            </p>
          </div>
        </div>

        {/* Tools Used Section */}
        <div className="z-20 flex flex-col items-center w-full">
          <p className="text-yellow-500 font-bold text-center bg-black bg-opacity-15 text-xl sm:text-2xl lg:text-3xl mb-4">
            Tools Used
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="w-24 flex flex-col items-center text-center">
              <img src={Laravel} className="w-8" alt="Laravel" />
              <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                Laravel
              </p>
            </div>
            <div className="w-16 sm:w-20 lg:w-24 flex flex-col items-center text-center">
              <img src={Tailwind} className="w-8" alt="Tailwind" />
              <p className="font-bold text-white bg-black bg-opacity-10 text-sm p-1">
                Tailwind
              </p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
              <img src={Mysql} className="w-8" alt="MySQL" />
              <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                MySQL
              </p>
            </div>
            <div className="w-16 sm:w-20 lg:w-24 flex flex-col items-center text-center">
              <img src={Vscode} className="w-8" alt="VS Code" />
              <p className="font-bold text-white bg-black bg-opacity-10 text-sm p-1">
                VS Code
              </p>
            </div>
          </div>
          <a
            href="/"
            target="_parent"
            className="hover:cursor-pointer bg-yellow-500 px-6 sm:px-8 py-2 sm:py-3 font-bold text-black rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Back
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cbc
