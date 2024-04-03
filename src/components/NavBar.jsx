import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        
          <ul className="flex gap-4">
            <li>
              <Link to='/' className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to='/create-recipe' className="hover:text-blue-500">Create Recipe</Link>
            </li>
            <li>
              <Link to='/save-recipe' className="hover:text-blue-500">Save Recipe</Link>
            </li>
            <li>
              <Link to='/login' className="hover:text-blue-500">Login</Link>
            </li>
            <li>
              <Link to='/register' className="hover:text-blue-500">Register</Link>
            </li>
          </ul>
          <a href="https://github.com/thejas-1999/password-manager-mern" className="flex items-center">
            <button className="text-white rounded-full bg-black flex gap-2 justify-between items-center px-3 py-2">
              <img
                className="w-6 h-6 rounded-full"
                src="assets/github.png"
                alt="github logo"
              />
              <span className="font-bold">GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
