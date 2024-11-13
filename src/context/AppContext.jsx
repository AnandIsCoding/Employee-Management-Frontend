import { useState, createContext, useEffect } from "react";
import {getLocalStorage} from '../utils/localStorage'


// Step 1
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    
    const [user, setUser] = useState([]);
    const [AllEmployees, setAllEmployee] = useState([])
    const [Admin, setAdmin] = useState([])
    const [loggedInUserData, setLoggedInUserData] = useState([])
    
       
    useEffect(()=>{
        const {employees, admin} = getLocalStorage();
        setAllEmployee(employees)
        setAdmin(Array(admin))        
    }, [])
   
    console.log(AllEmployees, Admin)

    const value = {
        user, setUser, AllEmployees, Admin, loggedInUserData, setLoggedInUserData
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;