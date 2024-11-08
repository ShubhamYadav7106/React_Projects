import React, { useState } from 'react'
import './Acord.css'
/* 
cmd for intall react icons :-
npm install react-icons --save
*/
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

const Accordian = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false)
    return (
        <div className='container7'>
            <div className=''>
                <h4 className='acord-title'>{title}</h4>
                <button
                    className='Acord-btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <FaCircleArrowDown className='ArrowDown' />
                        : <FaCircleArrowUp className='ArrowUp' />}
                </button>
            </div>
            {showInfo && <p className='acord-p'>{info}</p>}
        </div>
    )
}

export default Accordian