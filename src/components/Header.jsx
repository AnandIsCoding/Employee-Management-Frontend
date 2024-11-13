import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Header() {
  const {user, setUser, loggedInUserData, setLoggedInUserData} = useContext(AppContext)
  
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-xl text-blue-100 font-semibold'>Hello !!</h2>  <h1 className='text-blue-200 text-4xl font-bold mt-1'> { loggedInUserData.name} 🤞</h1>
        </div>
        <button onClick={() => navigate('/')} className='px-5 py-3 bg-violet-600 text-white text-xl font-semibold rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
