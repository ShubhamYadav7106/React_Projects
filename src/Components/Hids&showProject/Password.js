import React, { useState } from 'react'
import './Password.css'
function Password() {
    const [pass, setPass] = useState('')
    const [isPass, setIsPass] = useState(false)
    const enteredValue = (e) => {
        setPass(e.target.value)
    }
    const ClickHandler = () => {
        setIsPass(prevState => !prevState)
    }
    const Clear = () => {
        setPass('')
        setIsPass('');
    }

        return (
            <>
                <div className='container5'>
                    <input type={isPass ? 'text' : 'Password'}
                        value={pass}
                        placeholder='Enter Your Password'
                        onChange={enteredValue}
                    />
                    <button className='pass-btn'
                        onClick={ClickHandler}>
                        {isPass ? 'Hide Password' : 'Show Password'}
                    </button>
                    <button className='pass-btn'
                        onClick={Clear}>
                            Clear
                    </button>
                </div>
            </>
        )
    }

    export default Password;