import React from 'react'
import { multicontext } from './Stepcontext'
import { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowBack } from "react-icons/io";

const Onway = () => {
  const { step, setStep } = React.useContext(multicontext)

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:w-4/5 lg:mx-auto mt-8 lg:mt-24'>
      <button className='font-bold text-3xl absolute left-2  lg:static bg-blue-500 rounded-full top-9 lg:top-auto lg:left-auto lg:m-0' onClick={() => setStep(4)}>
        <IoMdArrowBack />
      </button>

      <img className='w-full lg:w-[400px] mt-6 lg:mt-0' src="https://i.pinimg.com/736x/69/02/f9/6902f939be2dc07c3a29dd6520e4043e.jpg" alt="onway" />

      <div className='mt-6 lg:ml-12'>
        <h1 className='text-3xl font-bold'>You are on your way!</h1>

        <div className='flex space-x-3 mt-4 lg:mt-8'>
          <FaStar size={'30px'} className="text-yellow-400" />
          <FaStar size={'30px'} className="text-yellow-400" />
          <FaStar size={'30px'} className="text-yellow-400" />
          <FaStar size={'30px'} className="text-yellow-400" />
        </div>

        <p className='mt-6 lg:w-[90%]'>Learning specific skills to advance my career written by someone who is an expert in their field. Please wait for a while as we are preparing your order. I feel confident now approaching both technical and job interviews and real-world problem solutions.</p>

        <button onClick={() => setStep(6)} className='w-full lg:w-auto mt-8 lg:mt-12 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg text-center'>Continue</button>
      </div>
    </div>
  )
}

export default Onway;
