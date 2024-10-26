import { SocialIcon } from 'react-social-icons'
import './contact.css'

function Contact() {


  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='text-blue-600 text-3xl font-bold mb-10'> <h1>Contact</h1></div>
        <div className='text-xl font-bold'><h3>Hello, I am Rohit Dutta, You can connect with me over these platforms :</h3></div>
        <div className='flex flex-col'>

          <div className='flex items-center gap-3 text-xl font-bold text-blue-600 content'>
            <a href="https://www.linkedin.com/in/rohit-dutta-ba1301171/" ><SocialIcon target='_blank' url="https://linkedin.com" /></a>
            <h1 className=' side  p-2 pl-10 w-44'>Linked In</h1>
          </div>

          <div className=' flex items-center gap-3 text-xl font-bold text-blue-600 content'>
            <a href="https://github.com/RohitDutta-web" ><SocialIcon url="https://github.com" target='_blank' /></a>
            <h1 className=' side  p-2 pl-10 w-44'>Git Hub</h1>
          </div>

          <div className='flex items-center gap-3 text-xl font-bold text-blue-600 content'>
            <a href="https://www.facebook.com/rohit.dutta.3576224/" ><SocialIcon url="https://facebook.com" target='_blank' /></a>
            <h1 className=' side  p-2 pl-10 w-44'>Facebook</h1>
          </div>


          <div className='flex items-center gap-3 text-xl font-bold text-blue-600 content'>
            <a href="https://www.instagram.com/_10_corazon?igsh=MXNjNzRxbGI1dXc3bQ==" ><SocialIcon url="https://instagram.com" target='_blank' /></a>
            <h1 className=' side  p-2 pl-10 w-44'>Instagram</h1>
          </div>


          <div className='flex items-center gap-3 text-xl font-bold text-blue-600 content'>
            <SocialIcon url="mailto:duttarohit754@gmail.com?subject=connect&body=Hello" target='_blank' />
            <h1 className=' side p-2 pl-10 w-44'>Email</h1>
         </div>
        </div>

      </div>

    </>
  )
}

export default Contact;
