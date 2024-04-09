// import React from 'react'
// import { multicontext } from './Stepcontext'
// import { useContext } from 'react'
// import { IoMdArrowBack } from "react-icons/io";

// const Interested = () => {
//     const {step, setStep} = useContext(multicontext)
//   return (
//     <div className='w-full flex justify-center items-center flex-col space-y-7'>
//     <button className='font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9 ' onClick={() => setStep(1)}><IoMdArrowBack/></button>
//       <div>
//         <h1 className='text-3xl font-bold mt-4'>Which are you most interested in?</h1>
//         <p className='mt-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit, discussing and discovering.</p>
//       </div>
//       <div className='flex flex-col space-y-4'>
//         <div className='flex items-center space-x-4 ml-3 hover:bg-gray-100 hover:rounded-lg p-4 transition duration-300 ease-in-out'>
//           <img className='w-[70px] h-[70px]  rounded-full' src='https://img.freepik.com/free-vector/girl-graduation-concept-illustration_114360-12060.jpg?t=st=1712653866~exp=1712657466~hmac=2645145c77c18ed62c7782c70bff56411814bf965fecc870c4d18689527d9e72&w=740' alt='Skill icon' />
//           <p>Learning specific skills to advance my career</p>
//         </div>
//         <div className='flex items-center space-x-4 ml-3 hover:bg-gray-100 hover:rounded-lg p-4 transition duration-300 ease-in-out'>
//           <img className='w-[100px] h-[100px] rounded-full' src='https://img.freepik.com/premium-vector/girl-study-computer-online-learning-concept-video-lesson-distance-study_186332-198.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sphr' alt='Skill icon' />
//           <p>Learning specific skills to advance my career</p>
//         </div>
//         <div className='flex items-center space-x-4 ml-3 hover:bg-gray-100 hover:rounded-lg p-4 transition duration-300 ease-in-out'>
//           <img className='w-[70px] h-[70px] rounded-full' src='https://img.freepik.com/free-vector/students-watching-recorded-lecture-with-professor-talking-from-tablet-podcast-courses-audio-video-recording-class-recording-access-concept-vector-isolated-illustration_335657-1983.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sph' alt='Skill icon' />
//           <p>Learning specific skills to advance my career</p>
//         </div>
//         <div className='flex items-center space-x-4 ml-3 hover:bg-gray-100 hover:rounded-lg p-4 transition duration-300 ease-in-out'>
//           <img className='w-[100px] h-[100px] rounded-full' src='https://img.freepik.com/free-vector/group-students-watching-online-webinar_74855-5514.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sph' alt='Skill icon' />
//           <p>Learning specific skills to advance my career</p>
//         </div>
//         <div className='flex items-center space-x-4 ml-3 hover:bg-gray-200 hover:rounded-lg p-4 transition duration-300 ease-in-out'>
//           <img className='w-[70px] h-[70px] rounded-full' src='https://img.freepik.com/free-vector/online-education-landing-page-template_23-2148153163.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sph' alt='Skill icon' />
//           <p>Learning specific skills to advance my career</p>
//         </div>
        
//       </div>
//       <button  sx={{ color: 'green' }} onClick={()=>setStep(3)} className=' w-[150px] bg-black rounded-lg hover:bg-gray-700 text-white font-bold py-2 px-4 mx-auto text-center mt-9 '>Continue</button>
      
//     </div>

//   )
// }

// export default Interested

import React from 'react';
import { multicontext } from './Stepcontext';
import { useContext } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const Interested = () => {
  const { step, setStep } = useContext(multicontext);

  return (
    <div className="w-full flex flex-col items-center space-y-7">
      <button
        className="font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9"
        onClick={() => setStep(1)}
      >
        <IoMdArrowBack />
      </button>
      <div>
        <h1 className="text-3xl font-bold mt-4 text-center">Which are you most interested in?</h1>
        <p className="mt-4 mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, discussing and discovering.
        </p>
      </div>
      <div className="w-full flex flex-col space-y-4 md:max-w-lg">
        <div className="flex items-center space-x-4 hover:shadow-lg hover:rounded-lg p-4 transition duration-300 ease-in-out">
          <img className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full" src="https://img.freepik.com/free-vector/girl-graduation-concept-illustration_114360-12060.jpg?t=st=1712653866~exp=1712657466~hmac=2645145c77c18ed62c7782c70bff56411814bf965fecc870c4d18689527d9e72&w=740" alt="Skill icon" />
          <p>Learning specific skills to advance my career</p>
        </div>
        <div className="flex items-center space-x-4 hover:shadow-lg hover:rounded-lg p-4 transition duration-300 ease-in-out">
          <img className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full" src="https://img.freepik.com/free-vector/study-desk-concepts_23-2147502682.jpg?t=st=1712672907~exp=1712676507~hmac=a6813f3fd1aef41606545f878d7ff881d3c1d3fbc9150cc022c22b047c7a3df4&w=740" alt="Skill icon" />
          <p>Learning specific skills to advance my career</p>
        </div>
        <div className="flex items-center space-x-4 hover:shadow-lg hover:rounded-lg p-4 transition duration-300 ease-in-out">
          <img className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full" src="https://img.freepik.com/free-vector/students-watching-recorded-lecture-with-professor-talking-from-tablet-podcast-courses-audio-video-recording-class-recording-access-concept-vector-isolated-illustration_335657-1983.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sph" alt="Skill icon" />
          <p>Learning specific skills to advance my career</p>
        </div>
        <div className="flex items-center space-x-4 hover:shadow-lg hover:rounded-lg p-4 transition duration-300 ease-in-out">
          <img className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full" src="https://img.freepik.com/free-vector/group-students-watching-online-webinar_74855-5514.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sp" alt="Skill icon" />
          <p>Learning specific skills to advance my career</p>
        </div>
        <div className="flex items-center space-x-4 hover:shadow-lg rounded-lg p-4 transition duration-300 ease-in-out">
          <img className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full" src="https://img.freepik.com/free-vector/online-education-landing-page-template_23-2148153163.jpg?size=626&ext=jpg&ga=GA1.1.401657780.1704735571&semt=sph' alt='Skill icon" alt="Skill icon" />
          <p>Learning specific skills to advance my career</p>
        </div>
        {/* Add more similar divs for other items */}
      </div>
      <button
        onClick={() => setStep(3)}
        className="w-full md:w-auto bg-black rounded-lg hover:bg-gray-700 text-white font-bold py-2 px-4 mx-auto text-center lg:w-[150px] mb-6"
      >
        Continue
      </button>
    </div>
  );
};

export default Interested;
