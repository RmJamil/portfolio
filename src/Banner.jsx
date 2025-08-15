import React from "react";
import pic from "./assets/jamil.JPG";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaLinkedin className="text-blue-700" />,
    url: "https://www.linkedin.com/in/yourprofile",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub className="text-gray-800" />,
    url: "https://github.com/rmJamil",
    name: "GitHub",
  },
  {
    icon: <FaDiscord className="text-indigo-500" />,
    url: "https://discord.com/channels/@me",
    name: "Discord",
  },
  {
    icon: <FaEnvelope className="text-red-500" />,
    url: "mailto:jamil.web.coder@gmail.com",
    name: "Gmail",
  },
  {
    icon: <FaFacebook className="text-blue-600" />,
    url: "https://www.facebook.com/jamil.raihan.14",
    name: "Facebook",
  },
];

const Banner = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="my-8">
      {/* Top Banner */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl p-4 lg:py-16 w-full gap-8">
          {/* Profile Picture */}
          <img
            data-aos="fade-down-right"
            src={pic}
            alt="Mahmud Jamil"
            className="rounded-full shadow-2xl text-center my-6 lg:my-12 
                       lg:w-[400px] lg:h-[400px] w-36 h-36 mx-auto 
                       border-4 border-blue-500 object-cover"
          />

          {/* Text Content */}
          <div
            data-aos="fade-down-left"
            className="flex flex-col justify-center p-3 text-center lg:text-left"
          >
            <h1 className="text-2xl font-bold py-3">Hi!</h1>
            <h1 className="text-3xl lg:text-5xl font-bold">
              I am <span className="text-blue-500">Mahmud Jamil</span>
            </h1>
            <h1 className="text-xl lg:text-3xl font-bold mt-2">
              <span className="text-blue-500">Web Developer</span>
            </h1>
            <h2 className="text-base lg:text-xl font-semibold mb-4 mt-2">
              Specialist in MERN Stack web development
            </h2>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button className="px-4 py-2 rounded-xl cursor-pointer border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-semibold transition">
                Download CV
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 rounded-xl cursor-pointer border-2 border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white font-semibold transition"
              >
                Contact
              </button>
            </div>

            {/* Contact Icons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              {contactLinks.map((contact, index) => (
                <a
                  data-aos="flip-right"
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 shadow hover:shadow-md transition transform hover:scale-110"
                  title={contact.name}
                >
                  <span className="text-xl">{contact.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="hero my-6  rounded-2xl ">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl my-6 font-bold">About me</h1>
          <div className="py-6 space-y-4 ">
            <p className="text-lg font-semibold">
              Hi, I’m Md. Mahmud Jamil — a passionate developer who sees coding
              as both art and problem-solving.
            </p>
            <p>
              My journey began with basic HTML and CSS, quickly evolving into
              building full-stack applications using React, Next.js, Express,
              and MongoDB.
            </p>
            <p>
              I enjoy creating clean, functional, and user-friendly projects
              that merge creativity with logic.
            </p>
            <p>
              Outside programming, I love listening to rock music,
              nature-photography, and sketching — which keep me balanced and
              inspired.
            </p>
            <p>
              I’m curious, detail-oriented, and persistent, always eager to
              learn and share knowledge. Nothing beats the satisfaction of
              solving a tough bug or seeing an idea turn into a real, working
              application.
            </p>
            <p className="text-lg font-semibold">
              I always maintain a problem-solving mindset and a strong eye for
              design and UX. Let’s build something great together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
