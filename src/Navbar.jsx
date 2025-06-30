import React from 'react';
import pic from './assets/jamil.JPG'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-indigo-600 rounded-t-xl shadow-sm p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Portfolio</a></li>
  
        <li><a>Blog</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-white lg:font-bold lg:text-3xl"> Mr. Mahmud Jamil</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-bold">
      <li><a>Portfolio</a></li>
 
      <li><a>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end mr-8">
    <a className="btn bg-indigo-700 border-none p-4 lg:text-xl text-white ">Hire me</a>
  </div>
</div>



<div className="flex  lg:my-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl  bg-blue-300 lg:py-16 w-full ">
    <img
      src={pic}
      className="rounded-2xl shadow-2xl text-center lg:h-[50vh] mx-auto border-2 border-[#6A008A] "
    />
    <div className='flex flex-col justify-center   p-3'>
      <h1 className="text-2xl font-bold py-3">Hi!</h1>
      <h1 className="lg:text-5xl font-bold">I am <span className='text-[#6A008A]'>Mahmud Jamil</span></h1>
      <h1 className="lg:text-3xl font-bold"><span className='text-blue-600'>Web Developer</span></h1>
      <h1 className="lg:text-xl font-bold mb-4 ">Specialized on MERN Stack web development</h1>
    
      <div className=''>
        <button className="btn bg-blue-400 border-none text-blue-700 lg:font-bold  ">Download CV</button>
      <button className="btn border-2 border-blue-400 bg-blue-300 text-blue-800 lg:font-bold ml-2  ">Contact</button>
      </div>
    </div>
  </div>
</div>



<div className="hero bg-blue-300 my-4 py-8 rounded-2xl">
  <div className=" text-center">
    <div className="">
      <h1 className="lg:text-4xl font-bold text-[#6A008A] ">About me</h1>
      <p className="py-6">
        <p className='text-lg font-bold'>I am passionate and detail-oriented Web Developer with 5 years of experience in front-end and back-end web development.</p>
        <p className='text-lg font-bold text-blue-500'>Specialized in:</p>
        <ul>
          <li className='lg:text-xl'></li>
          <li></li>
          <li>Front-end development with HTML, CSS, JavaScript and React.</li>
          <li>Back-end technologies including Node.js, Express.</li>
          <li>Modern tools & workflows like Git, Webpack, and REST APIs.</li>
          <li>Responsive design and cross-browser compatibility.</li>
          <li>Performance optimization and SEO best practices.</li>
        </ul>
     
<p className='text-lg font-bold'>I always maintain a problem-solving mindset and a strong eye for design and UX.
Let’s build something great together!</p>
      </p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;