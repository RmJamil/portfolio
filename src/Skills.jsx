// Skills.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiTailwindcss, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
];

const Skills = () => {
  return (
    <section className="py-12 my-4 bg-blue-300 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6A008A]">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div data-aos="flip-right"
              key={index}
              className="flex flex-col items-center justify-center bg-blue-100 rounded-lg shadow p-4 hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
