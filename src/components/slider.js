import React from "react";
import '../styles/slider.css'
import product from "../data/data";
import { useState, useEffect } from "react";
import fitted from '../photos/fitted.png'
import shorts1 from '../photos/nylonshorts.jpg'
import shirt1 from '../photos/rozayshirt.jpg'
import tee from '../photos/tee.jpg'
import trucker from '../photos/trucker.png'
import model1 from '../photos/model/model15.png'
import model2 from '../photos/model/model1.jpg'
import model3 from '../photos/model/model2.jpg'
import model4 from '../photos/model/model3.jpg'
import model5 from '../photos/model/model4.jpg'
import model6 from '../photos/model/model5.jpg'
import model7 from '../photos/model/model7.jpg'
import model8 from '../photos/model/model6.jpg'
import model9 from '../photos/model/model8.jpg'


const Slider = ()=>{
    let images=[model1, model2, model3, model4, model5, model5, model6]
    const [index, setIndex] = useState(0);
    const delay = 5000;


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