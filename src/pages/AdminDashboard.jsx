import React from 'react'
import Header from '../components/Header'
import { useState } from 'react';

function AdminDashboard() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [taskAssignedTo, setTaskAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('')

  const taskFormSubmitHandler = (event) =>{
    event.preventDefault()
    console.log(`task is ${task}`)
    console.log(`date is ${date}`)
    console.log(`taskAssignedTo is ${taskAssignedTo}`)
    console.log(`category is ${category}`)
    console.log(`description is ${description}`)
    // clear the form fields
    setTask('');
    setDate('');
    setTaskAssignedTo('');
    setCategory('');
    setDescription('');
  }

  return (
    <div className='w-full min-h-screen p-10'>
      <Header/>
      <form onSubmit={taskFormSubmitHandler} className='flex w-full h-[60vh] gap-5 px-10 py-3'>
        <div className='w-[50%] h-full  px-10 py-5'>
        {/* task title */}
        <h1 className='text-white text-sm font-semibold'>Task Title</h1>
          <input required onChange={(event) => setTask(event.target.value)} type='text' id='task' value={task} placeholder='Enter task to be assigned' className='w-full px-5 py-2 bg-transparent outline-none border-2 border-violet-400 mt-2 rounded-lg text-xl font-semibold'></input>
        {/* date */}
        <h1 className='text-white text-sm font-semibold mt-4'>Enter Date</h1>
          <input required onChange={(event) => setDate(event.target.value)} type='date' id='date' value={date} placeholder='Enter current date' className='w-full  px-5 py-2 bg-transparent outline-none border-2 border-violet-400 mt-2 rounded-lg text-xl font-semibold'></input>

          {/* assign to */}
          <h1 className='text-white text-sm font-semibold mt-4'>Task assign to</h1>
          <input required onChange={(event) => setTaskAssignedTo(event.target.value)} type='text' id='taskAssignedTo' value={taskAssignedTo} placeholder='task is assigned to' className='w-full  px-5 py-2 bg-transparent outline-none border-2 border-violet-400 mt-2 rounded-lg text-xl font-semibold'></input>

          {/*  */}
          <h1 className='text-white text-sm font-semibold mt-4'>Category</h1>
          <input required  onChange={(event) => setCategory(event.target.value)} type='text' id='category' value={category} placeholder='Enetr task category' className='w-full  px-5 py-2 bg-transparent outline-none border-2 border-violet-400 mt-2 rounded-lg text-xl font-semibold'></input>



        </div>

        <div className='w-[50%] h-full  px-10 py-5'>
        {/* desriptionand submit button */}
        <h1 className='text-white text-sm font-semibold'>Description</h1>
        <textarea required onChange={(event) => setDescription(event.target.value)} type='text' id='disscription' value={description} placeholder='Enter some details about the task' className=' w-full h-[64%] px-5 py-2 bg-transparent outline-none border-2 border-violet-400 mt-2 rounded-lg text-xl font-semibold'></textarea>

        {/* submit */}
        <input required type='submit' value='Submit' className='w-full px-5 py-2  outline-none bg-violet-500 mt-10 rounded-lg text-xl font-bold cursor-pointer  '></input>
        </div>
        
      </form>

      <div className='w-full max-h-[28vh] flex flex-col gap-2 overflow-y-auto  rounded-lg '>
          <div className='w-full px-6 py-2 bg-green-300 flex items-center justify-between rounded-xl'>
                <h1 className='text-black text-2xl font-semibold'>Anand Jha</h1>
                <h1 className='text-black text-2xl font-semibold'>Task 1</h1>
                <h1 className='text-black text-2xl font-semibold'>2022-09-10</h1>
          </div>
          {/* task 2 */}
          <div className='w-full px-6 py-2 bg-pink-300 flex items-center justify-between rounded-xl'>
                <h1 className='text-black text-2xl font-semibold'>Anand Jha</h1>
                <h1 className='text-black text-2xl font-semibold'>Task 1</h1>
                <h1 className='text-black text-2xl font-semibold'>2022-09-10</h1>
          </div>
         
          
      </div>
    </div>
  )
}

export default AdminDashboard
