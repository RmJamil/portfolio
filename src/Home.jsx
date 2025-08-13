import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import ProjectsSection from './ProjectsSection';
import Experience from './Experience';
import Education from './Education';

import MessageForm from './MessgageForm';
import Footer from './Footer';
import Banner from './Banner';
import ContactInfo from './ContactInfo';

const Home = () => {
    return (
        <div className='pt-6'>
     <div className='top-0 sticky z-7'>
       <Navbar></Navbar>
     </div>
     <div className='w-11/12 mx-auto'>
      <Banner></Banner>
      <Skills></Skills>
      <ProjectsSection></ProjectsSection>
      <Education></Education>
      <Experience></Experience>
      <MessageForm></MessageForm>
      <ContactInfo></ContactInfo>
   
    
     </div>
       <Footer></Footer>
        </div>
    );
};

export default Home;