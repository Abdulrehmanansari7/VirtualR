import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../constants'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  
  return (
    <nav className="sticky top-0 z-50 py-3 px-12 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm"> 
        <div className="flex justify-between items-center">
          <div className='flex items-center flex-shrink-0'>
          <img className='h-10 w-10 mr-2' src={logo} alt="img" />
          <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className='hidden text-neutral-400 lg:flex ml-28 space-x-12'>
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a> 
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="border py-2 px-10 rounded-md">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-orange-400 to-orange-800 py-2 px-10 rounded-md">
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex justify-end flex-col">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen &&
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((items, index) => (
              <li key={index} className="py-4">
                <a href={items.href}>{items.label}</a> 
              </li>
            ))}
          </ul>
          <div className="space-x-6 flex">
          <a href="#" className="border py-2 px-10 rounded-md">Sign In</a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-10 rounded-md">
              Sign Up
            </a>
          </div>
        </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
