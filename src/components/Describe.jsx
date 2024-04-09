// import React from 'react'
// import { multicontext } from './Stepcontext'
// import { useContext } from 'react'
// import Avatar from 'react-avatar';
// const Describe = () => {
//   const {step, setStep} = useContext(multicontext)
//   return (
//     <div className='w-full mx-auto mt-5 '>
 
        
//        <h1 className="text-3xl text-center font-bold mt-6 ">Which Describes You Best?</h1>
//        <p className="text-center mt-4">This will help us personalize your experience</p>
//        <div className='flex flex-col justify-center items-center space-y-5 mt-8'>
//        <div className='flex items-center p-4 relative left-[-130px] space-x-4 mr-8 border-bottom border-gray-300 '>
//            <Avatar src='https://th.bing.com/th/id/OIP.b1ySyhcqQIyhHoe35UeomAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' size="40" round={true} />
//            <p className='pl-2'>Student</p>
//          </div>
//          <div className='flex items-center p-3 relative left-[-150px] space-x-6 '>
//            <Avatar src='https://img.freepik.com/free-vector/files-sent-concept-illustration_114360-3629.jpg?t=st=1712653383~exp=1712656983~hmac=68e203ebc38f0b13a021267e474b7300d8e0c1cf62c98bcb6cc5b3c5b94bfc8f&w=740' size="57" round={true} />
//            <p>Parent</p>
//          </div>
//          <div className='flex items-center p-4 relative left-[-130px] space-x-6 '>
//            <Avatar src='https://img.freepik.com/free-vector/man-studying-with-book-illustration-isolated_24911-115018.jpg?t=st=1712653355~exp=1712656955~hmac=f9aaf8b3e1314c9bc4cff4760225f21c718121a6073a7623bf0c6d82363f2167&w=740' size="50" round={true} />
//            <p>Professional</p>
//          </div>
//          <div className='flex items-center p-4 relative left-[-150px] space-x-6 '>
//            <Avatar src='https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1467.jpg?t=st=1712653327~exp=1712656927~hmac=270166fd5b86c8e831bc6d42d3fff998bd14bf4b247deb0392cae3f8158264b5&w=740' size="57" round={true} />
//            <p>Teacher</p>
//          </div>
//          <div className='flex items-center p-4 relative left-[-150px] space-x-6 '>
//            <Avatar src='https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?t=st=1712653281~exp=1712656881~hmac=926a6f7abe8601d93c1ffde380a0f623b36f07fb170e080d86e85243f46e575c&w=740' size="57" round={true} />
//            <p>Other</p>
//          </div>
//         <button onClick={()=>setStep(2)} className='bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg text-center w-[150px]'>Continue</button>
//      </div>     </div>


    
//   )
// }

// export default Describe


import React from 'react'
import { multicontext } from './Stepcontext'
import { useContext } from 'react'
import Avatar from 'react-avatar';

const Describe = () => {
  const {step, setStep} = useContext(multicontext)
  return (
    <div className='w-full mx-auto mb-12'>
      <h1 className="text-3xl text-center font-bold mt-6">Which Describes You Best?</h1>
      <p className="text-center mt-4">This will help us personalize your experience</p>
      <div className='flex flex-col justify-center items-center space-y-3 mt-8 '>
        <div className='flex items-center p-4 space-x-4 border-bottom border-gray-300 hover:shadow-md rounded-lg'>
          <Avatar src='https://th.bing.com/th/id/OIP.b1ySyhcqQIyhHoe35UeomAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' size="40" round={true} />
          <p>Student or soon to be enrolled</p>
        </div>
        <div className='flex items-center p-3 space-x-6 hover:shadow-md rounded-lg'>
          <Avatar src='https://img.freepik.com/free-vector/study-desk-concepts_23-2147502682.jpg?t=st=1712672907~exp=1712676507~hmac=a6813f3fd1aef41606545f878d7ff881d3c1d3fbc9150cc022c22b047c7a3df4&w=740' size="57" round={true} />
          <p>Parent of a school age child</p>
        </div>
        <div className='flex items-center p-4 space-x-6 hover:shadow-md rounded-xl'>
          <Avatar src='https://img.freepik.com/free-vector/man-studying-with-book-illustration-isolated_24911-115018.jpg?t=st=1712653355~exp=1712656955~hmac=f9aaf8b3e1314c9bc4cff4760225f21c718121a6073a7623bf0c6d82363f2167&w=740' size="50" round={true} />
          <p>Professional  persuing a carrer</p>
        </div>
        <div className='flex items-center p-4 space-x-6 hover:shadow-md rounded-lg'>
          <Avatar src='https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1467.jpg?t=st=1712653327~exp=1712656927~hmac=270166fd5b86c8e831bc6d42d3fff998bd14bf4b247deb0392cae3f8158264b5&w=740' size="57" round={true} />
          <p>Teacher life long learner who </p>
        </div>
        {/* <div className='flex items-center p-4 space-x-6 shadow-md'>
          <Avatar src='https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1467.jpg?t=st=1712653327~exp=1712656927~hmac=270166fd5b86c8e831bc6d42d3fff998bd14bf4b247deb0392cae3f8158264b5&w=740' size="57" round={true} />
          <p>Life long learner that will have</p>
        </div> */}
        <div className='flex items-center p-4 space-x-6 hover:shadow-md'>
          <Avatar src='https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?t=st=1712653281~exp=1712656881~hmac=926a6f7abe8601d93c1ffde380a0f623b36f07fb170e080d86e85243f46e575c&w=740' size="57" round={true} />
          <p>Other lorem ipsum dolor sit </p>
        </div>
        <button onClick={()=>setStep(2)} className='bg-black  hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg text-center w-[180px] mt-8 sm:bottom-0 '>Continue</button>
      </div>
      
    </div>
  )
}

export default Describe;
