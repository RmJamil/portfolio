// ExperienceSection.jsx
import React from 'react';

const experiences = [
  {
    institute: 'Tech Solutions Inc.',
    date: 'Jan 2023 - Present',
    role: 'Frontend Developer',
  },
  {
    institute: 'InnovateX Labs',
    date: 'Jun 2021 - Dec 2022',
    role: 'Full Stack Developer',
  },
  {
    institute: 'CodeCrafters Hub',
    date: 'Jan 2020 - May 2021',
    role: 'Intern Developer',
  },
];

const Experience = () => {
  return (
    <section className="py-12 bg-blue-300 my-4 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#6A008A]">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div data-aos="zoom-in-down"
              key={index}
              className="bg-blue-200 rounded-lg shadow p-6 hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.institute}</h3>
              <p className="text-gray-600 text-sm mb-1">{exp.date}</p>
              <p className="text-gray-800 text-base font-medium">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
