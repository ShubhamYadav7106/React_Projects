import React, { useState } from 'react'
import './Para.css'
function Para() {
  const data = [
    ` 1:-New Paragraph Added..`,
    ` 2:-New Paragraph Added..`,
    ` 3:-New Paragraph Added..`,
    ` 4:-New Paragraph Added..`,
    ` 5:-New Paragraph Added..`,
    ` 6:-New Paragraph Added..`,
    ` 7:-New Paragraph Added..`,
    ` 8:-New Paragraph Added..`,
    ` 9:-New Paragraph Added..`,
    ` 10:-New Paragraph Added..`,
    ` 11:-New Paragraph Added..`,
    ` 12:-New Paragraph Added..`,
    ` 13:-New Paragraph Added..`,
    ` 14:-New Paragraph Added..`,
    ` 15:-New Paragraph Added..`,
    ` 16:-New Paragraph Added..`,
    ` 17:-New Paragraph Added..`,
    ` 18:-New Paragraph Added..`,
    ` 19:-New Paragraph Added..`,
    ` 20:-New Paragraph Added..`,
    ` 21:-New Paragraph Added..`,
    ` 22:-New Paragraph Added..`
  ]
  const [count, setCount] = useState();
  const [text, setText] = useState([]);



  const enteredInput = (e) => {
    setCount(e.target.value)
  }

  const createPara = () => {
    let amount = parseInt(count)
    setText(data.slice(0,amount))
  }
  return (
    <div className='container6'>
      <div >
        <h3>Genrate Para</h3>
      </div>

      <div>
        <input
          type='number'
          name='amount'
          id='amount'
          placeholder='Enter a Number'
          value={count}
          onChange={enteredInput}
        />
        <button className='para-btn'
          onClick={createPara}
        >Generate</button>
      </div>
      {
        text.map((item, index) => {
          return (
            <p className='create-para'
            key={index}>
              {item}
            </p>
          )
        })
      }
    </div>
  )
}

export default Para;