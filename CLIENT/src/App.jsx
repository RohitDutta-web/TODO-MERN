import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Login from './components/login'
import Signup from './components/signup'
import CreateTask from './components/createTask'
import AllTask from './components/allTask'
import Profile from './components/profile'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Home />
}, {
  path: "/about",
  element: <About />
},
{
  path: "/projects",
  element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact/>
  }, {
  path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
      element: <Signup/>
  },
  {
    path: "/createTask",
      element: <CreateTask/>
  },
  {
    path: "/allTask",
      element: <AllTask/>
  },
  {
    path: "/profile",
      element: <Profile/>
  }

])
function App() {


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
