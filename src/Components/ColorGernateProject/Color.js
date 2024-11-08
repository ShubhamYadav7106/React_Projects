import React, { useState } from 'react'
import './Color.css'
function Color() {
        const [NewColor,setNewColor]=useState()
        const changeColor=()=>{
            let letters='0123456789ABCDEF'
            var color='#'
            for(var i=0;i<6;i++){
                color=color+letters[Math.floor(Math.random()*16)]
                }
                setNewColor(color)
                document.body.style.background=color;
        }
    return (
        <div>
            <div class="container4">

                <div className="box">
                    <h3 className="text">{NewColor}
                        
                    </h3>
                    <button className="Color-btn"
                    onClick={changeColor}
                    >Change Color</button>
                </div>
            </div>
        </div>
    )
}

export default Color