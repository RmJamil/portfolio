import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

const Details = () => {
    const{id}=useParams();
    console.log(id);
    const data=useLoaderData();
    console.log(data);
    const single=data.find(one=>one.id==id);
    console.log(single);
    const {  title,
  techStack,
  description,
  liveLink,
  githubLink,
  challenges,
  improvements}=single;
    return (
        
        <div className=''>
         <div className='sticky top-0 z-5'>
           <Navbar></Navbar>
         </div>
          <div className='flex items-center justify-center h-[100vh] mx-2'>
     <div className="relative border-2 border-blue shadow-lg rounded-xl p-6    hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
      {/* Project Title */}
      <h2 className="text-2xl font-bold text-blue-500 mb-2">{title}</h2>

      {/* Tech Stack */}
      <p className="text-sm mb-4">
        <span className="font-semibold">Tech Stack:</span> {techStack}
      </p>

      {/* Description */}
      <p className=" mb-4">{description}</p>

      {/* Links */}
      <div className="flex gap-4 mb-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="p-2 px-4 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white border-2 border-blue-400"
        >
          Live Project
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="p-2 px-4 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white border-2 border-blue-400"
        >
          GitHub
        </a>
      </div>

      {/* Challenges */}
      <div className="mb-4">
        <h3 className="font-semibold ">Challenges Faced:</h3>
        <ul className="list-disc list-inside ">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Improvements */}
      <div className='mb-6'>
        <h3 className="font-semibold ">Potential Improvements & Future Plans:</h3>
        <ul className="list-disc list-inside ">
          {improvements.map((improve, index) => (
            <li key={index}>{improve}</li>
          ))}
        </ul>
      </div>
     <div className='bottom-1 absolute right-1   h-24 flex flex-col items-end justify-end'> <button className='p-2 px-4 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white border-2 border-blue-400'><Link to='/'>Go back</Link></button></div>
    </div>
        </div>
        <Footer></Footer>
        </div>
    
    );
};

export default Details;