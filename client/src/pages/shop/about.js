import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import '../../styles/about.css'
const About = ()=>{
    return(
        <div>
            <Nav/>
            <div id='about'>
                <p>
                Move In Silence LLC is a DMV based Black Owned Apparel and 
                Lifestyle Brand. The original designs that we provide are influenced by our love of 
                graphic design, street wear, and quality clothing.
                </p>
                <p>To <span style={{color:'red'}}>Move In Silence</span> is a lifestyle that not everyone can live. The goal is to remain humble and prosper while others wonder from the outside looking in.</p>
        <p>Represent a Lifestyle Not Everyone Can Live.</p>

        <h2 style={{textAlign:'center', color:'red'}}>Return policy:</h2>
        <p style={{textAlign:'center'}}>If there are any issues with sizing or defects with your order please contact our support email to return your order. A refund or replacement can be provided.   </p>
            </div>
            <Footer/>

        </div>
    )
}

export default About