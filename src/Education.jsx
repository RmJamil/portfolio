// Education.jsx
import React from 'react';

const education = [
  {
    university: 'Khulna University of Engineering and Technology',
    degree: 'Bachelor of Electonics & Communication Engineering',
    year: '2019',
  },
  {
    university: 'Cantonment public School & College,Jahanabad.',
    degree: 'Higher Secondary Education (Science)',
    year: '2008',
  },
  {
    university: 'Gilatala Ahammadia Dakhil Madrasah',
    degree: 'Secondary School Certificate',
    year: '2006',
  },
];

const Education = () => {
  return (
    <section id='education' className="">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-3xl font-bold text-center mb-8">Educational Qualification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div  data-aos="flip-up"
              key={index}
              className=" border-2 border-blue-500 rounded-lg shadow p-6 hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.university}</h3>
              <p className=" text-base mb-1">{edu.degree}</p>
              <p className=" text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
