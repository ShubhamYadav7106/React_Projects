import React, { useState } from 'react'
import './Bmi.css';
function Bmi() {

  const [weight, setWeight] = useState();
  const enteredWeight = (e) => {
    setWeight(e.target.value)
  }

  const [height, setHeight] = useState();
  const enteredHeight = (e) => {
    setHeight(e.target.value)
  }

  const [bmi, setBmi] = useState('');

  const [message, setMessage] = useState('');

  //reload
  const reload = () => {
    setWeight('')
    setHeight('')
    setBmi('')
    setMessage('')

  }


  //logic
  const submit = () => {
    if (weight == 0 || height == 0) {
      alert('Please Enter The valid Weight & Height ')
    }

    else {
      const bmi = (weight / (height * height))
      setBmi(bmi.toFixed(2))


      if (bmi < 18.5) {
        setMessage('You are Under Weight')
      }
      else if (bmi >= 18.6 && bmi <= 25) {
        setMessage('You are Healthy Weight')
      }
      else {
        setMessage('You are Over Weight')
      }
    }
  }

  //relaod

  //   const reload = () =>{
  //     window.location.reload()
  // }

  return (
    <div className='containerBmi'>
      <div className='card'>
        <h3 className='h3'>BMI Calculator</h3>
        <div className='height-input'>
          <h4>Height(m) :- </h4><input type='number'
            value={height}
            onChange={enteredHeight}
            placeholder='Enter Height Value' />
        </div>
        <div className='weight-input'>
          <h4>Weight(kg) :- </h4><input type='number'

            value={weight}
            onChange={enteredWeight}

            placeholder='Enter Weight Value' />
        </div>
        <div className='buttons'>
          <button className='submit-btn'
            onClick={submit}
            disabled={!weight || !height}
          ><b>Calculate</b></button>
          <br />
          <button className='reload-btn'
            onClick={reload}

          ><b>Reload</b></button>
        </div>
        <div>
          <h4 className='result'

          >Your BMI is :-
            {bmi}</h4>
          <b>
            {message}
          </b>
        </div>
      </div>
    </div>
  )
}

export default Bmi;