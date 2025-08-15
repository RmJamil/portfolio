import React from "react";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di"; // For C#
import { TbApi } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: <FaJava className="text-3xl text-orange-500" />,
      items: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C#", icon: <DiDotnet className="text-purple-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        {
          name: "HTML/CSS",
          icon: (
            <>
              <FaHtml5 className="text-orange-500" />{" "}
              <FaCss3Alt className="text-blue-500" />
            </>
          ),
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <FaReact className="text-3xl text-cyan-400" />,
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-3xl text-gray-500" />,
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      ],
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="text-3xl text-orange-500" />,
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Agile/Scrum", icon: <MdOutlineDesignServices /> },
      ],
    },
    {
      title: "Design",
      icon: <FaFigma className="text-3xl text-purple-500" />,
      items: [
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        { name: "Adobe AI", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "UI/UX Design", icon: <MdOutlineDesignServices /> },
        { name: "Wireframing & Prototyping", icon: <MdOutlineDesignServices /> },
      ],
    },
  ];

  return (
    <div id='skills' className=" ">
      <h2 className="text-3xl font-bold text-center mb-12 ">
        Skills
      </h2>
      <div   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <div  data-aos="flip-up"
            key={index}
            className="border-2 border-blue-500 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
            
              <h3 className="text-xl font-semibold text-blue-600">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2"
                >
                  {skill.icon} <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
