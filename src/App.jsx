import React, { useContext, useEffect, useState } from 'react'
import Login from './pages/login'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AdminDashboard from './pages/AdminDashboard'
import { Routes, Route } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AppContext } from './context/AppContext'


function App() {

  useEffect(() =>{    
    setLocalStorage()
    getLocalStorage()
  })
  return (
    <div>      
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/employee" element={<EmployeeDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
