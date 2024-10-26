import { useState } from "react";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import "./allTask.css"
import TaskCard from "./taskcard";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function AllTask() {

  const [on, setOn] = useState(false)
  const handleView = () => {
    setOn(prevOn => !prevOn)
  }
  return (
    <>
      <div>
        <h1 className="min-w-full text-center p-3 text-2xl m-2 shadow-xl font-bold text-blue-600  ">Task List</h1>
        <div onClick={handleView} className="absolute top-5 right-5">
        <MenuOutlinedIcon  />
        </div>
        <TaskCard className="card"/>
        {
          on ? <div className="absolute top-5 right-5 m-5 bg-white flex flex-col rounded-3xl outline outline-blue-500 menu w-60">
          <Link to="/"><button className="m-2 p-2 border-none shadow-none text-xl font-bold hover:text-blue-600 rounded-full  w-4/5">Home</button></Link>
          <Link to="/completedTask"><button className="m-2 p-2 border-none shadow-none text-xl font-bold hover:text-blue-600 rounded-full  w-full">Completed tasks</button></Link>
            <Link to="/disposedTask"><button className="m-2 p-2 border-none shadow-none text-xl font-bold hover:text-blue-600 rounded-full  w-full">Disposed tasks</button></Link>
            <div onClick={handleView}><CloseOutlinedIcon className="m-3 cursor-pointer"/></div>
        </div> : null
        }



      </div>

    </>
  )
}


export default AllTask;