import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-screen gap-3">
        <h1 className="text-4xl font-bold text-blue-500 mb-5">ABOUT</h1>
        <h1 className="text-2xl font-bold">Welcome to About page, I am Rohit Dutta , this is my project based on MERN technologies.</h1>
        <p className="text-xl w-1/2 font-semibold">I believe that getting things done should be easy, not overwhelming. That's why Icreated this app, a simple yet powerful to-do app designed to help you stay organized, focused, and productive.</p>
        <p className="text-xl w-1/2">I am a passionate developer, designer, and productivity enthusiast who is tired of using clunky, complicated to-do apps. i wanted a better way to manage our tasks, so i built one. With this app</p>


        <p className="mt-4"><span className="text-blue-500 font-bold text-2xl">What's Next ?</span><br /> Ready to unlock your productivity? <Link className="text-blue-500 font-bold " to='/login'>Log in</Link> or <Link className="text-blue-500 font-bold " to='/signup'>sign up</Link> to start tackling your to-do's today!</p>
     </div>
      
    </>
  )
}

export default About;