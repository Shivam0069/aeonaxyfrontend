import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { multicontext } from './Stepcontext'
import { useContext } from 'react'
const Learning = () => {
      const {step, setStep} = useContext(multicontext)
  return (
    <div>
    <button className='font-bold text-3xl absolute left-2 bg-blue-500 rounded-full top-9 ' onClick={() => setStep(1)}><IoMdArrowBack/></button>
    <div className='flex flex-col'>
      <div className='mt-8'>
<h1 className='text-3xl font-bold mt-4 text-center '>Learning path based on your partners</h1>
<p className='mt-4 text-center mb-6'>Choose one to get started you can switch anytime</p>
      </div>
      <button className='w-32 h-12 bg-yellow-500 rounded-full text-black p-2 relative left-[550px] top-7 font-bold'>More Problem</button>
      <div className='flex items-center justify-center space-x-8 mt-8 shadow-xl '>
   
<div className='flex items-center justify-between space-x-3 shadow-xl p-6'>
<p className='w-[200px]'>Learn specific skills to advance my career write by someone who is an expert in their field</p>
<img className='w-[100px] rounded-lg' src='https://img.freepik.com/free-vector/young-boy-using-laptop-education_1308-85299.jpg?t=st=1712674366~exp=1712674966~hmac=7aa3df13d4b5372d15338523309c008488f8727c27c082f1688b40d0ac6ef7b0'></img>

</div>
      
      
      <div className='flex items-center justify-between shadow-2xl p-4'>
<p className='w-[200px]'>Learn specific skills to advance my career write by someone who is an expert in their field</p>
<img className='w-[200px] rounded-lg' src='https://thumbs.dreamstime.com/b/education-training-course-online-study-tutorials-e-learning-smart-knowledge-cartoon-miniature-illustration-vector-graphic-white-135075905.jpg'></img>

</div>
      </div>
    
  </div>
  </div>

  )
}

export default Learning


