import React, { useState } from 'react';
import Data from './SlideData';
import './Slider.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Slider() {
    const[index,setIndex]=useState(0);
    const{name,job,image,text}=Data[index]
    
    const checkIndex=(number)=>{
        if (number >Data.length-1) {
            return 0;
            
        }
        if (number<0) {
            return Data.length-1;
        }
        else{ return number;
        }
    }
    
    const prevPerson=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
            return checkIndex(newIndex)
        })
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
            return checkIndex(newIndex)
        })
    }
    
  return (
    <div className='sliderContainer'>
        <h1>Slider</h1>
        <div className='slide-in-data'>
            <div className='slide-img'>
                <img src={image} 
                alt={name}/>
            </div>
            <div className='slide-data'>
                <h3>{name}</h3>
                <p>{job}</p>
                <p>{text}</p>
                
            </div>
            
            <div className=''>
                <button className='slide-btn'
                onClick={prevPerson}>
                    <FaArrowAltCircleLeft className='slide-arrow'/>

                </button>
                <button className='slide-btn'
                onClick={nextPerson}>
                    <FaArrowAltCircleRight className='slide-arrow'/>

                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Slider