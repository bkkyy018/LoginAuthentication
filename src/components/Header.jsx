import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
      <div className=' max-w-full bg-slate-600 h-[60px] flex justify-center items-center'>
          <NavLink to="/login" className=' w-[100px] h-[40px] bg-red-300 rounded-lg shadow-lg shadow-slate-600 hover:bg-red-400 flex justify-center items-center'>Login</NavLink>
          <NavLink to="/signup" className=' w-[100px] h-[40px] bg-red-300 rounded-lg shadow-lg shadow-slate-600  hover:bg-red-400 ml-8 flex justify-center items-center'>SignUp</NavLink>
      </div>
    </div>
  )
}

export default Header
