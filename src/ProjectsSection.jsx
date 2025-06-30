// ProjectsSection.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const projects = [
  {
    name: 'Auction Gallery',
    image: 'https://i.postimg.cc/RFHxHjMd/Screenshot-293.png', // Replace with actual image URL
    description: 'In this project a buyer can bid on a variety of items and seller can post there products.',
    skills: [<SiReact className="text-blue-500" />, <SiMongodb className="text-green-500" />, <SiExpress className="text-gray-700" />, <SiTailwindcss className="text-teal-400" />],
    liveLink: 'https://liveproject1.com',
    githubLink: 'https://github.com/user/project1',
  },
  {
    name: 'Jeal Hotel Management',
    image: 'https://i.postimg.cc/65JyZ4H6/Screenshot-292.png',
    description: 'A hotel room can be booked remotely. A logged in user can book,updaye and cancel available room on a specific date.',
    skills: [<SiReact className="text-blue-500" />, <SiFirebase className="text-yellow-500" />, <SiTailwindcss className="text-teal-400" />],
    liveLink: 'https://liveproject2.com',
    githubLink: 'https://github.com/user/project2',
  },
  {
    name: 'JetWork Freelauncing Platform',
    image: 'https://i.postimg.cc/GmjWQ6dg/Screenshot-291.png',
    description: 'A buyer can hire frelauncers on a variety of skills and buyer  can post joband freelauncers can apply and bid on jobs posted.',
    skills: [<SiExpress className="text-gray-700" />, <SiMongodb className="text-green-500" />, <SiTailwindcss className="text-teal-400" />],
    liveLink: 'https://liveproject3.com',
    githubLink: 'https://github.com/user/project3',
  },
  {
    name: 'Jecoton App Store',
    image: 'https://i.postimg.cc/V60Z3hP8/Screenshot-289.png',
    description: 'An user  can download app from a variety of apps posted by app developers.',
    skills: [<SiReact className="text-blue-500" />, <SiFirebase className="text-yellow-500" />, <SiTailwindcss className="text-teal-400" />],
    liveLink: 'https://liveproject4.com',
    githubLink: 'https://github.com/user/project4',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 bg-blue-300 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6A008A]">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {projects.map((project, index) => (
            <div data-aos="fade-up"
     data-aos-duration="700"
              key={index}
              className="bg-blue-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-contain m-1 p-1 mx-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="text-xl">{skill}</div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-black">
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
