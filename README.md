localStorage.clear() is used in main.jsx after imports


//set employees data in browsers local storage

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employeeData))
    localStorage.setItem('admin', JSON.stringify(adminData))
}

export const getEmployeeData = () => {
  const data = JSON.parse(localStorage.getItem('employees'));
  console.log(data)
}

firstly we need to call setLocalStorage() in useEffect to save it
then we need to call getEmployeeData() to use it



//  serialization And deserialization express app.use(express.JSON()), 