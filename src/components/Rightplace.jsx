// import React from 'react'
// import { multicontext } from './Stepcontext'
// import { useContext } from 'react'
// import { FaStar } from 'react-icons/fa'
// import { IoMdArrowBack } from "react-icons/io";

// const Rightplace = () => {
//   const { step, setStep } = useContext(multicontext)
//   return (
//     <div>
    
//     <button className='font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9 ' onClick={() => setStep(2)}><IoMdArrowBack/></button>
    
        
//         <div className='w-full flex justify-center items-center'>
//             <img className='w-[400px] mt-[110px] ml-12' src='https://img.freepik.com/free-vector/science-experiment-force-motion-with-pulley_1308-77030.jpg?w=740'></img>
//             <div className='w-1/2 flex flex-col justify-center items-center'>
//   <h1 className='text-3xl font-bold'>You Are in the Right Place</h1>
//   <p className='ml-0 mt-4 md:ml-12 md:w-[50%] mr-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit discussing and discovering. lorem ipsum dolor sit amet consectetur adipisicing elit discussing and discovering     </p>
// </div>

           
//         </div>
//         <button onClick={() => setStep(4)} className='absolute left-[700px] w-[150px] bg-black rounded-lg hover:bg-gray-700 text-white font-bold py-2 px-4 mx-auto text-center '>Continue</button>
//     </div>

//   )
// }

// export default Rightplace


import React from 'react';
import { multicontext } from './Stepcontext';
import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

const Rightplace = () => {
  const { step, setStep } = useContext(multicontext);

  return (
    <div className="flex flex-col items-center">
      <button
        className="font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9"
        onClick={() => setStep(2)}
      >
        <IoMdArrowBack />
      </button>

      <div className="flex flex-col md:flex-row items-center w-full mt-4 justify-center">
        <img
          className="w-full md:w-[400px] mt-[110px] ml-12"
          src="https://img.freepik.com/free-vector/science-experiment-force-motion-with-pulley_1308-77030.jpg?w=740"
          alt="Right Place"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-12 md:mt-0">
          <h1 className="text-3xl font-bold text-center md:text-left lg:mr-12">
            You Are in the Right Place
          </h1>
          <p className="mt-4 md:ml-12 md:mr-10 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, discussing and discovering.
            Lorem ipsum dolor sit amet consectetur adipisicing elit, discussing and discovering.
          </p>
        </div>
      </div>

      <button
        onClick={() => setStep(4)}
        className="w-full md:w-auto bg-black rounded-lg hover:bg-gray-700 text-white font-bold py-2 px-4 mx-auto mt-4"
      >
        Continue
      </button>
    </div>
  );
};

export default Rightplace;
