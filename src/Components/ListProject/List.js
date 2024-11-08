import React, { useState } from 'react'
import './List.css'

function List() {
    
    const data=[
        {   
            id:1,
            name:'SkY',
            age:18,
            image:'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0='

        },
        {   
            id:2,
            name:'Surya',
            age:22,
            image:'https://media.istockphoto.com/id/1446032808/photo/confident-businessman-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=DN2UpvE1J-Awt9zROeql1J6jBZ_7785avD8bqtoBGec= '
        },
        {   
            id:3,
            name:'SkY',
            age:18,
            image:'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=is&k=20&c=ucGYVfkrOautxqml9O94gwp-tcR4uvMQOBbsbFI-vO0='

        },
        {   
            id:4,
            name:'Surya',
            age:22,
            image:'https://media.istockphoto.com/id/1446032808/photo/confident-businessman-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=DN2UpvE1J-Awt9zROeql1J6jBZ_7785avD8bqtoBGec= '
        },
    ]


    const[people,setPeople]=useState(data)
  return (
    <div className='container3 ' >
        {people?.map((person)=>{
            const {id,name,age,image}=person;
            return(
                <div key={id} >
                    <img className='image' src={image} alt={image}
                     width={'80px'}
                     height={'80px'}
                    />
                    <div>
                    
                        <h4>Name :-{name}</h4>
                        <p>Age :- {age}</p>
                    </div>
                    
                </div>
            )
        })}
        <div >
        <h3 className='totalStudent'>Total Student:{people.length}</h3>
            <button className='listBtn'
            onClick={()=>setPeople([])}
            >Clear</button><br/><br/>
            <button className='listBtn'
            onClick={()=>window.location.reload()}
            >reload</button>
        </div>
    </div>
  )
}

export default List