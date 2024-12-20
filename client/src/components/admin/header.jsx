import React from 'react'
import { Menu } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import  logoutUser  from '../../reduxstore/authslice/index';
export default function AdminHeader ({ updateLayout }) {
    // const dispatch=useDispatch()
    //  const handleLogout=()=>{
    //   dispatch(logoutUser())
    //  }
    const dispatch=useDispatch()
    const handleLogout = ()=>{
      dispatch(logoutUser())
    }
    
        
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-bottom'>
      <button  className='lg:hidden sm:block'>
        <Menu/>
        <span className='sr-only'>
            Toggle Menu
        </span>
      </button>
      <div className='flex flex-1 justify-end'>

        <button onClick={handleLogout} className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'>
        <LogOut />
            Logout</button>
      </div>
    </header>
  )
}
