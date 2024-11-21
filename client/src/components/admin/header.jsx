import React from 'react'
import { Menu } from 'lucide-react';
import { LogOut } from 'lucide-react';
export default function AdminHeader ({ updateLayout }) {
   
     
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-bottom'>
      <button  className='lg:hidden sm:block'>
        <Menu/>
        <span className='sr-only'>
            Toggle Menu
        </span>
      </button>
      <div className='flex flex-1 justify-end'>

        <button className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'>
        <LogOut />

            Logout</button>
      </div>
    </header>
  )
}
