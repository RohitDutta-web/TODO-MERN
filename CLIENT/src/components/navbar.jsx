import { Link } from "react-router-dom";
import Contact from "../assets/contact.gif";
import Home from "../assets/smart-house.gif";
import About from "../assets/about.gif";
import Projects from "../assets/project.gif";

import './navbar.css'

function Navbar() {
  return (
    <>
      <div id="services" className="bg-transparent fixed top-14 left-10 p-2 flex gap-2  h-52 rounded-2xl">
       
        <div className="flex flex-col  gap-5">
        <li className="w-12 h-12  block">
            <Link to='/about'>
            <div>
              <img src={About} alt="" className="rounded-full"  />
            <span>ABOUT</span>
          </div>
            </Link>
        </li>
        <li className="w-12 h-12  block">
            <Link to='/'>
            <div>
            <img src={Home} alt="" className="rounded-full"  />
            <span>HOME</span>
          </div>
            </Link>

        </li>

        <li className="w-12 h-12  block">
          <Link to='/projects'>  <div>
            <img src={Projects} alt="" className="rounded-full"  />
            <span>PROJECTS</span>
          </div></Link>

        </li>

        <li className="w-12 h-12  block">
            <Link to='/contact'><div>
            <img src={Contact} alt="" className="rounded-full"  />
            <span>CONTACT</span>
          </div></Link>
          </li>
          

       </div>
      </div>
    </>
  )
}

export default Navbar;
