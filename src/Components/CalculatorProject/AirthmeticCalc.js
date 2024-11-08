import React, { useState } from 'react'
import './AirthmeticCalc.css'

function AirthmeticCalc() {
    const [firstInput, setFirstInput] = useState()
    const enteredFirstValue = (e) => {
        setFirstInput(e.target.value)

    }
    const [secondInput, setSecondInput] = useState()
    const enteredSecondValue = (e) => {
        setSecondInput(e.target.value)
        console.log(secondInput)
    }
    const reload = () => {
        setFirstInput('')
        setSecondInput('')
        setResult('')

    }
    const [result, setResult] = useState()
    const plus = (e) => {
        const total = parseInt(firstInput) + parseInt(secondInput)
        setResult(total)
        console.log(total)
    }
    const minus = (e) => {
        const calculate = firstInput - secondInput;
        setResult(calculate)
        console.log(calculate)
    }
    const multiply = (e) => {
        const calculate = firstInput * secondInput;
        setResult(calculate)
        console.log(calculate)
    }
    const divide = (e) => {
        const calculate = firstInput / secondInput;
        setResult(calculate)
        console.log(calculate)
    }
    // const minus = () => {

    // }

    return (
        <div className='container2'>
            {console.log("first-input", firstInput)}
            <div className='card2'>
                <h3 className='calc-title'>Arthmetic Calculator</h3>
                <div>
                    <h3>First Value :-</h3><input type='number' placeholder='Enter The Value'
                        value={firstInput}
                        onChange={enteredFirstValue}
                    />
                </div>
                <div>
                    <h3>Second Value :-</h3><input type='number' placeholder='Enter The Value'
                        value={secondInput}
                        onChange={enteredSecondValue}
                    />
                </div>
                <div className='result'>
                    <h3>
                        Result :
                        {result}
                    </h3>
                </div>
                <div className='buttons'>
                    <button
                        onClick={plus}
                    >Plus+</button>
                    <button
                        onClick=
                        {minus}
                    >Minus-</button>
                    <button onClick=
                        {multiply}>Multiply×</button>
                    <button
                        onClick={divide}
                    >Divide÷</button>
                    <button className='reloads'
                        onClick={reload}
                    >Clear
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AirthmeticCalc