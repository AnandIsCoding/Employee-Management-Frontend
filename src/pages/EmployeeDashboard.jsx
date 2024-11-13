import React from 'react'
import Header from '../components/Header'
import TaskStatus from '../components/TaskStatus'
import Alltasks from '../components/Alltasks'

function EmployeeDashboard() {
  return (
    <div className='w-full min-h-screen p-10'>
      <Header/>
      <TaskStatus/>
      <Alltasks/>
    </div>
  )
}

export default EmployeeDashboard
