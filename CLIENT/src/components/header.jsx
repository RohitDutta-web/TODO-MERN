import "./header.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {

  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <div className="w-screen  flex">
        <h1 className="w-1/2 p-2 font-bold text-3xl text-blue-500 ">TO DO APP</h1>
        {
          !isLoggedIn ? (<div className="w-1/2 flex justify-end gap-10 m-2">
          <button className="hover:opacity-90 p-2 rounded-xl font-bold text-xl bg-blue-500 text-white"><Link to='/login'>Log In</Link></button>
          <button className="hover:opacity-90 p-2 rounded-xl font-bold text-xl text-white bg-blue-500"><Link to='/signup'>Sign Up</Link></button>
        </div>) : (<div className="w-1/2 flex justify-end gap-10 m-2">
          <button className="hover:opacity-90 p-2 rounded-xl font-bold text-xl bg-blue-500 text-white"><Link to='/createTask'>Create task</Link></button>
              <button className="hover:opacity-90 p-2 rounded-xl font-bold text-xl text-white bg-blue-500"><Link to='/allTask'>All task</Link></button>
              <button className="hover:opacity-90 p-2 rounded-xl font-bold text-xl text-white bg-blue-500"><Link to='/profile'>Profile</Link></button>
              
        </div>)
        }

      </div>
    </>
  )
}


export default Header;