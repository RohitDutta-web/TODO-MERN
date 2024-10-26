import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import { Link } from "react-router-dom"

 function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className="banner flex flex-col items-center justify-center m-5 text-xl">
        <h3 className="w-1/2 text-xl font-bold text-blue-600">Get more done, in less time, with less stress!</h3>
        <p className="w-1/2">Stay on top of your tasks and deadlines with our intuitive to-do app. Easily create and manage your to-do lists, set reminders, and prioritize tasks to maximize your productivity. With a clean and simple interface, you can focus on what matters most  getting things done. Whether you're a busy professional or a student, our to-do app is the perfect tool to help you stay organized and achieve your goals</p>
        <p className="mt-20 text-2xl font-bold">Unlock your productivity! <span className="text-blue-500"><Link to='/login'>Log in</Link></span> or <span className="text-blue-500"><Link to='/signup'>sign up</Link> </span>to start tackling your to-do's today!</p>

      </div>
      <Footer/>

    </>
  )
}

export default Home
