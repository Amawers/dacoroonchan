import CbcImage from '../assets/CbcImage.png'

function Cbc() {
  return (
    <div className="relative bg-picture text-gray-300 min-h-screen font-sans bg-fixed bg-cover bg-center flex flex-col items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Main content */}
      <div className="flex flex-col items-center z-20 max-w-6xl px-5 py-10">
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
              My passion for technology began at a young age, leading me to pursue
              a Bachelor of Science in Information Technology, majoring in
              Software Development, at the University of Science and Technology of
              Southern Philippines.
              <br />
              <br /> During my studies, I gained hands-on experience with widely
              used technologies, working on both This exposure has given me a
              foundation and a broader understanding of software development. As
              an aspiring developer, I am eager to grow my skills, explore new
              technologies, and contribute to impactful projects in the tech
              industry.
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
                  <img
                    src="https://img.icons8.com/windows/32/ff0000/laravel.png"
                    alt="Laravel"
                  />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Laravel
                  </p>
                </div>
            <div className="w-16 sm:w-20 lg:w-24 flex flex-col items-center text-center">
              <img
                src="https://img.icons8.com/color/36/tailwind_css.png"
                alt="Tailwind"
              />
              <p className="font-bold text-white bg-black bg-opacity-10 text-sm p-1">
                Tailwind
              </p>
            </div>
            <div className="w-24 flex flex-col items-center text-center">
                  <img
                    src="https://img.icons8.com/color/36/mysql-logo.png"
                    alt="MySQL"
                  />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    MySQL
                  </p>
                </div>
            <div className="w-16 sm:w-20 lg:w-24 flex flex-col items-center text-center">
              <img
                src="https://img.icons8.com/color/36/visual-studio-code-2019.png"
                alt="VS Code"
              />
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
