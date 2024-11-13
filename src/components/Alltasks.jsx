import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Alltasks() {
    const {user, setUser, loggedInUserData, setLoggedInUserData} = useContext(AppContext)
  return (
    <div className='w-full mt-[66vh] md:mt-7 rounded-lg h-[49vh]  flex gap-4 overflow-x-auto'>

    {
        loggedInUserData.tasks.map((item, index) =>{
            return <div key={index} className=" w-full  md:w-[26%] flex-shrink-0 bg-[#6bc4fc] rounded-xl h-full md:h-full px-4 py-5 text-black ">
            <div className='w-full  py-2 flex justify-between'>
                <button className={`px-10 py-2 ${item.active ?  'bg-[red]' : 'bg-green-400' } text-white text-2xl font-bold rounded-xl`}>
                {item.active ? 'Active' : 'Not Active'}
                </button>
                <h1 className='text-black text-xl font-bold mt-2'>{item.taskDate}</h1>
            </div>
            <h1 className='text-black text-3xl font-extrabold mt-5'>{item.taskTitle}</h1>

            <p className='text-[#5c157d] text-sm font-extrabold mt-10'>
           {item.taskDescription}
            </p>

            
        </div>

        })
    }       

    </div>
  )
}

export default Alltasks
