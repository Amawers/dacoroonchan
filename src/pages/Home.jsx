import { useState } from 'react'
import { Link, Element } from 'react-scroll'
import Sipiar from '../assets/SipiarImage.png'
import Cbc from '../assets/CbcImage.png'
import Github from '../assets/Github.png'
import Facebook from '../assets/Facebook.png'
import Linkedin from '../assets/Linkedin.png'
import Html from '../assets/Html.png'
import Css from '../assets/Css.png'
import Javascript from '../assets/Javascript.png'
import ReactJS from '../assets/React.png'
import Tailwind from '../assets/Tailwind.png'
import Mysql from '../assets/Mysql.png'
import Supabase from '../assets/Supabase.png'
import Vscode from '../assets/Vscode.png'
import Git from '../assets/Git.png'
import Figma from '../assets/Figma.png'
import Laravel from '../assets/Laravel.png'
import Php from '../assets/Php.png'
function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="relative bg-picture text-gray-300 min-h-screen font-sans bg-fixed bg-cover bg-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6 md:px-8">
        {/* Fixed Left Section */}
        <div className="hidden md:flex md:w-1/3 sticky top-0 h-screen flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            Christian Dacoroon
          </h1>
          <h2 className="text-2xl md:text-3xl mt-4 text-white font-bold">
            Aspiring Developer
          </h2>

          {/* Navigation Links */}
          <div className="space-y-6 my-10">
            {['about', 'skills', 'projects'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                duration={500}
                spy
                activeClass="font-bold text-yellow-500"
                className="relative block text-left text-white cursor-pointer"
                onSetActive={() => setActiveSection(section)}
              >
                {activeSection === section && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] bg-yellow-500 transition-transform duration-75 ease-in-out w-[38px] transform-origin-[left_center] scale-x-100" />
                )}
                <span
                  className={`inline-block text-lg md:text-xl ${
                    activeSection === section
                      ? 'pl-8 md:pl-12 font-extrabold text-yellow-500 '
                      : 'pl-0 text-gray-300'
                  } transition-all duration-75 ease-in-out`}
                >
                  {section.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6 mt-10">
            <a
              href="https://github.com/Amawers"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} className="w-8" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-jericho-dacoroon-24776a234/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} className="w-8" alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/amaw044/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} className="w-8" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="md:hidden flex flex-col justify-center items-center mt-5">
          <h1 className="text-4xl font-bold text-secondary">
            Christian Dacoroon
          </h1>
          <h2 className="text-2xl mt-4 text-white font-bold">
            Aspiring Developer
          </h2>
          {/* Social Media Links */}
          <div className="flex items-center space-x-6 mt-8">
            <a
              href="https://github.com/Amawers"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} className="w-8" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-jericho-dacoroon-24776a234/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} className="w-8" alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/amaw044/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} className="w-8" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Scrollable Right Section */}
        <div className="md:w-2/3 flex-1 z-10">
          <div className="h-full">
            <Element
              name="about"
              className="md:min-h-screen flex items-center px-4 sm:px-6 md:px-8"
            >
              <p className="text-white font-semibold text-start bg-black bg-opacity-15 text-lg md:text-xl">
                My passion for technology began at a young age, leading me to
                pursue a Bachelor of Science in Information Technology, majoring
                in Software Development, at the University of Science and
                Technology of Southern Philippines.
                <br />
                <br /> During my studies, I gained hands-on experience with
                widely used technologies, working on both
                <span className="text-yellow-500 ">
                  {' '}
                  backend and frontend development.{' '}
                </span>
                This exposure has given me a foundation and a broader
                understanding of software development. <br /> <br /> As an
                aspiring developer, I am eager to grow my skills, explore new
                technologies, and contribute to impactful projects in the tech
                industry.
              </p>
            </Element>

            <Element
              name="skills"
              className="min-h-screen flex flex-col justify-center items-center m-10"
            >
              <div className="relative text-center mb-6">
                <h2 className="text-4xl font-bold text-yellow-500 relative inline-block mb-2">
                  SKILLS
                </h2>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[2px] bg-yellow-500 w-56 "></span>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1 h-2 bg-yellow-500 w-8"></span>
              </div>

              <p className="text-white font-semibold text-center bg-black bg-opacity-5 text-lg md:text-xl">
                Here are the technologies I am
                <span className="text-yellow-500 "> familiar </span>
                with and have
                <span className="text-yellow-500 "> worked </span>
                with:
              </p>

              <div className="flex flex-wrap gap-6 justify-center mt-10">
                {/* Skill icons */}
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Html} className="w-8" alt="HTML" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    HTML
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Css} className="w-8" alt="CSS" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    CSS
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Javascript} className="w-8" alt="JavaScript" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    JavaScript
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={ReactJS} className="w-8" alt="React.JS" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    React.JS
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Tailwind} className="w-8" alt="Tailwind" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Tailwind
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Mysql} className="w-8" alt="MySQL" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    MySQL
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Laravel} className="w-8" alt="Laravel" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Laravel
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Php} className="w-8" alt="PHP" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    PHP
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Supabase} className="w-8" alt="Supabase" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Supabase
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Vscode} className="w-8" alt="VS Code" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    VS Code
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Git} className="w-8" alt="Git" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Git
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Github} className="w-8" alt="GitHub" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    GitHub
                  </p>
                </div>
                <div className="w-24 flex flex-col items-center text-center">
                  <img src={Figma} className="w-8" alt="Figma" />
                  <p className="font-bold text-white bg-black bg-opacity-10 p-1">
                    Figma
                  </p>
                </div>
              </div>
            </Element>

            <Element
              name="projects"
              className="min-h-screen flex items-center justify-center flex-col px-4 sm:px-6 md:px-8"
            >
              <div className="relative text-center mb-6">
                <h2 className="text-4xl font-bold text-yellow-500 relative inline-block mb-2">
                  PROJECTS
                </h2>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-[2px] bg-yellow-500 w-56 "></span>
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1 h-2 bg-yellow-500 w-8"></span>
              </div>
              {/* Projects Section */}
              <a
                href="/sipiar"
                className="flex hover:bg-gray-700 hover:bg-opacity-25 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out justify-center overflow-hidden shadow-lg w-full mx-auto my-4 h-48"
              >
                <div className="w-1/3 m-4">
                  <img
                    src={Sipiar}
                    alt="Card Image"
                    className="object-fill h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />
                </div>
                <div className="w-2/3 py-6 flex flex-col justify-between px-6">
                  <h3 className="text-2xl font-extrabold text-white">
                    Sipiar System
                  </h3>
                  <p className="text-gray-300 text-sm font-bold">
                    A thesis project focused on a first aid application that
                    provides assistance for performing CPR, along with emergency
                    broadcast notifications.
                  </p>
                  {/* Keywords */}
                  <div className="flex gap-4 flex-wrap">
                    <img src={ReactJS} className="w-8" alt="React.JS" />
                    <img src={Tailwind} className="w-8" alt="Tailwind" />
                    <img src={Supabase} className="w-8" alt="Supabase" />

                    <img src={Vscode} className="w-8" alt="VS Code" />
                  </div>
                </div>
              </a>
              <a
                href="/cbc"
                className="flex hover:bg-gray-700 hover:bg-opacity-25 hover:cursor-pointer rounded-lg transition-all duration-500 ease-in-out justify-center overflow-hidden shadow-lg w-full mx-auto my-4 h-48"
              >
                <div className="w-1/3 m-4">
                  <img
                    src={Cbc}
                    alt="Card Image"
                    className="object-fill h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
                  />
                </div>
                <div className="w-2/3 py-5 flex flex-col justify-between px-6">
                  <h3 className="text-2xl font-extrabold text-white">
                    CBC RAIS
                  </h3>
                  <p className="text-gray-300 text-sm font-bold">
                    A Barangay Certificate Request Management System for online
                    submissions and tracking, aimed at optimizing processes
                    within a barangay. It is built as a full-stack MVC web
                    application.
                  </p>
                  {/* Keywords */}
                  <div className="flex gap-4 flex-wrap">
                    <img src={Laravel} className="w-7" alt="Laravel" />
                    <img src={Tailwind} className="w-7" alt="Tailwind" />
                    <img src={Mysql} className="w-7" alt="MySQL" />
                    <img src={Vscode} className="w-7" alt="VS Code" />
                  </div>
                </div>
              </a>
            </Element>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
