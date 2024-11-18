
import { LayoutDashboard } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
export const registerFormControls =[
    {
        name:'userName',
        label:'UserName',
        placeholder:'Enter you username',
        componentType:'input',
        type:'text'
    },
    {
        name:'email',
        label:'Email',
        placeholder:'Enter you email',
        componentType:'input',
        type:'email'
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter you password',
        componentType:'input',
        type:'password'
    }
]
export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const adminSideBarMenuItems =[
    {
      id:'dashboard',
      label:'Dashboard',
      path:'/admin/dashboard',
      icons: <LayoutDashboard />

    },
    {
      id:'products',
      label:'Products',
      path:'/admin/products',
      icons:<ShoppingBasket />


    },
    {
      id:'orders',
      label:'Orders',
      path:'/admin/orders',
      icons:<BadgeDollarSign />

    },
  ]