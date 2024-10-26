import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { ImCross } from "react-icons/im";


function Profile() {
  let [update, setUpdate] = useState(false);
  

  let eventHandle = () => {
   setUpdate(!update);
  }
  

  let submitHandler = (e) => {
    e.preventDefault();
    eventHandle();
  }



  return (
    <>
      <h1 className="w-screen p-3 flex justify-center text-blue-600 text-3xl font-bold">Profile</h1>
      <div className="w-screen p-3 flex flex-col justify-center items-center text-blue-600 text-3xl font-bold">
        <div className="border-2 border-solid p-3" >
        <EditIcon className='float-right cursor-pointer' onClick={eventHandle} />
          <div className='p-3'>
          <h1>Name : <span className="text-black text-xl">Rohit Dutta</span></h1>
          <h1>Email : <span className="text-black text-xl">duttarohit754@gmail.com</span></h1>
          </div>

          
        </div>
        <button className='p-3 m-2 text-white bg-zinc-800 rounded-3xl'>Log Out</button>


      </div>

      {
        update ? <div className='flex flex-col justify-center items-center absolute top-20 left-1/3 ' id='update-container'>
          <div className='border-2 border-solid p-3 bg-blue-500 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
        
        <h1 className='text-white text-3xl font-bold p-2 '>Update Profile</h1>
        
        <form action="" className='flex flex-col'>
          <label htmlFor="" className='text-white font-bold  text-xl p-2'>Name</label>
          <input type="text" placeholder='Name' className='outline-none p-3 bg-zinc-100 rounded-3xl' />
          <label htmlFor="" className='text-white font-bold  text-xl p-2'>Email</label>
          <input type="email" placeholder='Email' className='outline-none p-3 bg-zinc-100 rounded-3xl' />
          <input type="Submit" value="Submit" className='text-white bg-blue-800 rounded-full p-2 m-3' onClick={submitHandler} />
            </form>
            
            <div className='w-full flex justify-center p-3'><ImCross className='cursor-pointer size-7 text-white' onClick={eventHandle}/></div>
          </div>
          
      </div> : null
    }
    </>
  )
}


export default Profile;