import React from 'react';
import pic from './assets/jamil.JPG'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaFacebook } from 'react-icons/fa';
const contactLinks = [
  {
    icon: <FaLinkedin className="text-blue-700" />,
    url: 'https://www.linkedin.com/in/yourprofile',
    name: 'LinkedIn',
  },
  {
    icon: <FaGithub className="text-gray-800" />,
    url: 'https://github.com/rmJamil',
    name: 'GitHub',
  },
  {
    icon: <FaDiscord className="text-indigo-500" />,
    url: 'https://discord.com/channels/@me',
    name: 'Discord',
  },
  {
    icon: <FaEnvelope className="text-red-500" />,
    url: 'mailto:jamil.web.coder@gmail.com',
    name: 'Gmail',
  },
  {
    icon: <FaFacebook className="text-blue-600" />,
    url: 'https://www.facebook.com/jamil.raihan.14',
    name: 'Facebook',
  },
];

const Banner = () => {
   const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
    return (
        <div>
            <div className="flex  my-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl p-4  lg:py-16 w-full ">
    <img data-aos="fade-down-right"
      src={pic}
      className="rounded-full shadow-2xl text-center my-12 lg:w-[400px] lg:h-[400px] w-36 h-36 mx-auto border-3 border-blue-500 "
    />
    <div  data-aos="fade-down-left" className='flex flex-col justify-center   p-3'>
      <h1 className="text-2xl font-bold py-3">Hi!</h1>
      <h1 className="lg:text-5xl font-bold">I am <span className=''>Mahmud Jamil</span></h1>
      <h1 className="lg:text-3xl font-bold"><span className='text-blue-500'>Web Developer</span></h1>
      <h1 className="lg:text-xl font-bold mb-4 ">Specialist on MERN Stack web development</h1>
    
      <div className=''>
        <button className="p-1 px-2 rounded-xl cursor-pointer border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white lg:font-bold  mr-2 ">Download CV</button>
      <button onClick={() => scrollToSection('contact')} className="p-1 px-2 rounded-xl cursor-pointer  border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white lg:font-bold  ">Contact</button>
      </div>
      <div className="container mx-auto my-6 ">
   
        <div className="flex  flex-wrap  gap-3">
          {contactLinks.map((contact, index) => (
            <a data-aos="flip-right"
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 shadow hover:shadow-md transition transform hover:scale-110"
              title={contact.name}
            >
              <span className=" text-xl">{contact.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>



<div id='about' className="hero  my-6 p-4 rounded-2xl">
  <div className=" text-center">
    <div  className="">
      <h1 className="text-3xl  font-bold ">About me</h1>
    <div className='py-6'>
        <p className='text-lg font-bold'>Hi, I’m Md. Mahmud Jamil — a passionate developer who sees coding as both art 
          and problem-solving.    </p>
     
        <ul className='bind flex flex-col items-center'>
          <li className='lg:text-xl'></li>
          <li></li>
          <li>My journey began with basic HTML and CSS, quickly evolving into building full-stack
           applications using React, Next.js, Express, and MongoDB.</li>
     
          <li>I enjoy creating clean, functional, 
           and user-friendly projects that merge creativity with logic.</li>
           <li>Outside programming, 
           I love listening Rock music,nature-photography,sketching, which keep me balanced and inspired.</li>
        <li>I’m curious, detail-oriented, and persistent, always eager to learn and share knowledge. Nothing beats
           the satisfaction of solving a tough bug or seeing an idea turn into a real, working application.</li>
        </ul>
     </div>
<p className='text-lg font-bold'>I always maintain a problem-solving mindset and a strong eye for design and UX.
Let’s build something great together!</p>
   

    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;