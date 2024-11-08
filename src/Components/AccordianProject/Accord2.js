import React from 'react'
import Accordian from './Accordian'
import questions from './AccordianData'
function Accord2() {
    return (
        <div>
            <div className='Acord-card'>
                <h1>Faq's</h1>
                {
                    questions.map((data) => {
                        return (
                            <Accordian key={questions.id}
                                {...data}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accord2