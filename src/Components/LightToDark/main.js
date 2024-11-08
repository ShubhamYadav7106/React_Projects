import React, { useEffect, useState } from 'react'
import './main.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ModeToggle() {
    const [theme,setTheme]=useState('lightMode')
    useEffect(()=>{
        document.querySelector("body").classList=theme
    },[theme])

    const change=()=>{
if(theme==="lightMode"){
    setTheme("darkMode")
    toast.success("Dark Mode Enabled")
}else{
    setTheme("lightMode")
    toast.success("Light Mode Enabled")
}
    }
  return (
    <>
        <div>
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  
  <button onClick={change}>
    {theme=="lightMode"?
    <span class="material-symbols-outlined">
    light_mode
    </span>:<span class="material-symbols-outlined">nights_stay
</span>}
</button>
</div>

<div className='contentPart'>
    <div className='contentLeft'>
  <h3>
    Welcome To my ZYM Page
  </h3>
  <p>There is a all about of my <strong>ZYM</strong> so join our zym to tranform your body to fit and muscular body you easily to join our zym via join button
  <h4>So let's do up  workout together !</h4>
  <button>Join</button>
   </p>
</div>
<div className='contentRight'>
    <img src='https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-55122231.jpg' alt='zym'/>
</div>
</div>
        </div>
    </>
  )
}

export default ModeToggle