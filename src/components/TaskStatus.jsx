import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function TaskStatus() {
  const {user, setUser, loggedInUserData, setLoggedInUserData} = useContext(AppContext)
  return (
    <div className="w-full h-[25vh] flex flex-col md:flex-row gap-7  mt-7 ml-2 ">
      <div className=" w-full  md:w-[23%] bg-[#c1ffff] rounded-xl h-full md:h-full px-10 py-8 text-black ">
        <h1 className="text-black text-4xl font-extrabold"> {loggedInUserData.tasksCount.newTasks} </h1>
        <h1 className="text-black text-4xl font-extrabold mt-2">New Task</h1>
      </div>
      <div className="w-full  md:w-[23%] bg-violet-300 rounded-xl h-full px-10 py-8">
        <h1 className="text-[#1b561b] text-4xl font-extrabold">{loggedInUserData.tasksCount.completedTasks} </h1>
        <h1 className="text-[#1b561b] text-4xl font-extrabold mt-2">Completed Task</h1>
      </div>
      <div className="w-full  md:w-[23%] bg-green-300 rounded-xl h-full px-10 py-8">
        <h1 className="text-[#ff6161] text-4xl font-extrabold"> {loggedInUserData.tasksCount.activeTasks}  </h1>
        <h1 className="text-[#ff6161] text-4xl font-extrabold mt-2">Accepted Task</h1>
      </div>
      <div className="w-full  md:w-[23%] bg-pink-300 rounded-xl h-full px-10 py-8">
        <h1 className="text-blue-500 text-4xl font-extrabold"> {loggedInUserData.tasksCount.failedTasks}  </h1>
        <h1 className="text-blue-500 text-4xl font-extrabold mt-2">Failed Task</h1>
      </div>
    </div>
  );
}

export default TaskStatus;
