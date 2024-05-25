
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='p-6 bg-yellow-100'>
           <NavLink to='/'>
            <span className='font-bold text-xl mx-4'>
                Home
            </span>
            </NavLink> 
            <NavLink to='/login'>
                <span className='font-bold text-xl'>
                Login
            </span></NavLink>

            
        </div>
    </div>
  )
}

export default Header