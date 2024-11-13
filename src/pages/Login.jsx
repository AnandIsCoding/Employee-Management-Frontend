import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function Login() {

    const {user, setUser, AllEmployees, Admin, loggedInUserData, setLoggedInUserData} = useContext(AppContext)

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (event) =>{
    event.preventDefault();
    const isAdmin = (Admin && Admin.find( (e) => e.email === email && e.password === password ) )
    if(isAdmin ){
      localStorage.setItem('LoggedInUser', JSON.stringify({role: 'admin'}))
      setUser(email)
      setLoggedInUserData(isAdmin)
      navigate('/admin')
    }
    const isEmployee = ( AllEmployees && AllEmployees.find( (e)=> e.email === email && e.password === password ) )
    if(isEmployee){
      localStorage.setItem('LoggedInUser', JSON.stringify({role: 'employee'}))
      setUser('Employee')
      setLoggedInUserData(isEmployee)
      navigate('/employee')
    }else{
      alert('Invalid Credentials')
    }
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex items-center justify-center'>
    <form onSubmit={submitHandler} className='flex flex-col w-[90%] md:w-[30%] px-5 py-14 gap-10 border-2 text-lg text-green-500 border-green-400 rounded-xl mt-[57vw] md:mt-[10vw] '>
    
        <input required id='email' value={email} onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Enter your email 📩' className='px-5 py-3 outline-none bg-transparent border-2 border-green-400 rounded-xl' ></input>

        <input required id='password' value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Enter your password 🔑' className='px-5 py-3 outline-none bg-transparent border-2 border-green-400 rounded-xl'></input>

        <input type='submit' value='Submit' className='px-5 py-2 outline-none bg-green-400 text-2xl text-black font-extrabold rounded-xl cursor-pointer'></input>
    </form>
    </div>
  )
}

export default Login
