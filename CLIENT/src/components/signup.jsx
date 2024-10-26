import { Link } from "react-router-dom"
import user from "../assets/user.gif"

function Signup() {
  return (
    <>
      <button className="absolute top-3 left-3 p-2 bg-blue-600 text-white font-bold rounded-3xl"><Link to='/'>Go back to Home</Link></button>
      <div className='flex justify-center items-center w-screen h-screen gap-3 bg-blue-100'>

        <div className='w-1/3 flex flex-col justify-center items-center text-blue-600 font-bold  bg-white h-1/2 rounded-3xl shadow-2xl'>
          <h1 ><Link to='/login'>Log In</Link></h1>
          <p>or</p>
          <h1 className='text-3xl'><Link to='/signup'>Sign up</Link></h1>
        </div>

        <div className='flex flex-col w-1/3 items-center justify-center bg-blue-600  h-1/2 rounded-3xl shadow-2xl'>
          <img src={user} alt="user icon" className='rounded-full ' />
          <form action="" className='flex flex-col gap-2'>
            <label className='text-white font-bold' htmlFor="">Name</label>
            <input className='rounded-full p-2 ' type="Name" placeholder='Name' />
            <label className='text-white font-bold' htmlFor="">Email</label>
            <input className='rounded-full p-2 ' type="email" placeholder='email' />
            <label className='text-white font-bold' htmlFor="">Password</label>
            <input className='rounded-full p-2 ' type="password" placeholder='password' />

            <input type="submit" value="Submit" className='text-white font-bold text-xl bg-blue-500 p-2 rounded-full hover:bg-white hover:text-blue-500 mt-2
            ' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup