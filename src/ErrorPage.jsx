import React from 'react';
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import animationData from '../src/assets/404 Error - Doodle animation.json'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
<div className='w-11/12 mx-auto'>

        
        <div className='flex flex-col justify-center h-[100vh] items-center gap-6   mx-auto'>
           
            <div className='flex flex-col items-center justify-center  w-full  rounded-2xl mb-12'>
            <p className='text-6xl font-bold'>Invalid Page</p>
            <div className='w-full flex justify-center '>
             <div style={{ width: 300, height: 300 }}>
                  <Lottie animationData={animationData} loop={true} />
                </div>   
            </div>
    </div>
   <div className='bg-blue flex justify-center'>
             <Link to='/'> <button className='btn hover:text-white text-center bg-sky-400 hover:bg-sky-500'>Back to home</button></Link>
        </div>
        </div>
       
</div>
       
    );
};

export default ErrorPage;