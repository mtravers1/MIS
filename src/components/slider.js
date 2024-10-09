import React from "react";
import '../styles/slider.css'
import product from "../data/data";
import { useState, useEffect } from "react";
import fitted from '../photos/fitted.png'
import shorts1 from '../photos/nylonshorts.jpg'
import shirt1 from '../photos/rozayshirt.jpg'
import tee from '../photos/tee.jpg'
import trucker from '../photos/trucker.png'

const Slider = ()=>{
    let images=[fitted, shorts1, shirt1, tee, trucker]
    const [index, setIndex] = useState(0);
    const delay = 3000;


  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length-1 ? 0 : prevIndex + 1
        ),
      delay
    );

  }, [index]);



    return(
        <div id='s'>
        <div className="slideshow">
            <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((backgroundColor, index) => (
              <div
                className="slide"
                key={index}
                style={{ backgroundColor }}
              >
                <div>
    
                <img src={backgroundColor}/>
                </div>
              </div>
            ))}
          </div>
    {/* 
          <div className="slideshowDots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
              ></div>
            ))}
          </div> */}
        </div>
        </div>
    )
}

export default Slider