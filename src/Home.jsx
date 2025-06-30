import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import Education from './Education';
import ContactSection from './ContactSection';
import MessageForm from './MessgageForm';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-6'>
      <Navbar></Navbar>
      <Skills></Skills>
      <ProjectsSection></ProjectsSection>
      <Education></Education>
      <Experience></Experience>
      <MessageForm></MessageForm>
      <ContactSection></ContactSection>
      <Footer></Footer>
        </div>
    );
};

export default Home;