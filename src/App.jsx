import React, { useState } from 'react'
// import html from '../src/assets/html.png'
// import Skills from '../src/components/sections/skills.jsx'

const App = () => {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="bg-picture text-gray-300 min-h-screen font-sans">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-secondary">
            Christian Jericho Dacoroon
          </h1>
          <h2 className="text-xl md:text-2xl mt-2 text-white font-bold">
            Web Developer
          </h2>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => setActiveSection('about')}
              className={`relative group block text-left transition-all duration-300 ${
                activeSection === 'about'
                  ? 'text-secondary font-bold'
                  : 'text-white'
              }`}
            >
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-transform duration-500 origin-left ${
                  activeSection === 'about'
                    ? 'w-full scale-x-100'
                    : 'w-full scale-x-0'
                }`}
              ></span>
              <span className="relative inline-block pb-1">ABOUT</span>
            </button>

            <button
              onClick={() => setActiveSection('experience')}
              className={`relative group block text-left transition-all duration-300 ${
                activeSection === 'experience'
                  ? 'text-secondary font-bold'
                  : 'text-white'
              }`}
            >
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-transform duration-500 origin-left ${
                  activeSection === 'experience'
                    ? 'w-full scale-x-100'
                    : 'w-full scale-x-0'
                }`}
              ></span>
              <span className="relative inline-block pb-1">EXPERIENCE</span>
            </button>

            <button
              onClick={() => setActiveSection('projects')}
              className={`relative group block text-left transition-all duration-300 ${
                activeSection === 'projects'
                  ? 'text-secondary font-bold'
                  : 'text-white'
              }`}
            >
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-transform duration-500 origin-left ${
                  activeSection === 'projects'
                    ? 'w-full scale-x-100'
                    : 'w-full scale-x-0'
                }`}
              ></span>
              <span className="relative inline-block pb-1">SKILLS</span>
            </button>

            <button
              onClick={() => setActiveSection('contact')}
              className={`relative group block text-left transition-all duration-300 ${
                activeSection === 'contact'
                  ? 'text-secondary font-bold'
                  : 'text-white'
              }`}
            >
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-transform duration-500 origin-left ${
                  activeSection === 'contact'
                    ? 'w-full scale-x-100'
                    : 'w-full scale-x-0'
                }`}
              ></span>
              <span className="relative inline-block pb-1">CONTACT</span>
            </button>
          </div>

          <div className="flex items-center space-x-6 mt-8">
            <a
              href="https://github.com/Amawers"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
                alt="GitHub"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {activeSection === 'about' && (
            <div>
              <p className="mt-4">
                ABOUT ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate.
              </p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <p className="mt-4">
                EXPERIENCE ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
