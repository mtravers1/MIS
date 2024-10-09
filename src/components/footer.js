import React from "react";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import '../styles/footer.css'
const Footer = ()=>{
    return(
        <div id='footer'>
            <div>
            <p>Address</p>
            <p>Email</p>
            <p>Phont</p>
            </div>
          
            <SocialIcon id='icon' url="www.instagram.com" />

<SocialIcon id='icon' url="www.facebook.com" />


        </div>
    )
}

export default Footer