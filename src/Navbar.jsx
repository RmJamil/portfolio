import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { NavLink } from 'react-router';


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
 const [dark, setDark] = useState(true);
  const sections = ['about', 'skills', 'projects', 'education', 'experience', 'contact'];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDark(savedMode === 'true');
    }
  }, []);

  // Apply dark mode class & save to localStorage
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', dark);
  }, [dark]);

  const handleDark = () => {
    setDark((prev) => !prev);
  };


  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight / 2 && top >= -el.offsetHeight / 2) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar bg-blue-500 rounded-t-xl shadow-sm p-4 mb-2 ">
      {/* Left Side */}
      <div className="navbar-start">
        <a className=" lg:font-bold lg:text-3xl">Md. Mahmud Jamil</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-bold space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`hover:underline ${
                  activeSection === section ? 'text-lg p-1 underline' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end  ">
           
        <p className="text-xl hidden lg:block font-bold ">Web Developer</p>
         <div className=" justify-center items-center mt-3  h-full mb-2 hidden lg:flex">
         
                  {dark ? <MdDarkMode className='ml-4 cursor-pointer p-1 hover:p-0' onClick={handleDark} size={40} /> : <MdOutlineDarkMode className='ml-4 cursor-pointer  p-1 hover:p-0' onClick={handleDark} size={40} />}
          
              </div>

          <div className="dropdown-end dropdown bg-blue-500 ">
            
          <label tabIndex={0} className="btn btn-ghost bg-blue-500  lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
         
          <ul
           tabIndex={0} className="dropdown-content menu bg-blue-400 rounded-box z-1 w-32 shadow-sm"
          >
           <li className=''>   
            {dark ? <MdDarkMode onClick={handleDark} size={50}  /> : <MdOutlineDarkMode onClick={handleDark} size={50} />}
          </li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:underline">Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:underline">Projects</button></li>
            <li><button onClick={() => scrollToSection('education')} className="hover:underline">Education</button></li>
            <li><button onClick={() => scrollToSection('experience')} className="hover:underline">Experience</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button></li>
          </ul>
        </div>
      </div>
    </div>




    );
};

export default Navbar;