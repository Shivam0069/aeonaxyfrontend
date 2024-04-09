
import React from 'react';
import { multicontext } from './Stepcontext';
import { useContext } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const Comfort = () => {
  const { step, setStep } = useContext(multicontext);

  return (
    <div>
      <button
        className="font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9"
        onClick={() => setStep(3)}
      >
        <IoMdArrowBack />
      </button>
      <div className="mt-[150px]">
        <h1 className="text-3xl font-bold mt-4 text-center">What is your Math comfort level?</h1>
        <p className="mt-6 text-center">
          Choose the highest level you are comfortable in - you can always adjust later
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 mt-12 ">
          <div className="flex flex-col px-12 py-12  hover:border-2-yellow-500 border-2 text-center md:w-[300px] md:p-8 shadow-xl">
            <p>5*1/2 = ?</p>
            <p className="text-md font-bold mt-2">Arithmetic</p>
            <p className="text-lg text-gray-500">Introductory</p>
          </div>
          <div className="flex flex-col px-12 py-12 shadow-md hover:border-2 text-center md:w-[300px] md:p-8">
            <p>5*1/2 = ?</p>
            <p className="text-md font-bold mt-2">Arithmetic</p>
            <p className="text-lg text-gray-500">Introductory</p>
          </div>
          <div className="flex flex-col px-12 py-12 shadow-md hover:border-2 text-center md:w-[300px] md:p-8">
            <p>5*1/2 = ?</p>
            <p className="text-md font-bold mt-2">Arithmetic</p>
            <p className="text-lg text-gray-500">Introductory</p>
          </div>
          <div className="flex flex-col px-12 py-12 shadow-md hover:border-2 text-center md:w-[300px] md:p-8 hover:shadow-xl">
            <p>5*1/2 = ?</p>
            <p className="text-md font-bold mt-2">Arithmetic</p>
            <p className="text-lg text-gray-500">Introductory</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setStep(5)}
        className="absolute left-[50%] transform -translate-x-1/2 md:left-[700px] md:transform-none w-[150px] mt-12 bg-black rounded-lg hover:bg-gray-700 text-white font-bold py-2 px-4 mx-auto text-center"
      >
        Continue
      </button>
    </div>
  );
};

export default Comfort;
