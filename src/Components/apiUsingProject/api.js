import React, { useEffect, useState } from 'react'
import './api.css'

function Api() {
    const [users, setUsers] = useState([])
    const fun = async () => {
        const res = await fetch("https://reqres.in/api/users")
        const json = await res.json()
        const data = json.data
        console.log(data)
        setUsers(json.data)
    };
    useEffect(() => {
        fun()
    }, [])
    return (
        <div>
                <div className='api-container'>
                    {
                        users.length &&
                        users.map((user)=>{
                            return(
                                <>
                                <div className='api-box' key={user.id}>
                                    <img key={user.avatar} src={user.avatar} alt='' />
                                    <h3>{user.first_name}</h3>
                                    <p>{user.email}</p>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Api;