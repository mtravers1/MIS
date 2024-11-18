import React, { Fragment, useState } from 'react'
import { ChartNoAxesCombined, Sheet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { adminSideBarMenuItems } from '../../config';
import { LayoutDashboard } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { Navigate } from 'react-router-dom'
// import {
//     SheetContent,
//     SheetHeader,
//     SheetTitle,
//   } from "../ui/select"

// import {Sheet} from '@/components/ui/sheet'
export default function AdminSidebar({open, setOpen}) {

   
    const navigate=useNavigate()
    function MenuItems({setOpen}){
        return <nav className='mt-8 flex-col flex gap-2'>
            {
                adminSideBarMenuItems.map((items)=>(
                    <div 
                    onClick={()=>{
                        navigate(items.path)
                        if(setOpen===true){
                            setOpen(false)
                        }
                        else{
                        }
                      
                    }} 
                    key={items.id} 
                    className='flex cursor-pointer text-2xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-blue'>
                        {items.icons}
                        <span>
                            {items.label}
                        </span>
                    </div>
                ))
            }
        </nav>
    }
    return (
    <Fragment>
         {/* <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className = "w-64">
                <div className="flex flex-col h-full">
                    <SheetHeader className="border-b">
                        <SheetTitle>
                            <ChartNoAxesCombined size={30}/>
                            Admin Pannel</SheetTitle>
                    </SheetHeader>
                    <MenuItems/>
                </div>
            </SheetContent>
        </Sheet>  */}
       
        <aside className='hidde w-64 flex-col border-r bg-background p-6'>
        <div 
        onClick={()=>navigate("/admin/dashboard")}
        
        className='flex cursor-pointer items-center gap-2'>
        <ChartNoAxesCombined size={30}/>

            <h1 className='text-2xl font-extrabold'>Admin Pannel</h1>

        </div>
        <MenuItems setOpen={setOpen}/>
        </aside>
    </Fragment>
  )
}
